import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPreview() {
  return (
    <section className="container-editorial py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-paper-dim)]">
            <Image
              src="/images/sofia-portrait.jpg"
              alt="Retrato de Sofia Mariano Lima, arquiteta responsável pela SOFSPACE"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col justify-center gap-6 md:col-span-6 md:col-start-7">
          <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">SOBRE</p>
          <h2 className="font-serif-display text-3xl leading-snug sm:text-4xl">
            Sofia Mariano Lima
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-[var(--color-ink-soft)]">
            Arquiteta e urbanista formada pela Belas Artes, Sofia conduz a SOFSPACE de forma
            autoral e próxima. Seu trabalho parte da escuta para transformar necessidades,
            desejos e personalidade em espaços que façam sentido para quem os vive.
          </p>
          <Link
            href="/sobre"
            className="focus-ring w-fit text-sm tracking-wide underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-ink)]"
          >
            Conhecer a Sofia
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
