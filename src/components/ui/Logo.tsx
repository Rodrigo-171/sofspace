import Link from "next/link";

interface LogoProps {
  variant?: "mark" | "wordmark";
  className?: string;
}

/**
 * Typographic stand-in for the existing SOFSPACE identity (the "SL"
 * monogram + "ARCHITECTURE" caption). No redesign is attempted here — this
 * renders the mark in type until the source logo file is supplied, and a
 * "SOFSPACE" wordmark as the complementary digital brand element described
 * in the brief.
 */
export function Logo({ variant = "mark", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="SOFSPACE — página inicial"
      className={`focus-ring group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden
        className="font-serif-display flex h-9 w-9 shrink-0 items-center justify-center border border-current text-[15px] leading-none"
      >
        SL
      </span>
      {variant === "wordmark" ? (
        <span className="flex flex-col leading-none">
          <span className="font-serif-display text-lg tracking-tight">SOFSPACE</span>
          <span className="mt-1 text-[10px] tracking-[0.28em] opacity-70">ARCHITECTURE</span>
        </span>
      ) : (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="text-sm tracking-tight">SOFSPACE</span>
          <span className="text-[10px] tracking-[0.28em] opacity-70">ARCHITECTURE</span>
        </span>
      )}
    </Link>
  );
}
