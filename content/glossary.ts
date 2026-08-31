import type { GlossaryEntry } from "@/lib/types";

export const glossary: GlossaryEntry[] = [
  {
    term: "Address",
    definition:
      "A unique identifier — `0x` followed by 40 hexadecimal characters — that locates an account on Ethereum. Both wallets and smart contracts live at addresses, which can receive ETH and tokens from anyone.",
    related: ["what-is-ethereum", "self-custody"],
  },
  {
    term: "Airdrop",
    definition:
      "A free distribution of tokens to wallet addresses, often used to reward early users of a protocol or to decentralise ownership at launch. Also a favourite disguise for scams — unsolicited tokens should be treated with suspicion.",
  },
  {
    term: "AMM",
    definition:
      "Automated market maker: an exchange design that prices trades with a formula over pooled reserves instead of an order book. Anyone can trade against the pool or supply liquidity to it — Uniswap is the canonical example.",
    related: ["defi-open-finance"],
  },
  {
    term: "Blob",
    definition:
      "A dedicated space in Ethereum blocks for large chunks of temporary data, introduced to give rollups a cheap place to post their transactions. Blobs slashed Layer 2 fees dramatically when they arrived with the Dencun upgrade.",
    related: ["layer-2-rollups"],
  },
  {
    term: "Block",
    definition:
      "A batch of transactions bundled together and appended to the chain, one every twelve seconds on Ethereum. Each block cryptographically references its predecessor, forming the tamper-evident history everyone agrees on.",
    related: ["what-is-ethereum", "proof-of-stake"],
  },
  {
    term: "Bridge",
    definition:
      "Infrastructure that moves assets or messages between blockchains, typically by locking tokens on one chain and issuing representations on another. Bridges concentrate enormous value and have suffered some of crypto's largest hacks.",
    related: ["layer-2-rollups"],
  },
  {
    term: "Cold wallet",
    definition:
      "A wallet whose private keys are kept entirely offline — on a hardware device or even paper — so remote attackers can never reach them. The standard for storing significant value long-term.",
    related: ["self-custody"],
  },
  {
    term: "Consensus",
    definition:
      "The mechanism by which thousands of independent nodes agree on a single, canonical history of transactions without a central referee. Ethereum's consensus is proof of stake, secured by validators' locked ETH.",
    related: ["proof-of-stake", "what-is-ethereum"],
  },
  {
    term: "DAO",
    definition:
      "Decentralised autonomous organisation: a group coordinated by smart contracts and token voting rather than by managers and legal charters, with its treasury and rules living on-chain. Not to be confused with 'The DAO', the 2016 project whose hack led to Ethereum's hard fork.",
    related: ["daos-governance", "smart-contracts-evm"],
  },
  {
    term: "Dapp",
    definition:
      "Decentralised application: software whose backend runs as smart contracts on a blockchain instead of on a company's servers, usually with a normal web frontend. No operator can shut down its core logic.",
    related: ["smart-contracts-evm", "defi-open-finance"],
  },
  {
    term: "DeFi",
    definition:
      "Decentralised finance: financial services — trading, lending, payments, derivatives — rebuilt as open smart contracts anyone can use without intermediaries or permission.",
    related: ["defi-open-finance", "future-of-finance"],
  },
  {
    term: "DEX",
    definition:
      "Decentralised exchange: a venue for swapping tokens directly from your own wallet via smart contracts, with no company holding your funds. Most DEXs, like Uniswap, are built on the AMM model.",
    related: ["defi-open-finance"],
  },
  {
    term: "EIP",
    definition:
      "Ethereum Improvement Proposal: the public, numbered documents through which changes to Ethereum are proposed, debated, and standardised — everything from protocol upgrades to token interfaces like ERC-20.",
    related: ["what-is-ethereum"],
  },
  {
    term: "EIP-1559",
    definition:
      "The 2021 fee-market upgrade that splits every transaction fee into a burned base fee and an optional tip. The burn permanently removes ETH from circulation, tying the asset's supply to network usage.",
    related: ["ether-the-asset"],
  },
  {
    term: "ENS",
    definition:
      "Ethereum Name Service: the protocol that maps human-readable names like `vitalik.eth` to addresses and other records — DNS for the on-chain world.",
    related: ["what-is-ethereum"],
  },
  {
    term: "EOA",
    definition:
      "Externally owned account: an Ethereum account controlled by a private key rather than by code — the classic user wallet. Contrast with contract accounts, which act by executing their programs.",
    related: ["smart-contracts-evm", "self-custody"],
  },
  {
    term: "EVM",
    definition:
      "Ethereum Virtual Machine: the shared execution environment every node runs identically, making the whole network behave like one world computer. Its instruction set has become a de facto standard adopted by many other chains.",
    related: ["smart-contracts-evm", "what-is-ethereum"],
  },
  {
    term: "Finality",
    definition:
      "The point at which a block is irreversibly settled. On Ethereum, a block is finalised once two-thirds of all staked ETH has endorsed it — reverting it would require destroying billions in slashed stake.",
    related: ["proof-of-stake"],
  },
  {
    term: "Flash loan",
    definition:
      "An uncollateralised loan that must be borrowed and repaid within a single atomic transaction — if repayment fails, the whole transaction reverts as if it never happened. Used for arbitrage, refinancing, and, in the wrong hands, funding attacks.",
    related: ["defi-open-finance"],
  },
  {
    term: "Gas",
    definition:
      "The unit metering computational work on Ethereum. Every operation costs gas, paid in ETH, so users pay for exactly the resources they consume and spam becomes economically irrational.",
    related: ["ether-the-asset", "what-is-ethereum"],
  },
  {
    term: "Gwei",
    definition:
      "One billionth of an ETH — the customary unit for quoting gas prices. A gas price of 20 gwei means each unit of gas costs 0.00000002 ETH.",
    related: ["ether-the-asset"],
  },
  {
    term: "Hardware wallet",
    definition:
      "A dedicated physical device that stores private keys and signs transactions without the keys ever touching an internet-connected computer. The practical backbone of serious self-custody.",
    related: ["self-custody"],
  },
  {
    term: "Impermanent loss",
    definition:
      "The shortfall a liquidity provider suffers versus simply holding their tokens, caused by the pool mechanically selling assets that rise and buying assets that fall. It grows with price divergence and is offset — sometimes — by trading fees.",
    related: ["defi-open-finance"],
  },
  {
    term: "L2 (Layer 2)",
    definition:
      "A network that executes transactions cheaply off Ethereum's main chain while inheriting its security by posting data and proofs back to it. Rollups such as Arbitrum, Optimism, and Base are the dominant form.",
    related: ["layer-2-rollups"],
  },
  {
    term: "Liquid staking",
    definition:
      "Staking through a protocol that issues a tradable token (like Lido's stETH or Rocket Pool's rETH) representing your staked ETH plus accruing rewards — yield without lockup, at the cost of extra smart-contract and depeg risk.",
    related: ["staking-and-yield", "proof-of-stake"],
  },
  {
    term: "Mainnet",
    definition:
      "The live, production Ethereum network where transactions carry real value — as opposed to testnets, where developers experiment with worthless tokens.",
    related: ["what-is-ethereum"],
  },
  {
    term: "MEV",
    definition:
      "Maximal extractable value: profit available from choosing and ordering the transactions in a block — capturing arbitrage, liquidations, or front-running opportunities. A structural force in blockchain economics and a share of staking yield.",
    related: ["staking-and-yield", "proof-of-stake"],
  },
  {
    term: "Node",
    definition:
      "A computer running Ethereum client software: verifying transactions, holding a copy of the chain's state, and relaying data. Tens of thousands of independent nodes are what make the network decentralised.",
    related: ["what-is-ethereum", "proof-of-stake"],
  },
  {
    term: "Oracle",
    definition:
      "A service that delivers off-chain information — most importantly asset prices — onto the blockchain for smart contracts to use. Chainlink's decentralised oracle networks are the standard; manipulated oracles are a classic attack vector.",
    related: ["defi-open-finance"],
  },
  {
    term: "Private key",
    definition:
      "The secret number that controls an account and authorises its transactions. Whoever holds the key holds the funds — there is no password reset, and no recourse if it is stolen or lost.",
    related: ["self-custody"],
  },
  {
    term: "Rollup",
    definition:
      "A Layer 2 design that executes transactions off-chain in bulk, then posts compressed data back to Ethereum so anyone can verify or reconstruct the result. Optimistic rollups assume validity and allow fraud challenges; ZK rollups prove validity cryptographically.",
    related: ["layer-2-rollups", "zero-knowledge"],
  },
  {
    term: "Rug pull",
    definition:
      "A scam in which a project's insiders drain the funds — by dumping their tokens, removing liquidity, or triggering a hidden backdoor — and vanish. Anonymous teams, unaudited code, and irrational yields are the classic warning signs.",
    related: ["defi-open-finance"],
  },
  {
    term: "Seed phrase (mnemonic)",
    definition:
      "A sequence of 12 or 24 words that encodes a wallet's master key: anyone holding the phrase can recreate the wallet and take everything in it. Write it down offline, never photograph it, and never type it into a website.",
    related: ["self-custody"],
  },
  {
    term: "Slashing",
    definition:
      "The protocol-enforced destruction of part of a validator's staked ETH as punishment for provable misbehaviour, such as signing conflicting blocks. It is the teeth behind proof of stake's security guarantees.",
    related: ["proof-of-stake", "staking-and-yield"],
  },
  {
    term: "Smart contract",
    definition:
      "A program deployed to the blockchain that holds funds and executes exactly as written, for anyone, without intermediaries. The building block of every dapp, token, and DeFi protocol.",
    related: ["smart-contracts-evm"],
  },
  {
    term: "Stablecoin",
    definition:
      "A token engineered to hold steady value, almost always one US dollar, backed by real-world reserves (USDC, USDT) or overcollateralised crypto (DAI). Crypto's most widely used product and its main payment rail.",
    related: ["stablecoins"],
  },
  {
    term: "Staking",
    definition:
      "Locking ETH as collateral to help secure the network in exchange for yield paid from issuance, fees, and MEV. Done solo with 32 ETH and your own hardware, or through pooled and liquid staking services.",
    related: ["staking-and-yield", "proof-of-stake"],
  },
  {
    term: "TVL",
    definition:
      "Total value locked: the value of all assets deposited in a protocol's smart contracts. A rough gauge of scale and trust — but it swings with token prices and says nothing about code quality.",
    related: ["defi-open-finance"],
  },
  {
    term: "Validator",
    definition:
      "A staked participant in Ethereum's consensus — 32 ETH of collateral plus software that proposes blocks and attests to the chain. Honest work earns rewards; provable attacks are slashed.",
    related: ["proof-of-stake", "staking-and-yield"],
  },
  {
    term: "Wei",
    definition:
      "The smallest unit of ether: one quintillion wei make one ETH. All on-chain accounting happens in wei; gwei (a billion wei) is the human-friendly middle unit used for gas prices.",
    related: ["ether-the-asset"],
  },
  {
    term: "Zero-knowledge proof",
    definition:
      "A cryptographic technique for proving a statement is true without revealing the underlying data — the engine behind ZK rollups' validity proofs and a foundation for on-chain privacy.",
    related: ["zero-knowledge", "layer-2-rollups"],
  },
];
