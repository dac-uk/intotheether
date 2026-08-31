import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import MatrixRain from "@/components/art/MatrixRain";
import Transmission from "@/components/Transmission";

const gateways = [
  {
    href: "/learn",
    kana: "学習",
    title: "DEEP DIVES",
    glow: "glow-border-cyan",
    text: "text-neon-cyan",
    desc: "Deep transmissions on Ethereum, DeFi, ZK, self-custody and the future of money — plus a practical field manual. Decode them all to reach ARCHITECT.",
  },
  {
    href: "/observatory",
    kana: "観測",
    title: "OBSERVATORY",
    glow: "glow-border-green",
    text: "text-neon-green",
    desc: "The chain, live: block height, gas, burn rate and blob traffic read straight from mainnet.",
  },
  {
    href: "/interact",
    kana: "操作",
    title: "INTERACT",
    glow: "glow-border-magenta",
    text: "text-neon-magenta",
    desc: "Run the machinery yourself: burn ETH, compound stakes, hash the universe, forge your sigil.",
  },
  {
    href: "/art",
    kana: "芸術",
    title: "DIGITAL ART",
    glow: "glow-border-violet",
    text: "text-neon-violet",
    desc: "Generative pieces rendered live in your browser — the aesthetics of the machine, made visible.",
  },
  {
    href: "/timeline",
    kana: "歴史",
    title: "TIMELINE",
    glow: "glow-border-amber",
    text: "text-neon-amber",
    desc: "From the Cypherpunk Manifesto to the rollup age — four decades of code versus control.",
  },
  {
    href: "/glossary",
    kana: "用語",
    title: "GLOSSARY",
    glow: "glow-border-green",
    text: "text-neon-green",
    desc: "Forty terms of the new lexicon, searchable. Speak the language of the machine city.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ---- HERO ---- */}
      <section className="relative overflow-hidden border-b border-line">
        <MatrixRain className="absolute inset-0 h-full w-full" opacity={0.4} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 text-center md:py-40">
          <p className="font-jp text-sm tracking-[0.5em] text-neon-magenta neon-pulse">
            イーサの中へようこそ
          </p>
          <h1 className="mt-6 font-display text-4xl font-black tracking-[0.15em] text-ice md:text-7xl">
            INTO THE{" "}
            <GlitchText text="ETHER" className="neon-cyan" />
          </h1>
          <p className="mx-auto mt-8 max-w-2xl font-mono text-sm leading-relaxed text-fog md:text-base">
            The world computer is running. It settles trillions, answers to no
            one, and never sleeps. This is your terminal into{" "}
            <span className="text-neon-cyan">Ethereum</span> — the machinery of{" "}
            <span className="text-neon-magenta">open finance</span>,{" "}
            <span className="text-neon-violet">digital freedom</span> and{" "}
            <span className="text-neon-green">personal sovereignty</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/learn"
              className="border border-neon-cyan bg-neon-cyan/10 px-8 py-3 font-display text-xs tracking-[0.25em] text-neon-cyan transition-all hover:bg-neon-cyan hover:text-void hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
            >
              JACK IN ▸
            </Link>
            <Link
              href="/timeline"
              className="border border-line px-8 py-3 font-display text-xs tracking-[0.25em] text-fog transition-colors hover:border-neon-magenta hover:text-neon-magenta"
            >
              ORIGIN STORY
            </Link>
          </div>
          <p className="mt-14 font-mono text-[10px] tracking-widest text-fog/50 cursor-blink">
            &gt; block height rising · supply burning · validators watching
          </p>
        </div>
      </section>

      {/* ---- TRANSMISSION ---- */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Transmission />
      </section>

      {/* ---- GATEWAYS ---- */}
      <section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4 pb-20">
          <h2 className="font-display text-xs tracking-[0.4em] text-fog">
            ▞▚ CHOOSE YOUR GATEWAY
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gateways.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className={`cyber-panel ${g.glow} group p-6`}
              >
                <span className={`font-jp text-2xl ${g.text}`}>{g.kana}</span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-widest text-ice">
                  {g.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-fog">
                  {g.desc}
                </p>
                <p
                  className={`mt-4 font-mono text-[10px] ${g.text} opacity-0 transition-opacity group-hover:opacity-100`}
                >
                  ▸ ENTER
                </p>
              </Link>
            ))}
            {/* manifesto tile */}
            <div className="cyber-panel p-6">
              <span className="font-jp text-2xl text-fog">信条</span>
              <h3 className="mt-3 font-display text-lg font-bold tracking-widest text-ice">
                THE CREED
              </h3>
              <p className="mt-2 text-xs italic leading-relaxed text-fog">
                &quot;We the Cypherpunks are dedicated to building anonymous
                systems… Cypherpunks write code.&quot;
              </p>
              <p className="mt-2 font-mono text-[10px] text-fog/60">
                — Eric Hughes, 1993
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
