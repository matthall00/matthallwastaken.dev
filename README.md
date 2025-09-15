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
- Set `NEXT_PUBLIC_ANALYTICS_ID` to enable lightweight analytics:
  - Cloudflare Web Analytics: set to your beacon token; a small beacon script is injected.
  - PostHog: set to your public token (starts with `phc_`); page views are captured with `posthog-js`.
- If unset, no analytics are loaded and rendering is unaffected.

## Cloudflare Pages
See `cloudflare-pages.md` for recommended settings and headers.

## Notes
- `public/og.png` and `public/favicon.ico` are placeholders — replace with real assets.
- `public/resume.pdf` is a minimal placeholder PDF — replace with your resume.

