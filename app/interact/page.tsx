import type { Metadata } from "next";
import StakingCalculator from "@/components/StakingCalculator";
import GasBurnSimulator from "@/components/GasBurnSimulator";
import KeccakPlayground from "@/components/KeccakPlayground";
import EtherSigil from "@/components/art/EtherSigil";

export const metadata: Metadata = {
  title: "Interact",
  description:
    "Run Ethereum's machinery yourself: simulate the EIP-1559 burn, project staking yield, hash with keccak-256, forge your sigil.",
};

export default function InteractPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="font-jp text-xs tracking-[0.4em] text-neon-magenta">
        実験室
      </p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-widest text-ice md:text-4xl">
        THE <span className="neon-magenta">MACHINE ROOM</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Reading about the machinery is one thing. Pulling its levers is
        another. Four live instruments — each one models a real mechanism at
        the heart of Ethereum. Nothing here touches a real chain; everything
        here teaches how the real chain behaves.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <GasBurnSimulator />
        <StakingCalculator />
        <KeccakPlayground />
        <EtherSigil />
      </div>
    </div>
  );
}
