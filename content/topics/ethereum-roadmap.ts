import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "ethereum-roadmap",
  title: "The Roadmap: Endgame",
  kana: "終盤戦",
  tagline: "Where the world computer is going — six tracks, one destination, no fixed dates.",
  category: "frontier",
  level: "architect",
  readingMinutes: 11,
  glow: "cyan",
  intro: [
    "Ethereum is unusual among major technologies in that its endgame is written down. Not as a marketing deck, but as a living body of public research: what the protocol should look like when it's finished, and the sequence of upgrades that get there. The destination is specific — a chain that a phone can verify, that settles a world of rollups cheaply, that reaches finality in seconds, and that no cartel of operators can censor.",
    "The route is famously drawn as six parallel tracks with rhyming names: **the Merge, the Surge, the Scourge, the Verge, the Purge, and the Splurge**. It's a map, not a schedule — tracks advance in parallel, priorities reshuffle, and designs get replaced mid-flight when better cryptography shows up. This deep dive walks the map as it stands in early 2026: what has shipped, what's next, and how an upgrade actually makes it from research post to running code on a hundred billion dollars of infrastructure.",
  ],
  sections: [
    {
      heading: "The rollup-centric bet",
      paragraphs: [
        "In October 2020, Vitalik Buterin published a short post that quietly redefined the project: Ethereum would not scale by making layer 1 bigger, but by becoming the **settlement and data layer for rollups** — separate execution environments that post their data and proofs back to mainnet and inherit its security. The base chain stays maximally decentralised and verifiable; the throughput lives one layer up, where experimentation is cheap and failure isn't catastrophic.",
        "This was a genuine fork in the road. Rival chains bet on big blocks and beefy hardware; Ethereum bet that keeping verification cheap enough for ordinary hardware was non-negotiable, and that scale should come from cryptographic compression rather than trust in fewer, larger operators. The 2021 **'Endgame'** essay sharpened the argument: block *production* may end up specialised and industrial, but block *verification* must remain trivially cheap for everyone — that's the property that keeps the whole thing honest.",
        "Everything on the roadmap serves that thesis. The Surge scales data for rollups. The Verge makes verification nearly free. The Scourge keeps the industrial block-production pipeline from becoming a chokepoint. Read any individual upgrade without the thesis and it looks arbitrary; read it with the thesis and the whole map snaps into focus.",
      ],
    },
    {
      heading: "The Surge: feeding the rollups",
      paragraphs: [
        "Rollups are cheap only if posting data to Ethereum is cheap. The breakthrough was **EIP-4844 ('proto-danksharding')**, shipped in the Dencun upgrade of March 2024, which gave rollups a dedicated data lane: **blobs** — large data packages with their own fee market, stored by the network just long enough for anyone to verify or reconstruct a rollup's state, then pruned. Rollup fees fell by an order of magnitude essentially overnight.",
        "The next leap is **data availability sampling (DAS)**: instead of every node downloading every blob, nodes sample small random chunks and — thanks to erasure coding — can be statistically certain the full data exists. That breaks the link between a node's bandwidth and the chain's data capacity. **PeerDAS**, the first production version, arrived with the Fusaka upgrade in late 2025, opening the path to scaling blob count dramatically without raising node requirements.",
        "Full **danksharding** is the destination: blob capacity large enough that Ethereum becomes effectively unconstrained as a data layer, with sampling doing the heavy lifting. Combined with rollups' own compression and proof systems, the aim is a network that settles global-scale activity while a laptop — eventually a phone — can still check everyone's work.",
      ],
    },
    {
      heading: "Verge, Purge, Scourge: verify everything, store less, trust no one",
      paragraphs: [
        "**The Verge** attacks the biggest barrier to running a node: state. Today, validating requires storing hundreds of gigabytes and growing. The plan is **statelessness** — blocks ship with compact cryptographic **witnesses** proving exactly the state they touch, so a verifier needs almost no storage at all. The original design used **Verkle trees**; the frontier has since shifted toward ZK-friendly hash-based trees, on the logic that if SNARK proving keeps improving, you may as well leap straight to fully proven blocks — 'ZK-EVM at layer 1'. The design is in flux; the goal — verification on a smartwatch, near enough — is not.",
        "**The Purge** is the housekeeping track: expire ancient history from the default node (**EIP-4444**), lean on distributed archives for the deep past, simplify the protocol by deleting legacy behaviours, and cap state growth. Less data to hold means cheaper nodes means more of them — decentralisation by deletion. **The Scourge**, meanwhile, is the MEV-and-staking track: enshrined proposer-builder separation, inclusion lists to guarantee censorship resistance, and keeping stake from pooling into too few hands.",
        "**The Splurge** collects everything else — 'fix everything else fun'. Its headline is **account abstraction**: making smart-contract wallets first-class citizens. **EIP-7702**, shipped in the Pectra upgrade of May 2025, let ordinary accounts temporarily act as smart wallets — batching, sponsored gas, passkey-style signers — a pragmatic bridge while fuller in-protocol account abstraction continues through the ERC-4337 lineage. Also in the Splurge's orbit: **single-slot finality**, collapsing today's ~13-minute finality window to a single slot, so a transaction is irreversible in seconds.",
      ],
    },
    {
      heading: "How an upgrade actually ships",
      paragraphs: [
        "There is no Ethereum head office to decree any of this. Changes begin life as research posts and **EIPs (Ethereum Improvement Proposals)** — public specifications anyone can author. The coordination heartbeat is the **AllCoreDevs (ACD) call**, a public fortnightly meeting where the independent **client teams** — Geth, Nethermind, Besu, Erigon, Reth on the execution side; Prysm, Lighthouse, Teku, Nimbus, Lodestar on consensus — argue proposals into or out of the next fork.",
        "Accepted EIPs get bundled into a named hard fork — Dencun, Pectra, Fusaka — implemented independently by every client team, then hammered on devnets and public testnets for months. The upgrade only becomes real when node operators worldwide voluntarily run the new software. It's slow by design: five-plus independent implementations agreeing byte-for-byte, on a system that can never schedule downtime, securing hundreds of billions of dollars.",
        "Which is why the honest way to read the roadmap is **direction over dates**. Verkle trees were 'next' for years before being rethought; danksharding's final form has been redesigned more than once; timelines slip routinely. What hasn't moved in half a decade is the destination: cheap verification for everyone, scale through rollups and sampling, finality in seconds, and credible neutrality all the way down. Bet on the direction, hold the dates loosely.",
      ],
    },
  ],
  keyTakeaways: [
    "Ethereum's scaling thesis is rollup-centric: layer 1 stays cheap to verify, while throughput comes from rollups posting compressed data and proofs back to mainnet.",
    "The six named tracks — Merge, Surge, Scourge, Verge, Purge, Splurge — advance in parallel; they're an organising map, not a sequential schedule.",
    "The Surge shipped blobs (EIP-4844, 2024) and data availability sampling via PeerDAS (2025), on the road to full danksharding.",
    "The Verge targets statelessness — verifying blocks with tiny witnesses instead of hundreds of gigabytes of state — with designs evolving from Verkle trees toward ZK-proven blocks.",
    "Upgrades ship through open coordination — EIPs, AllCoreDevs calls, and independent client teams — so dates slip often, but the direction has stayed fixed for years.",
  ],
  quiz: [
    {
      question: "What is the core idea of the rollup-centric roadmap?",
      options: [
        "Increase layer 1 block sizes until fees fall",
        "Keep layer 1 cheap to verify and scale execution on rollups that post data back to it",
        "Replace Ethereum mainnet with a faster chain",
        "Move all activity to centralised sidechains",
      ],
      answerIndex: 1,
      explanation:
        "Since Vitalik's 2020 post, the bet has been that the base layer should remain maximally verifiable while rollups handle execution — inheriting security by publishing their data and proofs to mainnet.",
    },
    {
      question: "What does data availability sampling (DAS) allow nodes to do?",
      options: [
        "Download every blob to check the chain",
        "Verify that full blob data exists by checking small random samples",
        "Skip verification entirely and trust block builders",
        "Store the entire history of Ethereum permanently",
      ],
      answerIndex: 1,
      explanation:
        "With erasure coding, sampling a few random chunks gives statistical certainty the full data is available — so data capacity can grow without every node's bandwidth growing with it. PeerDAS is the first production step.",
    },
    {
      question: "Which track of the roadmap is chiefly concerned with MEV and censorship resistance?",
      options: ["The Verge", "The Purge", "The Scourge", "The Splurge"],
      answerIndex: 2,
      explanation:
        "The Scourge covers the block-production pipeline: enshrined proposer-builder separation, inclusion lists, and preventing stake and builder power from centralising.",
    },
    {
      question: "How do protocol upgrades actually get shipped?",
      options: [
        "The Ethereum Foundation pushes updates to all nodes automatically",
        "Token holders vote on-chain and changes execute immediately",
        "EIPs are debated on public AllCoreDevs calls, implemented by independent client teams, tested for months, and adopted voluntarily by node operators",
        "The largest staking pools decide the fork contents privately",
      ],
      answerIndex: 2,
      explanation:
        "There's no head office: changes flow through public EIPs and ACD calls, multiple independent client implementations, and long testnet campaigns — becoming real only when operators worldwide choose to run them.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Roadmap",
      url: "https://ethereum.org/en/roadmap/",
      note: "The community's plain-language map of every track, kept current as designs evolve.",
    },
    {
      label: "Endgame — Vitalik Buterin",
      url: "https://vitalik.eth.limo/general/2021/12/06/endgame.html",
      note: "The 2021 essay arguing production can centralise as long as verification never does.",
    },
    {
      label: "Ethereum Improvement Proposals",
      url: "https://eips.ethereum.org",
      note: "The primary source: every proposed change to the protocol, in full specification.",
    },
    {
      label: "Ethereum Magicians",
      url: "https://ethereum-magicians.org",
      note: "The forum where EIPs are argued over in public before they go anywhere near a fork.",
    },
    {
      label: "AllCoreDevs — ethereum/pm",
      url: "https://github.com/ethereum/pm",
      note: "Agendas and recordings of the fortnightly calls where upgrades are actually decided.",
    },
  ],
};
