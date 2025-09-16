export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tech: string[];
  status: "prototype" | "building" | "preview" | "shipping";
  links?: { label: string; href: string; disabled?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "offbook",
    title: "Offbook",
    blurb: "Actor line-memorization with AI cue prompts and rehearsal flows.",
    tech: ["React", "Node", "TTS", "Cloudflare Workers", "Postgres"],
    status: "building",
    links: [
      { label: "Site", href: "#", disabled: true },
      { label: "Repo", href: "#", disabled: true }
    ],
  },
  {
    slug: "feedback",
    title: "Feedback",
    blurb:
      "QR → star rating → optional note. Private dashboards for creators and venues.",
    tech: ["React", "Hono", "Workers KV/Queues"],
    status: "prototype",
    links: [{ label: "Demo", href: "#", disabled: true }],
  },
  {
    slug: "search-suite",
    title: "Search Suite",
    blurb:
      "Niche vertical discovery with curated results and affiliate telemetry.",
    tech: ["Vite/React", "Edge APIs", "Neon", "Turnstile"],
    status: "building",
    links: [{ label: "Preview", href: "#", disabled: true }],
  },
  {
    slug: "momentum",
    title: "Momentum",
    blurb:
      "Offline-friendly time tracking for field teams & solo contractors.",
    tech: ["PWA", "Service Worker", "SQLite→Postgres"],
    status: "shipping",
    links: [{ label: "Coming soon", href: "#", disabled: true }],
  },
];
