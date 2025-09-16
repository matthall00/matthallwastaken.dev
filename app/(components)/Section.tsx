type SectionElement = "section" | "div" | "main" | "article" | "aside" | "header" | "footer";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: SectionElement;
}

export default function Section({ children, className = "", as: As = "section" }: SectionProps) {
  return <As className={`py-12 lg:py-20 ${className}`}>{children}</As>;
}
