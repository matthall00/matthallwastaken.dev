"use client";
import { useEffect, useState } from "react";
import Container from "./Container";
import NavLink from "./NavLink";
import Icon from "./Icon";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  // Close on Escape and lock body scroll when open
  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeydown);
    // Lock scroll on body while menu is open
    const originalOverflow = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }
    return () => {
      window.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = originalOverflow || "";
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <a href="#content" className="skip-to-content sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Container>
        <div className="flex items-center gap-4 sm:gap-6 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <Icon name="logo" className="h-5 w-5" />
            <span>matthallwastaken.dev</span>
          </Link>
          {/* Desktop nav */}
          <nav className="ml-auto hidden sm:flex gap-2" aria-label="Primary">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/resume">Resume</NavLink>
          </nav>
          {/* Mobile menu button */}
          <div className="ml-auto sm:hidden">
            <button
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/70"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {/* Simple hamburger / close icon */}
              {open ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>
      {/* Backdrop for mobile menu */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`sm:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Mobile slide-down panel */}
      <div
        id="primary-navigation"
        className={`sm:hidden overflow-hidden transition-all duration-200 z-50 relative ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Primary"
      >
        <Container className="pb-3">
          <div
            className={`flex flex-col gap-1 pt-1 transform transition-transform duration-200 ${
              open ? "translate-y-0" : "-translate-y-1"
            }`}
          >
            <NavLink href="/projects" onClick={() => setOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink href="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
            <NavLink href="/resume" onClick={() => setOpen(false)}>
              Resume
            </NavLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
