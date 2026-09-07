import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

/**
 * Editorial, asymmetric layout — deliberately not a uniform card grid.
 * Column span + vertical offset cycle every three projects so image scale
 * varies as you scroll, per brief section 7/8.
 */
const PATTERN = [
  { span: "md:col-span-7", offset: "" },
  { span: "md:col-span-5", offset: "md:mt-20" },
  { span: "md:col-span-8 md:col-start-3", offset: "" },
];

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">
      {projects.map((project, index) => {
        const pattern = PATTERN[index % PATTERN.length];
        return (
          <div key={project.slug} className={`col-span-1 ${pattern.span} ${pattern.offset}`}>
            <ProjectCard
              project={project}
              index={index}
              priority={index === 0}
              sizes={pattern.span.includes("col-span-8") ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
            />
          </div>
        );
      })}
    </div>
  );
}
