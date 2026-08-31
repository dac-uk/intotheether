import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "self-custody",
  title: "Self-Custody & Sovereignty",
  kana: "自己主権",
  tagline: "Not your keys, not your coins — the freedom, and the weight, of being your own bank.",
  category: "culture",
  level: "initiate",
  readingMinutes: 11,
  glow: "green",
  intro: [
    "Everything else on this site — unstoppable applications, censorship resistance, money without permission — rests on one unglamorous foundation: **who holds the keys**. Leave your crypto on an exchange and you hold an IOU from a company; the sovereignty is theirs. Hold your own keys and no bank, government, or platform can freeze, seize, or lose what's yours. That is the whole revolution, compressed into a question of key management.",
    "But sovereignty is not a free upgrade — it's a trade. The same property that means no one can take your funds means no one can restore them when you slip. There is no forgot-password link, no fraud department, no undo. This article is honest about both halves: why self-custody matters, and exactly how people lose everything getting it wrong.",
  ],
  sections: [
    {
      heading: "Keys, not coins",
      paragraphs: [
        "Your coins don't live in your wallet. They live on the blockchain, as entries in a global ledger, and what your wallet actually holds is a **private key** — a colossal secret number that authorises spending from your address. Whoever knows the key controls the funds, full stop. The blockchain doesn't know about ownership, receipts, or good intentions; it knows about valid signatures.",
        "Because raw keys are unmanageable, wallets generate them from a **seed phrase** — typically 12 or 24 ordinary words that encode the master secret behind every account in the wallet. Those words are the crown jewels: anyone who reads them owns everything, forever, from anywhere on Earth. Write them on paper or steel, store them offline, and accept a rule with zero exceptions — **no legitimate person or service will ever ask for your seed phrase**. Not support staff, not wallet developers, not a 'validation' website. Every such request is theft in progress.",
      ],
    },
    {
      heading: "Why bother? Ask Mt. Gox and FTX",
      paragraphs: [
        "In 2014, **Mt. Gox** — then handling the majority of all Bitcoin trading — collapsed after admitting that hundreds of thousands of customer bitcoins had quietly vanished, mostly to years of undetected theft. Creditors waited roughly a decade for partial repayment. The disaster minted the movement's most durable proverb: **not your keys, not your coins**.",
        "Eight years later the lesson arrived again, bigger and faster. **FTX**, a top-tier exchange fronted by conference stages and celebrity ads, imploded in November 2022 when it emerged that billions in customer deposits had been funnelled into its sister trading firm and lost. Withdrawals froze overnight. Customers with 'their' coins on FTX discovered what they had actually held: unsecured claims in a bankruptcy.",
        "The pattern is structural, not bad luck. A custodial balance is a promise from a business — subject to fraud, hacks, mismanagement, and freezes, exactly like any other promise. Custody has real uses: active trading, on-ramps, institutional mandates. But funds you intend to **hold** are safest where no one's balance sheet can swallow them — behind your own keys.",
      ],
    },
    {
      heading: "Hot, cold, and hardware",
      paragraphs: [
        "A **hot wallet** — a browser extension or phone app like MetaMask or Rainbow — keeps keys on an internet-connected device. Convenient, free, ideal for day-to-day amounts, and exposed: malware, fake apps, and malicious websites all hunt for exactly these keys. Treat a hot wallet like the cash in your pocket, not your savings.",
        "A **hardware wallet** — Ledger, Trezor, and peers — keeps keys inside a dedicated offline device. Transactions are signed in the device itself; the key never touches your computer, so even a compromised laptop can't steal it. You confirm each transaction on the device's own screen. For meaningful sums this is the baseline, not the luxury option — and it must be bought new from the manufacturer, never second-hand or 'pre-configured'.",
        "The common sense layer matters as much as the hardware: keep seed backups offline and geographically sensible, consider splitting large holdings across tiers — a hot wallet for spending, cold storage for savings — and rehearse recovery once with trivial funds so the first test of your backup isn't the disaster itself.",
      ],
    },
    {
      heading: "How people actually lose funds",
      paragraphs: [
        "Almost no one loses crypto to broken cryptography. They lose it to **phishing**: fake exchange login pages, 'support agents' sliding into DMs after you post a question, urgent emails about suspended accounts, fraudulent airdrop sites that ask you to 'verify' a seed phrase. The industrial version is the signing trap — a site presents a transaction that looks routine but actually grants sweeping permissions. Slow down. Read what you're signing. Urgency is the attacker's favourite tool.",
        "A subtler drain is **token approvals**. Using a DeFi app means granting its contract permission to move certain tokens — and many wallets historically defaulted to unlimited allowances that persist forever. If that contract is later hacked, or was malicious from the start, it can empty everything you approved, years after you forgot the site existed. Periodically review and revoke old approvals with a tool like **Revoke.cash**, and prefer exact-amount approvals when offered.",
        "Then there are the unforced errors: seed phrases photographed and synced to cloud accounts, typo'd addresses (send a **test transaction** first for large transfers), backups on a single hard drive that dies, and the legendary early-adopter hard drives in landfills. Sovereignty punishes sloppiness. The hygiene list is short and boring — offline seed, hardware signing, test sends, approval audits, scepticism by default — and it prevents nearly all of the carnage.",
      ],
    },
    {
      heading: "Beyond one key: multisig, smart wallets, and the trade-off",
      paragraphs: [
        "The frontier of self-custody is removing the single point of failure without reinstating a custodian. A **multisig** wallet — the standard being Safe — requires M-of-N keys to approve any transaction: say, two of three keys held on separate devices in separate places. One key lost or stolen is an inconvenience, not a catastrophe. DAOs and funds have secured billions this way for years, and individuals increasingly borrow the pattern.",
        "**Smart contract wallets** and account abstraction push further, encoding recovery into the wallet itself: **social recovery** lets pre-chosen guardians — friends, family, your own other devices, even institutions — collectively restore access if you lose your key, without any of them being able to spend your funds. Add daily limits, allow-lists, and passkey signing, and self-custody starts to feel less like handling raw uranium and more like a bank account you actually control.",
        "Be honest about the ledger of trade-offs. Custody risk is counterparty failure: Mt. Gox, FTX, frozen accounts. Self-custody risk is **you**: lost seeds, phishing, fat fingers. Neither risk is zero; the difference is that self-custody risk yields to care and tooling, while custodial risk is structurally outside your control. Start small, practise the hygiene, level up the tooling as the stakes grow. Being your own bank is a skill — and it's the one this entire ecosystem was built to make possible.",
      ],
    },
  ],
  keyTakeaways: [
    "Coins live on the blockchain; what you hold is a private key, derived from a seed phrase — whoever has the words has the funds.",
    "No legitimate person or service will ever ask for your seed phrase. Every such request is theft.",
    "Mt. Gox and FTX are the recurring lesson: a custodial balance is an IOU from a business, exposed to fraud and collapse.",
    "Hardware wallets keep keys offline and are the baseline for meaningful sums; hot wallets are for pocket money.",
    "Most losses come from phishing, malicious signatures, stale token approvals, and sloppy backups — boring hygiene prevents nearly all of it.",
  ],
  quiz: [
    {
      question: "What does 'not your keys, not your coins' actually mean?",
      options: [
        "Crypto held on an exchange is an IOU from that company, not assets under your control",
        "You must memorise your private key to legally own crypto",
        "Coins are stored inside your wallet device and lost if it breaks",
        "Exchanges are legally forbidden from holding customer crypto",
      ],
      answerIndex: 0,
      explanation:
        "The blockchain obeys whoever holds the keys. When an exchange holds them, you hold a claim against the exchange — which, as Mt. Gox and FTX customers learned, can freeze or evaporate with the business.",
    },
    {
      question: "Someone claiming to be wallet support asks for your seed phrase to 'fix a sync issue'. What is this?",
      options: [
        "Standard practice for resolving technical problems",
        "Safe as long as they only need 12 of your 24 words",
        "A scam — no legitimate service ever asks for a seed phrase",
        "Acceptable if the request comes through the wallet's official app",
      ],
      answerIndex: 2,
      explanation:
        "The seed phrase reconstructs every key in your wallet. Support staff never need it and never ask for it — a request for your seed, through any channel, is always an attempted theft.",
    },
    {
      question: "What is the main security advantage of a hardware wallet?",
      options: [
        "It insures your funds against theft",
        "Private keys stay in an offline device, so even a hacked computer can't steal them",
        "It stores your coins physically inside the device",
        "It hides your transactions from the public blockchain",
      ],
      answerIndex: 1,
      explanation:
        "Transactions are signed inside the device and confirmed on its own screen; the key never touches your internet-connected computer. Malware on your laptop can propose transactions but cannot extract the key.",
    },
    {
      question: "Why can an old token approval drain your wallet years later?",
      options: [
        "Approvals slowly transfer tokens to the app over time as rent",
        "Unlimited allowances persist until revoked — a later hack of that contract can spend everything you approved",
        "Approvals expire and convert your tokens to ETH automatically",
        "They cannot — approvals are cancelled whenever you close the app",
      ],
      answerIndex: 1,
      explanation:
        "Granting a contract an unlimited allowance is standing permission to move those tokens, and it doesn't expire on its own. If the contract is compromised — or was malicious — it can exercise that permission long after you've forgotten it. Audit and revoke periodically.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Wallets",
      url: "https://ethereum.org/en/wallets/",
      note: "What wallets are, how keys work, and how to choose one.",
    },
    {
      label: "ethereum.org — Security and scam prevention",
      url: "https://ethereum.org/en/security/",
      note: "The canonical checklist of scams and how to not get taken.",
    },
    {
      label: "Revoke.cash",
      url: "https://revoke.cash",
      note: "Audit and revoke the token approvals quietly attached to your address.",
    },
    {
      label: "Safe",
      url: "https://safe.global",
      note: "The multisig standard securing billions for DAOs, funds, and individuals.",
    },
    {
      label: "Ledger Academy",
      url: "https://www.ledger.com/academy",
      note: "Approachable articles on custody, seed phrases, and hardware security.",
    },
  ],
};
