import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { routing } from "@/lib/routing";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pedaatolye.com"),
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/icon.png"]
  },
  manifest: "/manifest.webmanifest",
  title: {
    default: "PEDA Atolye",
    template: "%s | PEDA Atolye"
  },
  description: "PEDA cocuk, yetiskin ve aileler icin cok dilli gelisim odakli atolye ve danismanlik hizmetleri sunar.",
  keywords: [
    "istanbul cocuk atolyesi",
    "cocuk gelisim atolyesi",
    "pedagog destek",
    "ebeveyn rehberligi",
    "dil atolyesi"
  ],
  alternates: {
    canonical: "/",
    languages: {
      tr: "/tr",
      en: "/en",
      de: "/de"
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.pedaatolye.com",
    siteName: "PEDA Atolye",
    title: "PEDA Atolye",
    description: "PEDA cocuk, yetiskin ve aileler icin cok dilli gelisim odakli atolye ve danismanlik hizmetleri sunar.",
    locale: "tr_TR"
  },
  twitter: {
    card: "summary_large_image",
    title: "PEDA Atolye",
    description: "PEDA cocuk, yetiskin ve aileler icin cok dilli gelisim odakli atolye ve danismanlik hizmetleri sunar."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={routing.defaultLocale} suppressHydrationWarning>
      <body className={`${nunito.variable} ${playfair.variable} font-[var(--font-nunito)]`}>
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "PEDA Atolye",
              url: "https://www.pedaatolye.com",
              image: "https://www.pedaatolye.com/icon.png",
              logo: "https://www.pedaatolye.com/icon.png",
              telephone: "+90 536 040 06 69",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cumhuriyet Mahallesi, 1979. Sk. No: 16 Kat: 2 Ic Kapi No: 44",
                addressLocality: "Esenyurt",
                addressRegion: "Istanbul",
                addressCountry: "TR"
              },
              areaServed: "Istanbul"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
