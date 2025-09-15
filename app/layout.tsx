import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Analytics from "./(components)/Analytics";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://matthallwastaken.dev"),
  title: "Matt Hall — Full-stack technologist & product builder",
  description: "Portfolio of Matt Hall. Practical tools, clean systems, and slightly better every day.",
  openGraph: {
    title: "Matt Hall — Full-stack technologist & product builder",
    description: "Practical tools, clean systems, and slightly better every day.",
    url: "https://matthallwastaken.dev",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#0B0B0C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-ink text-zinc-100 antialiased min-h-screen flex flex-col">
        <Header />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
        {/* Optional analytics; does nothing without NEXT_PUBLIC_ANALYTICS_ID */}
        <React.Suspense fallback={null}>
          <Analytics />
        </React.Suspense>
      </body>
    </html>
  );
}
