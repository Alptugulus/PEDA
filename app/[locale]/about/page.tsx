import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { SectionHeading, CTASection } from "@/components/sections/site-sections";
import { Card } from "@/components/ui/card";
import { buildLocaleAlternates } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: buildLocaleAlternates(locale, "/about")
  };
}

export default function AboutPage() {
  const t = useTranslations();
  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("about.heroTitle")} />
      <Card className="mb-4">
        <p className="whitespace-pre-line leading-7 text-slate-700">{t("about.intro")}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {["who", "mission", "vision", "approach", "support"].map((key) => (
          <Card key={key}>
            <h3 className="text-lg font-semibold">{t(`about.${key}.title`)}</h3>
            <p className="mt-2 text-slate-600">{t(`about.${key}.desc`)}</p>
          </Card>
        ))}
      </div>
      <CTASection />
    </div>
  );
}
