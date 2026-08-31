import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "nfts-digital-art",
  title: "NFTs & On-Chain Art",
  kana: "電脳芸術",
  tagline: "After the mania: what digital ownership was actually for.",
  category: "culture",
  level: "initiate",
  readingMinutes: 11,
  glow: "magenta",
  intro: [
    "In March 2021, a JPEG by a digital artist called Beeple sold at Christie's for $69 million, and for about eighteen months afterwards it was impossible to explain NFTs to anyone — the noise of cartoon apes, celebrity cash-grabs, and overnight millionaires drowned out every signal. Then the bubble did what bubbles do. Prices collapsed, tourists left, and the takes flipped from 'the future of everything' to 'obviously worthless' with barely a pause at 'interesting'.",
    "Both takes were wrong. Underneath the mania sat a real invention: for the first time, a digital object could have **provenance** — a public, unforgeable history of creation and ownership — without any company keeping the ledger. That primitive didn't die with the floor prices. This is the honest post-mortem: what an NFT actually is, what the mania got wrong, and what quietly survived.",
  ],
  sections: [
    {
      heading: "What an NFT actually is",
      paragraphs: [
        "A **non-fungible token** is a unique entry in a smart contract that says: token #1234 belongs to this address. Fungible tokens like ETH are interchangeable — any unit equals any other. An NFT is the opposite: a one-of-a-kind record with its own identity and history. When you buy one, the contract updates, and the entire chain of custody — minted by the artist's address, sold here, held there — becomes permanent public record.",
        "The common gotcha: for most NFTs, the image itself is too large to live on-chain, so the token points to media stored elsewhere — ideally on content-addressed systems like **IPFS** or Arweave, sometimes (badly) on a company's server that can vanish. The strongest form is **fully on-chain art**, where the code that generates the work lives inside the contract itself and survives as long as Ethereum does.",
        "And no, right-clicking the image doesn't defeat the point — anyone can photograph a Monet too. What the NFT holds isn't the pixels; it's the **provenance**: verifiable connection to the artist's own hand, plus whatever rights, access, or membership the issuer attached. Sometimes that's worth a lot. Often it's worth nothing. The mechanism can't tell you which — that was always a judgement about the thing itself.",
      ],
    },
    {
      heading: "Generative art finds its native medium",
      paragraphs: [
        "The artistically serious corner of the boom was **generative art** — work where the artist writes an algorithm and the algorithm produces the pieces. The form is decades old, running back through Vera Molnár and the plotter artists of the 1960s, but it had always lacked a native way to be collected. **Art Blocks**, launched in 2020, supplied one with a genuinely novel ritual: the artist deploys the algorithm, and each collector's mint transaction generates a **unique output the moment it's purchased**, seeded by the transaction itself. Neither artist nor buyer knows what will emerge. The medium isn't the image — it's the algorithm, and the roll of the dice is part of the work.",
        "The results earned their place in art history rather than just market history: Tyler Hobbs' **Fidenza** and Dmitri Cherniak's **Ringers** became landmark works, with pieces later selling through Sotheby's and entering serious collections. On Tezos, **fxhash** grew a scrappier open-to-everyone scene with its own aesthetic — proof this was a movement, not one platform's marketing.",
        "There's also a purist's thread worth knowing: fully on-chain projects like Autoglyphs, where the artwork's generator lives entirely in the contract — no server, no IPFS, no dependency but the chain itself. Whatever happens to any company or marketplace, the art persists exactly as long as Ethereum does. For conceptual art about permanence and provenance, the medium finally matches the message.",
      ],
    },
    {
      heading: "The mania and the hangover",
      paragraphs: [
        "The 2021–22 run was a genuine speculative mania, and it deserves the plain telling. Monthly trading volume went from tens of millions to billions of dollars within a year. Profile-picture collections — Bored Apes at the apex — became status symbols with celebrity owners and eight-figure sales. Brands minted anything that stood still. The unmistakable top-signals arrived on schedule: derivative projects of derivative projects, 'utility' roadmaps promising everything, and buyers who couldn't name the artist of anything they owned.",
        "The mechanics were textbook: new money chasing scarce-seeming assets, valuations sustained only by the next buyer, wash trading inflating volumes, and insider allocations dumped on latecomers. When crypto markets turned in 2022, NFT prices didn't correct — they cratered, with most collections losing the overwhelming share of their value. Trading volumes fell by well over 90% from the peak, and the celebrity endorsements aged into punchlines and, in some cases, lawsuits.",
        "The honest post-mortem cuts both ways. Yes: most 2021 NFTs were worthless, many projects were cynical, and real people lost real money — that should be said without flinching. But manias are historically terrible guides to a technology's worth. The dot-com crash vaporised Pets.com and left the web standing; tulip prices collapsed and the Dutch kept trading. The question that matters isn't 'did the bubble pop?' — bubbles always pop. It's 'what still works now that no one's getting rich?'",
      ],
    },
    {
      heading: "What survived the winter",
      paragraphs: [
        "Art, for one. The serious generative artists kept working straight through the crash; museums and auction houses kept engaging; collectors who cared about the work rather than the flip stayed. A smaller, saner on-chain art world now exists that simply didn't in 2019 — with digital artists earning primary sales in a market that previously had no way to sell a digital original at all.",
        "Infrastructure, for another — much of it barely thought of as 'NFTs'. **ENS** names (yourname`.eth`) are NFTs functioning as portable identity across thousands of apps. Tickets that can't be counterfeited and memberships that live in your wallet are quietly practical. Game assets that players truly own — tradeable outside the publisher's store — remain a live, contested experiment. In each case the token is plumbing, not a poster: a transferable record of a right.",
        "One battle scar worth understanding: **royalties**. Early platforms honoured an artist's percentage on every resale — a genuine improvement on traditional art markets, where artists see nothing from secondary sales. But royalties were enforced by marketplace convention, not by the protocol, and when the 2022–23 fee wars came, aggressive marketplaces made them optional and payment rates collapsed. It was a hard lesson in the difference between what code guarantees and what social convention merely promises — and it pushed creators toward enforcement tricks, allowlisted marketplaces, and business models that don't depend on goodwill.",
      ],
    },
    {
      heading: "Why programmable provenance still matters",
      paragraphs: [
        "Strip away the price charts and ask what the primitive actually does: it gives any digital object a **public, permissionless, programmable record of origin and ownership**. No platform issues it, no platform can revoke it, and any application anywhere can read it. That's new. Every previous digital ownership system — iTunes purchases, game skins, domain names — was a row in some company's database, existing at the company's pleasure.",
        "Programmability is the quiet superpower. A concert ticket that can cap its own resale price. A membership that unlocks doors in a hundred independent apps its issuer never met. An in-game sword usable in a rival's game. An artwork that knows its whole exhibition history. These are composable building blocks, and builders keep reaching for them — increasingly without saying 'NFT' at all, a word the mania rendered radioactive even as its mechanism spread.",
        "The sober bet looks like this: the speculative casino was mostly a one-time event, but digital provenance is infrastructure, and infrastructure compounds slowly. A generation that lives increasingly online — whose identity, art, credentials, and possessions are natively digital — will want ownership rails that don't depend on any single company surviving. When they reach for them, the rails the NFT era built and battle-tested will be there, humming, long after the apes are a trivia question.",
      ],
    },
  ],
  keyTakeaways: [
    "An NFT is a unique on-chain record of provenance — the pixels can be copied; the verifiable history of creation and ownership cannot.",
    "Generative art found its native medium: Art Blocks-style minting makes the algorithm the artwork and the mint a roll of the dice.",
    "The 2021 mania was a real bubble — most collections went to near-zero, and that deserves saying plainly.",
    "What survived: on-chain generative art, ENS-style identity, tickets and memberships, game assets — the token as plumbing, not poster.",
    "Royalties collapsed because they were marketplace convention, not protocol law — a lasting lesson in what code does and doesn't guarantee.",
  ],
  quiz: [
    {
      question: "What do you actually own when you own an NFT artwork?",
      options: [
        "Exclusive ability to view the image — others are blocked",
        "The copyright to the image in all jurisdictions, automatically",
        "A verifiable on-chain record of provenance linking the token to the artist, plus whatever rights the issuer attached",
        "A physical print held in a vault",
      ],
      answerIndex: 2,
      explanation:
        "The token is a unique ledger entry with a public chain of custody back to the artist's address. Copies of the image remain free to make — like photographs of a painting — and any legal rights depend on what the issuer actually granted.",
    },
    {
      question: "What made Art Blocks-style minting genuinely novel?",
      options: [
        "Each mint transaction generates a unique output from the artist's algorithm — neither artist nor collector knows the result in advance",
        "It was the first website to ever sell digital images",
        "Artists painted each piece by hand after purchase",
        "It guaranteed every piece would rise in value",
      ],
      answerIndex: 0,
      explanation:
        "The artist deploys an algorithm; the collector's transaction seeds a one-of-a-kind output at the moment of purchase. The medium is the algorithm itself, with the mint as a shared roll of the dice — a ritual with no precedent in art markets.",
    },
    {
      question: "Why did artist royalties on NFT resales largely collapse in 2022–23?",
      options: [
        "New laws made royalties on digital art illegal",
        "They were enforced by marketplace convention rather than by the protocol, and competing marketplaces made them optional",
        "Artists collectively decided to waive them",
        "Ethereum removed the technical capability for royalties",
      ],
      answerIndex: 1,
      explanation:
        "Royalty payments depended on marketplaces choosing to honour them. When fee wars broke out, aggressive platforms made royalties optional and payment rates cratered — a case study in the gap between code-enforced guarantees and social promises.",
    },
    {
      question: "Which is a use of NFTs that outlived the speculative mania?",
      options: [
        "Guaranteed-profit profile-picture collections",
        "Replacing all physical art with digital copies",
        "ENS-style names serving as portable identity across thousands of apps",
        "Celebrity-endorsed token launches",
      ],
      answerIndex: 2,
      explanation:
        "ENS names are NFTs working as infrastructure — identity you own and carry between applications. Along with tickets, memberships, game assets, and on-chain generative art, it's the 'token as plumbing' pattern that kept compounding after prices collapsed.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — NFTs",
      url: "https://ethereum.org/en/nft/",
      note: "Level-headed explainer of what NFTs are and aren't.",
    },
    {
      label: "Art Blocks",
      url: "https://www.artblocks.io",
      note: "The platform that gave generative art its native collecting ritual.",
    },
    {
      label: "fxhash",
      url: "https://www.fxhash.xyz",
      note: "The open generative-art scene — scrappier, experimental, artist-first.",
    },
    {
      label: "Ethereum Name Service",
      url: "https://ens.domains",
      note: "NFTs as identity: the .eth names used across the ecosystem.",
    },
    {
      label: "Right Click Save",
      url: "https://www.rightclicksave.com",
      note: "Serious art criticism for the on-chain era — history, interviews, debate.",
    },
  ],
};
