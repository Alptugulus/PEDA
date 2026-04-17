import { Card } from "@/components/ui/card";

export function ContactCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-1 font-medium">{value}</p>
    </Card>
  );
}
