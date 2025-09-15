"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Lightweight analytics: supports Cloudflare Web Analytics token or PostHog public token
export default function Analytics() {
  const token = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (!token) return;
    // PostHog public tokens typically start with phc_
    const isPostHog = token.startsWith("phc_");
    if (isPostHog) {
      // Dynamically import posthog-js only when needed
      import("posthog-js").then(({ default: posthog }) => {
        try {
          if (!posthog.__loaded) {
            posthog.init(token, { api_host: "https://us.i.posthog.com", capture_pageview: false });
          }
          posthog.capture("page_view", { path: window.location.pathname });
        } catch {}
      }).catch(() => {});
    } else {
      // Cloudflare Web Analytics
      const s = document.createElement("script");
      s.defer = true;
      s.src = "https://static.cloudflareinsights.com/beacon.min.js";
      s.setAttribute("data-cf-beacon", JSON.stringify({ token }));
      document.body.appendChild(s);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Local privacy-friendly page view beacon
    try {
      fetch("/api/telemetry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ event: "page_view", path: `${pathname}${search ? `?${search}` : ""}` }),
        keepalive: true,
      }).catch(() => {});
    } catch {}

    if (token && token.startsWith("phc_")) {
      import("posthog-js").then(({ default: posthog }) => {
        try {
          posthog.capture("page_view", { path: `${pathname}?${search}` });
        } catch {}
      }).catch(() => {});
    }
  }, [pathname, search, token]);

  return null;
}
