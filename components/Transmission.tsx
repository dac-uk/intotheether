"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Signal {
  text: string;
  link: string;
  linkLabel: string;
}

const signals: Signal[] = [
  {
    text: "Every Ethereum transaction since 2021 has burned ETH out of existence. On busy days, the network destroys more ETH than it issues.",
    link: "/learn/ether-the-asset",
    linkLabel: "Decode the burn",
  },
  {
    text: "The Merge in 2022 cut Ethereum's energy use by roughly 99.95% overnight — one of the largest voluntary decarbonisation events in tech history.",
    link: "/learn/proof-of-stake",
    linkLabel: "How proof of stake works",
  },
  {
    text: "A flash loan lets you borrow millions with zero collateral — as long as you repay within the same transaction. Impossible in traditional finance; routine on Ethereum.",
    link: "/learn/defi-open-finance",
    linkLabel: "Enter open finance",
  },
  {
    text: "\"Privacy is necessary for an open society in the electronic age.\" — Eric Hughes wrote the Cypherpunk Manifesto in 1993, sixteen years before Bitcoin.",
    link: "/learn/cypherpunk-origins",
    linkLabel: "Trace the origins",
  },
  {
    text: "A zero-knowledge proof can convince you a statement is true while revealing nothing else — prove you're over 18 without showing your birthday.",
    link: "/learn/zero-knowledge",
    linkLabel: "Prove without revealing",
  },
  {
    text: "After the Dencun upgrade, sending money on Ethereum L2s costs cents — often less than a card network's cut on a cup of coffee.",
    link: "/learn/layer-2-rollups",
    linkLabel: "Ride the rollups",
  },
  {
    text: "Your seed phrase's 12–24 words encode a number so large that guessing it is like picking one atom out of the observable universe.",
    link: "/learn/self-custody",
    linkLabel: "Become sovereign",
  },
  {
    text: "Stablecoins settle trillions of dollars a year on Ethereum rails — quietly becoming one of the largest dollar payment networks on Earth.",
    link: "/learn/stablecoins",
    linkLabel: "Follow the digital dollar",
  },
  {
    text: "BlackRock runs a tokenised money-market fund on a public blockchain. The suits didn't kill DeFi — they joined the rails it runs on.",
    link: "/learn/future-of-finance",
    linkLabel: "See what's coming",
  },
  {
    text: "In 2021, thousands of strangers pooled $47M in a week to bid on a copy of the US Constitution — coordinated entirely by code.",
    link: "/learn/daos-governance",
    linkLabel: "Organisations as code",
  },
];

export default function Transmission() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    // Random pick must happen after hydration — the server can't know it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIndex(Math.floor(Math.random() * signals.length));
  }, []);

  if (index === null) {
    return (
      <div className="cyber-panel p-6">
        <p className="font-mono text-xs text-fog neon-pulse">
          ▚▞ receiving transmission…
        </p>
      </div>
    );
  }

  const s = signals[index];
  return (
    <div className="cyber-panel glow-border-cyan p-6">
      <div className="flex items-center justify-between">
        <p className="font-jp text-xs text-fog">
          受信中 — incoming transmission
        </p>
        <span className="font-mono text-[10px] text-neon-green neon-pulse">
          ● LIVE
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ice flicker-in" key={index}>
        {s.text}
      </p>
      <div className="mt-5 flex items-center gap-4">
        <Link
          href={s.link}
          className="border border-neon-cyan px-4 py-2 font-display text-[10px] tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-void"
        >
          {s.linkLabel.toUpperCase()} ▸
        </Link>
        <button
          onClick={() => setIndex((index + 1) % signals.length)}
          className="font-mono text-[10px] text-fog transition-colors hover:text-neon-magenta"
        >
          ⟳ next signal
        </button>
      </div>
    </div>
  );
}
