import Container from "../(components)/Container";
import Section from "../(components)/Section";
import Badge from "../(components)/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Matt Hall",
  description: "10+ years shipping dashboards, data tools, and indie SaaS.",
  openGraph: {
    title: "Resume — Matt Hall",
    description: "10+ years shipping dashboards, data tools, and indie SaaS.",
  },
  twitter: { card: "summary_large_image" },
};

export const dynamic = "force-static";

export default function ResumePage() {
  let lastUpdated: string | null = process.env.NEXT_PUBLIC_RESUME_UPDATED || null;
  return (
    <Section>
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Resume</h1>
        <p className="mt-2 text-white/80 max-w-3xl">Short version: 10+ years shipping dashboards, data tools, and indie SaaS. I blend full-stack engineering with product sense.</p>
        {lastUpdated && <p className="mt-1 text-white/60 text-sm">Last updated: {lastUpdated}</p>}
        <div className="mt-6">
          <a className="inline-flex items-center gap-2 rounded-xl bg-sand text-ink px-4 py-2 font-medium" href="/resume.pdf" download>
            Get Resume (PDF)
          </a>
        </div>
        <div className="mt-6 ring-1 ring-white/10 rounded-xl overflow-hidden">
          <object data="/resume.pdf" type="application/pdf" aria-label="Resume PDF" className="w-full h-[80vh]">
            <div className="p-6 text-white/80">
              <p>PDF viewer blocked or unsupported. You can download the resume instead:</p>
              <p className="mt-4"><a className="underline" href="/resume.pdf">Download resume.pdf</a></p>
            </div>
          </object>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-3">
            <div className="text-xs uppercase tracking-wide text-white/50">Advanced</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {["React","TypeScript","Node.js","MySQL","PHP"].map((s)=> (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-xs uppercase tracking-wide text-white/50">Intermediate</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Laravel","Prisma","Postgres","Cloudflare Workers","Hono","Docker","Tailwind"].map((s)=> (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
