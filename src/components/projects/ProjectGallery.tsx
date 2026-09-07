import { ImageFrame } from "@/components/ui/ImageFrame";
import type { ProjectImage } from "@/types/project";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

type Row = { kind: "full"; image: ProjectImage } | { kind: "pair"; images: ProjectImage[] } | { kind: "single"; image: ProjectImage };

const PANORAMA_RATIO = 1.8;

/**
 * Groups the gallery into rows from each image's own aspect ratio, rather
 * than forcing a uniform grid — wide shots run full-bleed, others pair up
 * two at a time, and a leftover image runs large and alone. This is what
 * produces the "editorial, not uniform grid" gallery the brief asks for.
 */
function layoutRows(images: ProjectImage[]): Row[] {
  const rows: Row[] = [];
  let i = 0;

  while (i < images.length) {
    const current = images[i];
    const ratio = current.width / current.height;

    if (ratio >= PANORAMA_RATIO) {
      rows.push({ kind: "full", image: current });
      i += 1;
      continue;
    }

    const next = images[i + 1];
    if (next && next.width / next.height < PANORAMA_RATIO) {
      rows.push({ kind: "pair", images: [current, next] });
      i += 2;
      continue;
    }

    rows.push({ kind: "single", image: current });
    i += 1;
  }

  return rows;
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const rows = layoutRows(images);

  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      {rows.map((row) => {
        if (row.kind === "full") {
          return (
            <ImageFrame
              key={row.image.src}
              image={row.image}
              sizes="100vw"
              className="w-full"
            />
          );
        }

        if (row.kind === "pair") {
          return (
            <div key={row.images.map((img) => img.src).join("-")} className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
              {row.images.map((image) => (
                <ImageFrame key={image.src} image={image} sizes="(min-width: 640px) 45vw, 100vw" />
              ))}
            </div>
          );
        }

        return (
          <div key={row.image.src} className="mx-auto w-full sm:w-4/5">
            <ImageFrame image={row.image} sizes="(min-width: 640px) 66vw, 100vw" />
          </div>
        );
      })}
    </div>
  );
}
