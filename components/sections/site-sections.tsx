"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, ClipboardList, GraduationCap, HeartHandshake, Languages, Play, Users, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/routing";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { blogPosts, events, galleryItems, serviceItems } from "@/lib/data/site-data";

const iconMap = { Users, Languages, ClipboardList, HeartHandshake, Brain, GraduationCap };

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations();
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  useEffect(() => {
    if (!isStoryOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsStoryOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isStoryOpen]);

  return (
    <section className="container-peda py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft md:p-14"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-yellow/40 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-brand-purple/20 blur-2xl" />
        <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
          <div className="inline-flex shrink-0">
            <Image src="/peda-logo.png" alt="PEDA logo" width={340} height={155} className="h-16 w-auto sm:h-20" />
          </div>
          <Badge className="max-w-2xl shrink text-center text-balance leading-relaxed">
            {t("hero.badge")}
          </Badge>
        </div>
        <h1 className="mt-5 max-w-none text-balance font-[var(--font-playfair)] text-4xl font-bold text-slate-900 md:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mt-4 max-w-none whitespace-pre-line text-slate-600">{t("hero.description")}</p>
        <div className="mt-8">
          <Button type="button" onClick={() => setIsStoryOpen(true)} className="gap-2">
            <Play className="h-4 w-4 fill-current" />
            PEDA'nin Hikayesi
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/workshops" className={cn(buttonVariants({ variant: "default" }))}>
            {t("hero.primaryCta")}
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "secondary" }))}>
            {t("hero.secondaryCta")}
          </Link>
        </div>
      </motion.div>
      {isStoryOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setIsStoryOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-[28px] border border-white/20 bg-gradient-to-b from-slate-900 to-black p-2 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:max-w-md"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsStoryOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-black focus-ring"
              aria-label="Videoyu kapat"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              className="aspect-[4/5] h-auto w-full rounded-3xl border border-white/15 object-cover"
              controls
              autoPlay
              playsInline
              preload="none"
              poster="/videos/peda-story-hd-poster.jpg"
              aria-label="PEDA hikayesi tanitim videosu"
            >
              <source src="/videos/peda-story-hd.mp4" type="video/mp4" />
              Tarayiciniz video etiketini desteklemiyor.
            </video>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function ServicesGrid() {
  const t = useTranslations();
  return (
    <section className="container-peda section-peda">
      <SectionHeading title={t("sections.services.title")} subtitle={t("sections.services.subtitle")} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <Card>
              <Icon className="mb-4 h-8 w-8 text-brand-blue" />
              <h3 className="text-lg font-semibold">{t(item.title)}</h3>
              <p className="mt-2 text-sm text-slate-600">{t(item.desc)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.audience.map((aud) => (
                  <Badge key={aud}>{t(`audience.${aud}`)}</Badge>
                ))}
              </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function EventsPreview() {
  const t = useTranslations();
  return (
    <section className="container-peda section-peda">
      <SectionHeading title={t("sections.events.title")} subtitle={t("sections.events.subtitle")} />
      <div className="grid gap-4 md:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <p className="text-xs text-brand-purple">{t(event.date)}</p>
            <h3 className="mt-2 text-lg font-semibold">{t(event.title)}</h3>
            <p className="mt-2 text-sm text-slate-600">{t(event.desc)}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-yellow/40 px-2 py-1 text-xs text-slate-700">{t(event.category)}</span>
              <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-xs text-brand-blue">{t(event.age)}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">{event.time}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function BlogPreview() {
  const t = useTranslations();
  return (
    <section className="container-peda section-peda">
      <SectionHeading title={t("sections.blog.title")} subtitle={t("sections.blog.subtitle")} />
      <div className="grid gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <p className="text-xs text-brand-green">{t(post.category)}</p>
            <h3 className="mt-2 text-lg font-semibold">{t(post.title)}</h3>
            <p className="mt-2 text-sm text-slate-600">{t(post.excerpt)}</p>
            <Link className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue" href={`/blog/${post.slug}`}>
              {t("common.readMore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const t = useTranslations();
  return (
    <section className="container-peda section-peda">
      <SectionHeading title={t("sections.gallery.title")} subtitle={t("sections.gallery.subtitle")} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryItems.slice(0, 6).map((item) => (
          <div key={item.id} className="aspect-square rounded-2xl bg-gradient-to-br from-brand-yellow/30 to-brand-purple/20 p-4">
            <p className="text-sm font-semibold">{t(item.title)}</p>
            <p className="mt-1 text-xs text-slate-600">{t(item.category)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  const t = useTranslations();
  return (
    <section className="container-peda section-peda">
      <div className="rounded-3xl bg-brand-blue p-8 text-white md:p-12">
        <h3 className="font-[var(--font-playfair)] text-3xl font-bold">{t("cta.title")}</h3>
        <p className="mt-3 max-w-2xl text-white/85">{t("cta.description")}</p>
        <Link href="/contact" className={cn(buttonVariants({ variant: "secondary" }), "mt-6 bg-white text-brand-blue hover:bg-white/90")}>
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
}
