import { ImageFrame } from "@/components/ui/ImageFrame";
import type { Project } from "@/types/project";

interface HeroProps {
  project: Project;
}

export function Hero({ project }: HeroProps) {
  const heroImage = project.images[0] ?? project.coverImage;

  return (
    <section className="relative flex h-[92vh] min-h-[560px] w-full items-end overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <ImageFrame image={heroImage} sizes="100vw" priority className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
      />

      <div className="container-editorial relative z-10 flex flex-col gap-6 pb-16 text-[var(--color-paper)] sm:pb-20">
        <h1 className="font-serif-display max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05]">
          Arquitetura como forma de habitar.
        </h1>
        <p className="max-w-md text-sm tracking-wide text-[var(--color-paper)]/85 sm:text-base">
          Projetos residenciais, interiores e comerciais assinados por Sofia Mariano Lima.
        </p>
      </div>
    </section>
  );
}
