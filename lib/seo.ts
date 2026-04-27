import type { Metadata } from "next";

export const SUPPORTED_LOCALES = ["tr", "en", "de"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const normalizeLocale = (locale: string): SupportedLocale => {
  if (locale === "en" || locale === "de") return locale;
  return "tr";
};

export const buildLocaleAlternates = (locale: string, path = ""): Metadata["alternates"] => {
  const safeLocale = normalizeLocale(locale);
  const safePath = path.startsWith("/") ? path : `/${path}`;
  const normalizedPath = safePath === "/" ? "" : safePath;

  return {
    canonical: `/${safeLocale}${normalizedPath}`,
    languages: {
      tr: `/tr${normalizedPath}`,
      en: `/en${normalizedPath}`,
      de: `/de${normalizedPath}`
    }
  };
};
