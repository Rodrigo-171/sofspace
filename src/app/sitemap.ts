import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const SITE_URL = "https://sofspace.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projetos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/sobre`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contato`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${SITE_URL}/projetos/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
