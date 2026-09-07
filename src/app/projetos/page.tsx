import type { Metadata } from "next";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Arquivo de projetos residenciais, de interiores e comerciais assinados por Sofia Mariano Lima, SOFSPACE.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-header">
      <div className="container-editorial py-20 sm:py-28">
        <p className="mb-3 text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">ARQUIVO</p>
        <h1 className="font-serif-display mb-16 text-4xl sm:mb-20 sm:text-5xl">Projetos</h1>

        <ProjectsArchive projects={projects} />
      </div>
    </div>
  );
}
