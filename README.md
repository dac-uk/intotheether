# Into The Ether — イーサの中へ

A neon-lit, neo-Tokyo cyberpunk deep dive into **Ethereum, Ether, DeFi, web3
and the future of finance, freedom and personal wealth**.

Live: https://intotheether.vercel.app

## What's inside

- **/learn** — 21 deep-dive articles across five tracks (Foundations, Open
  Finance, The Frontier, The Culture, and a practical Field Manual), each with
  key takeaways, an interactive knowledge-check quiz, and curated outbound
  links to continue exploring. Quiz results and reading progress persist in
  localStorage and feed a site-wide rank (INITIATE → OPERATOR → ARCHITECT).
- **/observatory** — live mainnet telemetry over public JSON-RPC: block
  height, gas, burn rate, block fullness, blob traffic, a base-fee sparkline
  and a rolling block feed. No API keys, no backend.
- **/interact** — live instruments: an EIP-1559 burn simulator, staking yield
  projector, keccak-256 playground, and a deterministic generative sigil forge.
- **/art** — four generative art pieces rendered live on canvas (digital rain,
  synthwave horizon, particle flow field, chain heartbeat).
- **/timeline** — the cypherpunk-to-rollup-age chronicle, filterable by era.
- **/glossary** — 40 searchable terms of the new lexicon.
- Rotating "transmission" facts on the home page for continuous learning, and
  a live ETH price ticker in the nav.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · `js-sha3` · deployed on
Vercel. Content is typed TypeScript data in `content/`; no CMS, no database.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (static)
```

Not financial advice — just the knowledge to form your own.
