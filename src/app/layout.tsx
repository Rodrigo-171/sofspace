import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://sofspace.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SOFSPACE — Sofia Mariano Lima, Arquitetura",
    template: "SOFSPACE — %s",
  },
  description:
    "SOFSPACE é o estúdio autoral de arquitetura e design de interiores de Sofia Mariano Lima, em Barueri, São Paulo. Projetos residenciais, interiores e comerciais.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SOFSPACE",
    title: "SOFSPACE — Sofia Mariano Lima, Arquitetura",
    description:
      "Arquitetura residencial e design de interiores conduzidos de forma autoral por Sofia Mariano Lima.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "SOFSPACE — Sofia Mariano Lima, Arquitetura",
    description:
      "Arquitetura residencial e design de interiores conduzidos de forma autoral por Sofia Mariano Lima.",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SOFSPACE",
      url: SITE_URL,
      sameAs: ["https://instagram.com/s0fspace"],
      founder: { "@id": `${SITE_URL}/#sofia` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#sofia`,
      name: "Sofia Mariano Lima",
      jobTitle: "Arquiteta",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Barueri",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
