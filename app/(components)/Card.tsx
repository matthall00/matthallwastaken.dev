"use client";
import Badge from "./Badge";

type Action = { label: string; href: string; disabled?: boolean };

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
                onClick={() => {
                  try {
                    // Basic outbound click telemetry if PostHog present
                    // @ts-ignore
                    window?.posthog?.capture?.("outbound_link_click", { label: a.label, href: a.href });
                    // Lightweight local beacon
                    fetch("/api/telemetry", {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify({ event: "outbound_link_click", category: "Projects", label: a.label, href: a.href }),
                      keepalive: true,
                    }).catch(() => {});
                  } catch {}
                }}
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
