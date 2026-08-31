# Into The Ether

Cyberpunk/neo-Tokyo Ethereum education site. Next.js App Router + TypeScript +
Tailwind v4, fully static, deployed on Vercel (project `intotheether`, repo
`dac-uk/intotheether`).

## Architecture

- `content/topics/*.ts` — one typed `Topic` per article (see `lib/types.ts`);
  registered in `content/topics/index.ts`. Adding an article = new file + one
  import line. Inline markup in paragraphs is limited to `**bold**`, `` `code` ``
  and `*em*`, rendered by `lib/markup.tsx`.
- `content/glossary.ts`, `content/timeline.ts` — typed data for those pages.
- `components/art/*` — client-side canvas generative art (no images/video).
- Design tokens live in `app/globals.css` `@theme` (neon-cyan/magenta/violet/
  amber/green on near-black). Panels use `.cyber-panel` + `.glow-border-*`.

## Conventions

- Editorial voice: intelligent, vivid, honest about risk, never shilly. Hedge
  volatile numbers ("hundreds of billions"). Every topic ends with quiz +
  external explore links.
- No CMS/database — keep it static. External data (ETH price) is fetched
  client-side with graceful failure.
- Verify with `npm run build` before pushing; every push to `main` deploys to
  production.
