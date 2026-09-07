import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectNavProps {
  previous?: Project;
  next?: Project;
}

export function ProjectNav({ previous, next }: ProjectNavProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Navegação entre projetos"
      className="grid grid-cols-1 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] sm:grid-cols-2 sm:divide-x sm:divide-y-0"
    >
      {previous ? (
        <Link
          href={`/projetos/${previous.slug}`}
          className="focus-ring group flex flex-col gap-2 py-10 pr-6 sm:pr-10"
        >
          <span className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">PROJETO ANTERIOR</span>
          <span className="font-serif-display text-2xl transition-transform duration-500 group-hover:-translate-x-1 sm:text-3xl">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}

      {next ? (
        <Link
          href={`/projetos/${next.slug}`}
          className="focus-ring group flex flex-col items-start gap-2 py-10 pl-0 sm:items-end sm:pl-10 sm:text-right"
        >
          <span className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">PRÓXIMO PROJETO</span>
          <span className="font-serif-display text-2xl transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
            {next.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  );
}
