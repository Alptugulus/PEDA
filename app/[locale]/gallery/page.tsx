import { useTranslations } from "next-intl";
import { galleryItems } from "@/lib/data/site-data";
import { SectionHeading } from "@/components/sections/site-sections";

export default function GalleryPage() {
  const t = useTranslations();
  const categories = ["all", "children", "family", "language"] as const;
  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("gallery.pageTitle")} subtitle={t("gallery.pageDesc")} />
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm focus-ring">
            {t(`gallery.categories.${cat}`)}
          </button>
        ))}
      </div>
      <div className="columns-2 gap-4 md:columns-3">
        {galleryItems.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid rounded-2xl bg-white p-3 shadow-soft">
            <div className="h-40 rounded-xl bg-gradient-to-br from-brand-orange/30 to-brand-purple/25" />
            <p className="mt-3 text-sm font-semibold">{t(item.title)}</p>
            <p className="mt-1 text-xs text-slate-500">{t(item.category)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
