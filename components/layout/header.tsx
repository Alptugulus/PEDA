import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/lib/routing";
import { navItems } from "@/lib/data/site-data";
import { TopBar } from "./top-bar";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-slate-50/95 backdrop-blur">
      <TopBar />
      <div className="relative">
        <div className="container-peda flex items-center justify-between py-3">
          <Link href="/" className="focus-ring inline-flex items-center rounded-md">
            <Image src="/peda-logo.png?v=2" alt="PEDA logo" width={360} height={164} className="h-20 w-auto sm:h-24" priority />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href || "/"} className="focus-ring rounded-md">
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
