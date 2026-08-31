"use client";

import { useEffect, useState } from "react";
import {
  getProgress,
  passedCount,
  rankFor,
  rankGlyph,
  PROGRESS_EVENT,
} from "@/lib/progress";

/** Overall decode progress bar for the /learn index. */
export default function LearnProgress({ totalTopics }: { totalTopics: number }) {
  const [stats, setStats] = useState<{ read: number; passed: number } | null>(
    null
  );

  useEffect(() => {
    function refresh() {
      const p = getProgress();
      setStats({
        read: Object.keys(p.read).length,
        passed: passedCount(p),
      });
    }
    refresh();
    window.addEventListener(PROGRESS_EVENT, refresh);
    return () => window.removeEventListener(PROGRESS_EVENT, refresh);
  }, []);

  if (!stats || (stats.read === 0 && stats.passed === 0)) return null;

  const rank = rankFor(stats.passed, totalTopics);
  const nextRank =
    rank === "INITIATE"
      ? `${Math.ceil(totalTopics / 3)} quizzes passed unlocks OPERATOR`
      : rank === "OPERATOR"
        ? `pass all ${totalTopics} to reach ARCHITECT`
        : "maximum clearance reached";

  return (
    <div className="cyber-panel mt-8 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-xs tracking-[0.3em] text-ice">
          {rankGlyph[rank]}{" "}
          <span className={rank === "ARCHITECT" ? "neon-magenta" : "neon-cyan"}>
            {rank}
          </span>{" "}
          CLEARANCE
        </p>
        <p className="font-mono text-[10px] text-fog">
          {stats.read} read · {stats.passed}/{totalTopics} decoded — {nextRank}
        </p>
      </div>
      <div className="mt-3 flex h-2 w-full gap-px overflow-hidden bg-line">
        <div
          className="h-full bg-neon-green transition-all duration-500"
          style={{ width: `${(stats.passed / totalTopics) * 100}%` }}
          title={`${stats.passed} quizzes passed`}
        />
        <div
          className="h-full bg-neon-cyan/40 transition-all duration-500"
          style={{
            width: `${(Math.max(0, stats.read - stats.passed) / totalTopics) * 100}%`,
          }}
          title="read, not yet decoded"
        />
      </div>
    </div>
  );
}
