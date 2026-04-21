import { useTranslations } from "next-intl";
import {
  BlogPreview,
  CTASection,
  GalleryPreview,
  HeroSection,
  SectionHeading,
  ServicesGrid
} from "@/components/sections/site-sections";
import { AudienceCard } from "@/components/sections/audience-card";
import { Card } from "@/components/ui/card";
import { GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <section className="container-peda section-peda">
        <SectionHeading title={t("home.introTitle")} subtitle={t("home.introSubtitle")} />
        <Card>
          <p className="max-w-4xl leading-7 text-slate-700">{t("home.introBody")}</p>
        </Card>
      </section>
      <section className="container-peda section-peda">
        <SectionHeading title={t("sections.audience.title")} subtitle={t("sections.audience.subtitle")} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["children", "adults", "families", "institutions"].map((aud) => (
            <AudienceCard key={aud} title={t(`audience.${aud}`)} description={t(`audienceDesc.${aud}`)} />
          ))}
        </div>
      </section>
      <section className="container-peda section-peda">
        <SectionHeading title={t("sections.why.title")} subtitle={t("sections.why.subtitle")} />
        <Card className="bg-white">
          <p className="text-slate-700">{t("sections.why.body")}</p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {[0, 1, 2, 3, 4].map((idx) => (
              <li key={idx} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {t(`whyItems.${idx}`)}
              </li>
            ))}
          </ul>
        </Card>
      </section>
      <BlogPreview />
      <GalleryPreview />
      <section className="container-peda section-peda">
        <SectionHeading title={t("sections.contactTeaser.title")} subtitle={t("sections.contactTeaser.subtitle")} />
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <iframe
              title="PEDA Konum Haritasi"
              src={GOOGLE_MAPS_EMBED_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full"
            />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
