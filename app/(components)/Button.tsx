"use client";
import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition duration-200 ease-pleasant disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary: "bg-sand text-ink hover:bg-sand/90",
  secondary: "ring-1 ring-white/20 text-white hover:bg-white/5",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = "", variant = "primary", ...props },
  ref
) {
  return <button ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props} />;
});

export function LinkButton({ href, children, variant = "secondary", className = "", ...rest }: { href: string; children: React.ReactNode; variant?: Variant; className?: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

