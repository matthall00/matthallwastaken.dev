import Container from "../(components)/Container";
import Section from "../(components)/Section";
import Card from "../(components)/Card";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Matt Hall",
  description: "Open source, experiments, and Slightly Better Co. projects.",
  openGraph: {
    title: "Projects — Matt Hall",
    description: "Open source, experiments, and Slightly Better Co. projects.",
  },
  twitter: { card: "summary_large_image" },
};

export const dynamic = "force-static";

const openSource = [
  {
    title: "CSV DashGen",
    blurb: "Transforms CSV files into interactive dashboards with automatic analysis and visualizations.",
    tags: ["React", "Vite", "Tailwind", "Privacy-first"],
    links: [{ label: "Repo", href: "https://github.com/matthall00/csv-dashgen" }],
  },
  {
    title: "Habit Harbor (PWA)",
    blurb: "Minimalist offline-first habit tracker that installs to your home screen and syncs when online.",
    tags: ["PWA", "Service Worker", "Offline-first", "Sync"],
    links: [{ label: "Repo", href: "https://github.com/matthall00/habit-harbor-pwa" }],
  },
  {
    title: "Wikiscroll",
    blurb: "A playful experiment for continuous Wikipedia scrolling and serendipitous discovery.",
    tags: ["React", "API", "Experiment"],
    links: [{ label: "Repo", href: "https://github.com/matthall00/wikiscroll" }],
  },
];

async function getRepoMeta(): Promise<Record<string, { stars?: number; updated?: string }>> {
  const CACHE_DURATION_SECONDS = 60 * 60 * 24; // 24 hours in seconds

  const map: Record<string, string> = {
    csvdash: "https://api.github.com/repos/matthall00/csv-dashgen",
    habitharbor: "https://api.github.com/repos/matthall00/habit-harbor-pwa",
    wikiscroll: "https://api.github.com/repos/matthall00/wikiscroll",
  };
  const result: Record<string, { stars?: number; updated?: string }> = {};
  try {
    const entries = await Promise.all(
      Object.entries(map).map(async ([key, url]) => {
        try {
          const res = await fetch(url, { next: { revalidate: CACHE_DURATION_SECONDS } });
          if (!res.ok) return [key, {}] as const;
          const json = await res.json();
          const stars = json.stargazers_count as number | undefined;
          const updated = json.updated_at ? new Date(json.updated_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : undefined;
          return [key, { stars, updated }] as const;
        } catch {
          return [key, {}] as const;
        }
      })
    );
    for (const [k, v] of entries) result[k] = v;
  } catch {}
  return result;
}

export default async function ProjectsPage() {
  const meta = await getRepoMeta();
  return (
    <Section>
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-white/70">Open work and Slightly Better Co. builds.</p>

        <h2 className="mt-10 text-xl font-semibold">Open Source & Experiments</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {openSource.map((p) => {
            const m =
              p.title === "CSV DashGen"
                ? meta.csvdash
                : p.title.startsWith("Habit Harbor")
                ? meta.habitharbor
                : p.title === "Wikiscroll"
                ? meta.wikiscroll
                : undefined;
            const foot = m && (m.stars || m.updated)
              ? `${m.stars ? `★ ${m.stars} stars` : ""}${m.stars && m.updated ? " • " : ""}${m.updated ? `updated ${m.updated}` : ""}`
              : undefined;
            return (
              <Card key={p.title} className="h-full" title={p.title} description={p.blurb} tags={p.tags} actions={p.links} meta={foot} />
            );
          })}
        </div>

        <h2 className="mt-12 text-xl font-semibold">Slightly Better Co. Projects</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((p: Project) => (
            <Card key={p.slug} className="h-full" title={p.title} description={p.blurb} tags={p.tech} status={p.status} actions={p.links} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
