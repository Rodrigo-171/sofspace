export type ProjectCategory = "residencial" | "interiores" | "comercial" | "outros";

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Placeholder values must say so explicitly — never invent real facts. */
  location: string;
  year: string;
  area: string;
  excerpt: string;
  description: string[];
  coverImage: ProjectImage;
  images: ProjectImage[];
  drawings: ProjectImage[];
  featured: boolean;
  order: number;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  residencial: "Residencial",
  interiores: "Interiores",
  comercial: "Comercial",
  outros: "Outros",
};
