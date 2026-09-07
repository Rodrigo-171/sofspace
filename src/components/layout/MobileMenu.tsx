"use client";

import { useEffect } from "react";
import { Navigation } from "./Navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className={`fixed inset-0 z-40 bg-[var(--color-paper)] transition-opacity duration-500 md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex h-full flex-col justify-center px-[var(--gutter)]">
        <Navigation
          onNavigate={onClose}
          className="[&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-6 [&_a]:font-serif-display [&_a]:text-4xl"
        />
      </div>
    </div>
  );
}
