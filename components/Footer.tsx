import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-abyss">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-sm tracking-widest neon-cyan">
              INTO THE ETHER
            </p>
            <p className="mt-2 text-xs leading-relaxed text-fog">
              A signal in the noise. Deep dives into Ethereum, open finance and
              the machinery of digital freedom. Not financial advice — just the
              knowledge to form your own.
            </p>
          </div>
          <div>
            <p className="font-display text-xs tracking-widest text-fog">
              NAVIGATE
            </p>
            <ul className="mt-3 space-y-1 text-xs">
              {[
                ["/learn", "Deep Dives"],
                ["/interact", "Interactive Tools"],
                ["/art", "Digital Art"],
                ["/timeline", "Timeline"],
                ["/glossary", "Glossary"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-fog hover:text-neon-cyan">
                    ▸ {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-xs tracking-widest text-fog">
              OUTBOUND SIGNALS
            </p>
            <ul className="mt-3 space-y-1 text-xs">
              {[
                ["https://ethereum.org", "ethereum.org"],
                ["https://etherscan.io", "Etherscan"],
                ["https://l2beat.com", "L2BEAT"],
                ["https://defillama.com", "DefiLlama"],
                ["https://ultrasound.money", "ultrasound.money"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fog hover:text-neon-magenta"
                  >
                    ↗ {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-4 text-center font-jp text-[10px] text-fog/60">
          電脳空間 — cypherpunks write code — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
