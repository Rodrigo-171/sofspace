"use client";

import { useMemo, useState } from "react";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CATEGORY_LABELS } from "@/types/project";
import type { Project, ProjectCategory } from "@/types/project";

interface ProjectsArchiveProps {
  projects: Project[];
}

type FilterValue = ProjectCategory | "todos";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "residencial", label: CATEGORY_LABELS.residencial },
  { value: "interiores", label: CATEGORY_LABELS.interiores },
  { value: "comercial", label: CATEGORY_LABELS.comercial },
  { value: "outros", label: CATEGORY_LABELS.outros },
];

export function ProjectsArchive({ projects }: ProjectsArchiveProps) {
  const [filter, setFilter] = useState<FilterValue>("todos");

  const visible = useMemo(
    () => (filter === "todos" ? projects : projects.filter((project) => project.category === filter)),
    [projects, filter]
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtrar projetos por categoria"
        className="mb-16 flex flex-wrap gap-x-8 gap-y-3 border-b border-[var(--color-line)] pb-8 sm:mb-20"
      >
        {FILTERS.map((option) => {
          const isActive = filter === option.value;
          return (
            <button
              key={option.value}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setFilter(option.value)}
              className={`focus-ring text-xs tracking-[0.18em] uppercase transition-opacity ${
                isActive ? "opacity-100 underline underline-offset-8" : "opacity-50 hover:opacity-90"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <ProjectGrid projects={visible} />
      ) : (
        <p className="py-16 text-sm text-[var(--color-ink-faint)]">
          Nenhum projeto nesta categoria por enquanto.
        </p>
      )}
    </div>
  );
}
