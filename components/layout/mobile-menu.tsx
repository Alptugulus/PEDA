"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { navItems } from "@/lib/data/site-data";
import { Link } from "@/lib/routing";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        className="h-10 w-10 p-0"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-y border-slate-200 bg-white/95 px-4 py-4 shadow-soft backdrop-blur"
        >
          <nav className="container-peda flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href || "/"}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
