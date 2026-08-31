"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GlossaryEntry } from "@/lib/types";

export default function GlossarySearch({
  entries,
}: {
  entries: GlossaryEntry[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.term.toLowerCase().includes(q) ||
        e.definition.toLowerCase().includes(q)
    );
  }, [entries, query]);

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search the lexicon…"
          className="w-full border border-line bg-panel px-4 py-3 pl-10 font-mono text-sm text-ice outline-none transition-colors focus:border-neon-cyan"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-fog">
          ⌕
        </span>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-fog">
          {filtered.length}/{entries.length}
        </span>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {filtered.map((e) => (
          <div key={e.term} className="cyber-panel glow-border-cyan p-4">
            <p className="font-display text-sm tracking-wider text-neon-cyan">
              {e.term}
              {e.kana && (
                <span className="font-jp ml-2 text-[10px] text-fog">
                  {e.kana}
                </span>
              )}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-fog">
              {e.definition}
            </p>
            {e.related && e.related.length > 0 && (
              <p className="mt-2 text-[10px]">
                {e.related.map((slug) => (
                  <Link
                    key={slug}
                    href={`/learn/${slug}`}
                    className="mr-2 text-neon-magenta/70 hover:text-neon-magenta"
                  >
                    ▸ {slug.replace(/-/g, " ")}
                  </Link>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-center font-mono text-sm text-fog">
          ∅ no signal on &quot;{query}&quot; — try another frequency
        </p>
      )}
    </div>
  );
}
