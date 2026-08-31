import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "what-is-ethereum",
  title: "What Is Ethereum?",
  kana: "イーサリアム",
  tagline: "A world computer no one owns, running money that never sleeps.",
  category: "foundations",
  level: "initiate",
  readingMinutes: 9,
  glow: "cyan",
  intro: [
    "Somewhere between a computer, a country, and a public utility sits Ethereum: a single shared machine, replicated across tens of thousands of nodes on every continent, that anyone can use and no one can switch off.",
    "Bitcoin proved that money could exist without banks. Ethereum asked a bigger question: what if *agreements* could exist without institutions? Not just payments, but loans, exchanges, insurance, identity, art, organisations — all running as open code on neutral ground.",
  ],
  sections: [
    {
      heading: "The world computer",
      paragraphs: [
        "At its core, Ethereum is a **globally shared computer** — the Ethereum Virtual Machine (EVM). Every node in the network holds the same state and executes the same programs, so the network as a whole behaves like one machine whose memory everyone can audit and whose rules no single party can rewrite.",
        "Programs deployed to this machine are called **smart contracts**. Once deployed, a contract lives at an address, holds its own funds, and executes exactly as written — for anyone, forever, without asking permission. There is no admin hotline, no terms-of-service update, no regional lockout.",
        "This is the property people call **credible neutrality**. Ethereum doesn't know or care who you are. The same rules apply to a teenager in Lagos, a fund in Singapore, and a bot with no owner at all.",
      ],
    },
    {
      heading: "Ether: the fuel and the money",
      paragraphs: [
        "Every computation on the world computer costs **gas**, paid in Ethereum's native asset: **ether (ETH)**. Gas is the metering system that prices computation and keeps spam out — you pay for exactly the work the network does for you.",
        "But ETH is more than fuel. It is the collateral securing the network (staked by validators), the base trading pair of an entire on-chain economy, and — since the burn mechanism of EIP-1559 — an asset whose supply can actually *shrink* as network usage rises. ETH is simultaneously the oil, the bond, and the reserve currency of its own digital nation.",
      ],
    },
    {
      heading: "Who runs it?",
      paragraphs: [
        "No company runs Ethereum. The network is maintained by **validators** — hundreds of thousands of them — who each lock up 32 ETH as a security deposit and take turns proposing and attesting to blocks. Behave honestly and you earn yield; attack the chain and your stake is destroyed. Security through aligned incentives, not trust.",
        "The software itself is open source, developed by multiple independent teams in multiple languages, coordinated through public research forums and community calls. Upgrades happen only when node operators around the world voluntarily adopt them. It is less like a product roadmap and more like the governance of a protocol commons — messy, slow, transparent, and remarkably resilient.",
      ],
    },
    {
      heading: "Why it matters",
      paragraphs: [
        "The internet gave everyone a printing press. Ethereum gives everyone a **bank, a stock exchange, a notary, and a courtroom** — as neutral infrastructure, priced in cents, settled in minutes.",
        "For the 1.4 billion people without reliable banking, that's access. For citizens of high-inflation economies, it's an exit. For builders, it's a financial system with an open API and no gatekeeper. And for everyone else, it's an insurance policy: a parallel system whose rules are enforced by mathematics rather than by whoever happens to be in charge.",
        "You don't have to believe every promise made about crypto to see the signal here. A decade in, Ethereum settles trillions of dollars a year, secures hundreds of billions in value, and has never been hacked at the protocol layer or gone offline. The world computer is running. The question is what gets built on it next — and whether you'll understand it before everyone else does.",
      ],
    },
  ],
  keyTakeaways: [
    "Ethereum is a single shared computer replicated across tens of thousands of nodes — anyone can use it, no one controls it.",
    "Smart contracts are programs that hold funds and execute exactly as written, without intermediaries.",
    "ETH is the network's fuel (gas), its security collateral (staking), and the reserve asset of the on-chain economy.",
    "Validators stake ETH and are rewarded for honesty, slashed for attacks — security by incentive, not trust.",
    "Since launch in 2015, the protocol has never been hacked and the chain has never stopped.",
  ],
  quiz: [
    {
      question: "What is the Ethereum Virtual Machine (EVM)?",
      options: [
        "A cloud service operated by the Ethereum Foundation",
        "The shared execution environment every Ethereum node runs identically",
        "A hardware device required to hold ETH",
        "A programming language for smart contracts",
      ],
      answerIndex: 1,
      explanation:
        "The EVM is the shared computation engine: every node executes the same programs against the same state, making the whole network behave like one world computer.",
    },
    {
      question: "What does 'gas' pay for?",
      options: [
        "A monthly subscription to the network",
        "Electricity bills of the Ethereum Foundation",
        "The computational work your transaction asks the network to perform",
        "Insurance against smart-contract bugs",
      ],
      answerIndex: 2,
      explanation:
        "Gas meters computation. Every operation has a cost, so you pay exactly for the work the network does — and spam becomes economically irrational.",
    },
    {
      question: "How is Ethereum secured today?",
      options: [
        "By miners solving proof-of-work puzzles",
        "By the Ethereum Foundation's servers",
        "By validators who stake ETH and lose it if they attack the chain",
        "By government regulation",
      ],
      answerIndex: 2,
      explanation:
        "Since The Merge in 2022, proof-of-stake validators secure the chain. Honest work earns yield; provable attacks get stakes slashed.",
    },
    {
      question: "Which property is meant by 'credible neutrality'?",
      options: [
        "The protocol treats every user and application by the same rules",
        "Ethereum never changes its software",
        "Transaction fees are the same for everyone at all times",
        "Validators are politically neutral organisations",
      ],
      answerIndex: 0,
      explanation:
        "Credible neutrality means the base layer doesn't discriminate: the same code runs for anyone, anywhere, with no privileged actors.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — What is Ethereum?",
      url: "https://ethereum.org/en/what-is-ethereum/",
      note: "The canonical community introduction, maintained in dozens of languages.",
    },
    {
      label: "Ethereum Whitepaper (2014)",
      url: "https://ethereum.org/en/whitepaper/",
      note: "Vitalik Buterin's original vision — still remarkably readable.",
    },
    {
      label: "Etherscan",
      url: "https://etherscan.io",
      note: "Watch the world computer live: every block, transaction, and contract.",
    },
    {
      label: "Bankless",
      url: "https://www.bankless.com",
      note: "Podcast and newsletter tracking the frontier of the open-finance thesis.",
    },
    {
      label: "Week in Ethereum News",
      url: "https://weekinethereumnews.com",
      note: "Dense weekly digest of protocol development — the insider's changelog.",
    },
  ],
};
