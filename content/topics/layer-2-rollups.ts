import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "layer-2-rollups",
  title: "Layer 2: The Rollup Age",
  kana: "第二層",
  tagline: "Ethereum's answer to scale: do the work elsewhere, prove it back home.",
  category: "frontier",
  level: "operator",
  readingMinutes: 11,
  glow: "cyan",
  intro: [
    "For years, Ethereum's critics had one devastating argument: it works, but it doesn't scale. At peak demand in 2021, a simple token swap could cost more than a nice dinner. The world computer was real — it was just priced like a mainframe with a queue around the block.",
    "The answer wasn't to make Ethereum bigger. It was to make Ethereum the **settlement court** for a constellation of faster chains called **rollups** — networks that execute thousands of transactions off-chain, compress them, and post the results back to Ethereum for final judgement. Today those fees have collapsed to cents, and most of Ethereum's activity happens one layer up.",
  ],
  sections: [
    {
      heading: "The scaling trilemma",
      paragraphs: [
        "Every blockchain fights the same three-way tug of war: **decentralisation**, **security**, and **scalability**. Push raw throughput by making blocks bigger and faster, and you push out the ordinary hardware that lets anyone verify the chain — quietly trading decentralisation for speed. Ethereum's designers refused that trade at the base layer, keeping requirements low enough that a home computer can still check the entire network's work.",
        "That discipline had a cost: roughly a dozen transactions per second on layer 1, shared by the whole planet. When demand spiked, gas auctions turned brutal and everyday users were priced out. The trilemma seemed to say you could never have all three.",
        "Rollups are the escape hatch. Instead of forcing every node to re-execute every transaction, a rollup executes transactions on its own high-speed chain, then posts compressed data and a claim about the results to Ethereum. Layer 1 doesn't redo the work — it **verifies** it. Security and decentralisation stay anchored to Ethereum; scale moves up a layer.",
      ],
    },
    {
      heading: "Optimistic vs ZK: two ways to prove honesty",
      paragraphs: [
        "The hard question is: how does Ethereum know a rollup's claimed results are honest? **Optimistic rollups** answer with a challenge game. Results are assumed valid by default, but anyone can submit a **fraud proof** during a challenge window — typically about a week — showing the maths doesn't add up. Cheat, and your claim is reverted and your bond destroyed. The catch: withdrawing back to layer 1 the trustless way means waiting out that window.",
        "**ZK rollups** answer with mathematics. Every batch ships with a **validity proof** — a cryptographic receipt demonstrating that the state transition was computed correctly, which Ethereum can check in milliseconds without trusting anyone. No challenge window, near-instant finality on withdrawals, and no reliance on watchdogs staying awake. The trade-off is complexity: generating these proofs is computationally heavy and the cryptography is bleeding-edge.",
        "The long-term consensus in Ethereum research is that validity proofs win eventually — optimism was the pragmatic bridge, ZK is the destination. But optimistic systems shipped first, hardened first, and still carry a huge share of real activity.",
      ],
    },
    {
      heading: "The rollup landscape",
      paragraphs: [
        "**Arbitrum** and **Optimism** led the optimistic wave, each becoming a thriving economy of DeFi, games, and social apps. Optimism went further, open-sourcing its **OP Stack** so anyone could launch a compatible chain — which is exactly what Coinbase did with **Base**, a rollup that onboarded millions of mainstream users and at times processes more transactions than Ethereum mainnet itself.",
        "On the ZK side, **zkSync** and **Starknet** spent years turning research papers into production networks, alongside Polygon's zkEVM efforts, Scroll, and Linea. Their holy grail — a **zkEVM** that proves ordinary Ethereum-style computation — went from 'maybe this decade' to live mainnet software with startling speed.",
        "One honest caveat: most rollups still run with training wheels — centralised sequencers that order transactions, and upgrade keys held by multisigs. Sites like **L2BEAT** grade each network's actual trust assumptions, and the gap between marketing and maturity is worth checking before you move serious value. Decentralising these components is the industry's current homework.",
      ],
    },
    {
      heading: "Blobs: the fee collapse of 2024",
      paragraphs: [
        "A rollup's biggest expense was always publishing its data to Ethereum, where it competed with everyone else for permanent block space — permanence that rollups don't actually need. **EIP-4844**, shipped in the **Dencun** upgrade of March 2024, gave them a purpose-built lane: **blobs**, large packets of data that Ethereum guarantees for a few weeks (long enough to verify or challenge anything) and then prunes.",
        "The effect was immediate and dramatic. Rollup fees fell by roughly one to two orders of magnitude overnight — transactions that cost dollars now cost cents, and often fractions of a cent. This wasn't a market dip; it was a structural repricing, and it has held. Subsequent upgrades have kept scaling blob capacity, with **danksharding**-style data availability sampling on the roadmap to multiply it much further.",
        "Cheap block space isn't just a discount — it's a phase change. Micropayments, fully on-chain games, social networks with every post on-chain, machine-to-machine payments between AI agents: entire categories that were economically absurd at $5 a transaction become viable at $0.005.",
      ],
    },
    {
      heading: "Living in a rollup-centric world",
      paragraphs: [
        "Ethereum formally embraced this future in its **rollup-centric roadmap**: layer 1 optimises for security and data availability, and lets rollups compete on execution — different virtual machines, fee models, and governance, all settling to the same neutral base. It's less a single highway than a hub airport with many carriers.",
        "The practical friction is **bridging**: moving assets between layers. Canonical rollup bridges inherit Ethereum's security but can be slow in the optimistic direction; third-party fast bridges are instant but add their own trust assumptions — and bridge hacks have historically been among crypto's most expensive disasters. The ecosystem's next frontier, often called **interoperability** or chain abstraction, aims to make hopping between rollups feel like using one seamless network.",
        "If the thesis plays out, 'which layer 2 am I on?' becomes as invisible a question as 'which AWS region is this website in?'. You'll just use applications — fast, cheap, final in seconds — while beneath the surface, every one of them files its proofs with the same incorruptible court.",
      ],
    },
  ],
  keyTakeaways: [
    "The scaling trilemma says you can't maximise decentralisation, security, and throughput at once — rollups sidestep it by layering.",
    "Optimistic rollups assume validity and rely on fraud proofs and a challenge window; ZK rollups prove every batch valid with cryptography.",
    "Arbitrum, Optimism, and Base lead the optimistic camp; zkSync, Starknet, and a wave of zkEVMs lead the ZK camp — L2BEAT tracks how decentralised each really is.",
    "EIP-4844 blobs (Dencun, March 2024) collapsed rollup fees from dollars to cents by giving them temporary, purpose-built data space.",
    "Ethereum's roadmap is rollup-centric: layer 1 as the security and settlement anchor, rollups as the execution layer where users actually live.",
  ],
  quiz: [
    {
      question: "In the rollup model, what does Ethereum layer 1 actually do with a rollup's transactions?",
      options: [
        "Re-executes every transaction to double-check the results",
        "Stores compressed data and verifies proofs or fraud challenges about the results",
        "Ignores them entirely — rollups are independent chains",
        "Randomly samples a few transactions and trusts the rest",
      ],
      answerIndex: 1,
      explanation:
        "Rollups execute off-chain and post compressed data plus a claim to Ethereum. Layer 1 verifies — via validity proofs or fraud challenges — rather than redoing the work, which is where the scale comes from.",
    },
    {
      question: "What is the key difference between optimistic and ZK rollups?",
      options: [
        "Optimistic rollups are faster to use day-to-day than ZK rollups",
        "ZK rollups keep all transactions permanently secret",
        "Optimistic rollups assume batches are valid unless challenged; ZK rollups prove every batch valid up front",
        "Optimistic rollups don't post any data to Ethereum",
      ],
      answerIndex: 2,
      explanation:
        "Optimistic systems rely on a challenge window and fraud proofs to catch cheating after the fact; ZK systems ship a cryptographic validity proof with every batch, so nothing needs to be assumed.",
    },
    {
      question: "What did EIP-4844 ('blobs') change?",
      options: [
        "It gave rollups cheap, temporary data space on Ethereum, collapsing their fees",
        "It increased Ethereum's gas limit for ordinary transactions by 100x",
        "It replaced fraud proofs with validity proofs on all rollups",
        "It made all rollup data permanent on layer 1",
      ],
      answerIndex: 0,
      explanation:
        "Blobs are large data packets that Ethereum holds just long enough for verification and then prunes. Because rollups no longer compete for permanent block space, their fees dropped by orders of magnitude after Dencun.",
    },
    {
      question: "Why do withdrawals from an optimistic rollup back to layer 1 traditionally take about a week?",
      options: [
        "Ethereum's block times are too slow to process them faster",
        "The challenge window must pass so anyone can submit a fraud proof against the batch",
        "Validators must manually approve each withdrawal",
        "The funds are staked and must unbond first",
      ],
      answerIndex: 1,
      explanation:
        "Optimistic rollups are 'innocent until proven guilty'. The waiting period is the window in which any observer can prove a batch fraudulent — only after it closes is the result final on layer 1.",
    },
  ],
  explore: [
    {
      label: "L2BEAT",
      url: "https://l2beat.com",
      note: "The definitive scorecard: value, activity, and honest risk ratings for every rollup.",
    },
    {
      label: "ethereum.org — Layer 2",
      url: "https://ethereum.org/en/layer-2/",
      note: "Community-maintained overview of why L2s exist and how to use them.",
    },
    {
      label: "EIP-4844: Shard Blob Transactions",
      url: "https://eips.ethereum.org/EIPS/eip-4844",
      note: "The specification behind the fee collapse — surprisingly readable.",
    },
    {
      label: "Ethereum roadmap",
      url: "https://ethereum.org/en/roadmap/",
      note: "The rollup-centric endgame — the Surge, danksharding, and what comes next.",
    },
    {
      label: "Arbitrum documentation",
      url: "https://docs.arbitrum.io",
      note: "Deep technical docs from the largest optimistic rollup ecosystem.",
    },
  ],
};
