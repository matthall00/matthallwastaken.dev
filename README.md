# Matt Hall — Portfolio (matthallwastaken.dev)

A small, fast Next.js App Router site with Tailwind CSS. Dark theme with a warm sand accent, accessible motion and focus, and simple project cards.

## Tech
- Next.js App Router + TypeScript
- Tailwind CSS
- `next/font` (Inter, JetBrains Mono)
- Static assets in `public/`

## Local Development
- Prereqs: Node 18+ and npm
- Install: `npm install`
- Dev: `npm run dev` then open http://localhost:3000
- Build: `npm run build`
- Start (prod): `npm run start`

## Pages
- `/` Home hero + highlights
- `/projects` Project cards from `data/projects.ts`
- `/about` Bio and values
- `/contact` Email + social links
- `/resume` Serves `/public/resume.pdf` with HTML fallback
- `/privacy` Basic privacy page
- `/sitemap.xml` Built via `app/sitemap.ts`
- `/robots.txt` Static in `public/`

## Accessibility
- High contrast dark theme (#0B0B0C bg, #F4D7A1 accent)
- Skip-to-content, focus-visible rings, reduced-motion safe transitions
- Semantic headings and nav landmarks

## Analytics (optional)
- Umami (self-hosted): set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` and optionally `NEXT_PUBLIC_UMAMI_SRC` (defaults to `https://umami.slightlybetter.dev/fetch.js`). The script loads after interactive and does not block rendering.
- If unset, no analytics are loaded.

## Cloudflare Pages
See `cloudflare-pages.md` for recommended settings and headers.

## Notes
- `public/og.png` and `public/favicon.ico` are placeholders — replace with real assets.
- `public/resume.pdf` is a minimal placeholder PDF — replace with your resume.
