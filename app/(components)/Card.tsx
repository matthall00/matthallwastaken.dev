"use client";
import Badge from "./Badge";
import { useRef, useCallback } from "react";

type Action = { label: string; href: string; disabled?: boolean };

// Type declaration for Umami analytics
interface Umami {
  track: (event: string, data?: Record<string, any>) => void;
}

interface WindowWithUmami extends Window {
  umami?: Umami;
}

export default function Card({
  title,
  description,
  tags = [],
  actions = [],
  className = "",
  status,
  meta,
}: {
  title: string;
  description?: string;
  tags?: string[];
  actions?: Action[];
  className?: string;
  status?: string;
  meta?: string;
}) {
  const lastClickTimesRef = useRef<Map<string, number>>(new Map());
  const TELEMETRY_DEBOUNCE_MS = 500; // Prevent telemetry spam within 500ms

  const handleActionClick = useCallback((a: Action, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (a.disabled) {
      event.preventDefault();
      return;
    }

    const now = Date.now();
    const lastClickTime = lastClickTimesRef.current.get(a.href) || 0;
    const timeSinceLastClick = now - lastClickTime;

    // Only send telemetry if enough time has passed since last click on this href
    if (timeSinceLastClick >= TELEMETRY_DEBOUNCE_MS) {
      lastClickTimesRef.current.set(a.href, now);
      try {
        // Umami event attribute can be used, but for safety also call if available
        (window as WindowWithUmami)?.umami?.track?.("Projects Outbound", { label: a.label, href: a.href });
      } catch {}
    }
    // Always allow navigation to proceed
  }, []);
  return (
    <div className={`flex h-full flex-col rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 ${className}`}>
      <div className="flex items-start gap-3">
        <h3 className="font-semibold tracking-tight flex-1">{title}</h3>
        {status && (
          <span className="inline-flex items-center rounded-full bg-white/10 text-xs text-white/80 ring-1 ring-white/15 px-2 py-0.5" title={status}>
            {status}
          </span>
        )}
      </div>
      <div className="mt-2">
        {description && <p className="text-sm text-white/70">{description}</p>}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}
        {actions.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {actions.map((a) => (
              <a
                key={a.label}
                href={a.disabled ? undefined : a.href}
                aria-disabled={a.disabled}
                title={a.disabled ? "Coming soon" : undefined}
                data-umami-event="Projects Outbound"
                data-umami-event-label={a.label}
                onClick={(event) => handleActionClick(a, event)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/15 hover:bg-white/5 transition ${
                  a.disabled ? "pointer-events-none opacity-50" : ""
                }`}
              >
                {a.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="mt-auto" />
      <div className="pt-3 text-xs leading-5 text-white/60 flex items-center gap-3 whitespace-nowrap min-h-[20px]">
        {meta ? <span>{meta}</span> : <span className="opacity-0 select-none">placeholder</span>}
      </div>
    </div>
  );
}
