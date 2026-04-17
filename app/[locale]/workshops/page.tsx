import { useTranslations } from "next-intl";
import { ServicesGrid, SectionHeading } from "@/components/sections/site-sections";
import { serviceItems } from "@/lib/data/site-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WorkshopsPage() {
  const t = useTranslations();
  return (
    <div className="py-14">
      <section className="container-peda">
        <SectionHeading title={t("workshops.heroTitle")} subtitle={t("workshops.heroDesc")} />
      </section>
      <ServicesGrid />
      <section className="container-peda section-peda">
        <div className="grid gap-4 lg:grid-cols-2">
          {serviceItems.map((service) => (
            <Card key={`long-${service.title}`}>
              <h3 className="text-xl font-semibold text-slate-900">{t(service.title)}</h3>
              <p className="mt-2 text-sm text-slate-600">{t(service.long)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.audience.map((aud) => (
                  <Badge key={aud}>{t(`audience.${aud}`)}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
