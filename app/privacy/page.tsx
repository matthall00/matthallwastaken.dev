import Container from "../(components)/Container";
import Section from "../(components)/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Matt H.",
  description: "Minimal analytics, no tracking across sites, no sale of personal data.",
  openGraph: {
    title: "Privacy — Matt H.",
    description: "Minimal analytics, no tracking across sites, no sale of personal data.",
  },
  twitter: { card: "summary_large_image" },
};

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Privacy</h1>
        <div className="prose prose-invert max-w-none mt-4 text-white/80">
          <p>
            I collect as little as possible. If analytics are enabled, they are privacy-conscious and used only to
            understand page views and improve this site. No sale of personal data. No tracking pixels across other sites.
          </p>
          <p>
            Contact me at <a href="mailto:contact@slightlyprivate.com">contact@slightlyprivate.com</a> for questions or removal
            requests.
          </p>
        </div>
      </Container>
    </Section>
  );
}
