import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Specialties } from "@/components/about/Specialties";
import { ToolsMarquee } from "@/components/about/ToolsMarquee";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sofia Mariano Lima é arquiteta e urbanista, formada pela Belas Artes, e conduz a SOFSPACE, estúdio autoral de arquitetura e interiores em Barueri, São Paulo.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className="pt-header">
      <section className="container-editorial grid grid-cols-1 gap-12 py-20 sm:py-28 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-paper-dim)] md:sticky md:top-32">
            <Image
              src="/images/sofia-portrait.jpg"
              alt="Retrato de Sofia Mariano Lima, arquiteta responsável pela SOFSPACE"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-14 md:col-span-6 md:col-start-7">
          <Reveal className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">SOBRE</p>
            <h1 className="font-serif-display text-4xl leading-snug sm:text-5xl">
              Sofia Mariano Lima
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
              Sou arquiteta e urbanista, formada pela Belas Artes em 2025, e conduzo a SOFSPACE de
              forma autoral e próxima. Meu trabalho parte da escuta para transformar necessidades,
              desejos e personalidade em espaços que façam sentido para quem os vive.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            <h2 className="font-serif-display text-2xl">Abordagem</h2>
            <p className="font-serif-display text-xl italic text-[var(--color-ink-soft)]">
              Antes do desenho, vem a conversa.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              Busco entender a rotina, os desejos e a personalidade de cada cliente para criar
              espaços onde funcionalidade, conforto e identidade coexistam naturalmente.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              Madeira, elementos naturais e cores fazem parte do meu repertório, mas não existem
              fórmulas. Cada projeto encontra sua própria linguagem — porque, para mim, um espaço
              só está verdadeiramente resolvido quando quem vive nele consegue se reconhecer.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            <h2 className="font-serif-display text-2xl">Por que SOFSPACE?</h2>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              SOFSPACE nasce do meu mundo. Desde pequena, sempre gostei de olhar o mundo por
              outras perspectivas — e <em>space</em> não representa apenas o espaço físico, mas
              também o espaço onde vivemos, construímos nossas experiências e formamos nossa
              maneira de enxergar o mundo.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              É o meu próprio espaço: uma mente em constante movimento, mudança e descoberta. Em
              cada projeto, um pouco desse mundo encontra o mundo de quem vai viver aquele espaço
              — e é desse encontro que nasce a arquitetura.
            </p>
          </Reveal>

          <Reveal>
            <Specialties />
          </Reveal>

          <Reveal>
            <Link
              href="/contato"
              className="focus-ring inline-flex items-center border border-[var(--color-ink)] px-8 py-4 text-xs tracking-[0.2em] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
            >
              ENTRAR EM CONTATO
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="container-editorial pb-20 sm:pb-28">
        <Reveal>
          <ToolsMarquee />
        </Reveal>
      </div>
    </div>
  );
}
