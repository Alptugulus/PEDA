import { cn } from "@/lib/utils";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-32 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue transition focus:ring-2",
        props.className
      )}
    />
  );
}
