# Into The Ether — build plan

- [x] Scaffold Next.js (App Router, TS, Tailwind v4) via create-next-app
- [x] Design system: neo-Tokyo cyberpunk (dark, neon cyan/magenta/violet/amber/green, scanlines, glitch, katakana accents), Orbitron + JetBrains Mono + Noto Sans JP
- [x] Content model (`lib/types.ts`) + exemplar topic (what-is-ethereum)
- [x] 14 deep-dive topics (13 written by two parallel subagents to `content/topics/*.ts`, verified by build)
- [x] Components: MatrixRain, GlitchText, EthTicker, Quiz, StakingCalculator, GasBurnSimulator, KeccakPlayground, EtherSigil, GlossarySearch, TimelineView, NeonHorizon, EtherFlow, BlockWeave
- [x] Pages: home, /learn, /learn/[slug] (SSG ×14), /interact, /art, /timeline, /glossary, 404
- [x] Random "transmission" learning prompt on home
- [x] Verify: tsc clean, eslint clean, `next build` 23 static pages, dev + live smoke tests all 200
- [x] Repo: dac-uk/intotheether (GitHub), git-connected to Vercel for auto-deploys
- [x] Deploy to Vercel production → https://intotheether.vercel.app

## Review

Shipped 2026-08-31. Fully static site — no DB, no CMS, no env secrets; content
is typed TS data so new articles are one file + one import line. Live checks:
all routes 200 on production, post-deploy error log scan clean. External data
(ETH ticker) fetched client-side from CoinGecko with silent fallback.
Follow-up ideas (not done): custom domain, OG image, more art pieces,
per-topic reading-progress persistence via localStorage.
