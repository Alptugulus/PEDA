export default function sitemap() {
  const baseUrl = "https://www.pedaatolye.com";
  const locales = ["tr", "en", "de"];
  const paths = ["", "/about", "/workshops", "/blog", "/gallery", "/contact"];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date()
    }))
  );
}
