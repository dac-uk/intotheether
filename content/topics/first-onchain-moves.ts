import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "first-onchain-moves",
  title: "Field Manual: First On-Chain Moves",
  kana: "初陣",
  tagline: "Your first live operations — swaps, approvals, signatures — and the discipline that keeps them survivable.",
  category: "manual",
  level: "operator",
  readingMinutes: 11,
  glow: "amber",
  intro: [
    "Wallet stood up, funds on a Layer 2. Now the network stops being theory and starts being live fire: swapping tokens, granting approvals, signing messages from applications you have never met. Every one of these actions is irreversible the moment it confirms — which is exactly why the operators who last are the ones who move slowly at first.",
    "This manual covers the first real moves — how a swap actually works, what an approval actually grants, how to read a transaction before signing it — and the scam patterns you will encounter within your first weeks, because you will. None of this requires risking money you care about. That is the whole point.",
  ],
  sections: [
    {
      heading: "Step 01 — Rehearse on a testnet",
      paragraphs: [
        "Before spending anything real, run the drills where mistakes cost nothing. **Sepolia** is Ethereum's main public testnet: a full parallel network whose ETH is worthless by design. Switch your wallet to Sepolia, collect free test ETH from a **faucet** (Google and Chainlink both operate reliable ones), and you have a live-fire range.",
        "Run the full mission profile: send test ETH between two of your own accounts, connect to a dApp, execute a swap, sign a message, find your transactions on the Sepolia block explorer. Every prompt, confirmation screen, and failure mode you meet here is identical to mainnet — the only difference is the stakes.",
        "Do not skip this because it feels beneath you. Pilots with thousands of hours still fly the simulator. Ten minutes on Sepolia converts your first mainnet transaction from a leap of faith into a repetition of something you have already done.",
      ],
    },
    {
      heading: "Step 02 — Anatomy of your first swap",
      paragraphs: [
        "A **DEX** (decentralised exchange) like Uniswap lets you trade one token for another directly against a pool of liquidity — no account, no order book, no counterparty but a contract. You will meet two numbers before confirming. **Price impact** is how much your own trade moves the pool's price: negligible for small trades in deep pools, brutal for large trades in shallow ones. **Slippage tolerance** is the worst execution you will accept if the price shifts between signing and confirmation; the transaction reverts rather than fill beyond it.",
        "Read the confirmation screen like a contract, because it is one: the exact token in, the exact token out, the **minimum received**, the fee. If any number surprises you — a minimum-received far below the quote, a token symbol you didn't select — cancel. Cancelling costs nothing; confirming is forever. And verify the token itself: scammers deploy counterfeits with famous names. Select tokens from the DEX's default list or verify the contract address against the project's official site.",
        "First live swap: a **small amount**, on an L2 where the gas costs cents, of a well-established pair. This manual will never tell you *what* to buy — no honest one will. It tells you how to execute whatever you have independently decided, without being skinned by mechanics you didn't understand.",
      ],
    },
    {
      heading: "Step 03 — Approvals: the standing orders you leave behind",
      paragraphs: [
        "Before a DEX can swap a token you hold, you must sign an **approval** — a standing authorisation letting that contract move that token from your address. This is the most misunderstood signature in the field manual: an approval is not part of one trade. It **persists** until you revoke it, a door you have left propped open.",
        "The sharp edge is **unlimited approvals**. Many apps request permission over an infinite amount of the token to save you future gas fees. Convenient — but it means that if that contract is ever exploited, or the site that requested it was a fake, the attacker can drain your entire balance of that token without another signature from you. When your wallet offers a spending cap, set one near the amount you are actually trading.",
        "Approvals accumulate like open ports. Schedule hygiene: periodically load **revoke.cash**, review every live approval against your address on every chain, and revoke anything unlimited, unrecognised, or belonging to an app you no longer use. Each revocation costs a little gas. Consider it rent on a smaller attack surface.",
      ],
    },
    {
      heading: "Step 04 — Read before you sign",
      paragraphs: [
        "Every wallet prompt is a decision point, and the discipline is always the same three checks. **One: the URL.** Confirm you are on the real site — your own bookmark, not a search ad, not a link from chat. A pixel-perfect clone of a dApp with a malicious contract behind it is the standard phishing rig. **Two: the simulation.** Modern wallets like Rabby, and MetaMask with security tooling enabled, preview what a transaction will actually do — assets out, assets in, approvals granted. If the preview shows assets leaving that you didn't intend to send, reject.",
        "**Three: the pressure check.** Urgency is the attacker's primary tool — *claim expires in 10 minutes, migration closes tonight, your wallet is at risk, act now.* Legitimate protocols almost never require you to sign anything in a hurry. The moment you feel rushed is precisely the moment to stop, close the tab, and verify through an official channel. On a network with no undo, the willingness to walk away is your strongest defence.",
        "Beware especially of signature requests you cannot read — opaque hex data, or `Permit`-style off-chain signatures that can authorise token movement without an on-chain transaction. If your wallet cannot render a request into something you understand, and the simulation is blank or alarming, the answer is reject. No opportunity is worth an unreadable signature.",
      ],
    },
    {
      heading: "Step 05 — The threat catalogue, and the habit loop",
      paragraphs: [
        "Know the standard predators. **Fake airdrops**: worthless tokens appear unprompted in your wallet, bait to lure you to a 'claim' site that requests a draining approval — ignore them completely; never interact. **Address poisoning**: an attacker sends dust from an address crafted to visually resemble one you use, hoping you later copy it from your history — never copy addresses from transaction history; use saved contacts and verify more than the first and last four characters. **Drainer sites**: cloned or hijacked frontends whose only function is one malicious signature. **Fake support**: anyone who DMs you first offering help, on any platform, is hostile — real support never opens the conversation and never asks you to sign anything or share a seed phrase.",
        "None of these tricks survives contact with procedure. Which is the real lesson of this entire manual: security here is not a product you buy but a **loop you run**. Small amounts until the pattern is familiar. Verify twice — the URL, the network, the simulation. Sign once, deliberately. Review your approvals on schedule.",
        "Run the loop until it is boring. Boring is the goal — it means the checks have become reflex, and reflexes are what remain when a convincing scam catches you tired at midnight. The network rewards the patient and recycles the reckless. Move small, verify twice, sign once. Welcome to the field.",
      ],
    },
  ],
  keyTakeaways: [
    "Rehearse everything on the Sepolia testnet with free faucet ETH before risking real funds — the interface is identical, the stakes are zero.",
    "On a DEX, read the confirmation like a contract: token in, token out, minimum received, price impact. Cancel anything surprising — cancelling is free.",
    "Token approvals persist until revoked; prefer capped approvals over unlimited ones, and audit them periodically with revoke.cash.",
    "Before signing: verify the URL, read the simulation, and treat urgency itself as a red flag. Reject anything you cannot read.",
    "The habit loop is the real security product: small amounts, verify twice, sign once — run it until it is reflex.",
  ],
  quiz: [
    {
      question: "What does signing a token 'approval' actually do?",
      options: [
        "Completes a single swap and then expires automatically",
        "Grants a contract standing permission to move that token from your address until you revoke it",
        "Verifies your identity to the application",
        "Locks your tokens so no one, including you, can move them",
      ],
      answerIndex: 1,
      explanation:
        "An approval is a persistent authorisation, not a one-off. It survives the trade that prompted it — which is why unlimited approvals to compromised contracts can drain balances long after, and why periodic review with revoke.cash matters.",
    },
    {
      question: "What is slippage tolerance on a DEX swap?",
      options: [
        "The fee the exchange charges per trade",
        "The time limit before your transaction expires",
        "The worst execution price you will accept — beyond it, the transaction reverts instead of filling",
        "The difference between two tokens' market caps",
      ],
      answerIndex: 2,
      explanation:
        "Prices can move between signing and confirmation. Slippage tolerance caps how much worse your execution may get; past the cap, the swap reverts rather than fill at a bad price.",
    },
    {
      question: "A token you never bought appears in your wallet, with a site offering to let you claim or sell it. What is the correct move?",
      options: [
        "Sell it quickly before the price drops",
        "Connect to the claim site to see what it is worth",
        "Ignore it entirely — unsolicited tokens are bait designed to extract a malicious approval",
        "Send it back to the address that sent it",
      ],
      answerIndex: 2,
      explanation:
        "This is the fake-airdrop pattern: the token is worthless bait, and the 'claim' or 'swap' site exists to get a draining signature out of you. Unsolicited tokens are ignored, never interacted with.",
    },
    {
      question: "Why should you never copy a recipient address from your transaction history?",
      options: [
        "Old addresses expire after a few months",
        "Address poisoning: attackers plant look-alike addresses in your history hoping you copy the wrong one",
        "Block explorers display addresses in a different format",
        "Copying from history costs additional gas",
      ],
      answerIndex: 1,
      explanation:
        "Attackers send dust from addresses generated to visually match your real contacts, then wait for a careless copy-paste. Use saved contacts and verify well beyond the first and last four characters.",
    },
  ],
  explore: [
    {
      label: "revoke.cash",
      url: "https://revoke.cash",
      note: "Audit and revoke your token approvals across chains — schedule this like a health check.",
    },
    {
      label: "ethereum.org — Security & scam prevention",
      url: "https://ethereum.org/en/security/",
      note: "The canonical catalogue of scam patterns and defensive doctrine.",
    },
    {
      label: "Google Cloud Sepolia Faucet",
      url: "https://cloud.google.com/application/web3/faucet/ethereum/sepolia",
      note: "Free testnet ETH for your Sepolia live-fire drills.",
    },
    {
      label: "Uniswap Docs",
      url: "https://docs.uniswap.org",
      note: "How the largest DEX protocol actually works — pools, slippage, and routing from the source.",
    },
    {
      label: "Etherscan",
      url: "https://etherscan.io",
      note: "Verify transactions, contracts, and token addresses before and after you sign.",
    },
  ],
};
