import type { Metadata } from "next";
import { timeline } from "@/content/timeline";
import TimelineView from "@/components/TimelineView";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "From the Cypherpunk Manifesto to the rollup age — four decades of code versus control, on one timeline.",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <p className="font-jp text-xs tracking-[0.4em] text-neon-amber">年代記</p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-widest text-ice md:text-4xl">
        THE <span className="neon-amber">CHRONICLE</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Ethereum didn&apos;t appear from nowhere. It is the latest chapter in a
        forty-year argument between cryptographers and control — from mail-list
        manifestos to a trillion-dollar settlement layer. Filter by era, or
        scroll the whole arc.
      </p>
      <div className="mt-10">
        <TimelineView events={timeline} />
      </div>
    </div>
  );
}
