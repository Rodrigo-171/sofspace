import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sofia Mariano Lima é a arquiteta responsável pela SOFSPACE, estúdio autoral de arquitetura e interiores em Barueri, São Paulo.",
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
              Sofia conduz a SOFSPACE de forma autoral e independente, do primeiro esboço ao
              último acabamento. Trabalha principalmente com arquitetura residencial e design de
              interiores, além de projetos comerciais pontuais, sempre próxima de quem vai viver
              ou trabalhar no espaço.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            <h2 className="font-serif-display text-2xl">Abordagem</h2>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              Cada projeto começa com escuta, não com desenho. Sofia investe tempo em entender a
              rotina de quem vai morar ali, a orientação solar do terreno e os materiais que fazem
              sentido para aquele lugar específico, antes de propor qualquer solução.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              O resultado busca ser discreto e duradouro: espaços que não dependem de tendência
              para envelhecer bem, e que se ajustam à vida de quem os habita — não o contrário.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-6">
            <h2 className="font-serif-display text-2xl">Arquitetura e cotidiano</h2>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ink-soft)]">
              Para Sofia, um bom projeto se prova no uso — na luz que entra na hora certa, no
              caminho curto entre a cozinha e a mesa, no silêncio de um material bem escolhido. É
              esse cuidado com o cotidiano que orienta cada decisão da SOFSPACE.
            </p>
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
    </div>
  );
}
