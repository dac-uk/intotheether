import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "ether-the-asset",
  title: "Ether: The Asset",
  kana: "エーテル",
  tagline: "The oil, the bond, and the reserve currency of a digital nation.",
  category: "foundations",
  level: "initiate",
  readingMinutes: 10,
  glow: "magenta",
  intro: [
    "Every economy runs on a base asset. Nations have their currencies; the internet's first open economy has ether. ETH is the only money the Ethereum protocol itself understands — the asset you must hold to compute, the collateral you must post to secure the chain, the unit everything else is ultimately priced against.",
    "That triple role makes ETH unlike almost anything in traditional finance. It is a commodity you burn, a bond that pays yield, and a currency that denominates an on-chain economy worth hundreds of billions of dollars. Understanding ETH the asset — not just ETH the ticker — is the fastest way to understand what Ethereum actually is.",
  ],
  sections: [
    {
      heading: "Fuel: the commodity you burn",
      paragraphs: [
        "Every transaction on Ethereum consumes **gas**, and gas can only be paid in ETH. Send a payment, swap a token, mint an NFT, deploy a contract — each operation has a metered cost, and the meter only accepts one currency. This gives ETH something most assets lack: **non-speculative demand**. As long as people want to use the world computer, they must acquire its fuel.",
        "Since **EIP-1559** went live in 2021, the base portion of every gas fee isn't paid to anyone — it is **burned**, destroyed forever. When the network is busy, ETH is removed from circulation faster than new ETH is issued to validators, and total supply actually falls. Supporters call this dynamic **ultrasound money**: an asset whose supply can shrink with usage, in deliberate contrast to Bitcoin's fixed-but-always-growing-toward-21-million schedule.",
        "The honest caveat: the burn tracks network activity. In quiet periods — especially as cheap Layer 2s absorb transactions that once paid mainnet fees — issuance can outpace the burn and supply drifts gently upward. ETH's monetary policy is best described as **minimum viable issuance plus usage-driven burn**, hovering near zero net inflation, not a guaranteed deflationary ratchet.",
      ],
    },
    {
      heading: "Bond: the collateral that secures the chain",
      paragraphs: [
        "Ethereum's security budget is denominated in ETH. Validators lock up stakes of 32 ETH each as collateral, and in exchange for honest work — proposing blocks, attesting to the chain — they earn a yield paid in newly issued ETH plus a share of fees. Tens of millions of ETH, a substantial fraction of all that exists, sits staked this way.",
        "This makes staked ETH behave like a **sovereign bond of the on-chain economy**: a native, protocol-guaranteed yield earned for underwriting the system's security. But unlike a government bond, the guarantee is enforced by code — and misbehaviour is punished by **slashing**, the destruction of part of your stake. The yield is real, but it is compensation for real work and real risk, not free money.",
        "Compare the issuance philosophy with Bitcoin's. Bitcoin pays for security with a fixed, halving-driven subsidy that must eventually be replaced entirely by fees — an open long-term question. Ethereum issues only what is needed to attract sufficient stake, and claws supply back through the burn. Two coherent monetary designs, betting on different futures.",
      ],
    },
    {
      heading: "Money: the reserve asset of the on-chain economy",
      paragraphs: [
        "Inside DeFi, ETH plays the role dollars and Treasuries play in traditional markets: the **pristine collateral** everything else is built on. It backs loans on lending markets, anchors trading pairs on exchanges, collateralises stablecoins like DAI, and serves as the default denominator of on-chain value. When protocols need collateral that can't be frozen, censored, or issued at will by a third party, ETH is the asset they reach for.",
        "This is a network effect that compounds quietly. Every new application that accepts ETH as collateral deepens its moneyness; every derivative built on staked ETH extends it. No committee decided ETH would be the reserve asset of open finance — thousands of independent protocols simply converged on it, because it is the one asset native to the settlement layer itself.",
      ],
    },
    {
      heading: "Wall Street logs on",
      paragraphs: [
        "In 2024, US regulators approved **spot ETH exchange-traded funds**, letting pension funds, advisors, and ordinary brokerage accounts hold ETH exposure through the same rails as any stock. Institutional adoption has broadened since: corporate treasuries, asset managers building tokenised funds on Ethereum itself, and banks settling instruments on the chain they once dismissed.",
        "The institutional story matters less for the price action and more for what it signals: ETH is being slowly reclassified — from speculative curiosity to **digital commodity and productive asset**, something closer to digital oil with a coupon. The asset that powers the settlement layer of tokenised finance becomes, almost by definition, part of the portfolio of anyone exposed to that future.",
      ],
    },
    {
      heading: "Holding ETH: the honest version",
      paragraphs: [
        "None of this makes ETH safe. It remains a **volatile asset** — drawdowns of 50% or more have happened repeatedly across its history and will likely happen again. Its value rests on a thesis: that open, neutral settlement infrastructure becomes more valuable over time, and that ETH captures a meaningful share of that value. The thesis could underdeliver, or take a decade longer than its holders expect.",
        "The rational frame is neither maximalism nor dismissal. ETH is a claim on the future of an open financial system — with genuine mechanisms behind it (burn, staking yield, collateral demand) and genuine risks around it (competition, regulation, technological change). Size any position so a brutal drawdown is survivable, understand what you own and why, and let the volatility be the price of admission rather than a source of panic.",
      ],
    },
  ],
  keyTakeaways: [
    "ETH has three roles at once: fuel for computation (gas), collateral securing the network (staking), and the reserve asset of on-chain finance.",
    "EIP-1559 burns the base fee of every transaction, so heavy network usage can shrink ETH's total supply — the 'ultrasound money' thesis.",
    "Ethereum issues only the minimum ETH needed to attract validator stake, unlike Bitcoin's fixed halving schedule.",
    "Spot ETFs and tokenised funds have pulled ETH into institutional portfolios as a productive digital commodity.",
    "ETH remains highly volatile — its value is a thesis about the future of open finance, not a guarantee.",
  ],
  quiz: [
    {
      question: "What happens to the base fee of every Ethereum transaction since EIP-1559?",
      options: [
        "It is paid to the validator who includes the transaction",
        "It is burned — permanently removed from the ETH supply",
        "It is sent to the Ethereum Foundation treasury",
        "It is refunded if the transaction succeeds",
      ],
      answerIndex: 1,
      explanation:
        "EIP-1559 splits fees into a burned base fee and an optional tip. The burn ties ETH's supply to network usage — busy periods can make ETH deflationary.",
    },
    {
      question: "Why does ETH have demand beyond speculation?",
      options: [
        "Holders receive dividends from the Ethereum Foundation",
        "Governments require ETH for tax payments",
        "Using Ethereum at all requires ETH to pay gas, and securing it requires ETH as stake",
        "ETH is legally classified as a currency in most countries",
      ],
      answerIndex: 2,
      explanation:
        "Gas can only be paid in ETH and validator collateral can only be posted in ETH, so anyone using or securing the network must acquire it — structural demand independent of price speculation.",
    },
    {
      question: "How does Ethereum's issuance philosophy differ from Bitcoin's?",
      options: [
        "Ethereum has a hard cap of 21 million coins, Bitcoin does not",
        "Ethereum issues the minimum needed to secure the chain and burns fees; Bitcoin follows a fixed halving schedule",
        "Ethereum's supply is set by a vote of large holders each year",
        "Bitcoin burns transaction fees while Ethereum pays them all to validators",
      ],
      answerIndex: 1,
      explanation:
        "Ethereum targets 'minimum viable issuance' — just enough to attract stake — while EIP-1559 burns fees against that issuance. Bitcoin's supply follows a predetermined halving curve regardless of usage.",
    },
    {
      question: "What role does ETH play inside DeFi protocols?",
      options: [
        "It is banned as collateral because of its volatility",
        "It serves mainly as a governance token for voting",
        "It acts as pristine collateral and the base trading asset — the on-chain equivalent of a reserve currency",
        "It is only used to pay protocol developers",
      ],
      answerIndex: 2,
      explanation:
        "ETH is the default collateral for loans and stablecoins and the anchor of trading pairs — the one asset native to the settlement layer, with no issuer who can freeze or inflate it.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — What is ether?",
      url: "https://ethereum.org/en/eth/",
      note: "The community's plain-language explanation of ETH and its roles.",
    },
    {
      label: "ultrasound.money",
      url: "https://ultrasound.money",
      note: "Live dashboard of ETH issuance versus burn — watch the supply curve in real time.",
    },
    {
      label: "ethereum.org — Gas and fees",
      url: "https://ethereum.org/en/developers/docs/gas/",
      note: "How gas metering and EIP-1559 fee mechanics actually work.",
    },
    {
      label: "Etherscan",
      url: "https://etherscan.io",
      note: "Explore ETH transfers, the burn, and staking flows on the live chain.",
    },
    {
      label: "Bankless",
      url: "https://www.bankless.com",
      note: "The podcast that popularised the 'ETH as internet bond' framing.",
    },
  ],
};
