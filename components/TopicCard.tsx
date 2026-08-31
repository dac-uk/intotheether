import Link from "next/link";
import type { Topic } from "@/lib/types";
import { glowText, glowBorder } from "@/lib/markup";
import DecodedBadge from "@/components/DecodedBadge";

const levelLabel: Record<Topic["level"], string> = {
  initiate: "◈ INITIATE",
  operator: "◈◈ OPERATOR",
  architect: "◈◈◈ ARCHITECT",
};

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/learn/${topic.slug}`}
      className={`cyber-panel ${glowBorder[topic.glow]} group block p-5`}
    >
      <div className="flex items-start justify-between">
        <span className={`font-jp text-lg ${glowText[topic.glow]}`}>
          {topic.kana}
        </span>
        <span className="flex flex-col items-end gap-1 font-mono text-[9px] text-fog">
          {levelLabel[topic.level]}
          <DecodedBadge slug={topic.slug} />
        </span>
      </div>
      <h3 className="mt-3 font-display text-base font-bold tracking-wide text-ice group-hover:text-white">
        {topic.title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-fog">{topic.tagline}</p>
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-fog/70">
        <span className="uppercase">{topic.category}</span>
        <span>
          {topic.readingMinutes} min ▸{" "}
          <span className={glowText[topic.glow]}>DECODE</span>
        </span>
      </div>
    </Link>
  );
}
