const TOOLS = ["SketchUp", "AutoCAD", "Revit", "Rhino", "Enscape", "D5 Render", "Lumion"];

/**
 * Continuous, slow-moving strip of the software Sofia works with. Text-set
 * rather than pulling in brand logo files — keeps the treatment monochrome
 * and consistent with the rest of the interface, and sidesteps needing
 * verified, current logo assets for seven different vendors. Swappable for
 * real logo marks later if the client supplies them.
 */
export function ToolsMarquee() {
  return (
    <div className="border-y border-[var(--color-line)] py-8">
      <p className="mb-6 text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">FERRAMENTAS</p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 gap-16" aria-hidden={copy === 1}>
              {TOOLS.map((tool) => (
                <li
                  key={tool}
                  className="font-serif-display shrink-0 text-2xl whitespace-nowrap text-[var(--color-ink-soft)] sm:text-3xl"
                >
                  {tool}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
