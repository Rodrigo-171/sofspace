import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="border-t border-[var(--color-line)]">
      <div className="container-editorial flex flex-col items-center gap-8 py-28 text-center sm:py-36">
        <Reveal>
          <h2 className="font-serif-display max-w-2xl text-[clamp(1.75rem,4.5vw,3rem)] leading-tight">
            Vamos conversar sobre o seu espaço?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/contato"
            className="focus-ring inline-flex items-center border border-[var(--color-ink)] px-8 py-4 text-xs tracking-[0.2em] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          >
            INICIAR UM PROJETO
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
