import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "mev-dark-forest",
  title: "MEV: The Dark Forest",
  kana: "暗黒森林",
  tagline: "Every transaction you broadcast is visible before it lands — and something is watching.",
  category: "frontier",
  level: "architect",
  readingMinutes: 11,
  glow: "magenta",
  intro: [
    "In Liu Cixin's science fiction, the universe is a dark forest: reveal your position and a hunter destroys you before you know it saw you. In 2020, researchers at Paradigm borrowed the metaphor for Ethereum's mempool — the public waiting room where transactions sit before they're included in a block — and it stuck, because it is uncomfortably accurate. Broadcast a profitable transaction and bots will see it, copy it, front-run it, or wrap it in a trap, all in the milliseconds before it confirms.",
    "This is the world of **MEV** — maximal extractable value: the profit that whoever orders transactions can squeeze out of that ordering power. It sounds like an obscure corner case. It is actually one of the deepest forces shaping Ethereum's architecture, the reason block production works the way it does today, and something every user brushes against each time they trade. Understanding MEV is understanding who really profits between your click and your confirmation.",
  ],
  sections: [
    {
      heading: "Why ordering is money",
      paragraphs: [
        "A block is not just a set of transactions — it is a **sequence**. And in a system where prices move with every trade, sequence is worth money. If a decentralised exchange has a stale price, the first transaction to correct it captures the difference. If a lending position dips below its collateral threshold, the first liquidator to fire collects the bonus. Whoever controls ordering can guarantee they are first — or insert themselves around you.",
        "The three classic species of MEV: **arbitrage** (closing price gaps between exchanges — mostly benign, it keeps markets efficient), **liquidations** (racing to close underwater loans — necessary, if brutal), and **sandwich attacks** — the predatory one. A bot spots your pending swap in the mempool, buys just before you to push the price up, lets your trade execute at the worse price, then sells right after. You paid more; the bot pocketed the difference. Your slippage tolerance defined exactly how much it could take.",
        "Cumulative extracted MEV on Ethereum is measured in the **billions of dollars** since measurement began. In the early days this fuelled chaotic public bidding wars — bots outbidding each other in the open mempool, spiking gas for everyone. The dark forest wasn't just dangerous for users; it was degrading the chain itself.",
      ],
    },
    {
      heading: "Flashbots and the great cleanup",
      paragraphs: [
        "In 2020 a research collective called **Flashbots** formed around an uncomfortable thesis: MEV cannot be eliminated, so it must be illuminated and channelled. Their first product let searchers (the bot operators) submit transaction bundles **privately** to miners with a sealed bid, instead of fighting gas auctions in the public mempool. The gas spikes and failed-transaction spam receded almost immediately. Extraction didn't stop — it moved into an orderly, quieter market.",
        "After Ethereum moved to proof-of-stake in 2022, Flashbots shipped **MEV-Boost**, sidecar software that lets any validator auction off the right to build its block. This is **proposer-builder separation (PBS)** in action: specialised **builders** compete to assemble the most profitable block possible, and the validator simply proposes the highest-bidding one, collecting the payment without needing any MEV expertise of its own. Solo stakers earn the same sophisticated rewards as institutional operators — that was the point.",
        "The result is that block production is now an industrial supply chain: searchers find opportunities, builders assemble blocks, relays pass them to proposers. Roughly **nine in ten Ethereum blocks** flow through MEV-Boost, and a small handful of builders regularly produce the majority of them. That concentration is the trade-off everyone worries about: PBS protected validators from centralising, but pushed the centralisation pressure one layer down, into the builder market.",
      ],
    },
    {
      heading: "The frontier: encrypting the forest",
      paragraphs: [
        "The research frontier asks: what if transactions simply couldn't be seen before they're ordered? **Encrypted mempools** would have users submit encrypted transactions that only decrypt after their position in the block is fixed — nothing to hunt, nothing to sandwich. Threshold-encryption designs (like the Shutter approach) exist today, but making this fast, robust, and default at Ethereum scale remains open research.",
        "A second thread targets builder power directly. **Inclusion lists** — under the banner of FOCIL, 'fork-choice enforced inclusion lists' — would let a committee of ordinary validators force builders to include specific pending transactions, so a dominant builder can't quietly censor. Alongside it, **enshrined PBS** would fold the builder auction into the protocol itself, removing the trusted relays that currently sit in the middle. Both are actively debated candidate upgrades rather than shipped features.",
        "The honest framing: MEV is not a bug to be patched but a permanent economic force, like weather. The protocol's job is to shape where it flows — away from users, away from centralising chokepoints — and every serious Ethereum roadmap conversation now runs through it.",
      ],
    },
    {
      heading: "Surviving as an ordinary user",
      paragraphs: [
        "You don't need to be a searcher to defend yourself; you mostly need to stop broadcasting your position. **Private RPCs** — like Flashbots Protect or MEV Blocker — send your transaction directly to builders instead of the public mempool, so sandwich bots never see it. Switching your wallet's RPC endpoint takes a minute, and several wallets now build this in. Some private routes even refund you a share of any backrun value your transaction creates.",
        "Second: treat **slippage tolerance** as the exact bounty you're offering an attacker. A 5% slippage setting on a large swap is an invitation; keep it as tight as the trade allows, and split very large trades. Many modern DEX front-ends and aggregators route through private or batch-auction systems (like CoW-style solvers) that structurally resist sandwiching — using them matters more than any single setting.",
        "Finally, keep perspective. Most small, everyday transactions are not worth hunting, and the ecosystem's defences have genuinely improved since the feral era of 2020–2021. The forest is still dark — but there are now well-lit paths through it, and knowing they exist is most of the protection.",
      ],
    },
  ],
  keyTakeaways: [
    "MEV is the value extractable by whoever orders transactions — arbitrage, liquidations, and predatory sandwich attacks are the classic forms.",
    "The public mempool is a 'dark forest': visible pending transactions can be front-run or sandwiched before they confirm.",
    "Flashbots channelled MEV into sealed-bid private auctions, and MEV-Boost brought proposer-builder separation to proof-of-stake Ethereum.",
    "Roughly nine in ten blocks flow through the builder market, and its concentration is now a central protocol concern — driving research into encrypted mempools, inclusion lists, and enshrined PBS.",
    "Users can defend themselves today: private RPCs keep transactions out of the public mempool, and tight slippage settings cap what a sandwich can take.",
  ],
  quiz: [
    {
      question: "Why is the Ethereum mempool described as a 'dark forest'?",
      options: [
        "Because transaction data is encrypted and unreadable",
        "Because pending transactions are publicly visible and can be exploited before they confirm",
        "Because most transactions there are illegal",
        "Because the mempool is stored on hidden servers",
      ],
      answerIndex: 1,
      explanation:
        "The metaphor (from Liu Cixin via Paradigm's 2020 essay) captures the danger of visibility: broadcast a profitable transaction publicly and bots can front-run, copy, or sandwich it before it lands in a block.",
    },
    {
      question: "What is a sandwich attack?",
      options: [
        "Submitting two identical transactions to double a trade",
        "A bot buying before your swap and selling after it, profiting from the price impact you suffer",
        "Splitting one transaction across two blocks to save gas",
        "A validator including its own transactions in every block",
      ],
      answerIndex: 1,
      explanation:
        "The attacker 'sandwiches' your trade: a buy pushes the price up just before you, your swap executes at the worse price, and an immediate sell captures the difference — bounded by your slippage tolerance.",
    },
    {
      question: "What does MEV-Boost enable under proposer-builder separation?",
      options: [
        "Validators pay Flashbots a subscription for higher rewards",
        "Specialised builders bid for the right to construct a validator's block, and the validator proposes the highest bid",
        "Users boost their transactions to the front of the queue for a fee",
        "It removes MEV from Ethereum entirely",
      ],
      answerIndex: 1,
      explanation:
        "MEV-Boost auctions block construction to competing builders. The proposer collects the winning bid without needing MEV expertise — so even solo stakers earn sophisticated rewards, at the cost of a concentrated builder market.",
    },
    {
      question: "Which is a practical defence for an ordinary user against sandwich attacks?",
      options: [
        "Setting slippage tolerance as high as possible so trades always succeed",
        "Broadcasting the transaction to as many public nodes as possible",
        "Sending transactions through a private RPC so they skip the public mempool",
        "Only trading during periods of high gas prices",
      ],
      answerIndex: 2,
      explanation:
        "Private RPCs like Flashbots Protect route transactions directly to block builders, so sandwich bots never see them. High slippage does the opposite — it defines exactly how much an attacker can extract.",
    },
  ],
  explore: [
    {
      label: "Ethereum is a Dark Forest — Paradigm",
      url: "https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest",
      note: "The 2020 essay that named the phenomenon — a real-time account of trying to rescue funds without being hunted.",
    },
    {
      label: "Flashbots",
      url: "https://www.flashbots.net",
      note: "The research collective that reshaped MEV — home of MEV-Boost and years of transparency reports.",
    },
    {
      label: "mevboost.pics",
      url: "https://mevboost.pics",
      note: "Live dashboard of the builder market: who builds Ethereum's blocks, and how concentrated it is.",
    },
    {
      label: "ethereum.org — MEV",
      url: "https://ethereum.org/en/developers/docs/mev/",
      note: "Clear community documentation covering extraction strategies and the protocol response.",
    },
    {
      label: "Flashbots Writings",
      url: "https://writings.flashbots.net",
      note: "Primary-source research on the MEV supply chain, from sealed-bid auctions to encrypted mempools.",
    },
  ],
};
