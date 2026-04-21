import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import { routing } from "@/lib/routing";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pedaatolye.com"),
  title: {
    default: "PEDA Atolye",
    template: "%s | PEDA Atolye"
  },
  description: "PEDA cocuk, yetiskin ve aileler icin cok dilli gelisim odakli atolye ve danismanlik hizmetleri sunar.",
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
        {children}
      </body>
    </html>
  );
}
