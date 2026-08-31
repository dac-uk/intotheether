import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "cypherpunk-origins",
  title: "Cypherpunk Origins",
  kana: "暗号朋克",
  tagline: "Before the blockchain, there was a mailing list — and a fight over who controls secrets.",
  category: "culture",
  level: "initiate",
  readingMinutes: 10,
  glow: "amber",
  intro: [
    "Every technology has an origin myth. Ethereum's begins not with a coin but with a conviction, formed in the 1980s and 90s by a loose network of cryptographers, programmers, and libertarian dreamers: that in a digital age, **privacy would have to be built, not granted**. Governments and corporations would never hand it over. Code would have to take it.",
    "They called themselves **cypherpunks** — a pun on 'cyberpunk' with cipher at its heart. From a mailing list of a few hundred people came the ideas, the tools, and eventually the money that would grow into Bitcoin, Ethereum, and everything on this site. To understand why these systems exist — why decentralisation is treated as sacred, why 'trusted third party' is almost a slur — you have to meet the people who wrote the first drafts.",
  ],
  sections: [
    {
      heading: "Chaum's ghost money",
      paragraphs: [
        "The story starts with **David Chaum**, a Berkeley cryptographer who saw the surveillance age coming before most people had touched a computer. In the early 1980s he published a startling idea: **blind signatures**, a way for a bank to cryptographically sign a digital coin without seeing which coin it was signing — meaning the bank could issue money it could never trace. Cash's anonymity, ported to the wire.",
        "In 1989 he founded **DigiCash** to commercialise the idea as 'ecash'. Banks trialled it; Microsoft reportedly came calling. And yet by 1998 DigiCash was bankrupt — partly business missteps, but mostly a structural flaw the next generation would obsess over: ecash still required Chaum's company and partner banks at the centre. When the centre folded, the money died with it.",
        "The lesson carved itself into the movement's memory: digital cash that depends on a company is digital cash that can be shut down. Whatever came next would have to survive without anyone's permission — and without any centre to fold.",
      ],
    },
    {
      heading: "The manifesto and the crypto wars",
      paragraphs: [
        "In 1992, Eric Hughes, Timothy May, and John Gilmore began hosting meetings of Bay Area cryptographers that spawned the **cypherpunks mailing list**. May's 'Crypto Anarchist Manifesto' predicted that cryptography would do to nation-states what the printing press did to medieval guilds. Hughes' 1993 **'A Cypherpunk's Manifesto'** struck a more enduring note: \"Privacy is necessary for an open society in the electronic age... We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy... **Cypherpunks write code.**\"",
        "That last line was the whole ethos. Not lobbying, not petitions — working software, released to the world, impossible to un-release. And it was tested immediately: the US government classified strong cryptography as a **munition**, subject to arms-export controls. When Phil Zimmermann released **PGP** — military-grade encryption for everyone — he spent three years under criminal investigation. Activists printed the source code in books and on T-shirts, daring regulators to call literature a weapon.",
        "By the late 90s the government had largely backed down, and the export rules were gutted. The **crypto wars** ended in a cypherpunk victory that underwrites the modern internet — the padlock in your browser exists because this fight was won. But the movement's other dream, uncensorable digital cash, remained unbuilt.",
      ],
    },
    {
      heading: "Almost-money: Hashcash, b-money, bit gold",
      paragraphs: [
        "Through the late 90s, the mailing list kept circling the money problem, and three proposals laid down pieces of the eventual answer. **Adam Back's Hashcash** (1997) was designed as an email spam deterrent: force senders to perform a small amount of computational work per message. Trivial for a human's email, ruinous for a spammer's millions. Its deep insight — that **provable, wasted computation** can act as an unforgeable cost — became proof-of-work.",
        "In 1998, **Wei Dai's b-money** sketched a currency maintained collectively by pseudonymous participants, each keeping a copy of the ledger, with money created through computation and contracts enforced by the community — no bank anywhere in the design. The same year, **Nick Szabo** designed **bit gold**, chaining proofs of computational work into a tamper-evident history, aiming for money whose scarcity, like gold's, required no issuer's honesty. Szabo had also coined the term **smart contract** years earlier, imagining agreements enforced by code rather than courts.",
        "Neither b-money nor bit gold was ever implemented — each still had a gap, usually around how strangers could agree on one shared history without someone in charge. But lay the three side by side and the blueprint is nearly complete. What was missing was the keystone.",
      ],
    },
    {
      heading: "Satoshi's keystone",
      paragraphs: [
        "On 31 October 2008 — weeks after Lehman Brothers collapsed — a pseudonymous figure calling themselves **Satoshi Nakamoto** posted a nine-page paper to a cryptography mailing list: **Bitcoin: A Peer-to-Peer Electronic Cash System**. It cited Back's Hashcash and Dai's b-money directly. The missing keystone was there: use proof-of-work not just to mint coins but to **order history itself**, letting thousands of mutually distrusting strangers converge on a single ledger, with the honest chain simply being the one with the most work behind it.",
        "In January 2009 Satoshi mined the **genesis block**, embedding a newspaper headline about bank bailouts in it like a message in the foundation stone — timestamp and thesis statement in one. Early believers were overwhelmingly mailing-list veterans; the first transaction went to Hal Finney, a cypherpunk who had built on Chaum's ideas for years. Around 2011, Satoshi vanished, leaving no company to subpoena and no founder to lean on — arguably the last, greatest cypherpunk gesture: a system so complete its creator became unnecessary.",
        "Chaum's dream had finally shipped, twenty years late, with the fatal flaw removed. There was no centre to fold.",
      ],
    },
    {
      heading: "Ethereum: the dream, generalised",
      paragraphs: [
        "Bitcoin proved one institution — money issuance — could run on code alone. A teenage Bitcoin Magazine writer named **Vitalik Buterin** asked the obvious next question: why stop at one? His 2013 Ethereum whitepaper proposed a blockchain with a general-purpose programming language, so that **any** institution expressible as rules — an exchange, an insurer, a registry, an organisation — could run the way Bitcoin runs: transparent, neutral, unstoppable.",
        "This is the cypherpunk dream widened from private money to a **parallel institution stack**. Szabo's smart contracts became a deployed reality rather than a thought experiment. Where the 90s dreamed of cash without banks, Ethereum hosts lending without banks, trading without exchanges, organisations without headquarters — each one an experiment in Hughes' method: don't petition the institution, ship its replacement.",
        "The inheritance runs deeper than the technology — it's the reflexes. Distrust of trusted third parties. Open source as a moral position. Pseudonymity as legitimate identity. The instinct, when told something is not allowed, to write code that makes the question moot. Ethereum's culture wars — over privacy tooling, sanctioned addresses, decentralisation trade-offs — are the crypto wars continued by other means. Thirty years on, the manifesto's closing line is still the operating instruction: cypherpunks write code.",
      ],
    },
  ],
  keyTakeaways: [
    "David Chaum invented anonymous digital cash in the 1980s — but DigiCash died because it depended on a central company.",
    "Eric Hughes' 1993 manifesto set the method: privacy must be built, not granted, and 'cypherpunks write code'.",
    "The crypto wars — PGP, export controls, code printed in books — ended with strong encryption free for everyone, underwriting today's internet.",
    "Hashcash, b-money, and bit gold each supplied a piece of the puzzle; Satoshi's Bitcoin added the keystone of decentralised consensus.",
    "Ethereum generalises the cypherpunk dream from private money to a parallel stack of code-run institutions.",
  ],
  quiz: [
    {
      question: "Why did DigiCash's failure matter so much to the cypherpunks?",
      options: [
        "It proved digital money was mathematically impossible",
        "It showed that digital cash dependent on a central company dies when the company does",
        "It revealed that users didn't want privacy in payments",
        "It bankrupted the entire cypherpunk movement",
      ],
      answerIndex: 1,
      explanation:
        "Chaum's ecash was cryptographically brilliant but structurally centralised — it needed his company and partner banks. When DigiCash folded, the money died with it, teaching the movement that the next attempt had to have no centre at all.",
    },
    {
      question: "What was Hashcash originally designed to do?",
      options: [
        "Serve as the first tradeable cryptocurrency",
        "Encrypt email against government surveillance",
        "Deter email spam by requiring computational work per message",
        "Store cash records in a distributed hash table",
      ],
      answerIndex: 2,
      explanation:
        "Adam Back's 1997 scheme forced senders to do a small proof-of-work per email — trivial for individuals, ruinous at spam scale. The insight that provable computation can act as an unforgeable cost became Bitcoin's proof-of-work.",
    },
    {
      question: "What problem did b-money and bit gold leave unsolved that Bitcoin cracked?",
      options: [
        "How to make transactions completely anonymous",
        "How mutually distrusting strangers can agree on one shared ledger without a central authority",
        "How to make digital signatures unforgeable",
        "How to keep transaction fees low at scale",
      ],
      answerIndex: 1,
      explanation:
        "Both designs sketched bankless money but lacked a robust way for participants to converge on a single history. Satoshi's keystone was using proof-of-work to order history itself — the chain with the most work wins.",
    },
    {
      question: "How does Ethereum extend the original cypherpunk project?",
      options: [
        "It makes Bitcoin transactions faster and cheaper",
        "It replaces cryptography with government regulation",
        "It abandons privacy in favour of transparency",
        "It generalises code-run money into code-run institutions — exchanges, insurers, organisations",
      ],
      answerIndex: 3,
      explanation:
        "Bitcoin proved one institution — money — could run on neutral code. Ethereum's general-purpose smart contracts let any rule-based institution run the same way, widening private money into a parallel institution stack.",
    },
  ],
  explore: [
    {
      label: "A Cypherpunk's Manifesto (1993)",
      url: "https://www.activism.net/cypherpunk/manifesto.html",
      note: "Eric Hughes' founding document — short, sharp, still quoted daily.",
    },
    {
      label: "The Crypto Anarchist Manifesto (1988)",
      url: "https://www.activism.net/cypherpunk/crypto-anarchy.html",
      note: "Tim May's thunderclap prediction of cryptography reshaping power.",
    },
    {
      label: "Satoshi Nakamoto Institute",
      url: "https://nakamotoinstitute.org",
      note: "The complete literature: Chaum to Szabo to Satoshi's every known post.",
    },
    {
      label: "Bitcoin whitepaper (2008)",
      url: "https://bitcoin.org/bitcoin.pdf",
      note: "Nine pages that ended a twenty-year search — citing Hashcash and b-money.",
    },
    {
      label: "b-money (1998)",
      url: "http://www.weidai.com/bmoney.txt",
      note: "Wei Dai's original proposal, still hosted on his own site.",
    },
  ],
};
