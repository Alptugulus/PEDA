import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import { routing } from "@/lib/routing";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pedaatolye.com"),
  title: "PEDA - Cocuk Yetiskin Atolye",
  description: "PEDA cok dilli modern tanitim sitesi",
  alternates: {
    canonical: "/",
    languages: {
      tr: "/tr",
      en: "/en",
      de: "/de"
    }
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
