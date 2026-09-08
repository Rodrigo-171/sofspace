import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

// Cards share one crop ratio so rows line up evenly even though the
// source photography varies wildly in orientation — the individual
// project page still shows every photo at its true, uncropped ratio.
const CARD_RATIO = "4 / 3";
const LEAD_RATIO = "2 / 1";

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [lead, ...rest] = projects;
  if (!lead) return null;

  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      <ProjectCard
        project={lead}
        index={0}
        priority
        ratio={LEAD_RATIO}
        sizes="100vw"
      />

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-14">
          {rest.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
              ratio={CARD_RATIO}
              sizes="(min-width: 640px) 45vw, 100vw"
            />
          ))}
        </div>
      )}
    </div>
  );
}
