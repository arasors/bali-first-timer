import type { MetadataRoute } from "next";

import { innerPages } from "@/components/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/innerPageData";
import { absoluteUrl, SOCIAL_IMAGE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(SOCIAL_IMAGE)],
    },
    ...innerPages.map((page) => ({
      url: absoluteUrl(`/${page.path}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.path.startsWith("experiences/") ? 0.8 : 0.7,
      images: [absoluteUrl(page.image)],
    })),
  ];
}
