"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { galleryItems } from "@/lib/data/site-data";
import { SectionHeading } from "@/components/sections/site-sections";

export default function GalleryPage() {
  const t = useTranslations();

  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("gallery.pageTitle")} subtitle={t("gallery.pageDesc")} />
      <section className="mb-10 max-w-3xl" aria-labelledby="gallery-video-heading">
        <h2 id="gallery-video-heading" className="text-lg font-semibold text-slate-900">
          {t("gallery.videoTitle")}
        </h2>
        <div className="mx-auto mt-4 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-soft">
          <video
            className="mx-auto max-h-[min(72vh,640px)] w-full object-contain"
            controls
            playsInline
            preload="metadata"
            aria-label={t("gallery.videoAriaLabel")}
          >
            <source src="/videos/peda-gallery-intro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <h2 className="mb-4 text-lg font-semibold text-slate-900">{t("gallery.photosSectionTitle")}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={t(`gallery.photoAlts.${item.altKey}`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold">{t(item.titleKey)}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
