import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/sections/site-sections";
import { events } from "@/lib/data/site-data";
import { EventCard } from "@/components/sections/event-card";

export default function EventsPage() {
  const t = useTranslations();
  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("events.pageTitle")} subtitle={t("events.pageDesc")} />
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-medium text-brand-blue">{t("events.featured")}</p>
        <p className="mt-2 text-slate-600">{t(events[0].desc)}</p>
      </div>
      <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-3">
        <p className="text-sm font-semibold text-slate-700">{t("events.schedule.title")}</p>
        <p className="text-sm text-slate-600">{t("events.schedule.item1")}</p>
        <p className="text-sm text-slate-600">{t("events.schedule.item2")}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={t(event.title)}
            date={t(event.date)}
            time={event.time}
            description={t(event.desc)}
            category={t(event.category)}
            ageGroup={t(event.age)}
          />
        ))}
      </div>
    </div>
  );
}
