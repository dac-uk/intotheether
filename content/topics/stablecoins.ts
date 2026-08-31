import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "stablecoins",
  title: "Stablecoins: Digital Dollars",
  kana: "安定通貨",
  tagline: "The dollar escaped the banking system and moved onto the internet.",
  category: "defi",
  level: "initiate",
  readingMinutes: 10,
  glow: "amber",
  intro: [
    "Crypto's most successful product isn't a coin that goes up. It's a coin that goes nowhere at all. **Stablecoins** — tokens engineered to hold a steady value, overwhelmingly one US dollar — quietly became the industry's killer app while the world watched the volatile stuff. Hundreds of billions of them circulate today, settling trillions of dollars a year.",
    "The idea is disarmingly simple: take the world's reserve currency and give it the properties of an internet message. A dollar that moves anywhere on Earth in seconds, around the clock, for cents, held by anyone with a phone — no bank account, no branch, no permission slip. Ethereum is the rail most of this new money runs on.",
  ],
  sections: [
    {
      heading: "How a token holds a dollar",
      paragraphs: [
        "The dominant design is the **fiat-collateralised** stablecoin. **USDC** (issued by Circle) and **USDT** (Tether) work like digital banknotes: for every token in circulation, the issuer holds roughly a dollar of reserves — cash and short-term US Treasuries — and stands ready to redeem tokens for dollars. Redemption is the gravity that holds the peg: drift below a dollar and arbitrageurs buy cheap tokens to redeem at face value, pulling the price back.",
        "The trade-off is trust. You must believe the reserves are real (attestations and regulation help; histories differ between issuers) and accept that these are **centralised** instruments — issuers can freeze addresses and comply with sanctions lists. A fiat stablecoin is best understood as a very good IOU from a company, wearing the clothes of an internet-native dollar.",
        "**DAI** takes the decentralised road. Instead of dollars in a bank, it is backed by crypto collateral — ETH and other assets — locked in smart contracts, with borrowers required to post more value than they mint. No single company to trust or subpoena; instead, you trust code, overcollateralisation, and liquidation machinery that has held the peg through multiple brutal crashes. The cost is complexity, and in practice a partial reliance on centralised assets within its collateral mix.",
      ],
    },
    {
      heading: "Terra: how forty billion dollars evaporated",
      paragraphs: [
        "There was a third design, and its failure is the industry's defining cautionary tale. **Algorithmic** stablecoins tried to hold the peg with no full collateral at all — just a mechanism. Terra's UST was convertible into a variable amount of its sister token LUNA; arbitrage between the two was supposed to keep UST at a dollar, and for a while it did, growing into a top-ten crypto asset.",
        "In May 2022, confidence cracked. Large UST redemptions minted floods of LUNA, crashing its price, which meant more LUNA per redeemed UST, which crashed it further — a **death spiral** in full public view. Within about a week, roughly $40 billion of value across UST and LUNA went to effectively zero, taking savings, funds, and several lending firms down with it.",
        "The lesson is written in the wreckage: a stablecoin backed chiefly by faith in its own ecosystem is a confidence game with a countdown timer. It is why the survivors are collateralised designs, and why the first question to ask of any stablecoin is not 'what's the yield?' but **'what exactly backs this, and what happens in a run?'**",
      ],
    },
    {
      heading: "The killer app: payments and refuge",
      paragraphs: [
        "In wealthy countries stablecoins look like a nicer wire transfer. In much of the world they look like a lifeline. In economies with high inflation or strict capital controls — Argentina, Turkey, Nigeria, Lebanon among many — dollars are the savings vehicle everyone wants and the banking system rations. A stablecoin in a phone wallet is a dollar account no local institution can debase, seize, or gatekeep.",
        "The payments case is just as concrete. Remittance corridors that charge meaningful percentages and take days settle in stablecoins in seconds for cents. Freelancers invoice across borders without correspondent banks. Merchants, fintechs, and card networks now move stablecoins under the hood where users never see a token. It is crypto's quietest victory: not replacing money, but upgrading its plumbing.",
        "The irony deserves a moment: the technology built to escape state money has become the greatest distribution channel state money ever had. Stablecoins extend dollar demand to anyone with a smartphone — and their reserves, parked in US Treasuries at meaningful scale, loop the dollar's digital life back into its traditional one.",
      ],
    },
    {
      heading: "The rules arrive",
      paragraphs: [
        "For years stablecoins grew in a regulatory grey zone. That era is closing. In the United States, the **GENIUS Act** — passed in 2025 — created the first federal framework for payment stablecoins: licensed issuers, full high-quality reserves, redemption rights, and disclosure. In Europe, **MiCA** imposes similar discipline, and other financial centres from the UK to Singapore and Hong Kong have built their own regimes.",
        "Regulation cuts both ways, and both matter. It legitimises: banks, payment giants, and public companies now issue or integrate stablecoins they once wouldn't touch, because the rules finally exist. And it constrains: compliant stablecoins are firmly inside the surveillance and sanctions perimeter, and offshore issuers face a shrinking map. The likely future is a spectrum — regulated digital dollars for mainstream commerce, decentralised designs like DAI as the censorship-resistant alternative — with users choosing their point on the trust curve.",
      ],
    },
  ],
  keyTakeaways: [
    "Stablecoins are tokens engineered to hold steady value — almost always one US dollar — and have become crypto's most widely used product.",
    "USDC and USDT are backed by real-world reserves and redemption; DAI is backed by overcollateralised crypto locked in smart contracts.",
    "Terra's UST proved that algorithmic stablecoins without real collateral can death-spiral — roughly $40 billion evaporated in days in May 2022.",
    "Payments and emerging-market savings are the killer apps: fast, cheap, borderless dollars for people whose banking systems fail them.",
    "Regulation (the GENIUS Act in the US, MiCA in Europe) is pulling stablecoins into the mainstream — legitimising them while binding them to compliance.",
  ],
  quiz: [
    {
      question: "What primarily keeps a fiat-collateralised stablecoin like USDC at one dollar?",
      options: [
        "A law that forbids trading it at any other price",
        "Reserves plus redemption: tokens can be exchanged for real dollars, so arbitrage pulls the price back to the peg",
        "The issuer buys advertising to maintain confidence",
        "Its supply is fixed forever like Bitcoin's",
      ],
      answerIndex: 1,
      explanation:
        "Because each token is redeemable for a dollar from reserves, any drift from the peg becomes an arbitrage trade that pushes the price back. The peg is only as good as the reserves and the redemption promise.",
    },
    {
      question: "How does DAI differ from USDT and USDC?",
      options: [
        "DAI is pegged to gold rather than the dollar",
        "DAI is issued by a US-licensed national bank",
        "DAI is backed by overcollateralised crypto locked in smart contracts rather than a company's bank reserves",
        "DAI cannot be used in DeFi protocols",
      ],
      answerIndex: 2,
      explanation:
        "DAI is minted against crypto collateral worth more than the DAI issued, managed entirely by smart contracts — decentralised backing instead of an issuer's bank account, at the cost of extra complexity.",
    },
    {
      question: "What caused Terra's UST to collapse in 2022?",
      options: [
        "A hacker stole its dollar reserves from a bank",
        "The US government ordered it shut down",
        "Its algorithmic peg death-spiralled: redemptions minted floods of LUNA, crashing its price and destroying the mechanism's backing",
        "Ethereum went offline, freezing all UST transfers",
      ],
      answerIndex: 2,
      explanation:
        "UST was backed by confidence in its sister token LUNA rather than real collateral. When redemptions surged, LUNA hyperinflated and both assets spiralled to near zero within days.",
    },
    {
      question: "Why are stablecoins especially valuable in high-inflation economies?",
      options: [
        "They pay guaranteed interest set by the local government",
        "They give anyone with a phone access to dollar savings that local institutions can't debase or easily confiscate",
        "They are exempt from all taxes worldwide",
        "They automatically convert to the strongest local currency",
      ],
      answerIndex: 1,
      explanation:
        "Where local currencies lose value fast and dollar accounts are rationed, a stablecoin wallet is a de facto dollar account — the most direct real-world utility crypto has delivered.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Stablecoins",
      url: "https://ethereum.org/en/stablecoins/",
      note: "The community overview of stablecoin types and trade-offs.",
    },
    {
      label: "Circle — USDC",
      url: "https://www.circle.com/usdc",
      note: "The issuer's documentation and reserve attestations for USDC.",
    },
    {
      label: "Sky (formerly MakerDAO)",
      url: "https://sky.money",
      note: "The protocol behind DAI — decentralised, overcollateralised digital dollars.",
    },
    {
      label: "ECB/BIS view — Bank for International Settlements",
      url: "https://www.bis.org",
      note: "How central bankers analyse stablecoins — the sceptical institutional lens.",
    },
    {
      label: "a16z crypto — State of Crypto",
      url: "https://a16zcrypto.com/stateofcrypto",
      note: "Annual data-heavy report tracking stablecoin adoption and volumes.",
    },
  ],
};
