import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "smart-contracts-evm",
  title: "Smart Contracts & the EVM",
  kana: "契約コード",
  tagline: "Agreements that enforce themselves — code with a bank account and no off switch.",
  category: "foundations",
  level: "operator",
  readingMinutes: 11,
  glow: "violet",
  intro: [
    "A traditional contract is a promise backed by courts: if the other side reneges, you sue. A **smart contract** is a promise backed by physics — well, by mathematics and economic consensus. The terms are written as code, deployed to Ethereum, and from that moment they execute exactly as written, for anyone, without lawyers, intermediaries, or the option of changing your mind.",
    "This one idea — programs that hold money and cannot be stopped — is the engine behind everything else on this site: decentralised exchanges, lending markets, stablecoins, DAOs, NFTs. It is also the source of Ethereum's sharpest dangers, because code that cannot be stopped includes code with bugs in it. This is the layer where the world computer gets real.",
  ],
  sections: [
    {
      heading: "Two kinds of account",
      paragraphs: [
        "Ethereum has exactly two types of citizen. **Externally owned accounts (EOAs)** are controlled by a private key — these are the wallets humans hold. **Contract accounts** are controlled by code: when a transaction arrives at a contract's address, the EVM runs the contract's program, which can update its storage, move its funds, and call other contracts in turn.",
        "The crucial symmetry is that both kinds of account are first-class. A contract has an address, holds ETH and tokens, and sends and receives value exactly like a person does. An exchange, a lending market, or an entire organisation can exist as nothing but a contract account — no company, no server, no owner. Just a program with a balance, waiting at its address.",
        "Most contracts are written in **Solidity**, a language that looks like JavaScript's stern financial cousin, then compiled to bytecode the **Ethereum Virtual Machine** executes. Every node runs the same bytecode against the same state and must reach the same result — determinism is what lets thousands of strangers agree on what a program did.",
      ],
    },
    {
      heading: "Money legos: the power of composability",
      paragraphs: [
        "Every contract on Ethereum lives in the same shared environment and can call any other contract, permissionlessly, within a single atomic transaction. Developers call this **composability**, or more affectionately, **money legos**: any protocol can snap onto any other, no partnership meetings, no API keys, no permission.",
        "Standards turbocharge this. **ERC-20** defines a common interface for fungible tokens — implement half a dozen functions and every wallet, exchange, and lending market on Ethereum instantly understands your asset. **ERC-721** does the same for non-fungible tokens, giving unique digital items a universal format. Standards are why a token launched this morning can be trading, collateralised, and indexed by nightfall.",
        "The compounding effect is hard to overstate. A new protocol doesn't start from zero; it starts from everything already deployed. Aggregators route through exchanges, vaults deposit into lending markets, structured products wrap all of the above. Innovation stacks — which is why DeFi went from nothing to a parallel financial system in a handful of years.",
      ],
    },
    {
      heading: "The DAO: the fall that taught everything",
      paragraphs: [
        "In 2016, a project called **The DAO** raised roughly $150 million in ETH — then the largest crowdfund in history — into a single smart contract meant to operate as an investor-directed venture fund. Weeks later, an attacker found a **reentrancy bug**: by having their contract call back into The DAO mid-withdrawal, before its balance updated, they drained about a third of the funds in an afternoon. The code did exactly what it said; it just didn't say what everyone thought.",
        "The crisis forced Ethereum's community to choose between its principles. Immutability said: the theft stands. Survival said: intervene. The community chose a **hard fork** that returned the funds — and the dissenting minority kept the original chain alive as Ethereum Classic. It remains the defining case study in what 'code is law' actually means, and where its limits lie.",
        "The legacy is a maturer culture. 'Code is law' softened into something more honest: code is the mechanism, but security is a practice. The reentrancy pattern that killed The DAO is now the first lesson in every Solidity course — and the reminder that on this machine, a bug is not a ticket in a tracker. It is an open vault door.",
      ],
    },
    {
      heading: "The adversarial environment: bugs, exploits, audits",
      paragraphs: [
        "Deploying a contract to Ethereum means publishing your code, with money inside, to the most adversarial environment ever built. Every attacker on Earth can read it, probe it, and simulate attacks against it at leisure. Billions of dollars have been lost to exploits over the years — reentrancy, oracle manipulation, flawed access control, compromised admin keys, bridge failures.",
        "The industry's response is defence in depth. Professional **audits** by specialist firms, public **bug bounties** paying white hats up to millions for critical finds, **formal verification** that mathematically proves properties of the code, battle-tested libraries like OpenZeppelin's, timelocks and monitoring on privileged functions. None of it is a guarantee — audited protocols have still been drained — but the survival rate of carefully engineered contracts has improved enormously.",
        "For a user, the practical heuristic is time-in-production times value-at-risk. A contract that has held billions through several market cycles has passed the only exam that matters, continuously, for years. A week-old fork promising double the yield has not. On Ethereum, boring and old is a security feature.",
      ],
    },
    {
      heading: "Account abstraction: wallets grow up",
      paragraphs: [
        "The EOA — one private key, total control, zero forgiveness — is the sharpest edge left in Ethereum's user experience. Lose the key, lose everything; sign one malicious transaction, lose everything. **Account abstraction** aims to retire that model by letting smart contracts serve as full wallets, so an account's security rules become programmable.",
        "**ERC-4337** delivered this without any change to the protocol itself, and newer upgrades have let even existing EOAs borrow smart-account powers. The unlocked features read like a list of everything normal people always wanted: social recovery instead of seed-phrase panic, spending limits, passkey and fingerprint signing, paying gas in stablecoins — or having an app sponsor it entirely, and bundling many steps into one click. It is the bridge between crypto's cryptographic bedrock and software that ordinary humans can safely use.",
      ],
    },
  ],
  keyTakeaways: [
    "Smart contracts are programs with their own address and funds that execute exactly as written — no intermediary can stop or alter them.",
    "Ethereum has two account types: EOAs controlled by private keys, and contract accounts controlled by code.",
    "Composability ('money legos') plus standards like ERC-20 and ERC-721 let any protocol build on any other, permissionlessly.",
    "The DAO hack of 2016 proved that immutable code with bugs is an open vault — and forged today's culture of audits, bounties, and defence in depth.",
    "Account abstraction (ERC-4337) turns wallets into programmable smart accounts: social recovery, spending limits, sponsored gas.",
    ],
  quiz: [
    {
      question: "What distinguishes a contract account from an externally owned account (EOA)?",
      options: [
        "Contract accounts cannot hold ETH",
        "A contract account is controlled by its code; an EOA is controlled by a private key",
        "EOAs are only available to verified businesses",
        "Contract accounts expire after a fixed number of transactions",
      ],
      answerIndex: 1,
      explanation:
        "Both account types hold funds and have addresses, but an EOA acts when its keyholder signs, while a contract account acts by running its immutable code when a transaction arrives.",
    },
    {
      question: "Why do standards like ERC-20 matter so much?",
      options: [
        "They are legal requirements enforced by regulators",
        "They make tokens immune to hacks",
        "They give every token a common interface, so all wallets and protocols can integrate any compliant token instantly",
        "They limit how many tokens can be created per year",
      ],
      answerIndex: 2,
      explanation:
        "A shared interface means infrastructure is written once and works for every compliant token — the foundation of composability across the whole ecosystem.",
    },
    {
      question: "What vulnerability drained The DAO in 2016?",
      options: [
        "A stolen administrator password",
        "A reentrancy bug that let an attacker repeatedly withdraw before the balance updated",
        "A 51% attack on Ethereum's miners",
        "A phishing email sent to token holders",
      ],
      answerIndex: 1,
      explanation:
        "The attacker's contract called back into The DAO mid-withdrawal, draining funds in a loop before the contract recorded the first withdrawal. The exploit led to the hard fork that split off Ethereum Classic.",
    },
    {
      question: "What does account abstraction (ERC-4337) enable?",
      options: [
        "Anonymous accounts exempt from gas fees forever",
        "Smart-contract wallets with programmable rules: social recovery, spending limits, sponsored gas",
        "Automatic conversion of all tokens to ETH",
        "Merging multiple blockchains into one account",
      ],
      answerIndex: 1,
      explanation:
        "Account abstraction replaces the all-or-nothing private key with programmable account logic, making wallets recoverable, safer, and far friendlier to ordinary users.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Smart contracts",
      url: "https://ethereum.org/en/smart-contracts/",
      note: "Plain-language introduction to self-executing agreements.",
    },
    {
      label: "Solidity documentation",
      url: "https://docs.soliditylang.org",
      note: "The official docs for Ethereum's main contract language.",
    },
    {
      label: "OpenZeppelin Contracts",
      url: "https://www.openzeppelin.com/solidity-contracts",
      note: "The battle-tested library most serious protocols build on.",
    },
    {
      label: "ethereum.org — ERC-4337 & account abstraction",
      url: "https://ethereum.org/en/roadmap/account-abstraction/",
      note: "How wallets are becoming programmable smart accounts.",
    },
    {
      label: "rekt.news",
      url: "https://rekt.news",
      note: "Darkly brilliant post-mortems of DeFi's biggest exploits — required reading on risk.",
    },
  ],
};
