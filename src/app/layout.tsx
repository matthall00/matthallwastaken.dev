import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Hall - Software Developer",
  description: "Personal website and portfolio of Matt Hall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
