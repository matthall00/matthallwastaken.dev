import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { event, category, label, href, path } = await req.json().catch(() => ({}));
    const ua = req.headers.get("user-agent") || "";
    const ref = req.headers.get("referer") || "";
    // No cookies/PII; just a minimal console log. Replace with durable storage if desired.
    console.info("telemetry", {
      t: Date.now(),
      event,
      category,
      label,
      href,
      path,
      ua: ua.slice(0, 80),
      ref,
    });
  } catch {}
  return new Response(null, { status: 204 });
}

