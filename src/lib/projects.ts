import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/project";

/**
 * Every page/component reads project data only through these functions.
 * Swapping the static array in src/data/projects.ts for a headless CMS
 * later means rewriting this file alone — nothing above it changes.
 */

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory | "todos"): Project[] {
  if (category === "todos") return getAllProjects();
  return getAllProjects().filter((project) => project.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | undefined;
  next: Project | undefined;
} {
  const all = getAllProjects();
  const index = all.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  const previous = all[(index - 1 + all.length) % all.length];
  const next = all[(index + 1) % all.length];
  return { previous, next };
}
