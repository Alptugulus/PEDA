import { buildLocaleAlternates } from "@/lib/seo";

export default async function Head({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const alternates = buildLocaleAlternates(locale, "/blog");
  const canonicalHref = typeof alternates?.canonical === "string" ? alternates.canonical : "/tr/blog";
  const trHref = typeof alternates?.languages?.tr === "string" ? alternates.languages.tr : "/tr/blog";
  const enHref = typeof alternates?.languages?.en === "string" ? alternates.languages.en : "/en/blog";
  const deHref = typeof alternates?.languages?.de === "string" ? alternates.languages.de : "/de/blog";

  return (
    <>
      <link rel="canonical" href={canonicalHref} />
      <link rel="alternate" hrefLang="tr" href={trHref} />
      <link rel="alternate" hrefLang="en" href={enHref} />
      <link rel="alternate" hrefLang="de" href={deHref} />
      <link rel="alternate" hrefLang="x-default" href="/tr/blog" />
    </>
  );
}
