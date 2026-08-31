import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "gas-and-fees",
  title: "Gas: The Fee Machine",
  kana: "手数料",
  tagline: "What you're actually paying, why it changes by the minute, and how to pay less.",
  category: "foundations",
  level: "initiate",
  readingMinutes: 9,
  glow: "amber",
  intro: [
    "Every Ethereum transaction comes with a fee, and for most newcomers it's the first genuinely confusing thing they meet: sometimes cents, sometimes dollars, quoted in a unit called **gwei**, estimated by your wallet with three mysterious buttons marked low, medium, and high. It feels arbitrary. It isn't — it's one of the most carefully engineered pricing systems in software.",
    "Gas is how a computer shared by the whole world decides who gets to use it right now, and at what price. Once you can read the fee machine — what a unit of gas is, what the base fee and tip mean, why costs spike and collapse — the numbers in your wallet stop being noise and start being information. This is the missing user manual.",
  ],
  sections: [
    {
      heading: "Units times price: the two-part bill",
      paragraphs: [
        "Every fee is two numbers multiplied together. The first is **gas units**: a measure of how much computational work your transaction demands. A simple ETH transfer always costs exactly **21,000 gas**. A token swap might cost 100,000–200,000; minting an NFT or interacting with a complex protocol, more still. This side of the bill is about *what you're doing* — it doesn't change with network conditions.",
        "The second number is the **gas price**: what you pay per unit, quoted in **gwei** — one billionth of an ETH. This side is about *how busy the network is*, and it moves constantly. So: fee = gas used × price per gas. A 21,000-gas transfer at 10 gwei costs 0.00021 ETH — well under a dollar; the same transfer during a frenzy at 200 gwei costs twenty times more. Same work, different market.",
        "Why meter computation at all? Because the world computer is a shared, finite resource. Gas makes every operation cost something, which is exactly what stops anyone from spamming infinite loops and grinding the network to a halt. You pay precisely for the work you ask thousands of nodes to perform — and a transaction that would exceed your gas budget simply stops.",
      ],
    },
    {
      heading: "EIP-1559: the base fee and the tip",
      paragraphs: [
        "Before 2021, fees were a chaotic blind auction — everyone guessing what to bid, routinely overpaying several-fold. **EIP-1559** replaced that with a system so effective other blockchains have copied it. The protocol itself now sets a **base fee**: a going rate per gas that every transaction in a block pays. If blocks run more than half full, the base fee ratchets up (by up to 12.5% per block); if they run emptier, it falls. Sustained demand compounds fast — that's why fees can climb steeply within minutes — and it decays just as fast when demand fades.",
        "Here's the elegant twist: the base fee is **burned** — destroyed, not paid to anyone. That removes any incentive for block producers to game fees upward, and it links network usage to ETH's supply: busy periods can destroy ETH faster than new coins are issued. On top of the base fee you add a small **priority fee** — a tip that actually goes to the block proposer as an incentive to include your transaction promptly. In calm conditions, a tip of a gwei or two is plenty.",
        "Your wallet wraps this in a **max fee** — the ceiling you're willing to pay per gas. The real charge is base fee + tip at the moment of inclusion, and anything below your ceiling is refunded automatically. So the scary-looking estimate is a cap, not a quote: you usually pay less. The low/medium/high buttons are mostly adjusting your tip and ceiling — how much you're paying for speed and certainty.",
      ],
    },
    {
      heading: "Why fees spike — and the L2 escape hatch",
      paragraphs: [
        "Block space is scarce on purpose: keeping blocks modest is what keeps Ethereum verifiable on ordinary hardware, which is the property everything else depends on. So when a hyped NFT mint, a market crash triggering liquidations, or a viral token sends everyone to transact at once, demand slams into a fixed supply and the base fee does its job — climbing until enough people drop out. High fees aren't the machine breaking; they're the machine rationing honestly, by price rather than by privilege.",
        "The designed escape is **layer 2**. Rollups execute your transaction on their own cheap infrastructure, then post compressed batches of thousands of transactions back to Ethereum. An L2 fee has two parts: a tiny execution fee for the rollup's own computer, plus your small share of the batch's Ethereum data cost. Since blobs (EIP-4844, 2024) gave rollups a dedicated cheap data lane, common L2 transactions have generally cost cents — often fractions of a cent — for security anchored to mainnet.",
        "This is the intended division of labour, not a workaround: mainnet as the maximally secure settlement floor where fees price scarce block space, and rollups as the everyday venue where ordinary activity is cheap. For most routine transactions, the single biggest fee-saving decision is simply *which layer you're on*.",
      ],
    },
    {
      heading: "Habits and gotchas",
      paragraphs: [
        "Practical habits that compound: **time your L1 transactions** — demand follows human hours, so weekends and off-peak hours (relative to US activity) are reliably cheaper, and a gas tracker shows you the live rate before you commit. **Batch what you can** — one transaction doing three things beats three transactions. **Never panic-bid**: if a transaction is stuck because the base fee rose past your ceiling, most wallets let you speed it up (resubmit with a higher fee) or cancel it rather than firing off duplicates.",
        "Now the gotchas that catch everyone once. **Failed transactions still cost gas** — the network did the work of executing your transaction up to the point of failure, and that work gets paid for even though the transaction's effects are reverted. **Out-of-gas** failures are the harsh version: set too low a gas limit, the execution runs out mid-flight, everything reverts, and the gas is still spent. Wallets estimate limits well; overriding them downward to save money is a false economy.",
        "Two more: token **approvals** are transactions too — before a protocol can move your tokens, you send a separate approval that costs its own gas, which is why your first interaction with any app is often two fees, not one. And every fee is paid in **ETH** (or the L2's gas token), never in the token you're moving — so keep a little ETH in any wallet you use, or you can find yourself unable to move your own funds. None of this is hard once you've seen it; all of it is baffling the first time. Now you've seen it.",
      ],
    },
  ],
  keyTakeaways: [
    "Every fee is gas units (how much work — fixed per action) times gas price (market rate in gwei — one billionth of an ETH).",
    "EIP-1559 splits the price into a protocol-set base fee that is burned and a small priority tip that pays the block proposer; your wallet's 'max fee' is a ceiling, and the unused portion is refunded.",
    "Fees spike because block space is deliberately scarce: when demand surges, the base fee climbs up to 12.5% per block until demand thins out.",
    "Layer 2 rollups are the designed escape hatch — batching thousands of transactions into cheap blob data on mainnet, bringing common transactions down to cents.",
    "Failed and out-of-gas transactions still cost gas, token approvals are separate paid transactions, and you always need ETH in the wallet to pay fees at all.",
  ],
  quiz: [
    {
      question: "A simple ETH transfer costs 21,000 gas at a total price of 10 gwei. What determines the final fee?",
      options: [
        "Only the amount of ETH being sent",
        "Gas units multiplied by the gas price — 21,000 × 10 gwei",
        "A flat fee set by the Ethereum Foundation",
        "The number of nodes that process the transaction",
      ],
      answerIndex: 1,
      explanation:
        "Fee = work × price: 21,000 gas × 10 gwei = 0.00021 ETH. The units measure the computation requested; the gwei price reflects current demand. The amount of ETH sent doesn't change the computation.",
    },
    {
      question: "Under EIP-1559, what happens to the base fee portion of your transaction fee?",
      options: [
        "It is paid to the validator who proposes the block",
        "It is refunded after the transaction confirms",
        "It is burned — permanently destroyed",
        "It is sent to the Ethereum Foundation treasury",
      ],
      answerIndex: 2,
      explanation:
        "The base fee is destroyed, which removes any incentive for block producers to manipulate it and ties network usage to ETH's supply. Only the priority tip goes to the proposer.",
    },
    {
      question: "Your transaction fails with an error. What happens to the gas?",
      options: [
        "It is fully refunded because nothing happened",
        "It is still charged, because the network performed the computation before the failure",
        "It is doubled as a penalty",
        "It converts into a pending credit for your next transaction",
      ],
      answerIndex: 1,
      explanation:
        "Thousands of nodes executed your transaction up to the failure point; that work is paid for even though all effects were reverted. Failed and out-of-gas transactions both burn the gas they consumed.",
    },
    {
      question: "Why are transactions on layer 2 rollups so much cheaper than on Ethereum mainnet?",
      options: [
        "Rollups are less secure, so they charge less",
        "Rollups execute cheaply off-chain and split the cost of one compressed data batch across thousands of transactions",
        "Rollup validators work for free",
        "Layer 2 fees are subsidised by the Ethereum protocol",
      ],
      answerIndex: 1,
      explanation:
        "An L2 fee is a tiny execution cost plus your small share of a batch posted to Ethereum — and since EIP-4844's blobs gave rollups a dedicated cheap data lane, that share is typically cents or less, with security still anchored to mainnet.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Gas and fees",
      url: "https://ethereum.org/en/developers/docs/gas/",
      note: "The canonical explainer, from gas units and gwei through EIP-1559 mechanics.",
    },
    {
      label: "EIP-1559",
      url: "https://eips.ethereum.org/EIPS/eip-1559",
      note: "The primary source: the full specification of the base fee and tip mechanism.",
    },
    {
      label: "Etherscan Gas Tracker",
      url: "https://etherscan.io/gastracker",
      note: "Live gas prices and cost estimates for common actions — check before you transact.",
    },
    {
      label: "ultrasound.money",
      url: "https://ultrasound.money",
      note: "Watch the burn in real time: how fees destroy ETH and shape its supply.",
    },
    {
      label: "L2BEAT",
      url: "https://l2beat.com",
      note: "The independent scoreboard of layer 2 networks — activity, security models, and costs.",
    },
  ],
};
