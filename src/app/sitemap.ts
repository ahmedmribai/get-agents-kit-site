import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const PATHS = ["/", "/about/", "/terms/", "/refunds/", "/privacy/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-30");
  return PATHS.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    priority: path === "/" ? 1 : 0.4,
  }));
}
