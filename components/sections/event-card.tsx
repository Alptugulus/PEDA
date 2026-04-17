import { Card } from "@/components/ui/card";

export function EventCard({
  title,
  date,
  time,
  description,
  category,
  ageGroup
}: {
  title: string;
  date: string;
  time: string;
  description: string;
  category: string;
  ageGroup: string;
}) {
  return (
    <Card>
      <p className="text-xs text-brand-purple">{date}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-brand-yellow/40 px-2 py-1 text-slate-700">{category}</span>
        <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-brand-blue">{ageGroup}</span>
      </div>
      <p className="mt-2 text-xs text-slate-500">{time}</p>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </Card>
  );
}
