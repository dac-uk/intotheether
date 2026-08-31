import type { Topic } from "@/lib/types";

export const topic: Topic = {
  slug: "proof-of-stake",
  title: "Proof of Stake",
  kana: "ステーキング",
  tagline: "Security by skin in the game — a chain defended by capital, not kilowatts.",
  category: "foundations",
  level: "operator",
  readingMinutes: 11,
  glow: "green",
  intro: [
    "Every blockchain faces the same problem: thousands of strangers, scattered across the planet, must agree on a single history of who owns what — with no referee, and with attackers actively trying to rewrite it. The mechanism that produces that agreement is called **consensus**, and it is the beating heart of the whole system.",
    "Ethereum's answer is **proof of stake**: replace the roaring warehouses of mining hardware with locked-up capital. To help write the chain's history, you post ETH as a security deposit. Write honestly and you earn yield; try to cheat and the protocol destroys your deposit. It is security by aligned incentive — and the story of how Ethereum switched to it, live, without missing a block, is one of the great engineering feats of the decade.",
  ],
  sections: [
    {
      heading: "Validators: the new miners",
      paragraphs: [
        "A **validator** is a staked identity on the network: 32 ETH locked as collateral, plus software that stays online and participates in consensus. There are on the order of a million validator slots active, run by hundreds of thousands of machines — from hobbyist boxes in spare bedrooms to professional operations staking on behalf of millions of users.",
        "The daily work is unglamorous and constant. Every twelve seconds — a **slot** — one validator is randomly chosen to propose a block. Thousands of others are assigned to check it and publish **attestations**: signed votes saying 'I have seen this block and it follows the rules'. The chain everyone accepts is simply the one with the greatest weight of attesting stake behind it.",
        "Rewards flow to validators who do this reliably: fresh issuance, transaction fee tips, and MEV. Penalties flow the other way — go offline and you leak small amounts; commit a provable offence like signing two conflicting blocks and you are **slashed**, losing a chunk of stake and being ejected from the validator set. The protocol doesn't need to trust anyone; it just makes honesty the only profitable strategy.",
      ],
    },
    {
      heading: "Finality: when settled means settled",
      paragraphs: [
        "Proof-of-work chains only ever offer probabilistic settlement: a Bitcoin transaction gets safer with each confirmation, but there is no moment when reversal becomes formally impossible. Ethereum adds a stronger guarantee. Validators periodically vote on **checkpoints**, and once two-thirds of all staked ETH has endorsed one, it is **finalised** — under normal operation, this takes roughly fifteen minutes.",
        "Finality is not a promise, it is a tripwire. Reverting a finalised block would require at least a third of all staked ETH to sign contradictory votes — behaviour the protocol can detect and slash automatically. An attacker wouldn't just need to marshal billions of dollars of stake; they would need to volunteer it for incineration.",
        "This is what makes Ethereum credible **settlement infrastructure**. When an exchange, a rollup, or a tokenised bond fund treats a finalised transaction as done, that confidence is backed by an explicit, quantifiable economic bond — not by waiting and hoping the miners stay friendly.",
      ],
    },
    {
      heading: "The Merge: swapping engines mid-flight",
      paragraphs: [
        "Ethereum launched in 2015 on proof of work, the same mining model as Bitcoin, with proof of stake always the stated destination. Getting there took seven years: a parallel proof-of-stake chain (the Beacon Chain) ran alongside mainnet from late 2020, accumulating validators and battle-testing the consensus code while the real economy kept running on the old engine.",
        "On 15 September 2022 came **The Merge**: the execution layer detached from its miners and docked onto the Beacon Chain in a single coordinated transition. No downtime, no lost funds, no restart — hundreds of billions of dollars in flight while the engines were swapped. Overnight, Ethereum's energy consumption fell by roughly **99.95%**, from the footprint of a mid-sized country to that of a small office building.",
        "The Merge also transformed ETH's economics. Issuance dropped by around 90% — the network no longer needed to print coins to pay for electricity — and combined with the EIP-1559 burn, ETH's supply has hovered near flat ever since. Security got cheaper, cleaner, and arguably stronger in one stroke.",
      ],
    },
    {
      heading: "Stake versus work",
      paragraphs: [
        "Proof of work's virtue is its physicality: attacking Bitcoin means acquiring and powering warehouses of specialised hardware, an external, real-world cost. Its drawbacks are that same physics — enormous energy use, hardware centralisation around cheap electricity, and a security budget paid entirely in perpetual issuance and fees.",
        "Proof of stake internalises the security budget. The 'hardware' is capital already inside the system, so attacks are not just expensive but **self-destructive**: the weapon burns as you fire it. Recovery differs too — after a proof-of-work attack the same hardware can attack again, while a slashed proof-of-stake attacker has permanently lost their means of attack. Critics counter that stake begets stake (the rich compound), and that proof of stake's security is more reflexive, resting on the value of the very token it defends. Both models work; they occupy different points in the design space, and the two largest chains in the world now embody one each.",
      ],
    },
    {
      heading: "The centralisation question",
      paragraphs: [
        "Proof of stake's open wound is stake concentration. Most holders can't or won't run their own validator, so they delegate to **staking pools** and exchanges. Liquid staking protocols — **Lido** foremost among them — have at times commanded a quarter or more of all staked ETH, and a handful of exchanges hold large slices too. If any single operator or coordinated cartel approached one-third of stake, it could threaten finality; approach two-thirds and it could dictate it.",
        "The community treats this as a live threat, not a footnote. Mitigations include distributed validator technology (splitting one validator's key across many independent operators), Rocket Pool-style permissionless node operation, social pressure that has pushed Lido toward self-limiting and operator diversity, and protocol research into making solo staking easier and cheaper. Client diversity — multiple independent software implementations — guards against the parallel risk of a single bug taking down the network.",
        "The honest scorecard: Ethereum's validator set is among the most decentralised security systems ever built, and simultaneously less decentralised than its ideals demand. The tension between convenient delegation and credible neutrality is proof of stake's defining ongoing negotiation.",
      ],
    },
  ],
  keyTakeaways: [
    "Proof of stake secures Ethereum with locked capital: validators post 32 ETH, earn yield for honest work, and are slashed for provable attacks.",
    "Validators propose blocks and publish attestations every slot; the canonical chain is the one with the most attesting stake behind it.",
    "Finality (~15 minutes) makes reverting history require destroying at least a third of all staked ETH — a formal economic settlement guarantee.",
    "The Merge (September 2022) swapped consensus engines with zero downtime and cut Ethereum's energy use by roughly 99.95%.",
    "Stake concentration in pools like Lido is proof of stake's central open problem, actively countered by distributed validators and client diversity.",
  ],
  quiz: [
    {
      question: "What does a validator risk by attacking the Ethereum chain?",
      options: [
        "Nothing — attacks are only punished by social disapproval",
        "A fine paid in dollars to the Ethereum Foundation",
        "Slashing: the protocol destroys part of their staked ETH and ejects them",
        "Their mining hardware becomes incompatible with the network",
      ],
      answerIndex: 2,
      explanation:
        "Provable offences, like signing two conflicting blocks, trigger slashing — automatic destruction of stake and removal from the validator set. Attacks are self-destructive by design.",
    },
    {
      question: "What does it mean when an Ethereum block is 'finalised'?",
      options: [
        "It has been confirmed by six subsequent blocks",
        "Two-thirds of all staked ETH has endorsed it, so reverting it would require massive, slashable misbehaviour",
        "The Ethereum Foundation has signed off on it",
        "All pending transactions in the mempool have been included",
      ],
      answerIndex: 1,
      explanation:
        "Finality is an explicit economic guarantee: undoing a finalised checkpoint requires at least a third of all stake to sign contradictory votes — detectable and automatically slashed.",
    },
    {
      question: "What was the immediate environmental effect of The Merge?",
      options: [
        "Energy use fell by roughly 99.95%",
        "Energy use was offset by carbon credits purchased with fees",
        "Mining moved entirely to renewable sources",
        "Energy use halved as half the miners retired",
      ],
      answerIndex: 0,
      explanation:
        "Replacing mining with staking removed nearly all of Ethereum's energy demand overnight — from a nation-scale footprint to something closer to a small office building.",
    },
    {
      question: "Why is the concentration of stake in large pools like Lido considered a risk?",
      options: [
        "Pools charge fees that make staking unprofitable",
        "Pooled ETH cannot earn rewards under protocol rules",
        "An operator or cartel controlling a third of stake could threaten finality; two-thirds could dictate it",
        "Large pools slow down block production for everyone",
      ],
      answerIndex: 2,
      explanation:
        "Consensus thresholds sit at one-third and two-thirds of stake. Concentration toward those lines erodes the credible neutrality that proof of stake is meant to guarantee — hence the push for distributed validators and self-limits.",
    },
  ],
  explore: [
    {
      label: "ethereum.org — Proof-of-stake",
      url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",
      note: "The canonical technical overview of Ethereum's consensus mechanism.",
    },
    {
      label: "ethereum.org — The Merge",
      url: "https://ethereum.org/en/roadmap/merge/",
      note: "The full story of the engine swap, including the energy numbers.",
    },
    {
      label: "beaconcha.in",
      url: "https://beaconcha.in",
      note: "Live explorer for the consensus layer: validators, attestations, slashings.",
    },
    {
      label: "ethereum.org — Staking",
      url: "https://ethereum.org/en/staking/",
      note: "How to participate — solo, pooled, and everything between.",
    },
    {
      label: "clientdiversity.org",
      url: "https://clientdiversity.org",
      note: "Why running minority clients matters for the network's resilience.",
    },
  ],
};
