"use client";

import { useState } from "react";
import type { TimelineEvent } from "@/lib/types";
import { glowText } from "@/lib/markup";

const eras: { key: TimelineEvent["era"]; label: string; kana: string }[] = [
  { key: "cypherpunk", label: "CYPHERPUNK", kana: "起源" },
  { key: "genesis", label: "GENESIS", kana: "創世" },
  { key: "expansion", label: "EXPANSION", kana: "拡張" },
  { key: "merge", label: "THE MERGE", kana: "合併" },
  { key: "horizon", label: "HORIZON", kana: "地平" },
];

export default function TimelineView({ events }: { events: TimelineEvent[] }) {
  const [activeEra, setActiveEra] = useState<TimelineEvent["era"] | "all">(
    "all"
  );

  const visible =
    activeEra === "all" ? events : events.filter((e) => e.era === activeEra);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveEra("all")}
          className={`border px-3 py-1.5 font-display text-[10px] tracking-widest transition-colors ${
            activeEra === "all"
              ? "border-neon-cyan text-neon-cyan"
              : "border-line text-fog hover:text-ice"
          }`}
        >
          ALL ERAS
        </button>
        {eras.map((era) => (
          <button
            key={era.key}
            onClick={() => setActiveEra(era.key)}
            className={`border px-3 py-1.5 font-display text-[10px] tracking-widest transition-colors ${
              activeEra === era.key
                ? "border-neon-magenta text-neon-magenta"
                : "border-line text-fog hover:text-ice"
            }`}
          >
            <span className="font-jp mr-1">{era.kana}</span>
            {era.label}
          </button>
        ))}
      </div>

      <div className="relative border-l border-line pl-8">
        {visible.map((e, i) => (
          <div key={`${e.year}-${e.title}`} className="relative pb-10">
            <span
              className={`absolute -left-[37px] top-1 h-2.5 w-2.5 rotate-45 border-2 border-current bg-void ${glowText[e.glow]}`}
            />
            <p className="font-mono text-xs text-fog">
              <span className={`font-display text-base ${glowText[e.glow]}`}>
                {e.year}
              </span>
              {e.date && <span className="ml-2">{e.date}</span>}
              <span className="ml-3 font-jp text-[10px] opacity-60">
                {eras.find((x) => x.key === e.era)?.kana}
              </span>
            </p>
            <h3 className="mt-1 font-display text-sm tracking-wider text-ice">
              {e.title}
            </h3>
            <p
              className="mt-2 max-w-2xl text-xs leading-relaxed text-fog flicker-in"
              style={{ animationDelay: `${Math.min(i * 60, 600)}ms` }}
            >
              {e.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
