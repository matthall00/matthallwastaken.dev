export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 px-2.5 py-1 text-xs">
      {children}
    </span>
  );
}

