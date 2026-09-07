import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-header">
      <div className="container-editorial flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <p className="text-xs tracking-[0.2em] text-[var(--color-ink-faint)]">404</p>
        <h1 className="font-serif-display text-3xl sm:text-4xl">Esta página não foi encontrada.</h1>
        <Link
          href="/"
          className="focus-ring text-sm tracking-wide underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-ink)]"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
