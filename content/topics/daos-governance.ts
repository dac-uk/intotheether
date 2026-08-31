import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "daos-governance",
  title: "DAOs & Digital Governance",
  kana: "自律組織",
  tagline: "Organisations with no headquarters, no CEO, and a treasury anyone can audit.",
  category: "culture",
  level: "operator",
  readingMinutes: 11,
  glow: "cyan",
  intro: [
    "Every organisation you've ever dealt with — company, charity, government — is ultimately a stack of agreements: who decides, who pays, who owns what. Those agreements live in legal documents and are enforced by courts, which means they work brilliantly inside strong jurisdictions and badly across borders, at internet speed, or among strangers. A **DAO** — decentralised autonomous organisation — asks: what if the agreements were code instead?",
    "In a DAO, the treasury is a smart contract, the rules are public, membership is a token, and decisions execute automatically when votes pass. Thousands of them now exist, collectively governing billions of dollars — some running critical financial infrastructure, some funding public goods, one famously trying to buy the US Constitution. The experiment is messy, the flaws are real, and it is still one of the most interesting questions in the ecosystem: what does human cooperation look like when it's internet-native?",
  ],
  sections: [
    {
      heading: "Organisations as code",
      paragraphs: [
        "Strip an organisation to its skeleton and you find a treasury, a membership roster, and a decision process. A DAO implements all three on-chain. The **treasury** is a multisig or governance contract — every inflow and outflow visible to the world in real time, an audit that never sleeps. **Membership** is typically a governance token or NFT, transferable and global by default. **Decisions** are proposals: if the vote passes, the action — pay this grant, change this parameter, upgrade this contract — can execute automatically, with no board meeting and no bank transfer to chase.",
        "The word 'autonomous' oversells it — humans still write proposals, argue in forums, and do the actual work. What's genuinely new is **trust-minimised coordination at global scale**: ten thousand strangers across ninety countries can pool capital and direct it together without incorporating anywhere, without knowing each other's legal names, and without any one member being able to run off with the funds. That combination simply did not exist before.",
        "It has a prehistory worth remembering: **The DAO** of 2016, a giant crowd-funded venture fund that was drained through a code flaw within weeks and split Ethereum itself over the rescue. The lesson — code is law until the code is wrong — permanently shaped how DAOs handle audits, timelocks, and upgrade paths.",
      ],
    },
    {
      heading: "Token voting and its discontents",
      paragraphs: [
        "The dominant model is **token voting**: one token, one vote. It's simple, Sybil-resistant — you can't cheat by making a thousand accounts, because votes cost tokens — and it roughly aligns power with economic stake. It also imports plutocracy by design. **Whales** — exchanges, funds, early insiders — can carry votes single-handedly, and a governance token market means influence is literally for sale.",
        "The second disease is **apathy**. Turnout in many DAOs is chronically low; most holders never vote, and reading every proposal in a busy DAO is a part-time job. The ecosystem's answer is **delegation** — hand your voting power to a delegate whose judgement you trust, revocable at any time — creating a cadre of semi-professional governance participants, tracked on platforms like Tally. It helps, though it rhymes suspiciously with the representative systems DAOs hoped to transcend.",
        "The toolkit keeps evolving to compensate: off-chain **Snapshot** votes for cheap signalling, **timelocks** so a hostile proposal can't execute before people react, quorum thresholds, vote-escrow systems that weight long-term lockers over mercenaries, and security councils for emergencies. Governance design has become a genuine engineering discipline — with attacks, most famously the hostile takeover of Build Finance's treasury via bought votes, as its crash-test data.",
      ],
    },
    {
      heading: "The notable experiments",
      paragraphs: [
        "**MakerDAO** — now rebranded **Sky** — is the elder statesman: since 2017 its token holders have governed DAI, a decentralised stablecoin, setting collateral types, risk parameters, and interest rates by vote. It has weathered crashes that killed centralised competitors, and its governance now steers billions — including, in a poetic turn, allocations into tokenised US treasuries.",
        "**Uniswap's** DAO sits atop the largest decentralised exchange, controlling one of the biggest treasuries in the space and, through years of debate over the 'fee switch', wrestling publicly with the hardest question in protocol governance: when does infrastructure start paying its owners? **Gitcoin** points the other direction — a DAO whose purpose is funding open-source public goods, having directed tens of millions of dollars to the software commons.",
        "And then there was **ConstitutionDAO**, November 2021: thousands of strangers raised roughly $47 million in ETH in under a week to bid on a first printing of the US Constitution at Sotheby's. They lost — outbid by a billionaire — and the DAO refunded and dissolved. As governance it was chaos; as a cultural moment it was lightning. It demonstrated, live on the internet, that flash-mob capital formation at auction-house scale was now a thing ordinary people could do in days.",
      ],
    },
    {
      heading: "Meeting the legal world",
      paragraphs: [
        "A DAO with no legal existence has problems code can't fix: it can't sign a lease, hire staff cleanly, or pay taxes — and in the worst case, courts may treat it as a general partnership, leaving every member personally liable for the whole. The famous test case involved bZx/Ooki DAO, where US regulators successfully argued the DAO itself — and by extension its voters — could be held liable.",
        "The response is the **legal wrapper**: real-world entities fitted around on-chain organisations. Wyoming pioneered a DAO LLC statute in 2021 and later added a decentralised association form; the Marshall Islands built DAO recognition into national law; foundations in Switzerland and the Cayman Islands shelter many of the largest protocols. None is perfect, and the mapping between token votes and legal authority is still awkward everywhere — but the direction is clear: the legal system is slowly growing sockets for this new plug.",
        "It's a genuinely strange convergence. DAOs began as an attempt to route around legal institutions; the mature ones now negotiate with them. The likely equilibrium isn't code replacing law but a layered system — code for the treasury and the voting, law for the interfaces with the physical world.",
      ],
    },
    {
      heading: "Quadratic dreams and what comes next",
      paragraphs: [
        "The most elegant idea to come out of DAO-land may be **quadratic funding**: a way of allocating matching funds where the number of contributors matters more than the size of contributions. A grant backed by a thousand people giving $1 each receives dramatically more matching than one backed by a single $1,000 donor — mathematically favouring broad support over deep pockets. Gitcoin has run this experiment for years across many funding rounds, arguably the most sustained test of a new public-goods mechanism anywhere. Its known weakness — collusion and fake identities — is one of the forces driving on-chain identity and **proof-of-personhood** research.",
        "Zoom out and DAOs look less like better companies and more like a new institutional species finding its niches: protocol governance, investment clubs, media collectives, science funding (DeSci), city experiments, flash-mob bids on national artefacts. Most will fail; most companies fail too. The ones that work are quietly accumulating a decade of open-source institutional design — constitutions, delegate systems, funding mechanisms — that anyone can fork.",
        "The honest framing: DAOs today are roughly where companies were before limited liability was standardised — powerful, awkward, occasionally catastrophic, obviously unfinished. But the primitive underneath is permanent. Strangers on the internet can now form a treasury, govern it transparently, and act as one — without asking anyone. What gets built with that capability is one of the genuinely open questions of the next decade.",
      ],
    },
  ],
  keyTakeaways: [
    "A DAO puts an organisation's skeleton — treasury, membership, decisions — into smart contracts, enabling global, trust-minimised coordination.",
    "Token voting is simple and Sybil-resistant but skews plutocratic; whales, low turnout, and vote-buying are its chronic diseases, with delegation and timelocks as partial fixes.",
    "MakerDAO/Sky, Uniswap, and Gitcoin show the range — from governing critical financial infrastructure to funding public goods.",
    "ConstitutionDAO raised ~$47M from strangers in days and lost the auction — a governance mess but a landmark of internet-native capital formation.",
    "Legal wrappers (Wyoming DAO LLCs, Marshall Islands, foundations) are giving DAOs real-world standing; quadratic funding hints at fairer allocation mechanisms.",
  ],
  quiz: [
    {
      question: "What is genuinely new about a DAO compared to a traditional organisation?",
      options: [
        "It has no human members, only algorithms",
        "Strangers worldwide can pool and govern a treasury without incorporating, without legal names, and without trusting any single member",
        "Its decisions are legally binding in every country",
        "It cannot ever be hacked or mismanaged",
      ],
      answerIndex: 1,
      explanation:
        "Humans still do the work and the arguing — the novelty is trust-minimised coordination at global scale: a transparent on-chain treasury that no individual member can abscond with, governed by token-holder vote.",
    },
    {
      question: "Which is a well-documented flaw of one-token-one-vote governance?",
      options: [
        "Votes are secret, so results can't be verified",
        "Tokens expire after each vote, forcing constant repurchase",
        "Whales can dominate outcomes and influence is effectively for sale",
        "It requires every member to vote on every proposal by law",
      ],
      answerIndex: 2,
      explanation:
        "Token voting aligns power with economic stake — which means large holders can carry votes alone, and because governance tokens trade on open markets, voting power can simply be bought. Add chronic voter apathy and plutocracy is the default failure mode.",
    },
    {
      question: "What made ConstitutionDAO culturally significant despite losing the auction?",
      options: [
        "It proved DAOs can outbid any traditional buyer",
        "It successfully bought and fractionalised the US Constitution",
        "It became the first DAO recognised as a US nonprofit",
        "It showed thousands of strangers could form ~$47M of coordinated capital in under a week",
      ],
      answerIndex: 3,
      explanation:
        "ConstitutionDAO was outbid at Sotheby's and dissolved with refunds. But raising roughly $47M in ETH from thousands of small contributors in days demonstrated flash-mob capital formation at a scale and speed no traditional structure could match.",
    },
    {
      question: "How does quadratic funding differ from simple matching donations?",
      options: [
        "The number of distinct contributors matters more than the amounts, favouring broad support over deep pockets",
        "It matches only the single largest donation to each project",
        "It squares every donation, so rich donors get more influence",
        "It distributes funds equally to every registered project",
      ],
      answerIndex: 0,
      explanation:
        "Quadratic funding weights breadth of support: many small donors attract far more matching than one large donor giving the same total. Its weakness — fake identities colluding to look like a crowd — is driving proof-of-personhood research.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — DAOs",
      url: "https://ethereum.org/en/dao/",
      note: "Plain-language introduction to what DAOs are and how they work.",
    },
    {
      label: "Snapshot",
      url: "https://snapshot.org",
      note: "The off-chain voting hub where thousands of DAOs signal and decide.",
    },
    {
      label: "Tally",
      url: "https://www.tally.xyz",
      note: "On-chain governance dashboard — live proposals, delegates, and treasuries.",
    },
    {
      label: "Gitcoin",
      url: "https://www.gitcoin.co",
      note: "Quadratic funding in production — public-goods rounds you can join.",
    },
    {
      label: "DeepDAO",
      url: "https://deepdao.io",
      note: "Analytics across the DAO ecosystem: treasuries, members, participation.",
    },
  ],
};
