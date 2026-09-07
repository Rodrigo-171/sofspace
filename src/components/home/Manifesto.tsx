import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-dim)]">
      <div className="container-editorial py-28 sm:py-40">
        <Reveal>
          <p className="font-serif-display mx-auto max-w-3xl text-center text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.35]">
            Cada projeto começa antes do desenho.
            <br />
            <br />
            Começa numa pergunta sobre a luz.
            <br />
            Sobre os materiais.
            <br />
            Sobre a rotina de quem vai viver ali.
            <br />
            <br />
            Só depois, o espaço.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
