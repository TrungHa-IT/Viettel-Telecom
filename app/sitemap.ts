import { MetadataRoute } from "next";
import db from "@/lib/db";
import { servicesData } from "@/lib/servicesData";

interface PageRow {
  slug: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vietteltelecom.vn";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // Service routes from servicesData
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Article / Database pages
  let dbPageRoutes: MetadataRoute.Sitemap = [];
  try {
    const pages = db.prepare("SELECT slug FROM pages").all() as PageRow[];
    dbPageRoutes = pages
      .filter((p) => !servicesData[p.slug])
      .map((p) => ({
        url: `${baseUrl}/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
  } catch {
    // ignore if db unready
  }

  return [...staticRoutes, ...serviceRoutes, ...dbPageRoutes];
}
