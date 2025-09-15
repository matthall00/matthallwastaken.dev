import Container from "./(components)/Container";
import Section from "./(components)/Section";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-2 text-white/70">Let’s get you back on track.</p>
        <div className="mt-6">
          <a className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/15 px-4 py-2 hover:bg-white/5" href="/">
            Go home
          </a>
        </div>
      </Container>
    </Section>
  );
}

