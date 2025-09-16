// Centralized security headers
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), microphone=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // App Router is default; keep here for clarity
  },
  async headers() {
    return [
      // Override for the PDF so it can be embedded
      {
        source: '/resume.pdf',
        headers: [
          // allow same-origin framing
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Alternatively: { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" }
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Default site-wide headers
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
