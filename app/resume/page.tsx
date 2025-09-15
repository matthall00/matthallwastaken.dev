import Container from "../(components)/Container";
import Section from "../(components)/Section";
import fs from "node:fs";
import path from "node:path";
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
  const pdfPath = path.join(process.cwd(), "public", "resume.pdf");
  let lastUpdated: string | null = null;
  try {
    const stat = fs.statSync(pdfPath);
    lastUpdated = new Date(stat.mtime).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {}
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
                <span key={s} className="inline-flex items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 px-2.5 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-xs uppercase tracking-wide text-white/50">Intermediate</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Laravel","Prisma","Postgres","Cloudflare Workers","Hono","Docker","Tailwind"].map((s)=> (
                <span key={s} className="inline-flex items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 px-2.5 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
