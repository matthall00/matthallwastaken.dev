export default function Section({ children, className = "", as: As = "section" as any }: { children: React.ReactNode; className?: string; as?: any }) {
  return <As className={`py-12 lg:py-20 ${className}`}>{children}</As>;
}
