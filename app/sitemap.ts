export default function sitemap() {
  const baseUrl = "https://www.pedaatolye.com";
  const locales = ["tr", "en", "de"];
  // Gallery is intentionally excluded from indexing scope.
  const paths = ["", "/about", "/workshops", "/blog", "/contact"];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date()
    }))
  );
}
