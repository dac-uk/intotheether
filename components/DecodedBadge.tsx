"use client";

import { useEffect, useState } from "react";
import { getProgress, PROGRESS_EVENT } from "@/lib/progress";

type State = "decoded" | "read" | null;

/** Small per-topic status marker driven by localStorage progress. */
export default function DecodedBadge({ slug }: { slug: string }) {
  const [state, setState] = useState<State>(null);

  useEffect(() => {
    function refresh() {
      const p = getProgress();
      if (p.quiz[slug]?.passed) setState("decoded");
      else if (p.read[slug]) setState("read");
      else setState(null);
    }
    refresh();
    window.addEventListener(PROGRESS_EVENT, refresh);
    return () => window.removeEventListener(PROGRESS_EVENT, refresh);
  }, [slug]);

  if (state === "decoded") {
    return (
      <span className="font-mono text-[9px] text-neon-green">✓ DECODED</span>
    );
  }
  if (state === "read") {
    return <span className="font-mono text-[9px] text-neon-cyan">◍ READ</span>;
  }
  return null;
}
