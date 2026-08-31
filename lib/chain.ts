"use client";

/** Keyless, client-side reads from Ethereum mainnet via public JSON-RPC,
 *  with endpoint fallback. All figures computed from raw chain data. */

const RPC_ENDPOINTS = [
  "https://ethereum-rpc.publicnode.com",
  "https://eth.llamarpc.com",
  "https://cloudflare-eth.com",
];

const GAS_PER_BLOB = 131072;

export interface BlockStat {
  number: number;
  timestamp: number; // unix seconds
  txCount: number;
  gasUsed: number;
  gasLimit: number;
  baseFeeGwei: number;
  burnedEth: number; // baseFee * gasUsed
  blobs: number;
}

export interface ChainSnapshot {
  blocks: BlockStat[]; // oldest → newest
  head: BlockStat;
  tipGwei: number;
  fetchedAt: number;
}

interface RpcBlock {
  number: string;
  timestamp: string;
  gasUsed: string;
  gasLimit: string;
  baseFeePerGas?: string;
  blobGasUsed?: string;
  transactions: string[];
}

function hexNum(h: string | undefined): number {
  return h ? Number(BigInt(h)) : 0;
}

async function rpc(
  endpoint: string,
  body: unknown,
  signal?: AbortSignal
): Promise<unknown> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) throw new Error(`rpc ${res.status}`);
  return res.json();
}

function toStat(b: RpcBlock): BlockStat {
  const baseFeeWei = hexNum(b.baseFeePerGas);
  const gasUsed = hexNum(b.gasUsed);
  return {
    number: hexNum(b.number),
    timestamp: hexNum(b.timestamp),
    txCount: b.transactions?.length ?? 0,
    gasUsed,
    gasLimit: hexNum(b.gasLimit),
    baseFeeGwei: baseFeeWei / 1e9,
    burnedEth: (baseFeeWei * gasUsed) / 1e18,
    blobs: Math.round(hexNum(b.blobGasUsed) / GAS_PER_BLOB),
  };
}

/** Fetch the head block plus the previous `depth-1` blocks in one batch. */
export async function fetchChainSnapshot(
  depth = 20,
  signal?: AbortSignal
): Promise<ChainSnapshot> {
  let lastError: unknown;
  for (const endpoint of RPC_ENDPOINTS) {
    try {
      const headRes = (await rpc(
        endpoint,
        [
          { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] },
          {
            jsonrpc: "2.0",
            id: 2,
            method: "eth_maxPriorityFeePerGas",
            params: [],
          },
        ],
        signal
      )) as { id: number; result?: string }[];

      const headHex = headRes.find((r) => r.id === 1)?.result;
      if (!headHex) throw new Error("no head");
      const head = Number(BigInt(headHex));
      const tipGwei =
        hexNum(headRes.find((r) => r.id === 2)?.result) / 1e9 || 1;

      const batch = Array.from({ length: depth }, (_, i) => ({
        jsonrpc: "2.0",
        id: i,
        method: "eth_getBlockByNumber",
        params: ["0x" + BigInt(head - depth + 1 + i).toString(16), false],
      }));
      const blocksRes = (await rpc(endpoint, batch, signal)) as {
        id: number;
        result?: RpcBlock;
      }[];

      const blocks = blocksRes
        .filter((r) => r.result)
        .sort((a, b) => a.id - b.id)
        .map((r) => toStat(r.result!));
      if (blocks.length === 0) throw new Error("no blocks");

      return {
        blocks,
        head: blocks[blocks.length - 1],
        tipGwei,
        fetchedAt: Date.now(),
      };
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError ?? new Error("all rpc endpoints failed");
}

export interface MarketSnapshot {
  priceUsd: number;
  change24h: number;
  marketCapUsd: number;
  circulatingSupply: number;
}

export async function fetchMarket(
  signal?: AbortSignal
): Promise<MarketSnapshot | null> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum",
      { signal, cache: "no-store" }
    );
    if (!res.ok) return null;
    const [d] = await res.json();
    if (!d) return null;
    return {
      priceUsd: d.current_price,
      change24h: d.price_change_percentage_24h ?? 0,
      marketCapUsd: d.market_cap,
      circulatingSupply: d.circulating_supply,
    };
  } catch {
    return null;
  }
}
