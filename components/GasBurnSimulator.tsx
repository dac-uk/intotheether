"use client";

import { useState } from "react";

/** EIP-1559 intuition pump: demand vs target → base fee moves, ETH burns. */
export default function GasBurnSimulator() {
  const [demand, setDemand] = useState(50); // % of max block usage

  const target = 50; // EIP-1559 targets 50% full blocks
  const delta = (demand - target) / target; // -1..1
  const feeShift = delta * 12.5; // max ±12.5% per block
  const baseFee = 10 * (1 + feeShift / 100); // toy base of 10 gwei
  // toy burn estimate: base fee × gas used per block × blocks/day
  const gasUsed = 30_000_000 * (demand / 100);
  const burnedPerDay = (baseFee * 1e-9 * gasUsed * 7200);

  const state =
    demand > 66 ? "SURGE" : demand > 50 ? "ELEVATED" : demand < 33 ? "QUIET" : "EQUILIBRIUM";
  const stateColor =
    demand > 66 ? "neon-magenta" : demand > 50 ? "neon-amber" : "neon-cyan";

  return (
    <div className="cyber-panel p-6">
      <p className="font-jp text-xs text-fog">燃焼機構 — the burn mechanism</p>
      <h3 className="mt-1 font-display text-lg tracking-wider neon-magenta">
        EIP-1559 BURN SIMULATOR
      </h3>
      <p className="mt-3 text-xs leading-relaxed text-fog">
        Since 2021, every transaction burns its base fee — destroying ETH
        forever. Blocks target 50% full: more demand pushes the base fee up
        (max +12.5% per block), less demand pulls it down. Drag network demand
        and watch the mechanism react.
      </p>

      <label className="mt-5 block">
        <span className="flex justify-between font-mono text-[11px] text-fog">
          <span>NETWORK DEMAND (block fullness)</span>
          <span className="text-neon-cyan">{demand}%</span>
        </span>
        <input
          type="range"
          min={5}
          max={100}
          value={demand}
          onChange={(e) => setDemand(Number(e.target.value))}
          className="mt-2 w-full"
        />
      </label>

      {/* block visual */}
      <div className="mt-5 h-6 w-full border border-line bg-panel">
        <div
          className={`h-full transition-all duration-300 ${
            demand > 66
              ? "bg-gradient-to-r from-neon-amber/60 to-neon-magenta/80"
              : "bg-gradient-to-r from-neon-cyan/40 to-neon-cyan/70"
          }`}
          style={{ width: `${demand}%` }}
        />
      </div>
      <div className="relative">
        <div
          className="absolute -top-8 h-8 border-l border-dashed border-fog/50"
          style={{ left: "50%" }}
        />
        <p className="mt-1 text-center font-mono text-[10px] text-fog/60">
          ▲ 50% target
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
        <div>
          <p className="font-mono text-[10px] text-fog">STATE</p>
          <p className={`font-display text-sm ${stateColor}`}>{state}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] text-fog">BASE FEE DRIFT</p>
          <p className="font-display text-sm neon-cyan">
            {feeShift >= 0 ? "+" : ""}
            {feeShift.toFixed(1)}%/block
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] text-fog">EST. BURN/DAY†</p>
          <p className="font-display text-sm neon-magenta">
            🔥 {burnedPerDay.toFixed(0)} ETH
          </p>
        </div>
      </div>
      <p className="mt-4 text-[10px] leading-relaxed text-fog/70">
        †Illustrative model at a 10 gwei base fee, 30M gas blocks, 7,200
        blocks/day. Real figures float with the market — see{" "}
        <a
          href="https://ultrasound.money"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan hover:underline"
        >
          ultrasound.money
        </a>{" "}
        for the live burn.
      </p>
    </div>
  );
}
