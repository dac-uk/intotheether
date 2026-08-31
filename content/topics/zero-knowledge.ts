import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "zero-knowledge",
  title: "Zero-Knowledge Proofs",
  kana: "零知識",
  tagline: "Prove you know the secret — without whispering a word of it.",
  category: "frontier",
  level: "architect",
  readingMinutes: 12,
  glow: "violet",
  intro: [
    "Here is a claim that sounds impossible: I can convince you, beyond reasonable doubt, that a statement is true — without telling you anything else. Not a summary, not a redacted version. Nothing but the fact of its truth. This is a **zero-knowledge proof**, an idea from 1980s cryptography research that spent decades as a theoretical curiosity before becoming, quite suddenly, one of the most consequential technologies on the internet.",
    "Blockchains made ZK urgent for a blunt reason: they are radically public machines. Every balance, every trade, every vote sits in the open. Zero-knowledge proofs are how you get the **integrity** of a public ledger without the total surveillance — and, as a bonus, how you compress a million transactions into one tiny proof. Scaling and privacy, from the same strange mathematics.",
  ],
  sections: [
    {
      heading: "The cave and the puzzle book",
      paragraphs: [
        "The classic intuition is the **Ali Baba cave**: a ring-shaped cave with a magic door at the back, opened only by a secret word. Peggy claims she knows the word; Victor waits outside. She enters by a random passage, left or right, and Victor then shouts which side she must emerge from. If she truly knows the word, she can always comply — the door lets her cross to either side. If she's bluffing, she has only a coin-flip's chance of guessing right. Repeat the game twenty times and a bluffer survives with odds of about one in a million. Victor becomes certain she knows the word — yet never hears it.",
        "Or take **Where's Waldo**. To prove you've found Waldo without revealing his location, cut a Waldo-sized hole in an enormous sheet of card, lay it over the book, and show Waldo peeking through. Your friend sees Waldo — proof you found him — but learns nothing about where on the page he is, because the sheet hides everything else.",
        "Both games share the three properties that define zero knowledge: **completeness** (an honest prover always convinces), **soundness** (a liar almost surely fails), and **zero-knowledge** (the verifier learns nothing beyond the statement being true). Modern schemes replace caves and cardboard with polynomial equations, but the shape of the trick is exactly this.",
      ],
    },
    {
      heading: "SNARKs and STARKs",
      paragraphs: [
        "The workhorse of practical ZK is the **SNARK** — a Succinct Non-interactive ARgument of Knowledge. 'Succinct' is the magic word: whatever the computation being proven, the proof itself stays tiny — a few hundred bytes — and verifies in milliseconds. A statement like 'I correctly executed these ten thousand transactions' becomes a receipt smaller than this paragraph. One historical wrinkle: many SNARK constructions need a **trusted setup**, a one-time ceremony generating parameters that, if secretly compromised, would allow forged proofs. Modern ceremonies involve thousands of participants — only one needs to be honest — and newer schemes are shedding the requirement entirely.",
        "**STARKs** take a different route: no trusted setup at all, relying only on hash functions — which also makes them resistant to future quantum computers. The price is bulk: STARK proofs are considerably larger, kilobytes rather than bytes, though still cheap to verify. Starknet built its entire stack on them.",
        "You don't need the mathematics to hold the strategic picture: proving is expensive, verifying is nearly free. One powerful machine grinds for minutes to produce a proof; the whole world checks it in a blink. That asymmetry — heavy work once, cheap trust forever — is the engine behind everything ZK touches.",
      ],
    },
    {
      heading: "ZK at work: scaling Ethereum",
      paragraphs: [
        "The flagship application is the **ZK rollup**. Thousands of transactions are executed off-chain, and a single validity proof — verified by a smart contract on Ethereum — attests that every one followed the rules. Ethereum no longer needs to re-execute anything; checking the receipt is enough. It's worth noting the mild irony of the name: most ZK rollups today use the proofs for **succinctness**, not secrecy — the data stays public, the compression is the point.",
        "The frontier project is the **zkEVM**: proving ordinary Ethereum-style computation, so that any existing contract can run inside a proof unmodified. A few years ago researchers guessed this was a decade away; competitive zkEVMs now run in production, and proving costs keep falling on a curve that looks a lot like a Moore's Law of its own. The endgame sketched in Ethereum research is bolder still — enshrining ZK verification into layer 1 itself, so that validating Ethereum means checking one proof rather than re-running the world.",
      ],
    },
    {
      heading: "ZK at work: privacy, identity, integrity",
      paragraphs: [
        "The same machinery transforms identity. Today, proving you're over 18 means handing over a passport — name, birthday, document number, everything. A **ZK credential** flips this: a government or university signs your data once, and you generate proofs of specific predicates — 'over 18', 'holds a degree', 'not on a sanctions list' — without revealing the document or anything else on it. Selective disclosure by default, with cryptographic assurance instead of a photocopied ID rotting in a hundred databases.",
        "Finance gains **proof of solvency**: an exchange can prove its reserves exceed its liabilities without publishing its balance sheet or its customer list — the audit FTX's depositors never got, available continuously instead of quarterly. Voting gains ballots that are provably counted and provably secret at the same time. And private transfer protocols show that compliance and privacy can coexist: prove a payment satisfies the rules without broadcasting your entire financial life.",
        "There's an emerging frontier beyond blockchains entirely: proving that a photo is unedited from a genuine camera, that a model produced a given output, that a computation on your medical data ran correctly without the data leaving your device. Wherever trust currently requires disclosure, ZK offers a third option.",
      ],
    },
    {
      heading: "Why this rhymes with encryption",
      paragraphs: [
        "In the 1990s, strong encryption escaped the military and became civilian infrastructure — over fierce government resistance. The result, **HTTPS**, is why you can type a card number into a website without it being harvested at every hop. E-commerce, online banking, private messaging: none of it exists without that one primitive quietly underneath. Encryption answered the question: can this be kept confidential in transit?",
        "Zero-knowledge answers the complementary question the last internet never could: can this be verified without being revealed? Encryption hides data; ZK proves things **about** hidden data. If the last thirty years were about moving information privately, the next stretch may be about establishing truth privately — solvency without balance sheets, identity without dossiers, computation without surveillance.",
        "It's reasonable to be sober here: proving is still costly, the cryptography is young, and bugs in ZK circuits are subtle and dangerous. But the trajectory — costs falling fast, hardware acceleration arriving, standards forming — looks less like a niche crypto tool and more like a new layer of the internet quietly being poured.",
      ],
    },
  ],
  keyTakeaways: [
    "A zero-knowledge proof convinces a verifier a statement is true while revealing nothing beyond its truth — completeness, soundness, zero-knowledge.",
    "SNARKs produce tiny, cheap-to-verify proofs but often need a trusted setup; STARKs need no setup and resist quantum attacks, at the cost of larger proofs.",
    "The core asymmetry: proving is expensive, verifying is nearly free — heavy work once buys cheap trust for everyone.",
    "ZK rollups use validity proofs to compress thousands of transactions into one receipt Ethereum can check in milliseconds.",
    "Beyond scaling, ZK enables private credentials, proof of solvency, and verifiable voting — proving facts about data without exposing it.",
  ],
  quiz: [
    {
      question: "In the Ali Baba cave story, why does repeating the challenge many times matter?",
      options: [
        "Each round reveals a little more of the secret word",
        "A bluffer's chance of guessing every challenge correctly shrinks toward zero",
        "The magic door only opens after multiple attempts",
        "It gives the verifier time to search the cave himself",
      ],
      answerIndex: 1,
      explanation:
        "One round, a bluffer survives half the time. Twenty rounds, about one in a million. Repetition drives the cheating probability toward zero — soundness — while the secret word is never spoken.",
    },
    {
      question: "What is the key trade-off between SNARKs and STARKs?",
      options: [
        "SNARKs are private while STARKs are fully public",
        "SNARKs work only on Bitcoin; STARKs only on Ethereum",
        "SNARKs give tiny proofs but often require a trusted setup; STARKs avoid the setup but produce larger proofs",
        "STARKs are faster to generate but impossible to verify on-chain",
      ],
      answerIndex: 2,
      explanation:
        "Many SNARK schemes depend on a one-time setup ceremony and yield very small proofs; STARKs use only hash functions — no ceremony, quantum-resistant — but their proofs are kilobytes rather than bytes.",
    },
    {
      question: "How does a ZK rollup use validity proofs?",
      options: [
        "To encrypt all user balances so no one can read them",
        "To prove a whole batch of off-chain transactions followed the rules, so Ethereum verifies one proof instead of re-executing everything",
        "To let validators skip checking blocks entirely on trust",
        "To hide the rollup's smart contract code from competitors",
      ],
      answerIndex: 1,
      explanation:
        "The rollup executes transactions off-chain and posts a succinct validity proof. Ethereum checks the proof — milliseconds of work — and gains certainty about thousands of transactions. Compression, not secrecy, is the point for most rollups today.",
    },
    {
      question: "What could a ZK identity credential let you do?",
      options: [
        "Prove you are over 18 without revealing your name, birthday, or document",
        "Create unlimited fake passports that verify as genuine",
        "Delete your personal data from government databases",
        "Encrypt your passport so border agents cannot read it",
      ],
      answerIndex: 0,
      explanation:
        "An issuer signs your attributes once; you then generate proofs of specific predicates — 'over 18', 'holds a licence' — without disclosing the underlying document. Selective disclosure with cryptographic assurance.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Zero-knowledge proofs",
      url: "https://ethereum.org/en/zero-knowledge-proofs/",
      note: "Clear community primer on ZKPs and their role in Ethereum.",
    },
    {
      label: "Zero Knowledge Podcast",
      url: "https://zeroknowledge.fm",
      note: "Long-running interviews with the researchers and builders shaping the field.",
    },
    {
      label: "ZKProof.org",
      url: "https://zkproof.org",
      note: "The open industry-and-academia effort to standardise ZK proof systems.",
    },
    {
      label: "MOOC: Zero Knowledge Proofs",
      url: "https://zk-learning.org",
      note: "A full university course — Boneh, Song, and others — free online.",
    },
    {
      label: "Vitalik Buterin's writings",
      url: "https://vitalik.eth.limo",
      note: "Includes accessible deep-dives on SNARKs, STARKs, and the ZK endgame.",
    },
  ],
};
