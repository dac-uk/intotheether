"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getProgress,
  passedCount,
  rankFor,
  rankGlyph,
  PROGRESS_EVENT,
  type Rank,
} from "@/lib/progress";

const rankColor: Record<Rank, string> = {
  INITIATE: "text-fog",
  OPERATOR: "text-neon-cyan",
  ARCHITECT: "text-neon-magenta",
};

export default function RankBadge({ totalTopics }: { totalTopics: number }) {
  const [state, setState] = useState<{ rank: Rank; passed: number } | null>(
    null
  );

  useEffect(() => {
    function refresh() {
      const passed = passedCount(getProgress());
      setState({ rank: rankFor(passed, totalTopics), passed });
    }
    refresh();
    window.addEventListener(PROGRESS_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [totalTopics]);

  if (!state) return null;

  return (
    <Link
      href="/learn"
      className={`whitespace-nowrap font-mono text-[10px] tracking-wider ${rankColor[state.rank]} hover:brightness-125`}
      title={`${state.passed}/${totalTopics} transmissions decoded — pass every quiz to reach ARCHITECT`}
    >
      {rankGlyph[state.rank]} {state.rank} {state.passed}/{totalTopics}
    </Link>
  );
}
