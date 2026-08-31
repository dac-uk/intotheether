"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchChainSnapshot,
  fetchMarket,
  type ChainSnapshot,
  type MarketSnapshot,
} from "@/lib/chain";

const REFRESH_MS = 12_000;

function StatTile({
  label,
  kana,
  value,
  sub,
  glow,
}: {
  label: string;
  kana: string;
  value: string;
  sub?: string;
  glow: string;
}) {
  return (
    <div className="cyber-panel p-4">
      <p className="flex justify-between font-mono text-[10px] text-fog">
        <span>{label}</span>
        <span className="font-jp opacity-60">{kana}</span>
      </p>
      <p className={`mt-2 font-display text-xl md:text-2xl ${glow}`}>{value}</p>
      {sub && <p className="mt-1 font-mono text-[10px] text-fog">{sub}</p>}
    </div>
  );
}

function BaseFeeSparkline({ snap }: { snap: ChainSnapshot }) {
  const [hover, setHover] = useState<number | null>(null);
  const blocks = snap.blocks;
  const W = 600;
  const H = 120;
  const PAD = 8;
  const fees = blocks.map((b) => b.baseFeeGwei);
  const max = Math.max(...fees) * 1.15 || 1;
  const min = Math.min(...fees) * 0.85;
  const x = (i: number) =>
    PAD + (i / Math.max(1, blocks.length - 1)) * (W - PAD * 2);
  const y = (v: number) => H - PAD - ((v - min) / (max - min || 1)) * (H - PAD * 2);
  const path = fees.map((f, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(f)}`).join(" ");
  const area = `${path} L${x(blocks.length - 1)},${H - PAD} L${x(0)},${H - PAD} Z`;
  const h = hover !== null ? blocks[hover] : null;

  return (
    <div className="cyber-panel p-5">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-xs tracking-[0.3em] text-ice">
          BASE FEE — LAST {blocks.length} BLOCKS
        </p>
        <p className="font-mono text-[10px] text-fog">gwei</p>
      </div>
      <div className="relative mt-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const px = ((e.clientX - rect.left) / rect.width) * W;
            const i = Math.round(
              ((px - PAD) / (W - PAD * 2)) * (blocks.length - 1)
            );
            setHover(Math.max(0, Math.min(blocks.length - 1, i)));
          }}
          onMouseLeave={() => setHover(null)}
        >
          <path d={area} fill="rgba(0,229,255,0.08)" />
          <path
            d={path}
            fill="none"
            stroke="#00e5ff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {h && (
            <>
              <line
                x1={x(hover!)}
                y1={PAD}
                x2={x(hover!)}
                y2={H - PAD}
                stroke="rgba(139,152,184,0.5)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <circle
                cx={x(hover!)}
                cy={y(h.baseFeeGwei)}
                r="4"
                fill="#00e5ff"
                stroke="#0a0e17"
                strokeWidth="2"
              />
            </>
          )}
        </svg>
        {h && (
          <div
            className="pointer-events-none absolute -top-2 border border-line bg-abyss px-3 py-2 font-mono text-[10px] text-ice"
            style={{
              left: `${(x(hover!) / W) * 100}%`,
              transform: `translateX(${hover! > blocks.length / 2 ? "-105%" : "5%"})`,
            }}
          >
            <span className="text-fog">block</span> {h.number.toLocaleString()}
            <br />
            <span className="text-neon-cyan">
              {h.baseFeeGwei.toFixed(3)} gwei
            </span>{" "}
            · {Math.round((h.gasUsed / h.gasLimit) * 100)}% full
          </div>
        )}
      </div>
    </div>
  );
}

function BlocksTable({ snap }: { snap: ChainSnapshot }) {
  const now = snap.fetchedAt / 1000;
  const rows = [...snap.blocks].reverse().slice(0, 10);
  return (
    <div className="cyber-panel overflow-x-auto p-5">
      <p className="font-display text-xs tracking-[0.3em] text-ice">
        BLOCK FEED
      </p>
      <table className="mt-3 w-full font-mono text-[11px]">
        <thead>
          <tr className="text-left text-[9px] uppercase tracking-wider text-fog">
            <th className="py-1 pr-4 font-normal">block</th>
            <th className="py-1 pr-4 font-normal">age</th>
            <th className="py-1 pr-4 font-normal">txs</th>
            <th className="py-1 pr-4 font-normal">fullness</th>
            <th className="py-1 pr-4 font-normal">base fee</th>
            <th className="py-1 pr-4 font-normal">burned</th>
            <th className="py-1 font-normal">blobs</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((b, i) => {
            const full = b.gasUsed / b.gasLimit;
            return (
              <tr
                key={b.number}
                className={`border-t border-line/50 ${i === 0 ? "text-ice" : "text-fog"}`}
              >
                <td className="py-1.5 pr-4">
                  {i === 0 && (
                    <span className="mr-1 text-neon-magenta neon-pulse">▸</span>
                  )}
                  {b.number.toLocaleString()}
                </td>
                <td className="py-1.5 pr-4">
                  {Math.max(0, Math.round(now - b.timestamp))}s
                </td>
                <td className="py-1.5 pr-4">{b.txCount}</td>
                <td className="py-1.5 pr-4">
                  <span className="mr-2 inline-block h-1.5 w-16 bg-line align-middle">
                    <span
                      className={`block h-full ${full > 0.66 ? "bg-neon-amber" : "bg-neon-cyan"}`}
                      style={{ width: `${Math.min(100, full * 100)}%` }}
                    />
                  </span>
                  {Math.round(full * 100)}%
                </td>
                <td className="py-1.5 pr-4">{b.baseFeeGwei.toFixed(2)} gwei</td>
                <td className="py-1.5 pr-4 text-neon-magenta/80">
                  {b.burnedEth.toFixed(3)} ETH
                </td>
                <td className="py-1.5">{b.blobs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Observatory() {
  const [snap, setSnap] = useState<ChainSnapshot | null>(null);
  const [market, setMarket] = useState<MarketSnapshot | null>(null);
  const [error, setError] = useState(false);
  const [syncedAt, setSyncedAt] = useState<Date | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    if (document.visibilityState === "hidden") return;
    try {
      const [c, m] = await Promise.all([fetchChainSnapshot(20), fetchMarket()]);
      setSnap(c);
      if (m) setMarket(m);
      setError(false);
      setSyncedAt(new Date());
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    // load() is async — its setStates land after fetches resolve, not
    // synchronously in the effect body; the rule can't see through that.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
    timer.current = setInterval(load, REFRESH_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [load]);

  if (!snap && !error) {
    return (
      <div className="cyber-panel p-10 text-center">
        <p className="font-mono text-sm text-fog neon-pulse">
          ▚▞ acquiring signal from mainnet…
        </p>
      </div>
    );
  }

  if (!snap && error) {
    return (
      <div className="cyber-panel p-10 text-center">
        <p className="font-mono text-sm text-neon-magenta">⚠ SIGNAL LOST</p>
        <p className="mt-2 text-xs text-fog">
          All public RPC endpoints refused the connection. The chain is fine —
          your path to it isn&apos;t.
        </p>
        <button
          onClick={load}
          className="mt-5 border border-neon-cyan px-5 py-2 font-display text-xs tracking-widest text-neon-cyan hover:bg-neon-cyan hover:text-void"
        >
          ⟲ RE-SYNC
        </button>
      </div>
    );
  }

  const s = snap!;
  const windowSecs =
    s.blocks[s.blocks.length - 1].timestamp - s.blocks[0].timestamp || 1;
  const burnedWindow = s.blocks.reduce((a, b) => a + b.burnedEth, 0);
  const burnPerMin = (burnedWindow / windowSecs) * 60;
  const avgFull =
    s.blocks.reduce((a, b) => a + b.gasUsed / b.gasLimit, 0) / s.blocks.length;
  const avgBlobs =
    s.blocks.reduce((a, b) => a + b.blobs, 0) / s.blocks.length;
  const gasPriceGwei = s.head.baseFeeGwei + s.tipGwei;
  const transferUsd = market
    ? (gasPriceGwei * 21000 * market.priceUsd) / 1e9
    : null;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-fog">
        <span>
          {error ? (
            <span className="text-neon-amber">⚠ resync failed — showing last snapshot</span>
          ) : (
            <span>
              <span className="text-neon-green neon-pulse">●</span> LIVE — reads
              mainnet every 12s via public RPC
            </span>
          )}
        </span>
        {syncedAt && <span>synced {syncedAt.toLocaleTimeString()}</span>}
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <StatTile
          label="ETH PRICE"
          kana="価格"
          glow={market && market.change24h < 0 ? "neon-magenta" : "neon-green"}
          value={
            market
              ? `$${market.priceUsd.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
              : "—"
          }
          sub={
            market
              ? `${market.change24h >= 0 ? "▲" : "▼"} ${Math.abs(market.change24h).toFixed(2)}% 24h · mcap $${(market.marketCapUsd / 1e9).toFixed(0)}B`
              : "market feed unavailable"
          }
        />
        <StatTile
          label="BLOCK HEIGHT"
          kana="高度"
          glow="neon-cyan"
          value={s.head.number.toLocaleString()}
          sub="a new block every ~12 seconds, without fail"
        />
        <StatTile
          label="GAS NOW"
          kana="燃料"
          glow="neon-amber"
          value={`${gasPriceGwei.toFixed(2)} gwei`}
          sub={
            transferUsd !== null
              ? `simple transfer ≈ $${transferUsd.toFixed(transferUsd < 0.1 ? 3 : 2)}`
              : `base ${s.head.baseFeeGwei.toFixed(2)} + tip ${s.tipGwei.toFixed(2)}`
          }
        />
        <StatTile
          label="BURN RATE"
          kana="燃焼"
          glow="neon-magenta"
          value={`${burnPerMin.toFixed(2)} ETH/min`}
          sub={`≈ ${Math.round(burnPerMin * 60 * 24).toLocaleString()} ETH/day at current pace`}
        />
        <StatTile
          label="BLOCK FULLNESS"
          kana="需要"
          glow={avgFull > 0.66 ? "neon-amber" : "neon-cyan"}
          value={`${Math.round(avgFull * 100)}%`}
          sub="EIP-1559 steers toward 50% — above it, fees rise"
        />
        <StatTile
          label="BLOB TRAFFIC"
          kana="随伴"
          glow="neon-violet"
          value={`${avgBlobs.toFixed(1)} /block`}
          sub="rollup data blobs riding each block (EIP-4844)"
        />
      </div>

      <div className="mt-6 grid gap-6">
        <BaseFeeSparkline snap={s} />
        <BlocksTable snap={s} />
      </div>
    </div>
  );
}
