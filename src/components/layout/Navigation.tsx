"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

interface NavigationProps {
  className?: string;
  onNavigate?: () => void;
}

export function Navigation({ className = "", onNavigate }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Navegação principal">
      <ul className="flex items-center gap-8 text-sm tracking-wide">
        {LINKS.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={`focus-ring relative pb-1 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-current transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
