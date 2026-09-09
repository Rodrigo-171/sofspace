import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectDrawings } from "@/components/projects/ProjectDrawings";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { Reveal } from "@/components/ui/Reveal";
import { getAdjacentProjects, getAllSlugs, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.excerpt,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `SOFSPACE, ${project.title}`,
      description: project.excerpt,
      images: [{ url: project.coverImage.src }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.excerpt,
    creator: { "@type": "Person", name: "Sofia Mariano Lima" },
    image: project.coverImage.src,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative flex h-[78vh] min-h-[440px] w-full items-end">
        <div className="absolute inset-0 h-full w-full">
          <ImageFrame image={project.coverImage} sizes="100vw" priority className="h-full w-full" />
        </div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="container-editorial relative z-10 pb-14 text-[var(--color-paper)] sm:pb-20">
          <h1 className="font-serif-display text-[clamp(2rem,5.5vw,4rem)] leading-[1.05]">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="container-editorial flex flex-col gap-20 py-16 sm:gap-28 sm:py-24">
        <Reveal>
          <ProjectMeta project={project} />
        </Reveal>

        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">CONCEITO</p>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <ProjectGallery images={project.images} />
        </Reveal>

        {project.drawings.length > 0 && (
          <Reveal className="flex flex-col gap-8">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">DESENHOS TÉCNICOS</p>
            <ProjectDrawings drawings={project.drawings} />
          </Reveal>
        )}

        <Reveal className="font-serif-display text-center text-2xl italic text-[var(--color-ink-soft)] sm:text-3xl">
          Um espaço pensado para quem vive nele.
        </Reveal>
      </div>

      <div className="container-editorial">
        <ProjectNav previous={previous} next={next} />
      </div>
    </article>
  );
}
