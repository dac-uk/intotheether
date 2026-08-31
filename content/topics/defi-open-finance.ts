import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "defi-open-finance",
  title: "DeFi: Open Finance",
  kana: "分散型金融",
  tagline: "Wall Street rebuilt as open-source software — no tellers, no closing bell, no permission.",
  category: "defi",
  level: "operator",
  readingMinutes: 12,
  glow: "cyan",
  intro: [
    "Strip a bank down to its functions and you find a short list: hold deposits, make loans, exchange assets, move money. **Decentralised finance — DeFi** — is the project of rebuilding that list as smart contracts on Ethereum: open-source programs anyone can use, audit, or build on, running around the clock with no branch, no manager, and no application form.",
    "This is not a whitepaper fantasy. Tens of billions of dollars work inside these protocols today, executing swaps and loans every block. DeFi is also a frontier in the honest sense: exhilarating, genuinely useful, and littered with wreckage. This is the map — the machinery that works, and the traps that don't announce themselves.",
  ],
  sections: [
    {
      heading: "AMMs: the exchange with no one behind the counter",
      paragraphs: [
        "Traditional exchanges match buyers and sellers through an order book. **Uniswap**, DeFi's flagship exchange, threw the order book away. Instead, an **automated market maker (AMM)** holds a **liquidity pool** — reserves of two tokens — and quotes prices from a simple formula: the product of the reserves must stay constant. Buy ETH from the pool and ETH gets scarcer, so its price rises. No counterparty needed; you trade against the math.",
        "The radical part is who supplies the inventory. Anyone can deposit tokens into a pool and become a **liquidity provider**, earning a share of every trading fee that pool generates. Market making — historically a business for elite firms with colocated servers — became something a stranger with a wallet can do in thirty seconds.",
        "It comes with a subtle cost called **impermanent loss**. Because the pool mechanically sells whichever token is rising and buys whichever is falling, a liquidity provider can end up worth less than if they had simply held their tokens — the gap grows with how far prices diverge. Fees are the compensation; whether they cover the loss depends on the pool. Every would-be LP should understand this trade before depositing.",
      ],
    },
    {
      heading: "Lending: money markets without bankers",
      paragraphs: [
        "Protocols like **Aave** run autonomous money markets. Depositors supply assets into a shared pool and earn interest; borrowers draw from it by posting collateral worth **more** than they borrow. Interest rates aren't set by a committee — an algorithm moves them with utilisation, rising when the pool runs dry to attract deposits and ration borrowing.",
        "Overcollateralisation replaces credit checks. The protocol doesn't know your name, income, or history — it only knows your collateral, priced in real time. If its value falls near your debt, anyone may trigger a **liquidation**, repaying your loan in exchange for your collateral at a discount. Brutal, but it is why these markets survived crashes that vaporised centralised lenders making trust-based loans.",
        "Then there is DeFi's strangest primitive: the **flash loan**. Because a transaction is atomic — it fully succeeds or never happened — a contract can lend you millions with no collateral at all, provided you repay within the same transaction. Flash loans power legitimate arbitrage and refinancing, and they also hand attackers a free war chest for manipulating vulnerable protocols. Same tool, both edges.",
      ],
    },
    {
      heading: "Oracles: the bridge to reality",
      paragraphs: [
        "Smart contracts are sealed inside the blockchain — they cannot natively see the price of ETH, the weather, or anything else off-chain. **Oracles** carry that information in, and **Chainlink** is the dominant network: many independent nodes fetch data from many sources, aggregate it, and publish the result on-chain, so no single reporter can lie profitably.",
        "Oracles are DeFi's load-bearing wall. Every liquidation, every derivative settlement, every collateral check depends on a price feed being honest. Accordingly, oracle manipulation is a classic attack: nudge the price a protocol believes — often using a flash loan to distort a thin market it naively reads from — and drain it at fictitious prices. Robust protocols use aggregated, time-weighted feeds precisely to close this door.",
      ],
    },
    {
      heading: "Reading the terrain: TVL and what it tells you",
      paragraphs: [
        "The ecosystem's headline metric is **total value locked (TVL)** — the value of all assets deposited in a protocol's contracts. It is a rough proxy for trust: capital only stays where holders believe it is safe and productive. Dashboards like DefiLlama track TVL across thousands of protocols and dozens of chains, and watching it move teaches you where conviction actually lives.",
        "Treat the number with care. TVL swings with token prices, can be inflated by protocols counting their own token or by yield programmes renting temporary capital, and says nothing about code quality. It is a thermometer, not an audit. The durable signal is capital that stays through downturns — liquidity that has seen a crash and chosen to remain.",
      ],
    },
    {
      heading: "Risk, honestly",
      paragraphs: [
        "Every DeFi position carries **smart-contract risk**: the possibility that a bug lets someone drain the vault. Audits, bounties, and years in production shrink this risk but never delete it — protocols audited by top firms have still been exploited. Layer on oracle risk, governance risk (who holds the admin keys?), and the depeg risk of any stablecoin in the mix. In DeFi you are your own risk department, because no deposit insurance is coming.",
        "And then there is plain predation. **Rug pulls** — projects engineered so insiders can seize the funds — dress themselves in professional websites and absurd yields. The tells recur: anonymous teams, unaudited forks, token supply concentrated in a few wallets, returns that make no economic sense. The oldest rule survives translation to the blockchain: if you can't see where the yield comes from, you are the yield.",
        "None of this cancels the promise. Open protocols settled trillions in volume through crises that shattered supposedly safer intermediaries — and did it transparently, a property traditional finance cannot copy without becoming DeFi. An open, auditable, permissionless financial layer for the internet is genuinely new under the sun. It simply demands what frontiers always demand: that you understand the machinery before trusting it with what matters.",
      ],
    },
  ],
  keyTakeaways: [
    "DeFi rebuilds core financial services — exchange, lending, payments — as open smart contracts with no intermediaries or gatekeepers.",
    "AMMs like Uniswap price trades with a formula against liquidity pools; anyone can supply liquidity and earn fees, but impermanent loss is the hidden cost.",
    "Lending protocols like Aave replace credit checks with overcollateralisation, algorithmic rates, and automatic liquidations.",
    "Oracles such as Chainlink feed real-world prices on-chain — essential infrastructure and a favourite attack surface.",
    "TVL measures deposited capital, not safety; smart-contract risk, rug pulls, and depegs are permanent features of the terrain.",
  ],
  quiz: [
    {
      question: "How does an automated market maker (AMM) like Uniswap price trades?",
      options: [
        "A team of traders updates prices during market hours",
        "It copies prices from the New York Stock Exchange",
        "A formula over the pool's token reserves — each trade shifts the reserves and therefore the price",
        "Buyers and sellers are matched through a traditional order book",
      ],
      answerIndex: 2,
      explanation:
        "AMMs replace order books with liquidity pools and a pricing formula (classically, constant product). Trades change the reserve ratio, which changes the quoted price — no counterparty required.",
    },
    {
      question: "What is impermanent loss?",
      options: [
        "The gas fees paid when withdrawing from a pool",
        "An LP's shortfall versus simply holding, caused by the pool selling winners and buying losers as prices diverge",
        "Losses from a smart-contract hack",
        "A temporary freeze on withdrawals during volatility",
      ],
      answerIndex: 1,
      explanation:
        "A pool mechanically rebalances against price moves, so a liquidity provider can end up worth less than a passive holder. Trading fees exist to compensate — sometimes they do, sometimes they don't.",
    },
    {
      question: "Why can a flash loan be taken with zero collateral?",
      options: [
        "The borrower's identity is verified off-chain first",
        "Flash loans are insured by the protocol's treasury",
        "They are limited to tiny amounts",
        "The loan must be repaid within the same atomic transaction, or the whole transaction reverts as if it never happened",
      ],
      answerIndex: 3,
      explanation:
        "Atomicity is the collateral: if repayment isn't in the same transaction, the entire transaction — including the loan — is undone. The lender cannot lose, so no deposit is needed.",
    },
    {
      question: "What does a protocol's TVL actually measure?",
      options: [
        "The value of assets deposited in its smart contracts",
        "Its annual profit",
        "The number of users who have passed identity checks",
        "How thoroughly its code has been audited",
      ],
      answerIndex: 0,
      explanation:
        "TVL is deposited capital — a rough proxy for trust and scale, but it moves with token prices and says nothing directly about security or code quality.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Decentralized finance",
      url: "https://ethereum.org/en/defi/",
      note: "The community's grounded overview of what DeFi is and isn't.",
    },
    {
      label: "Uniswap documentation",
      url: "https://docs.uniswap.org",
      note: "How the flagship AMM works, from concepts to contract internals.",
    },
    {
      label: "Aave documentation",
      url: "https://aave.com/docs",
      note: "The mechanics of decentralised money markets and liquidations.",
    },
    {
      label: "DefiLlama",
      url: "https://defillama.com",
      note: "The neutral dashboard for TVL across every protocol and chain.",
    },
    {
      label: "Chainlink — Education Hub",
      url: "https://chain.link/education-hub",
      note: "Clear explainers on oracles and the data layer under DeFi.",
    },
  ],
};
