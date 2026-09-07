import Image from "next/image";
import type { ProjectImage } from "@/types/project";

interface ImageFrameProps {
  image: ProjectImage;
  sizes: string;
  priority?: boolean;
  zoom?: boolean;
  className?: string;
}

/**
 * Fixed-aspect-ratio wrapper around next/image. Aspect ratio is derived
 * from the image's own stored dimensions so nothing shifts on load, and
 * the composition of the source photograph is never distorted (object-fit
 * cover on a ratio that matches the asset, not a forced crop).
 */
export function ImageFrame({ image, sizes, priority = false, zoom = false, className = "" }: ImageFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--color-paper-dim)] ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
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
