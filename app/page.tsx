import Container from "./(components)/Container";
import Section from "./(components)/Section";
import Card from "./(components)/Card";
import { LinkButton } from "./(components)/Button";
import Headshot from "./(components)/Headshot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matt Hall — Full-stack technologist & product builder",
  description: "Portfolio of Matt Hall. Practical tools, clean systems, and slightly better every day.",
  openGraph: {
    title: "Matt Hall — Full-stack technologist & product builder",
    description: "Practical tools, clean systems, and slightly better every day.",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  const highlights = [
    {
      title: "Build what’s useful.",
      body:
        "I ship practical tools: dashboards, CI, edge APIs, and apps people actually use.",
    },
    { title: "Speak plainly.", body: "No spin. Clear decisions, clear tradeoffs." },
    {
      title: "Slightly better daily.",
      body: "Small improvements that compound into real outcomes.",
    },
  ];
  return (
    <>
      <Section className="py-12 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Matt Hall</h1>
              <p className="mt-4 text-xl text-white/80">Full-stack technologist & product builder.</p>
              <p className="mt-1 text-sm text-white/60">Yes, the .dev I wanted was taken. We adapt.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/projects" variant="primary">View Projects</LinkButton>
                <LinkButton href="/resume">Get Resume</LinkButton>
                <LinkButton href="/about">About</LinkButton>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/15 bg-white/[0.04] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] w-[220px] aspect-square sm:w-[240px] md:w-[260px] lg:w-[320px] xl:w-[360px]">
                <Headshot />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((c) => (
              <Card key={c.title} title={c.title} description={c.body} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
