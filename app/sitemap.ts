import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://matthallwastaken.dev";
  const now = new Date();
  const routes = ["/", "/projects", "/about", "/contact", "/resume", "/privacy"];
  return routes.map((p) => ({ url: `${base}${p}`, lastModified: now }));
}

