export type IconName = "logo" | "github" | "linkedin" | "external" | "mail";

export default function Icon({ name, className = "w-4 h-4" }: { name: IconName; className?: string }) {
  switch (name) {
    case "logo":
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
          <rect x="2" y="2" width="28" height="28" rx="6" fill="#F4D7A1" />
          <path d="M9 22l5-12 5 12" stroke="#0B0B0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.82 1.32 3.51 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7 0h3.84v1.98h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.12V23h-4v-6.47c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41V23h-4V8.5Z"/>
        </svg>
      );
    case "external":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
          <path d="M4 4h16v16H4z" />
          <path d="M22 6 12 13 2 6" />
        </svg>
      );
  }
}

