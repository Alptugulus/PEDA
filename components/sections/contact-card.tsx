import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

export function ContactCard({ title, value, icon }: { title: string; value: string; icon?: ReactNode }) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="rounded-xl bg-slate-100 p-2 text-slate-600">
            {icon}
          </div>
        ) : null}
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-1 font-medium">{value}</p>
        </div>
      </div>
    </Card>
  );
}
