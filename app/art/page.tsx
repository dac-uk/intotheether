import type { Metadata } from "next";
import MatrixRain from "@/components/art/MatrixRain";
import NeonHorizon from "@/components/art/NeonHorizon";
import EtherFlow from "@/components/art/EtherFlow";
import BlockWeave from "@/components/art/BlockWeave";

export const metadata: Metadata = {
  title: "Digital Art",
  description:
    "Generative digital art rendered live in your browser — the aesthetics of the world computer made visible.",
};

const pieces = [
  {
    title: "DIGITAL RAIN",
    kana: "電脳雨",
    desc: "Katakana and hex falling through the void — every glyph a fragment of state, every column a thread of the machine's memory. The occasional magenta anomaly is a transaction finding its block.",
    component: MatrixRain,
    tall: true,
  },
  {
    title: "NEON HORIZON",
    kana: "地平線",
    desc: "The city at the edge of the network. A synthwave sun sets behind a procedurally-grown skyline; the grid rolls forever toward you. Somewhere out there, a validator is proposing a block.",
    component: NeonHorizon,
    tall: true,
  },
  {
    title: "ETHER FLOW",
    kana: "気流",
    desc: "Four hundred particles tracing an invisible flow field — capital, information and intent moving through the mempool. No particle knows the whole; the pattern emerges anyway.",
    component: EtherFlow,
    tall: true,
  },
  {
    title: "BLOCK WEAVE",
    kana: "連鎖",
    desc: "The chain as a living pulse. Blocks link, data packets travel, and every twelve seconds the magenta head advances — a heartbeat of finality that has never once stopped.",
    component: BlockWeave,
    tall: false,
  },
];

export default function ArtPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="font-jp text-xs tracking-[0.4em] text-neon-violet">
        生成芸術
      </p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-widest text-ice md:text-4xl">
        THE <span className="neon-violet">GALLERY</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
        Four generative pieces, computed live in your browser — no images, no
        video, just code painting sixty frames a second. This is the tradition
        of on-chain generative art: the artwork is the algorithm, and every
        render is a fresh performance. Want your own piece? Forge a sigil in
        the{" "}
        <a href="/interact" className="text-neon-cyan hover:underline">
          machine room
        </a>
        .
      </p>

      <div className="mt-10 space-y-10">
        {pieces.map((p) => {
          const Piece = p.component;
          return (
            <figure key={p.title} className="cyber-panel overflow-hidden">
              <div className={p.tall ? "h-[420px]" : "h-[300px]"}>
                <Piece className="h-full w-full" />
              </div>
              <figcaption className="border-t border-line p-5">
                <p className="font-display text-sm tracking-[0.3em] text-ice">
                  <span className="font-jp mr-3 text-neon-violet">{p.kana}</span>
                  {p.title}
                </p>
                <p className="mt-2 max-w-3xl text-xs leading-relaxed text-fog">
                  {p.desc}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-12 border-t border-line pt-6">
        <p className="font-display text-xs tracking-[0.3em] text-fog">
          ⇱ THE REAL GALLERIES
        </p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          {[
            ["https://www.artblocks.io", "Art Blocks — on-chain generative art"],
            ["https://foundation.app", "Foundation — digital art market"],
            ["https://www.fxhash.xyz", "fxhash — open generative platform"],
            ["https://deca.art", "Deca — curated digital collections"],
          ].map(([url, label]) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-neon-violet"
            >
              ↗ {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
