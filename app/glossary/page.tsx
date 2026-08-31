import type { Metadata } from "next";
import { glossary } from "@/content/glossary";
import GlossarySearch from "@/components/GlossarySearch";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "The lexicon of the machine city — forty essential Ethereum, DeFi and web3 terms, searchable.",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <p className="font-jp text-xs tracking-[0.4em] text-neon-green">用語集</p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-widest text-ice md:text-4xl">
        THE <span className="neon-green">LEXICON</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Every subculture has its language; this one compiles. Search the terms
        of the new financial machine — each entry links back into the deep
        dives where it lives.
      </p>
      <div className="mt-10">
        <GlossarySearch entries={glossary} />
      </div>
    </div>
  );
}
