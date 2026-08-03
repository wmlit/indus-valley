import type { MetadataRoute } from "next";

const BASE = "https://www.indusvalley.com";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/company", priority: 0.8 },
  { path: "/vision-mission", priority: 0.6 },
  { path: "/clients", priority: 0.7 },
  { path: "/services", priority: 0.9 },
  { path: "/services/health-care", priority: 0.8 },
  { path: "/services/epm-bi", priority: 0.8 },
  { path: "/services/digital-integration", priority: 0.8 },
  { path: "/services/testing", priority: 0.7 },
  { path: "/services/blockchain", priority: 0.5 },
  { path: "/careers", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }));
}
