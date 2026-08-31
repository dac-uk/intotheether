import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "crossing-to-l2",
  title: "Field Manual: Crossing to Layer 2",
  kana: "渡橋作戦",
  tagline: "Moving off the expensive main street and into the fast lanes — safely, with a test load first.",
  category: "manual",
  level: "initiate",
  readingMinutes: 10,
  glow: "cyan",
  intro: [
    "Ethereum mainnet is the settlement floor: maximally secure, maximally neutral, and priced accordingly. Day-to-day life happens one level up, on **Layer 2 rollups** — networks like Base, Arbitrum, and Optimism that execute transactions cheaply and post their results back to mainnet for security. Same wallet, same address, same ETH; fees measured in **cents instead of dollars**.",
    "Getting there means crossing a bridge, and bridges are where newcomers historically get hurt — wrong network, wrong site, funds stranded or stolen. This manual is the crossing procedure: pick a network, add it safely, bridge a test amount, and confirm you have arrived before anything of value follows you over.",
  ],
  sections: [
    {
      heading: "Step 01 — Pick your destination network",
      paragraphs: [
        "The major established rollups as of early 2026: **Arbitrum One**, the largest by activity with a deep DeFi ecosystem; **Base**, incubated by Coinbase, with strong consumer apps and easy exchange on-ramps; and **OP Mainnet** (Optimism), the flagship of a wider 'Superchain' of networks sharing one tech stack. All three are optimistic rollups that inherit security from Ethereum. This is a description of the landscape, not an endorsement — none of them needs your loyalty.",
        "For a first crossing, any of the three is a reasonable training ground. What matters more than the choice is understanding the model: an L2 is not a separate coin or a competing chain. It is Ethereum's own execution capacity, extended. Your ETH on Arbitrum is still ETH; your address is the same `0x` string everywhere.",
        "One caution before choosing: rollups differ in maturity of their training wheels — how decentralised their sequencers and upgrade keys are. Independent trackers such as **L2BEAT** grade each network's real trust assumptions. Worth ten minutes of reading before you route serious funds anywhere.",
      ],
    },
    {
      heading: "Step 02 — Add the network to your wallet, safely",
      paragraphs: [
        "Your wallet needs to know the L2 exists — its RPC endpoint, chain ID, and explorer. Many modern wallets ship with major L2s preconfigured; check your network list first. If you need to add one manually, use **chainlist.org**, a community-maintained registry of verified network configurations: search the chain, connect your wallet, and approve the addition.",
        "The alternative is the network's own official documentation, which always publishes canonical RPC details. What you must **never** do is add a network from parameters pasted in a Discord message, a DM, or a random tutorial. A malicious RPC endpoint can lie to your wallet about balances and mislead you about what you are signing.",
        "Sanity-check after adding: the chain ID should match the official one (Arbitrum One is `42161`, OP Mainnet `10`, Base `8453`), and the block explorer link should resolve to the network's known explorer.",
      ],
    },
    {
      heading: "Step 03 — Choose your bridge: native vs fast",
      paragraphs: [
        "The **native bridge** is the rollup's own canonical contract, linked from its official site and docs. It inherits the rollup's security — the safest possible route in, and the route that moves your actual ETH rather than a wrapped stand-in. The trade-off is patience on the way *out*: optimistic rollups impose a **withdrawal delay of about seven days** back to mainnet, the challenge window in which fraud can be disputed.",
        "**Third-party fast bridges** (liquidity networks like Across or Hop) solve the wait by fronting you funds on the destination chain from their own pools, for a fee. Minutes instead of days, both directions. The trade-off: you are briefly trusting that protocol's contracts and liquidity rather than the rollup itself. Historically, third-party bridges are where the largest exploits in crypto have happened.",
        "Field doctrine: use the **native bridge for your first crossing** and for any serious value. Reach for fast bridges when speed matters and the amount is one you can afford to have adventure with. And always reach the bridge through the network's official site or your own bookmark — bridge phishing clones are a thriving industry.",
      ],
    },
    {
      heading: "Step 04 — The crossing, test load first",
      paragraphs: [
        "The procedure. One: navigate to the official bridge by typed URL or bookmark. Two: connect your wallet and confirm the source is Ethereum mainnet and the destination is your chosen L2. Three: bridge a **small test amount** — enough to cover a few L2 transactions, nothing more. Four: confirm the transaction in your wallet, reading what you sign. Five: wait the few minutes for the deposit to finalise, then switch your wallet's network to the L2 and confirm the balance arrived.",
        "Only when the test load lands do you bridge the working amount. Keep a reserve of ETH on mainnet for future gas, and remember the asymmetry: getting in is minutes, getting out via the native route is about a week. Do not bridge funds you may need back on mainnet at short notice — or accept that leaving in a hurry means paying a fast bridge for the privilege.",
        "There is also a route that skips the bridge entirely: most major **exchanges now withdraw directly to L2s**. If you are onramping fresh funds, sending straight from an exchange to Base or Arbitrum is often the cheapest and simplest entry. The critical check: the network selected on the exchange's withdrawal screen must **exactly** match a network your wallet has configured. Send a small test withdrawal first — always.",
      ],
    },
    {
      heading: "Step 05 — Verify the ground you stand on",
      paragraphs: [
        "From now on you are a multi-chain operator, and the most common self-inflicted wound is acting on the wrong network — signing a transaction on mainnet at 100x the expected fee, or sending assets to a chain where the recipient isn't listening. Before signing **anything**, glance at the network indicator in your wallet. Make it reflex: *what chain am I on?* is the new *is this thing loaded?*",
        "Each L2 has its own explorer — Arbiscan, Basescan, the OP Mainnet explorer — and your same address on each. Bookmark them. When an app prompts you to switch networks, read the prompt: legitimate apps request a switch to a known chain, and your wallet will show you which. A dApp asking you to add an unknown network with an unfamiliar chain ID is a signal to stop, not click.",
        "That is the crossing, complete. Cheap blocks change how the network feels — experiments cost cents, mistakes are affordable, and the habits you drilled here (official URLs, test amounts, verify-then-sign) now compound on ground where practice is nearly free.",
      ],
    },
  ],
  keyTakeaways: [
    "L2 rollups like Base, Arbitrum, and OP Mainnet are Ethereum's day-to-day layer — same address, same ETH, fees in cents — secured by posting results back to mainnet.",
    "Add networks only via chainlist.org or official docs, and verify the chain ID; never from parameters pasted in chat.",
    "Native bridges are the safest route in but impose a roughly seven-day withdrawal delay on optimistic rollups; third-party fast bridges trade extra trust for speed.",
    "Always bridge a small test amount first — and consider onramping directly to an L2 from an exchange, with the withdrawal network double-checked.",
    "Check which network your wallet is on before signing anything. Make it reflex.",
  ],
  quiz: [
    {
      question: "Why are transaction fees so much lower on Layer 2 than on Ethereum mainnet?",
      options: [
        "L2s are less secure networks with fewer validators",
        "L2s execute transactions off-chain in bulk and post compressed results to mainnet, sharing its security at a fraction of the cost",
        "L2 fees are subsidised by the Ethereum Foundation",
        "L2s use a different, cheaper coin instead of ETH",
      ],
      answerIndex: 1,
      explanation:
        "Rollups batch many transactions, execute them cheaply off mainnet, and anchor the results to Ethereum — inheriting its security while dividing its cost across thousands of users.",
    },
    {
      question: "What is the main trade-off of using the native bridge on an optimistic rollup?",
      options: [
        "It converts your ETH into a wrapped token",
        "It charges the highest fees of any bridge",
        "Withdrawals back to mainnet take about seven days due to the challenge window",
        "It only works with hardware wallets",
      ],
      answerIndex: 2,
      explanation:
        "The roughly week-long withdrawal delay is the fraud-proof challenge window. Deposits in are fast; the native exit is slow but maximally secure. Fast bridges trade extra trust for speed.",
    },
    {
      question: "What is the safe way to add a new L2 network to your wallet?",
      options: [
        "Copy RPC parameters from a helpful user in Discord",
        "Use chainlist.org or the network's official documentation, then verify the chain ID",
        "Use whatever network a new dApp prompts you to add, regardless of chain ID",
        "Networks cannot be added — you need a new wallet per chain",
      ],
      answerIndex: 1,
      explanation:
        "Chainlist and official docs publish verified configurations. A malicious RPC endpoint can misreport balances and disguise what you sign — never take network parameters from chat.",
    },
    {
      question: "When withdrawing from an exchange directly to an L2, what is the critical check?",
      options: [
        "That the withdrawal happens on a weekday",
        "That you withdraw your entire balance in one transaction to save fees",
        "That the network selected on the exchange exactly matches one configured in your wallet — proven with a small test withdrawal",
        "That you use a brand-new address for each withdrawal",
      ],
      answerIndex: 2,
      explanation:
        "Funds sent on a network your wallet isn't watching can be stranded or lost. Match the network exactly, and let a small test withdrawal prove the route before the real amount follows.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Layer 2",
      url: "https://ethereum.org/en/layer-2/",
      note: "The canonical explainer of what rollups are and why Ethereum scales this way.",
    },
    {
      label: "L2BEAT",
      url: "https://l2beat.com",
      note: "Independent risk analysis of every rollup — read a network's real trust assumptions here.",
    },
    {
      label: "Chainlist",
      url: "https://chainlist.org",
      note: "Verified network configurations — the safe way to add an L2 to your wallet.",
    },
    {
      label: "Arbitrum Bridge",
      url: "https://bridge.arbitrum.io",
      note: "The native bridge for Arbitrum One — canonical route in and out.",
    },
    {
      label: "Optimism (Superchain) Bridge",
      url: "https://app.optimism.io/bridge",
      note: "The official bridge for OP Mainnet and the wider Superchain.",
    },
  ],
};
