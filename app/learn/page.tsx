import type { Metadata } from "next";
import { topics } from "@/content/topics";
import TopicCard from "@/components/TopicCard";
import type { TopicCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Deep Dives",
  description:
    "Fourteen deep dives into Ethereum: foundations, DeFi, the frontier, and the culture of digital sovereignty.",
};

const categories: { key: TopicCategory; label: string; kana: string; blurb: string }[] = [
  {
    key: "foundations",
    label: "FOUNDATIONS",
    kana: "基礎",
    blurb: "The core machinery: the world computer, its money, its consensus, its contracts.",
  },
  {
    key: "defi",
    label: "OPEN FINANCE",
    kana: "金融",
    blurb: "Finance rebuilt as open code: exchanges, dollars, yield — no permission required.",
  },
  {
    key: "frontier",
    label: "THE FRONTIER",
    kana: "前線",
    blurb: "Where it's heading: rollups, zero-knowledge, and the tokenisation of everything.",
  },
  {
    key: "culture",
    label: "THE CULTURE",
    kana: "文化",
    blurb: "The ideas underneath: cypherpunks, sovereignty, code-borne organisations, on-chain art.",
  },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="font-jp text-xs tracking-[0.4em] text-neon-magenta">
        深層解析
      </p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-widest text-ice md:text-4xl">
        DEEP <span className="neon-cyan">DIVES</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Fourteen transmissions, four frequencies. Each one is a self-contained
        descent: the concepts, the mechanisms, the honest risks, a knowledge
        check to prove you decoded it — and outbound links to go deeper. Start
        anywhere. The ether doesn&apos;t care about order.
      </p>

      {categories.map((cat) => {
        const catTopics = topics.filter((t) => t.category === cat.key);
        if (catTopics.length === 0) return null;
        return (
          <section key={cat.key} className="mt-12">
            <div className="flex items-baseline gap-3 border-b border-line pb-3">
              <span className="font-jp text-sm text-neon-cyan">{cat.kana}</span>
              <h2 className="font-display text-sm tracking-[0.3em] text-ice">
                {cat.label}
              </h2>
              <span className="hidden text-xs text-fog sm:inline">
                — {cat.blurb}
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catTopics.map((t) => (
                <TopicCard key={t.slug} topic={t} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
