"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  // Home and individual project pages open on a full-bleed photographic
  // hero, so the header starts transparent there and solidifies on scroll;
  // every other page has no hero to sit over, so it stays solid.
  const isHeroPage = pathname === "/" || /^\/projetos\/[^/]+$/.test(pathname ?? "");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHeroPage) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroPage]);

  const isSolid = !isHeroPage || scrolled || menuOpen;
  const textOnHero = isHeroPage && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          isSolid ? "bg-[var(--color-paper)]/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div
          className={`container-editorial flex items-center justify-between border-b transition-colors duration-500 ${
            isSolid ? "border-[var(--color-line)]" : "border-transparent"
          } ${textOnHero ? "text-[var(--color-paper)]" : ""}`}
          style={{ height: "var(--header-height, 84px)" }}
        >
          <Logo />

          <Navigation className="hidden md:block" />

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="focus-ring text-xs tracking-[0.2em] md:hidden"
          >
            {menuOpen ? "FECHAR" : "MENU"}
          </button>
        </div>
      </header>

      {/* Rendered outside <header> deliberately: that element gets a
          backdrop-blur when this menu is open, and backdrop-filter on an
          ancestor turns it into the containing block for fixed-position
          descendants — which would confine this "fixed inset-0" overlay
          to the header's own small box instead of the full viewport. */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
