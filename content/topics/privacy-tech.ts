import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "privacy-tech",
  title: "Privacy on a Public Chain",
  kana: "秘匿技術",
  tagline: "Everything you do on Ethereum is public forever. Here's the fight to change that — and why it matters.",
  category: "culture",
  level: "operator",
  readingMinutes: 11,
  glow: "violet",
  intro: [
    "Ethereum's superpower is also its most underrated problem: **radical transparency**. Every transaction, every balance, every contract interaction — visible to anyone, forever, indexed and searchable. Imagine if your bank statement were a public webpage: your salary, your rent, your donations, your medical payments, everything you've ever bought, linked in one permanent ledger. That is the default experience of using Ethereum with a known address.",
    "The tension this creates is one of the great unresolved storylines of the ecosystem. On one side, cryptographers building tools that restore financial privacy on a transparent chain. On the other, regulators who see those same tools laundering the proceeds of hacks. In between: a landmark sanctions fight, criminal trials on two continents, and a genuinely hard question — can you have privacy for the honest without cover for the criminal? This is the history, the mechanics, and the debate.",
  ],
  sections: [
    {
      heading: "The glass ledger",
      paragraphs: [
        "Ethereum addresses are **pseudonymous**, not anonymous — a distinction that erodes fast in practice. The moment an address touches the real world (an exchange with identity checks, an ENS name, a payment to someone who knows you), it can be linked to a person. And because history is permanent, one link retroactively exposes everything that address has ever done and much of what it will do.",
        "An entire **chain-analysis industry** — Chainalysis, Elliptic, Arkham and others — has industrialised this. Clustering heuristics group addresses controlled by the same entity; exchange records anchor clusters to identities; timing and amount correlations trace funds through hops. This is genuinely useful against hackers and fraud, and law enforcement has recovered billions with it. But the same lens works on everyone: researchers routinely deanonymise 'anonymous' wallets, and on-chain stalking of known figures is a spectator sport.",
        "The consequences are concrete, not hypothetical. A DAO paying salaries on-chain reveals every contributor's compensation to their colleagues. A merchant's revenue is public to competitors. A donation to a controversial cause is permanently attributable. And people holding visible wealth have been targeted for phishing, extortion, and physical attacks. Whatever your view on privacy tools, the *need* is not exotic — it's payroll, medicine, business, and safety.",
      ],
    },
    {
      heading: "Tornado Cash: the technology and the trials",
      paragraphs: [
        "The first widely used answer was the **mixer**. Tornado Cash, launched in 2019, let users deposit fixed amounts of ETH into a shared pool and later withdraw to a fresh address, using a **zero-knowledge proof** to show they made *a* deposit without revealing *which* one. The larger the pool of users, the larger the crowd each withdrawal hides in. Crucially, its core contracts were immutable — no operator, no off switch.",
        "In August 2022, the US Treasury's OFAC **sanctioned Tornado Cash**, citing its use by North Korea's Lazarus Group to launder hundreds of millions from protocol hacks; estimates put total illicit funds through the mixer in the billions, alongside substantial legitimate use. Interacting with the contracts became legally radioactive for US persons overnight. Developers faced prosecution: Alexey Pertsev was convicted of money laundering in the Netherlands in 2024, and Roman Storm's 2025 US trial ended with a conviction on one count of operating an unlicensed money-transmitting business and a hung jury on the more serious charges.",
        "Then the legal tide partly turned. In late 2024, the US Fifth Circuit ruled in *Van Loon v. Treasury* that immutable smart contracts are not 'property' of any foreign national and so fell outside OFAC's sanctioning authority as written; by March 2025 Treasury had removed Tornado Cash from the sanctions list. The episode settled little philosophically — can code be a criminal enterprise? are its authors liable for its users? — but it drew the first real legal contours around those questions, and both the privacy and enforcement communities are still arguing over where the lines landed.",
      ],
    },
    {
      heading: "The new generation: proving innocence",
      paragraphs: [
        "Post-Tornado privacy engineering has converged on a sharper idea: privacy *with* accountability. The **privacy pools** concept — sketched in a 2023 paper co-authored by Vitalik Buterin — lets a user prove in zero knowledge that their withdrawal does **not** derive from a set of known-bad deposits (hack proceeds, sanctioned funds), without revealing which deposit is actually theirs. Honest users get a crowd to hide in; stolen funds get excluded from that crowd; nobody discloses their history to anyone.",
        "Live systems explore variations on the theme. **Railgun** runs a shielded pool as a smart-contract system on Ethereum itself, using ZK proofs for private balances and transfers, with screening mechanisms designed to keep flagged funds out. **Aztec** takes the deeper route: an entire privacy-first layer 2 where encrypted state is the default and programs can mix private and public execution. Meanwhile **stealth addresses** (standardised via ERC-5564) solve a narrower problem elegantly — letting someone pay you at a fresh, unlinkable address every time, so a public payment link doesn't expose your whole financial life.",
        "None of this is mainstream yet. The pools are still small (privacy loves company — anonymity sets are the whole game), the UX is rough, and builders operate under visible legal chill: the lesson many took from the trials is that *how* a privacy system handles provably stolen funds is now a design requirement, not an afterthought.",
      ],
    },
    {
      heading: "The cypherpunk through-line",
      paragraphs: [
        "None of this debate is new. Ethereum descends directly from the **cypherpunk movement** of the 1990s, whose manifesto opened: 'Privacy is necessary for an open society in the electronic age.' The cypherpunks fought the US government's attempt to classify strong cryptography as a munition — and won; the encryption in your browser and messages exists because that argument was settled in freedom's favour. To this lineage, financial privacy isn't a loophole; it's the unfinished half of the project.",
        "The counterargument deserves stating honestly: money is not speech in the eyes of most legal systems, laundering at scale funds real harm — weapons programs, ransomware, trafficking — and mixers demonstrably served those flows. Regulators are not wrong that transparency has made crypto crime uniquely traceable, and some in law enforcement regard the public ledger as the best forensic tool they've ever had. The policy question is whether the answer to criminal use is banning the tool, policing the use, or building tools where honest use and criminal use can be cryptographically separated.",
        "That third path — privacy pools, screened shielded systems, selective disclosure where *you* choose what to prove and to whom — is where the intellectual energy now sits. Cash offers everyday privacy and always has; the open question is whether digital money on a public chain can offer the same without inheriting either total surveillance or total opacity. It is one of the few debates in crypto where the stakes are genuinely civilisational, and it is nowhere near over.",
      ],
    },
  ],
  keyTakeaways: [
    "Ethereum is pseudonymous, not anonymous: one real-world link to an address can retroactively expose its entire permanent history, and chain-analysis firms have industrialised making those links.",
    "Financial privacy is a mainstream need — payroll, medical payments, business confidentiality, personal safety — not merely a criminal one.",
    "Tornado Cash used zero-knowledge proofs to break deposit-withdrawal links; its 2022 OFAC sanctioning, developer prosecutions, court reversal, and 2025 delisting form the defining legal battle over privacy code.",
    "The new generation aims at privacy with accountability: privacy pools prove funds aren't from known-bad sources without revealing history, while Railgun, Aztec, and stealth addresses (ERC-5564) attack the problem from different layers.",
    "The debate is the cypherpunk argument continued: whether honest privacy and criminal cover can be cryptographically separated, rather than choosing between surveillance and opacity.",
  ],
  quiz: [
    {
      question: "Why is Ethereum described as 'pseudonymous' rather than 'anonymous'?",
      options: [
        "Because all users must register their identity with the protocol",
        "Because addresses aren't named, but permanent public history lets them be linked to real identities",
        "Because transactions are encrypted but balances are public",
        "Because only validators can see transaction contents",
      ],
      answerIndex: 1,
      explanation:
        "Addresses carry no name, but every action is public forever — so a single real-world link (an exchange account, an ENS name, a known payment) can expose an address's entire history.",
    },
    {
      question: "How did Tornado Cash break the link between deposits and withdrawals?",
      options: [
        "By deleting transaction records from the blockchain",
        "By routing funds through offshore bank accounts",
        "With zero-knowledge proofs showing a withdrawal corresponds to some deposit, without revealing which one",
        "By having a trusted operator manually shuffle funds",
      ],
      answerIndex: 2,
      explanation:
        "Users deposited fixed amounts into a shared pool and later proved in zero knowledge that they had made a valid deposit — hiding in the crowd of all depositors. Its immutable contracts had no operator at all.",
    },
    {
      question: "What is the core idea of the 'privacy pools' concept?",
      options: [
        "Proving your funds do not come from known-bad sources, without revealing your actual transaction history",
        "Pooling funds so that regulators can inspect them collectively",
        "Encrypting the entire Ethereum blockchain",
        "Allowing only verified institutions to transact privately",
      ],
      answerIndex: 0,
      explanation:
        "Privacy pools aim at privacy with accountability: a zero-knowledge proof that your withdrawal isn't derived from flagged deposits gives honest users anonymity while excluding stolen funds from the crowd.",
    },
    {
      question: "What was the significance of the Fifth Circuit's ruling in Van Loon v. Treasury?",
      options: [
        "It made all cryptocurrency mixing legal in the United States",
        "It found that immutable smart contracts weren't 'property' OFAC could sanction, leading to Tornado Cash's delisting",
        "It convicted Tornado Cash's developers of money laundering",
        "It required all Ethereum validators to censor sanctioned addresses",
      ],
      answerIndex: 1,
      explanation:
        "The court held that autonomous, immutable code fell outside the sanctions statute as written, and Treasury delisted Tornado Cash in 2025. Developer prosecutions proceeded separately — the ruling settled a statutory question, not the whole debate.",
    },
  ],
  explore: [
    {
      label: "An incomplete guide to stealth addresses — Vitalik Buterin",
      url: "https://vitalik.eth.limo/general/2023/01/20/stealth.html",
      note: "How to receive payments at fresh, unlinkable addresses — the mechanics behind ERC-5564.",
    },
    {
      label: "Railgun",
      url: "https://railgun.org",
      note: "A live ZK shielded-pool system on Ethereum, built around keeping flagged funds out.",
    },
    {
      label: "Aztec Network",
      url: "https://aztec.network",
      note: "The privacy-first layer 2: encrypted state by default, mixing private and public execution.",
    },
    {
      label: "Coin Center",
      url: "https://www.coincenter.org",
      note: "The policy research group that led the legal challenge to the Tornado Cash sanctions.",
    },
    {
      label: "A Cypherpunk's Manifesto (1993)",
      url: "https://www.activism.net/cypherpunk/manifesto.html",
      note: "Eric Hughes's founding text — 'privacy is necessary for an open society in the electronic age.'",
    },
  ],
};
