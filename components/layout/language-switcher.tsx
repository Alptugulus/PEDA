"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      aria-label="Language switcher"
      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs"
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
    >
      <option value="tr">TR</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
