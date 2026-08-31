import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "staking-and-yield",
  title: "Staking & Real Yield",
  kana: "利回り",
  tagline: "Where yield actually comes from — and how to spot the yield that eats you.",
  category: "defi",
  level: "operator",
  readingMinutes: 11,
  glow: "green",
  intro: [
    "Ether pays a yield. Not through a dividend committee or a central bank rate decision, but because the Ethereum protocol itself pays for a service: security. Stake ETH, keep validators honest and online, and the network compensates you — a native interest rate baked into the asset, sometimes called the internet bond.",
    "Around that simple core, an entire yield industry has grown: pooled staking, liquid staking tokens, restaking, and a thousand DeFi strategies stacked on top. Some of it is genuine income from genuine work. Some of it is musical chairs with better branding. The skill this topic teaches is the one that keeps portfolios alive: tracing every yield back to its source.",
  ],
  sections: [
    {
      heading: "The three springs of staking yield",
      paragraphs: [
        "Staking rewards flow from three distinct sources. First, **issuance**: newly created ETH the protocol pays validators for proposing blocks and attesting correctly. This is the base salary — predictable, and it shrinks per-validator as more total ETH stakes, since a fixed security budget is split more ways.",
        "Second, **priority fees**: the tips users attach to transactions to get included promptly. When the chain is busy, tips rise and proposers earn more. Third, **MEV** — maximal extractable value: the profit available from ordering transactions within a block, such as capturing arbitrage between exchanges. Most validators sell this ordering right to specialist builders and pocket the payment.",
        "Add them up and staking has yielded on the order of a few percent annually — floating with network activity, paid in ETH. The crucial property: all three springs are **real revenue for a real service**. Nobody's deposit is paying your reward; the network's users and its monetary policy are.",
      ],
    },
    {
      heading: "Solo, pooled, or liquid: choosing your harness",
      paragraphs: [
        "**Solo staking** is the gold standard: your own 32 ETH, your own hardware, your own keys. Maximum rewards (no middleman fee), maximum sovereignty, and the most decentralisation added per staked coin. The price is responsibility — uptime, maintenance, and slashing risk resting entirely on your own operational competence.",
        "**Pooled and liquid staking** open the door for everyone else. Deposit any amount with **Lido** and receive **stETH**; with **Rocket Pool**, **rETH** — tokens that represent staked ETH plus its accumulating rewards. These **liquid staking tokens (LSTs)** solve staking's lockup problem: your capital earns validator yield while remaining tradable, spendable, and usable as DeFi collateral. Rocket Pool is notable for keeping its operator set permissionless — anyone can run a node with a fraction of 32 ETH.",
        "Liquid staking's convenience built its own shadow. You add smart-contract risk and operator risk on top of protocol risk, and an LST's market price can **depeg** — trade below the value of its underlying ETH — during panics, as stETH briefly did in 2022. And when a single liquid staking protocol commands a huge share of all staked ETH, its governance becomes a systemic question for Ethereum itself. Convenience concentrates; concentration is the tax the network pays.",
      ],
    },
    {
      heading: "Restaking: the same collateral, twice",
      paragraphs: [
        "**EigenLayer** introduced the next abstraction: **restaking**. Staked ETH already secures Ethereum — restaking lets that same collateral simultaneously secure additional services (oracle networks, data layers, bridges) that need economic trust but lack Ethereum's validator army. Opt in, accept each service's slashing conditions, earn extra yield from fees those services pay.",
        "The appeal is capital efficiency: one pool of collateral underwriting many systems, letting new infrastructure rent Ethereum-grade security instead of bootstrapping its own. The concern is the mirror image: stacked slashing conditions, smart-contract layers on smart-contract layers, and the systemic question of what happens if a widely restaked service fails badly. Treat restaking as a leveraged extension of staking — more yield because there is genuinely more risk — and be sceptical of any presentation that mentions the first half without the second.",
      ],
    },
    {
      heading: "Real yield versus the ponzi kind",
      paragraphs: [
        "Here is the discipline that separates investors from exit liquidity: **every yield has a source, and you must be able to name it**. Real yield comes from someone paying for something — traders paying swap fees to liquidity providers, borrowers paying interest to lenders, the protocol paying for security, services paying for restaked trust. These yields are usually modest, denominated in hard assets, and they fluctuate with actual usage.",
        "Ponzi-shaped yield has a different signature. The reward is paid in the project's own freshly printed token, so the 'yield' is dilution wearing a costume. The advertised rate is absurd — triple digits sustained by nothing nameable. The mechanism, traced honestly, resolves to 'new deposits pay old depositors', which is a queue, not an income stream. Crypto history is a museum of these: unsustainable farm tokens, twenty-percent 'stable' yields, protocols whose only product was their own emissions. When the music stopped, each one transferred wealth from late arrivals to early exits.",
        "The test fits on an index card. **Who pays this yield, and why is it rational for them?** If the answer is a user buying a real service, you have found income. If the answer is 'the token going up' or silence, you have found the exit door of someone else's trade. High yield is not automatically a scam — new markets pay real premiums — but unexplainable yield always is.",
      ],
    },
    {
      heading: "The risk ledger",
      paragraphs: [
        "Every staking route carries **slashing risk** — protocol penalties for validator misbehaviour, which in pooled arrangements you share pro-rata even though someone else made the mistake. Serious operators have made slashing events rare and small, but the tail risk of correlated failures (one bug across thousands of validators) is exactly the kind that arrives unannounced.",
        "Liquid staking adds **depeg risk** and **smart-contract risk**: the token can trade below its backing when everyone wants out at once, and the contracts holding billions are a permanent bounty for attackers. Restaking compounds both and adds slashing conditions you may not fully understand. And everything denominated in ETH inherits ETH's own volatility — a percentage yield on an asset that can halve is not a savings account.",
        "The sober framing: base-layer staking yield is one of the most legitimate income streams in crypto — real work, real revenue, transparent mechanics. Everything stacked above it trades additional risk for additional yield, and the market is reasonably efficient about pricing that. When something offers much more yield than the base rate with supposedly no extra risk, the risk hasn't vanished. It's just wearing better clothes.",
      ],
    },
  ],
  keyTakeaways: [
    "Staking yield has three real sources: protocol issuance, user priority fees, and MEV — payment for the genuine service of securing the chain.",
    "Solo staking maximises rewards and decentralisation; liquid staking (Lido stETH, Rocket Pool rETH) trades convenience for smart-contract, operator, and depeg risk.",
    "Restaking (EigenLayer) lets staked ETH secure additional services for extra yield — capital efficiency bought with stacked slashing and systemic risk.",
    "The real-versus-ponzi test: name who pays the yield and why it's rational. Yield paid in a project's own printed token is usually dilution in disguise.",
    "Nothing here is a savings account: slashing, depegs, contract exploits, and ETH's own volatility all sit underneath the headline rate.",
  ],
  quiz: [
    {
      question: "Which of these is NOT a genuine source of Ethereum staking yield?",
      options: [
        "Newly issued ETH paid by the protocol",
        "Priority fees (tips) from users' transactions",
        "MEV payments for block-ordering rights",
        "Interest paid by the Ethereum Foundation from its treasury",
      ],
      answerIndex: 3,
      explanation:
        "Staking rewards come from issuance, tips, and MEV — payments flowing from the protocol's monetary policy and its users. No foundation or company is paying stakers.",
    },
    {
      question: "What is the main advantage of a liquid staking token like stETH?",
      options: [
        "It eliminates all staking risk",
        "It guarantees a fixed interest rate forever",
        "Your capital earns staking yield while remaining tradable and usable in DeFi",
        "It pays double the yield of solo staking",
      ],
      answerIndex: 2,
      explanation:
        "LSTs represent staked ETH plus accruing rewards while staying liquid — solving the lockup problem, in exchange for added smart-contract, operator, and depeg risk.",
    },
    {
      question: "What does restaking on EigenLayer involve?",
      options: [
        "Moving your stake to a different blockchain",
        "Using already-staked ETH to also secure additional services, accepting their slashing conditions for extra yield",
        "Unstaking and immediately staking again to compound rewards",
        "Insuring your validator against slashing",
      ],
      answerIndex: 1,
      explanation:
        "Restaking lets the same collateral underwrite extra services that pay for economic security — more yield, funded by real fees, but with stacked slashing conditions and systemic risk.",
    },
    {
      question: "Which pattern most strongly signals unsustainable, ponzi-style yield?",
      options: [
        "Yield that fluctuates with network activity",
        "Yield of a few percent paid in ETH",
        "Triple-digit yield paid in the project's own newly printed token, with no external payer identifiable",
        "Yield generated from borrowers paying interest on loans",
      ],
      answerIndex: 2,
      explanation:
        "When rewards are just freshly minted project tokens and no outside user is paying for anything, the 'yield' is dilution — sustained only by new deposits until the music stops.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Staking",
      url: "https://ethereum.org/en/staking/",
      note: "Official comparison of solo, pooled, and staking-as-a-service routes.",
    },
    {
      label: "Rocket Pool documentation",
      url: "https://docs.rocketpool.net",
      note: "The permissionless liquid staking protocol — node operation from under 32 ETH.",
    },
    {
      label: "Lido",
      url: "https://lido.fi",
      note: "The largest liquid staking protocol and home of stETH.",
    },
    {
      label: "EigenLayer documentation",
      url: "https://docs.eigenlayer.xyz",
      note: "Restaking from first principles, including the slashing model.",
    },
    {
      label: "beaconcha.in",
      url: "https://beaconcha.in",
      note: "Watch real validator rewards, penalties, and slashings on the live chain.",
    },
  ],
};
