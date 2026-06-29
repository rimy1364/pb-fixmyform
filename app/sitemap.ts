import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = posts.map((post) => ({
    url: `https://www.fixyourbody.co.in/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.fixyourbody.co.in",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://www.fixyourbody.co.in/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
