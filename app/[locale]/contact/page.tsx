import { useTranslations } from "next-intl";
import Link from "next/link";
import { ClipboardList, MapPin, Phone } from "lucide-react";
import { ContactCard } from "@/components/sections/contact-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/site-sections";
import { GOOGLE_FORM_URL, GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("contact.pageTitle")} subtitle={t("contact.pageDesc")} />
      <div className="grid gap-4 md:grid-cols-2">
        <ContactCard title={t("contact.phone")} value="+90 536 040 06 69" icon={<Phone className="h-4 w-4" />} />
        <ContactCard title={t("contact.address")} value={t("location.full")} icon={<MapPin className="h-4 w-4" />} />
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-slate-100 p-2 text-slate-600">
            <ClipboardList className="h-4 w-4" />
          </div>
          <p className="text-sm font-semibold text-slate-700">{t("contact.googleFormTitle")}</p>
        </div>
        <p className="mt-2 text-sm text-slate-600">{t("contact.googleFormDesc")}</p>
        <Button asChild className="mt-4">
          <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            {t("contact.googleFormCta")}
          </Link>
        </Button>
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
