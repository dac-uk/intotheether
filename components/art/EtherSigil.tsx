"use client";

import { useMemo, useState } from "react";
import { keccak256 } from "js-sha3";

/** Type anything → keccak-256 → a unique generative sigil.
 *  Same input, same sigil, forever — provenance as art. */
export default function EtherSigil() {
  const [input, setInput] = useState("satoshi");
  const hash = useMemo(() => keccak256(input), [input]);

  const bytes = useMemo(() => {
    const out: number[] = [];
    for (let i = 0; i < hash.length; i += 2) {
      out.push(parseInt(hash.slice(i, i + 2), 16));
    }
    return out;
  }, [hash]);

  const palette = ["#00e5ff", "#ff2ec4", "#9d6bff", "#3dff9e", "#ffc24b"];
  const primary = palette[bytes[0] % palette.length];
  const secondary = palette[(bytes[1] % (palette.length - 1) + 1 + (bytes[0] % palette.length)) % palette.length];

  // Build a symmetric constellation from hash bytes on a 9x9 grid (mirrored).
  const cells: { x: number; y: number; on: boolean; big: boolean }[] = [];
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 5; x++) {
      const b = bytes[(y * 5 + x) % bytes.length];
      const on = b % 3 !== 0;
      const big = b % 7 === 0;
      cells.push({ x, y, on, big });
      if (x < 4) cells.push({ x: 8 - x, y, on, big });
    }
  }

  // Orbital rings from later bytes
  const rings = [bytes[20] % 3 + 1];

  return (
    <div className="cyber-panel p-6">
      <p className="font-jp text-xs text-fog">紋章生成 — deterministic identity</p>
      <h3 className="mt-1 font-display text-lg tracking-wider neon-amber">
        ETHER SIGIL FORGE
      </h3>
      <p className="mt-3 text-xs leading-relaxed text-fog">
        Every input maps to exactly one sigil via keccak-256 — the same math
        that turns a public key into an Ethereum address. Your name has a
        sigil. It always has. Nobody chose it, and nobody can change it.
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="speak your name into the ether…"
        className="mt-4 w-full border border-line bg-void px-4 py-3 font-mono text-sm text-ice outline-none transition-colors focus:border-neon-amber"
      />

      <div className="mt-6 flex justify-center">
        <svg
          viewBox="0 0 180 180"
          className="h-56 w-56"
          role="img"
          aria-label={`Generated sigil for ${input}`}
        >
          <rect width="180" height="180" fill="#04050a" />
          {/* orbital rings */}
          {rings.map((r, i) => (
            <circle
              key={i}
              cx="90"
              cy="90"
              r={62 + r * 8}
              fill="none"
              stroke={secondary}
              strokeOpacity="0.35"
              strokeWidth="0.8"
              strokeDasharray={`${bytes[22] % 12 + 2} ${bytes[23] % 8 + 2}`}
            />
          ))}
          <circle cx="90" cy="90" r="74" fill="none" stroke={primary} strokeOpacity="0.25" strokeWidth="0.6" />
          {/* constellation grid */}
          <g transform="translate(34, 34)">
            {cells.map(
              (c, i) =>
                c.on && (
                  <rect
                    key={i}
                    x={c.x * 14 - (c.big ? 4.5 : 3)}
                    y={c.y * 14 - (c.big ? 4.5 : 3)}
                    width={c.big ? 9 : 6}
                    height={c.big ? 9 : 6}
                    fill={c.big ? secondary : primary}
                    opacity={c.big ? 0.95 : 0.75}
                    transform={`rotate(45 ${c.x * 14} ${c.y * 14})`}
                  />
                )
            )}
          </g>
        </svg>
      </div>

      <p className="mt-4 break-all text-center font-mono text-[9px] text-fog/60">
        0x{hash.slice(0, 40)}…
      </p>
    </div>
  );
}
