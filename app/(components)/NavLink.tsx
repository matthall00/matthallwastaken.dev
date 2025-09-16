"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-xl px-2.5 py-1.5 text-sm transition hover:text-white ${
        active
          ? "text-ink bg-sand/90 ring-2 ring-sand/70"
          : "text-white/80 hover:bg-white/5 hover:ring-1 hover:ring-white/10"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
