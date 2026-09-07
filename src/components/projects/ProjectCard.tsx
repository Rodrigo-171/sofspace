import Link from "next/link";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { CATEGORY_LABELS } from "@/types/project";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  sizes: string;
  priority?: boolean;
}

export function ProjectCard({ project, index, sizes, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="focus-ring group flex flex-col gap-4"
    >
      <span className="sr-only">Ver projeto: </span>
      <ImageFrame image={project.coverImage} sizes={sizes} priority={priority} zoom className="w-full" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-serif-display text-xl leading-tight sm:text-2xl">{project.title}</h3>
          <p className="text-xs tracking-[0.12em] text-[var(--color-ink-faint)] opacity-80 transition-opacity duration-500 group-hover:opacity-100">
            {CATEGORY_LABELS[project.category]} · {project.location.replace(" — a confirmar", "")}
          </p>
        </div>
        <span className="pt-1 text-xs text-[var(--color-ink-faint)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Link>
  );
}
