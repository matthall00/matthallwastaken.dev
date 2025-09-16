import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  if (url.pathname === '/resume.pdf') {
    const res = NextResponse.next();
    // Allow embedding on same origin
    res.headers.set('X-Frame-Options', 'SAMEORIGIN');
    // Optional: modern policy (keeps strict elsewhere)
    res.headers.set('Content-Security-Policy', "frame-ancestors 'self'");
    // Make sure we’re not adding X-Robots-Tag: noindex unintentionally
    res.headers.delete('X-Robots-Tag');
    return res;
  }
  return NextResponse.next();
}

// Run on the single asset path only (avoid perf hit)
export const config = {
  matcher: ['/resume.pdf'],
};

