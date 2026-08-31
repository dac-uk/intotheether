"use client";

import { useState } from "react";

/** Projects staking growth. APR is user-adjustable — defaults to a
 *  conservative recent-range figure, clearly labelled as an assumption. */
export default function StakingCalculator() {
  const [eth, setEth] = useState(10);
  const [apr, setApr] = useState(3.2);
  const [years, setYears] = useState(5);
  const [price, setPrice] = useState(4000);

  const finalEth = eth * Math.pow(1 + apr / 100, years);
  const gained = finalEth - eth;

  const points = Array.from({ length: years + 1 }, (_, y) =>
    eth * Math.pow(1 + apr / 100, y)
  );
  const max = points[points.length - 1];

  return (
    <div className="cyber-panel p-6">
      <p className="font-jp text-xs text-fog">複利計算 — compounding projection</p>
      <h3 className="mt-1 font-display text-lg tracking-wider neon-green">
        STAKING YIELD PROJECTOR
      </h3>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {[
          {
            label: "ETH STAKED",
            value: eth,
            set: setEth,
            min: 0.1,
            max: 320,
            step: 0.1,
            fmt: (v: number) => `${v.toFixed(1)} ETH`,
          },
          {
            label: "ASSUMED APR",
            value: apr,
            set: setApr,
            min: 0.5,
            max: 12,
            step: 0.1,
            fmt: (v: number) => `${v.toFixed(1)}%`,
          },
          {
            label: "YEARS",
            value: years,
            set: setYears,
            min: 1,
            max: 30,
            step: 1,
            fmt: (v: number) => `${v} yr`,
          },
          {
            label: "ETH PRICE (USD)",
            value: price,
            set: setPrice,
            min: 100,
            max: 20000,
            step: 100,
            fmt: (v: number) => `$${v.toLocaleString()}`,
          },
        ].map((s) => (
          <label key={s.label} className="block">
            <span className="flex justify-between font-mono text-[11px] text-fog">
              <span>{s.label}</span>
              <span className="text-neon-cyan">{s.fmt(s.value)}</span>
            </span>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={s.value}
              onChange={(e) => s.set(Number(e.target.value))}
              className="mt-2 w-full"
            />
          </label>
        ))}
      </div>

      {/* bar chart */}
      <div className="mt-6 flex h-28 items-end gap-1">
        {points.map((p, i) => (
          <div
            key={i}
            className="group relative flex-1 bg-gradient-to-t from-neon-green/20 to-neon-green/60 transition-all hover:to-neon-green"
            style={{ height: `${(p / max) * 100}%` }}
            title={`Year ${i}: ${p.toFixed(2)} ETH`}
          />
        ))}
      </div>
      <div className="flex justify-between font-mono text-[10px] text-fog">
        <span>now</span>
        <span>+{years}y</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
        <div>
          <p className="font-mono text-[10px] text-fog">FINAL STACK</p>
          <p className="font-display text-sm neon-green">
            {finalEth.toFixed(2)} ETH
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] text-fog">ETH GAINED</p>
          <p className="font-display text-sm neon-cyan">
            +{gained.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] text-fog">USD VALUE*</p>
          <p className="font-display text-sm neon-amber">
            ${Math.round(finalEth * price).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="mt-4 text-[10px] leading-relaxed text-fog/70">
        *Assumes constant APR and price — reality will differ. Staking yield
        floats with network activity; ETH price is volatile. A projection, not
        a promise. Not financial advice.
      </p>
    </div>
  );
}
