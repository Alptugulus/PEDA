import { useTranslations } from "next-intl";
import { ContactCard } from "@/components/sections/contact-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/site-sections";
import { GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("contact.pageTitle")} subtitle={t("contact.pageDesc")} />
      <div className="grid gap-4 md:grid-cols-2">
        <ContactCard title={t("contact.phone")} value="+90 536 040 06 69" />
        <ContactCard title={t("contact.address")} value={t("location.full")} />
      </div>
      <div className="mt-6 grid gap-4">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <iframe
            title="PEDA Konum Haritasi"
            src={GOOGLE_MAPS_EMBED_URL}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full"
          />
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-slate-700">{t("contact.openingHours")}</p>
        <p className="mt-2 text-sm text-slate-600">{t("contact.openingHoursWeekday")}</p>
        <p className="mt-1 text-sm text-slate-600">{t("contact.openingHoursWeekend")}</p>
      </div>
    </div>
  );
}
