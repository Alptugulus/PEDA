import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/lib/routing";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-20 bg-slate-900 text-slate-100">
      <div className="container-peda grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Image src="/peda-logo.png" alt="PEDA logo" width={380} height={173} className="h-24 w-auto" />
          <p className="mt-3 text-sm text-slate-300">{t("tagline")}</p>
        </div>
        <div>
          <p className="font-semibold">{t("footer.quickLinks")}</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/about">{t("nav.about")}</Link>
            <Link href="/workshops">{t("nav.workshops")}</Link>
            <Link href="/contact">{t("nav.contact")}</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">{t("footer.contact")}</p>
          <p className="mt-3 text-sm text-slate-300">+90 536 040 06 69</p>
          <p className="mt-2 text-sm text-slate-300">{t("location.full")}</p>
        </div>
      </div>
    </footer>
  );
}
