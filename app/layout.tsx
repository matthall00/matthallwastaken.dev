import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://whoami.slightlyprivate.com"),
  title: "Matt H. — Full-stack technologist & product builder",
  description: "Portfolio of Matt H. Practical tools, clean systems, and slightly better every day.",
  openGraph: {
    title: "Matt H. — Full-stack technologist & product builder",
    description: "Practical tools, clean systems, and slightly better every day.",
    url: "https://whoami.slightlyprivate.com",
    siteName: "Matt H.",
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
        {/* Umami analytics: enabled only if NEXT_PUBLIC_UMAMI_WEBSITE_ID is set */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
          <Script
            id="umami"
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_SRC || "https://umami.slightlybetter.dev/fetch.js"}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        ) : null}
      </body>
    </html>
  );
}
