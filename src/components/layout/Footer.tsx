import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="container-editorial flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-6">
          <Logo variant="wordmark" />
          <p className="max-w-xs text-sm leading-relaxed text-[var(--color-ink-soft)]">
            Arquitetura residencial e design de interiores conduzidos por Sofia Mariano Lima,
            em Barueri, São Paulo.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm md:flex-row md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">NAVEGAÇÃO</span>
            <Link href="/projetos" className="focus-ring w-fit hover:text-[var(--color-ink-soft)]">
              Projetos
            </Link>
            <Link href="/sobre" className="focus-ring w-fit hover:text-[var(--color-ink-soft)]">
              Sobre
            </Link>
            <Link href="/contato" className="focus-ring w-fit hover:text-[var(--color-ink-soft)]">
              Contato
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">CONTATO</span>
            <a
              href="https://instagram.com/s0fspace"
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring w-fit hover:text-[var(--color-ink-soft)]"
            >
              @s0fspace
            </a>
            <a
              href="mailto:sofiamarianolima@hotmail.com"
              className="focus-ring w-fit hover:text-[var(--color-ink-soft)]"
            >
              sofiamarianolima@hotmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="container-editorial flex flex-col gap-2 border-t border-[var(--color-line)] py-6 text-xs text-[var(--color-ink-faint)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} SOFSPACE. Todos os direitos reservados.</span>
        <span>Barueri, São Paulo, Brasil</span>
      </div>
    </footer>
  );
}
