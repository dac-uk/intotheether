import type { Metadata } from "next";
import Observatory from "@/components/Observatory";

export const metadata: Metadata = {
  title: "Observatory",
  description:
    "Watch the world computer breathe: live block height, gas, burn rate and blob traffic, read straight from Ethereum mainnet.",
};

export default function ObservatoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="font-jp text-xs tracking-[0.4em] text-neon-green">観測所</p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-widest text-ice md:text-4xl">
        THE <span className="neon-green">OBSERVATORY</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Everything below is read live from Ethereum mainnet over public RPC —
        no keys, no middlemen, the same open access anyone on Earth has. This
        is the machine the deep dives describe, breathing in real time: a block
        every twelve seconds, fees floating on demand, ETH burning as the city
        works.
      </p>

      <div className="mt-10">
        <Observatory />
      </div>

      <div className="mt-12 border-t border-line pt-6">
        <p className="font-display text-xs tracking-[0.3em] text-fog">
          ⇱ DEEPER TELEMETRY
        </p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          {[
            ["https://ultrasound.money", "ultrasound.money — supply & burn"],
            ["https://etherscan.io/gastracker", "Etherscan — gas tracker"],
            ["https://beaconcha.in", "beaconcha.in — validators & consensus"],
            ["https://l2beat.com", "L2BEAT — rollup ecosystem"],
            ["https://mevboost.pics", "mevboost.pics — block building"],
          ].map(([url, label]) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-neon-green"
            >
              ↗ {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
