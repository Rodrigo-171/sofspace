import { ImageFrame } from "@/components/ui/ImageFrame";
import type { ProjectImage } from "@/types/project";

interface ProjectDrawingsProps {
  drawings: ProjectImage[];
}

export function ProjectDrawings({ drawings }: ProjectDrawingsProps) {
  if (drawings.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {drawings.map((drawing) => (
        <figure key={drawing.src} className="flex flex-col gap-4">
          <ImageFrame image={drawing} sizes="(min-width: 640px) 45vw, 100vw" className="border border-[var(--color-line)]" />
          {drawing.caption ? (
            <figcaption className="text-xs tracking-[0.1em] text-[var(--color-ink-faint)]">
              {drawing.caption.toUpperCase()}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
