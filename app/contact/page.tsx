import Container from "../(components)/Container";
import Section from "../(components)/Section";
import Icon from "../(components)/Icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Matt H.",
  description: "Email works. LinkedIn and GitHub also welcome.",
  openGraph: {
    title: "Contact — Matt H.",
    description: "Email works. LinkedIn and GitHub also welcome.",
  },
  twitter: { card: "summary_large_image" },
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-white/80">Email works: <a className="underline hover:text-white" href="mailto:matt@slightlybetter.dev">matt@slightlybetter.dev</a>. I don’t bite.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/matthewjameshall1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/15 px-4 py-2 hover:bg-white/5"
          >
            <Icon name="linkedin" />
            LinkedIn
          </a>
          <a
            href="https://github.com/matthall00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/15 px-4 py-2 hover:bg-white/5"
          >
            <Icon name="github" />
            GitHub
          </a>
        </div>
      </Container>
    </Section>
  );
}
