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
      <div className="relative overflow-visible">
        <div className="container-peda flex items-center justify-between py-0">
          <Link
            href="/"
            className="focus-ring relative inline-block aspect-[360/164] h-[5.25rem] shrink-0 overflow-visible rounded-md sm:h-28"
          >
            <Image
              src="/peda-logo.png?v=2"
              alt="PEDA logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 240px, 300px"
              priority
            />
          </Link>
          <nav className="hidden min-w-0 items-center gap-5 text-sm font-medium text-slate-700 xl:gap-7 lg:flex">
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
