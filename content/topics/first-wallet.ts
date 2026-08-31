import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "first-wallet",
  title: "Field Manual: Your First Wallet",
  kana: "第一号機",
  tagline: "Standing up your first piece of sovereign infrastructure — without handing the keys to a stranger.",
  category: "manual",
  level: "initiate",
  readingMinutes: 10,
  glow: "green",
  intro: [
    "Everything on Ethereum starts with a wallet. Not an app that holds your money — an app that holds your **keys**, the cryptographic credentials that control an address on the world computer. Get this step right and everything downstream gets easier. Get it wrong and no one — no support line, no foundation, no government — can undo it.",
    "This manual walks the full procedure: choosing a wallet, installing it from a source you can trust, performing the seed phrase ceremony properly, and sending your first transaction. The register here is deliberately paranoid. On open networks, paranoia is not a personality flaw; it is standard operating procedure.",
  ],
  sections: [
    {
      heading: "Step 01 — Choose your class of wallet",
      paragraphs: [
        "Wallets come in tiers. A **hot wallet** is software on a device you already own — a browser extension or mobile app such as MetaMask, Rabby, or Coinbase Wallet. Keys live on the device, encrypted, ready to sign at a moment's notice. Convenient, free, and perfectly adequate for learning and for small amounts.",
        "A **hardware wallet** (Ledger, Trezor) is a dedicated signing device: keys are generated and stored in a chip that never exposes them, even to a compromised computer. It is the correct tool once your holdings would genuinely hurt to lose. There are also **smart wallets** — contract accounts like Safe, or passkey-based wallets — which add recovery options and multi-signature control; more on those in Step 05.",
        "The field decision is simple: start with one reputable hot wallet, fund it with an amount you could lose without flinching, and treat it as your training rig. Do not shop for exotic wallets, and never let anyone — especially anyone who contacted *you* — choose a wallet on your behalf.",
      ],
    },
    {
      heading: "Step 02 — Install from official sources only",
      paragraphs: [
        "Fake wallets are the oldest trick in the book: cloned websites, poisoned search ads, look-alike apps sitting in official app stores. The installer *is* the attack surface. So never install a wallet from a search result or a link someone sent you. Type the official domain by hand — `metamask.io`, `ledger.com`, `trezor.io` — or navigate from the vetted wallet directory on `ethereum.org`.",
        "Verify before you trust. Check the domain spelling character by character (an attacker's `metarnask.io` earns its living on your haste). On app stores, confirm the developer name matches the official company and that the install count is in the millions, not the hundreds. For hardware wallets, buy **only** from the manufacturer's own site — never second-hand, never from a marketplace reseller. A pre-owned device may ship with a pre-known seed.",
        "Once installed, bookmark the official site and use only that bookmark forever after. This one habit neutralises an entire category of phishing.",
      ],
    },
    {
      heading: "Step 03 — The seed phrase ceremony",
      paragraphs: [
        "During setup, the wallet will show you 12 or 24 words: the **seed phrase** (also called a recovery phrase). This is not a password. It is the master key from which every account in the wallet is derived. Anyone who reads these words owns everything the wallet will ever hold, on every chain, forever. Treat the moment you see them as a ceremony, conducted alone, screens and cameras accounted for.",
        "The protocol: write the words **on paper, by hand, in order**. Make two copies and store them in separate secure physical locations. Never photograph them. Never type them into a notes app, a password manager's cloud vault, an email, or — above all — **any website or form, ever**. A seed phrase's only legitimate use is being typed into a fresh wallet app during recovery, by you, on a device you trust.",
        "Burn this into memory: **no legitimate party will ever ask for your seed phrase.** Not MetaMask support, not Ledger, not an exchange, not a 'validation' site, not someone helping you in Discord. Every single request for it, without exception, is theft in progress. There are no edge cases.",
      ],
    },
    {
      heading: "Step 04 — Address out, keys in: your first test transaction",
      paragraphs: [
        "Your wallet now shows an **address** — a string starting with `0x`. This is your public coordinate on the network: share it freely, print it on a business card if you like. Anyone can send funds *to* it; only your keys can move funds *out*. The mental model is a transparent mailbox — the whole world can see what's inside and drop things in, but only you hold the key that opens it.",
        "Time for a live-fire drill. Acquire a **small** amount of ETH — from an exchange you already use, or a friend — and send it to your address. Before confirming, verify the first and last four characters of the address on both screens; malware exists whose entire job is swapping addresses on your clipboard. Then, if you have a second account or a trusted recipient, send a tiny amount back out. Watch the transaction confirm on a block explorer.",
        "This drill is the pattern for everything that follows: **test small, verify, then commit**. On a network with no undo button, the rehearsal is never optional — it is the procedure.",
      ],
    },
    {
      heading: "Step 05 — Graduating: hardware and smart wallets",
      paragraphs: [
        "A hot wallet is a training rig, not a vault. The threshold question is simple: **would losing this amount genuinely hurt?** If yes, it is time to graduate. A hardware wallet keeps keys in a sealed chip and forces you to confirm every transaction on the device's own screen — so even a fully compromised laptop cannot sign without your physical assent. Verify the address on the *device* screen, not the computer's.",
        "The other graduation path is **smart wallets**: contract accounts like Safe that require multiple signatures to move funds, or modern passkey-based wallets that lean on your phone's secure enclave and offer recovery without a written phrase. For serious long-term holdings, a multi-signature Safe controlled by a hardware key is the field standard used by DAOs and funds alike.",
        "Whatever you graduate to, the doctrine holds: keys never leave secure hardware, the seed phrase never touches a network, and every new setup gets a small test transaction before real funds cross the wire. Your wallet is the first piece of infrastructure you truly own. Operate it like it matters — because it does.",
      ],
    },
  ],
  keyTakeaways: [
    "Start with one reputable hot wallet and small amounts; graduate to a hardware or smart wallet when holdings would hurt to lose.",
    "Install only from official domains typed by hand or the ethereum.org wallet directory — the installer is the attack surface.",
    "Write your seed phrase on paper, offline, in duplicate. Never photograph it, never store it digitally, never type it into any website.",
    "No legitimate party will ever ask for your seed phrase — every request for it is theft in progress, without exception.",
    "Your address is public — share it freely. Your keys and seed phrase are private — share them never. Always test with a small transaction first.",
  ],
  quiz: [
    {
      question: "What is the only legitimate place to ever enter your seed phrase?",
      options: [
        "A wallet provider's support portal when asked to verify your account",
        "A fresh wallet app during recovery, on a device you trust",
        "A cloud password manager for safekeeping",
        "An airdrop claim site that requires wallet validation",
      ],
      answerIndex: 1,
      explanation:
        "A seed phrase's sole legitimate use is restoring a wallet in official wallet software, entered by you. Support portals, websites, and 'validation' forms asking for it are always scams.",
    },
    {
      question: "Which of these is safe to share publicly?",
      options: [
        "Your seed phrase, if the other person seems trustworthy",
        "Your wallet's private key, but only with support staff",
        "Your 0x address",
        "None of the above — everything about a wallet is secret",
      ],
      answerIndex: 2,
      explanation:
        "The address is your public coordinate — anyone can send funds to it but no one can spend from it. Keys and seed phrases, by contrast, are never shared with anyone, ever.",
    },
    {
      question: "Why should a hardware wallet be bought only from the manufacturer?",
      options: [
        "Resellers charge higher prices",
        "Second-hand or third-party devices may arrive with a seed already known to an attacker",
        "The warranty is longer",
        "Manufacturer devices sync faster with the blockchain",
      ],
      answerIndex: 1,
      explanation:
        "A tampered or pre-configured device can ship with a seed phrase the attacker already holds — everything you deposit is then already stolen. Buy sealed, direct from ledger.com or trezor.io.",
    },
    {
      question: "What is the correct first move after setting up a new wallet?",
      options: [
        "Transfer your full balance immediately to consolidate funds",
        "Send a small test amount, verify it arrives, and confirm you can send out",
        "Email yourself the seed phrase as a backup",
        "Post your address publicly to check that it works",
      ],
      answerIndex: 1,
      explanation:
        "Test small, verify, then commit. A tiny test transaction proves the whole pipeline — correct address, working keys, working backup — before real value is at stake.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Find a wallet",
      url: "https://ethereum.org/en/wallets/find-wallet/",
      note: "The community-vetted wallet directory — filter by device and features, install from here.",
    },
    {
      label: "ethereum.org — Security & scam prevention",
      url: "https://ethereum.org/en/security/",
      note: "The canonical field guide to seed phrase hygiene and common attacks.",
    },
    {
      label: "MetaMask — Official site",
      url: "https://metamask.io",
      note: "The most widely used hot wallet. Type the URL by hand; bookmark it.",
    },
    {
      label: "Ledger Academy",
      url: "https://www.ledger.com/academy",
      note: "Hardware wallet fundamentals from one of the two major device makers.",
    },
    {
      label: "Safe",
      url: "https://safe.global",
      note: "The multi-signature smart wallet standard — where serious holdings graduate to.",
    },
  ],
};
