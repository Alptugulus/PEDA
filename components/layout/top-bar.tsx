import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function TopBar() {
  const t = useTranslations();
  return (
    <div className="border-b border-slate-200/80 bg-white/80">
      <div className="container-peda flex flex-wrap items-center justify-between gap-x-3 gap-y-0 py-px leading-tight text-xs text-slate-600">
        <div className="flex items-center gap-4 sm:gap-5">
          <p className="inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" /> +90 536 040 06 69
          </p>
          <p className="hidden items-center gap-1 sm:inline-flex">
            <MapPin className="h-3.5 w-3.5" /> {t("location.short")}
          </p>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
