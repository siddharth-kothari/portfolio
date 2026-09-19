import type { MetadataRoute } from "next";
import { isMaintenanceEnabled } from "@/lib/maintenance";
import { getSiteUrl, isProduction } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  if (!isProduction() || isMaintenanceEnabled()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
