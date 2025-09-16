# Cloudflare Pages deployment

Recommended settings for this Next.js site.

## Project Settings
- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `.next`

## Environment
- Node version: 18+
- Optional: `NEXT_PUBLIC_ANALYTICS_ID` (Cloudflare Web Analytics token or PostHog public token)

## Headers
`public/_headers` is included to set security headers:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), geolocation=(), microphone=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## Notes
- Pages automatically detects Next.js and serves `.next` output via the adapter.
- After deploy, set custom domain `matthallwastaken.dev` and redirect `www` to apex.
- Enable HTTPS and HSTS preload (headers already included).

