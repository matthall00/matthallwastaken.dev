import Container from "../(components)/Container";
import Section from "../(components)/Section";
import Card from "../(components)/Card";
import Badge from "../(components)/Badge";
import { LinkButton } from "../(components)/Button";
import type { Metadata } from "next";
import Timeline from "../(components)/Timeline";

export const metadata: Metadata = {
  title: "About — Matt H.",
  description: "I build practical tools that remove friction and hold up when nobody’s watching.",
  openGraph: {
    title: "About — Matt H.",
    description: "Practical tools, clear trade-offs, honest telemetry, and shipping small improvements.",
  },
  twitter: { card: "summary_large_image" },
};

export const dynamic = "force-static";

export default function AboutPage() {
  const timeline: { dateRange: string; title: string; blurb: string; badges?: string[] }[] = [
    {
      dateRange: "2025",
      title: "Founded Slightly Better, Co.",
      blurb: "Building indie products under a small, honest studio.",
      badges: ["Offbook", "Search Suite", "Feedback", "Momentum"],
    },
    {
      dateRange: "2025",
      title: "Released CSV DashGen (open source)",
      blurb: "Open-source tool to turn CSVs into interactive dashboards with automatic analysis.",
      badges: ["Privacy-first", "Zero-backend", "Deploy anywhere", "React/Vite"],
    },
    {
      dateRange: "2018–2024",
      title: "Volunteer Cleanup Reporting (KBB)",
      blurb: "Mobile + dashboard tools logging real-time cleanup stats and photos across events.",
      badges: ["Mobile", "Dashboards", "Engagement"],
    },
    {
      dateRange: "2014–2023",
      title: "Freelance & Contract Work (Web + Data)",
      blurb: "Dashboards, automations, and modernizations for small orgs.",
      badges: ["PHP", "Laravel", "MySQL", "React", "Node", "CI"],
    },
    {
      dateRange: "Earlier",
      title: "Foundations & Study",
      blurb: "Rhetoric, trig, and CS; shipping small tools that reduce friction.",
      badges: ["Writing", "Math", "CS"],
    },
  ];
  return (
    <Section>
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 text-white/80 max-w-3xl">
          I design and ship tools that remove friction, save time, and help people create with clarity. I’ve built automated
          reporting, data dashboards, mobile apps, and a suite of indie products under Slightly Better, Co. I like honest systems,
          honest people, tight feedback loops, and work that holds up when nobody’s watching.
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Values</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { t: "Practical innovation", d: "Build things people can use today." },
              { t: "Craft with care", d: "Durable, readable, measurable." },
              { t: "Transparency", d: "Say the hard thing, kindly." },
              { t: "Continuous improvement", d: "1% better beats grand gestures." },
            ].map((v) => (
              <Card key={v.t} title={v.t} description={v.d} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="mt-6">
            <Timeline items={timeline} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Tech & Tools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Vite", "Hono", "Cloudflare Workers", "Neon/Postgres", "Prisma", "Tailwind", "Docker", "GitHub Actions", "PHP", "Laravel", "MySQL"].map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <LinkButton href="/projects" variant="primary">View Projects</LinkButton>
          <LinkButton href="/resume">Get Resume</LinkButton>
        </div>
      </Container>
    </Section>
  );
}
