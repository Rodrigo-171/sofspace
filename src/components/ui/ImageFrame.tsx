import Image from "next/image";
import type { ProjectImage } from "@/types/project";

interface ImageFrameProps {
  image: ProjectImage;
  sizes: string;
  priority?: boolean;
  zoom?: boolean;
  className?: string;
  /**
   * Overrides the frame's aspect ratio (e.g. "4 / 5") instead of deriving
   * it from the image's own dimensions. Used in grid contexts (project
   * cards) where photos of very different native ratios need to line up
   * into even rows; the individual project page still shows every image
   * at its true ratio.
   */
  ratio?: string;
}

/**
 * Fixed-aspect-ratio wrapper around next/image. By default the aspect
 * ratio is derived from the image's own stored dimensions so nothing
 * shifts on load, and the composition of the source photograph is never
 * distorted (object-fit cover on a ratio that matches the asset, not a
 * forced crop) — pass `ratio` to opt into a shared ratio instead.
 */
export function ImageFrame({ image, sizes, priority = false, zoom = false, className = "", ratio }: ImageFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--color-paper-dim)] ${className}`}
      style={{ aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${zoom ? "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]" : ""}`}
      />
    </div>
  );
}
