import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, topicBySlug } from "@/content/topics";
import { renderInline, glowText } from "@/lib/markup";
import Quiz from "@/components/Quiz";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) return {};
  return { title: topic.title, description: topic.tagline };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();

  const idx = topics.findIndex((t) => t.slug === slug);
  const next = topics[(idx + 1) % topics.length];
  const glow = glowText[topic.glow];

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      {/* header */}
      <p className="font-mono text-[10px] tracking-widest text-fog">
        <Link href="/learn" className="hover:text-neon-cyan">
          DEEP DIVES
        </Link>{" "}
        / {topic.category.toUpperCase()} · {topic.level.toUpperCase()} ·{" "}
        {topic.readingMinutes} MIN
      </p>
      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="font-display text-3xl font-black tracking-wide text-ice md:text-4xl">
          {topic.title}
        </h1>
        <span className={`font-jp shrink-0 text-2xl ${glow}`}>{topic.kana}</span>
      </div>
      <p className={`mt-3 font-mono text-sm ${glow}`}>{topic.tagline}</p>

      {/* intro */}
      <div className="ether-prose mt-8 border-l-2 border-line pl-5 text-[15px]">
        {topic.intro.map((p, i) => (
          <p key={i}>{renderInline(p)}</p>
        ))}
      </div>

      {/* sections */}
      {topic.sections.map((s, i) => (
        <section key={i} className="mt-10">
          <h2 className="font-display text-lg font-bold tracking-wider text-ice">
            <span className={`mr-2 ${glow}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.heading}
          </h2>
          <div className="ether-prose mt-4 text-[15px]">
            {s.paragraphs.map((p, j) => (
              <p key={j}>{renderInline(p)}</p>
            ))}
          </div>
        </section>
      ))}

      {/* takeaways */}
      <section className="cyber-panel mt-12 p-6">
        <p className="font-jp text-xs text-fog">要点 — burn these in</p>
        <h2 className="mt-1 font-display text-sm tracking-[0.3em] text-ice">
          KEY TAKEAWAYS
        </h2>
        <ul className="mt-4 space-y-3">
          {topic.keyTakeaways.map((t, i) => (
            <li key={i} className="flex gap-3 text-xs leading-relaxed text-fog">
              <span className={`shrink-0 ${glow}`}>▸</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* quiz */}
      <section className="mt-12">
        <h2 className="mb-4 font-display text-sm tracking-[0.3em] text-ice">
          ▞▚ PROVE THE DECODE
        </h2>
        <Quiz questions={topic.quiz} />
      </section>

      {/* explore */}
      <section className="mt-12">
        <h2 className="font-display text-sm tracking-[0.3em] text-ice">
          ⇱ CONTINUE THE DESCENT
        </h2>
        <p className="mt-2 text-xs text-fog">
          Outbound signals — vetted places to go deeper on this frequency.
        </p>
        <div className="mt-4 space-y-3">
          {topic.explore.map((e) => (
            <a
              key={e.url}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-panel glow-border-cyan block p-4"
            >
              <p className="font-mono text-xs text-neon-cyan">↗ {e.label}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-fog">
                {e.note}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* next */}
      <div className="mt-14 border-t border-line pt-6 text-right">
        <p className="font-mono text-[10px] text-fog">NEXT TRANSMISSION</p>
        <Link
          href={`/learn/${next.slug}`}
          className={`font-display text-lg tracking-wider ${glowText[next.glow]} hover:underline`}
        >
          {next.title} ▸
        </Link>
      </div>
    </article>
  );
}
