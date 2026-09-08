import { getWhatsAppLink } from "@/lib/contact";

/**
 * Fixed floating action button, present on every page. Kept to WhatsApp's
 * own green so it reads instantly as "WhatsApp" rather than blending into
 * the site's neutral palette — the one deliberate exception to the
 * otherwise quiet interface, since it's a direct utility, not decoration.
 */
export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Conversar no WhatsApp"
      className="focus-ring fixed right-5 bottom-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.22.6 4.36 1.74 6.24L3 29l7.9-2.68a12.9 12.9 0 0 0 5.12 1.06h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 22c-1.72 0-3.4-.46-4.87-1.34l-.35-.2-4.7 1.6 1.58-4.58-.23-.37a9.96 9.96 0 0 1-1.53-5.29c0-5.5 4.48-9.98 9.99-9.98 5.5 0 9.98 4.48 9.98 9.98S21.52 25 16.02 25zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
