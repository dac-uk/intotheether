"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import EthTicker from "@/components/EthTicker";
import RankBadge from "@/components/RankBadge";

const links = [
  { href: "/learn", label: "LEARN", kana: "学" },
  { href: "/observatory", label: "OBSERVATORY", kana: "観" },
  { href: "/interact", label: "INTERACT", kana: "操" },
  { href: "/art", label: "ART", kana: "芸" },
  { href: "/timeline", label: "TIMELINE", kana: "史" },
  { href: "/glossary", label: "GLOSSARY", kana: "語" },
];

export default function Nav({ totalTopics }: { totalTopics: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-black tracking-widest neon-cyan">
            INTO THE ETHER
          </span>
          <span className="font-jp hidden whitespace-nowrap text-xs text-fog transition-colors group-hover:text-neon-magenta lg:inline">
            イーサの中へ
          </span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex lg:gap-6">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-display text-xs tracking-[0.2em] transition-colors ${
                  active ? "neon-magenta" : "text-fog hover:text-ice"
                }`}
              >
                <span className="font-jp mr-1 text-[10px] opacity-60">{l.kana}</span>
                {l.label}
              </Link>
            );
          })}
          <RankBadge totalTopics={totalTopics} />
          <EthTicker />
        </nav>

        <button
          className="md:hidden text-fog"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-display text-sm tracking-[0.2em] text-fog hover:text-ice"
            >
              <span className="font-jp mr-2 text-xs opacity-60">{l.kana}</span>
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 py-2">
            <RankBadge totalTopics={totalTopics} />
            <EthTicker />
          </div>
        </nav>
      )}
    </header>
  );
}
