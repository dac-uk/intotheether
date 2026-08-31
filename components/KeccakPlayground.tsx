"use client";

import { useMemo, useState } from "react";
import { keccak256 } from "js-sha3";

/** Live keccak-256 — the hash function underneath every Ethereum address,
 *  transaction ID and block. */
export default function KeccakPlayground() {
  const [input, setInput] = useState("into the ether");
  const hash = useMemo(() => keccak256(input), [input]);

  // color the hex output in chunks for the neon effect
  const chunks = hash.match(/.{1,8}/g) ?? [];
  const palette = ["neon-cyan", "neon-magenta", "neon-violet", "neon-green"];

  return (
    <div className="cyber-panel p-6">
      <p className="font-jp text-xs text-fog">暗号関数 — one-way function</p>
      <h3 className="mt-1 font-display text-lg tracking-wider neon-violet">
        KECCAK-256 PLAYGROUND
      </h3>
      <p className="mt-3 text-xs leading-relaxed text-fog">
        This is the exact hash function Ethereum runs billions of times a day —
        it fingerprints every address, transaction and block. Change one
        character and watch the entire output avalanche. Easy to compute,
        impossible to reverse: the asymmetry all of crypto is built on.
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="type anything…"
        className="mt-4 w-full border border-line bg-void px-4 py-3 font-mono text-sm text-ice outline-none transition-colors focus:border-neon-violet"
      />
      <div className="mt-4 border border-line bg-void p-4">
        <p className="font-mono text-[10px] text-fog">keccak256(input) =</p>
        <p className="mt-2 break-all font-mono text-sm leading-relaxed">
          <span className="text-fog">0x</span>
          {chunks.map((c, i) => (
            <span key={i} className={palette[i % palette.length]}>
              {c}
            </span>
          ))}
        </p>
      </div>
      <p className="mt-3 text-[10px] text-fog/70">
        64 hex characters = 256 bits. The chance of two different inputs
        colliding is about 1 in 2¹²⁸ — more unlikely than picking the same
        atom twice from all the atoms on Earth.
      </p>
    </div>
  );
}
