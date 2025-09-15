import Container from "./Container";
import NavLink from "./NavLink";
import Icon from "./Icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <a href="#content" className="skip-to-content sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Container>
        <div className="flex items-center gap-6 py-3">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <Icon name="logo" className="h-5 w-5" />
            <span>matthallwastaken.dev</span>
          </a>
          <nav className="ml-auto flex gap-2" aria-label="Primary">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/resume">Resume</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

