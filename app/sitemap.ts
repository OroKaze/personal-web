import type { MetadataRoute } from "next";
import { siteUrl, allProjectSlugs } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/about", "/resume"];
  const projectRoutes = allProjectSlugs.map((slug) => `/projects/${slug}`);
  const routes = [...staticRoutes, ...projectRoutes];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-08-27T00:00:00.000Z"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
