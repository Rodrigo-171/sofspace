import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a SOFSPACE para conversar sobre o seu próximo projeto de arquitetura ou interiores.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <div className="pt-header">
      <section className="container-editorial grid grid-cols-1 gap-16 py-20 sm:py-28 md:grid-cols-12">
        <Reveal className="flex flex-col gap-6 md:col-span-5">
          <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">CONTATO</p>
          <h1 className="font-serif-display text-4xl leading-snug sm:text-5xl">
            Vamos conversar sobre o seu espaço?
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-[var(--color-ink-soft)]">
            Conte um pouco sobre o seu projeto — residencial, interiores ou comercial — e Sofia
            retorna para conversar sobre os próximos passos.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">E-MAIL</span>
              <a href="mailto:sofiamarianolima@hotmail.com" className="focus-ring w-fit hover:text-[var(--color-ink-soft)]">
                sofiamarianolima@hotmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">INSTAGRAM</span>
              <a
                href="https://instagram.com/s0fspace"
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring w-fit hover:text-[var(--color-ink-soft)]"
              >
                @s0fspace
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">WHATSAPP</span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring w-fit hover:text-[var(--color-ink-soft)]"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs tracking-[0.18em] text-[var(--color-ink-faint)]">ATENDIMENTO</span>
              <span>Barueri, São Paulo, Brasil</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
