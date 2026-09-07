import Link from "next/link";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/types/project";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="container-editorial py-24 sm:py-32" aria-labelledby="projetos-heading">
      <Reveal as="div" className="mb-16 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">SELECIONADOS</p>
          <h2 id="projetos-heading" className="font-serif-display text-3xl sm:text-4xl">
            Projetos
          </h2>
        </div>
        <Link
          href="/projetos"
          className="focus-ring text-sm tracking-wide underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-ink)]"
        >
          Ver todos os projetos
        </Link>
      </Reveal>

      <Reveal>
        <ProjectGrid projects={projects} />
      </Reveal>
    </section>
  );
}
