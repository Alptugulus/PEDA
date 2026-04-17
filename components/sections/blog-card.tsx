import { Card } from "@/components/ui/card";
import { Link } from "@/lib/routing";
import { useTranslations } from "next-intl";

export function BlogCard({
  href,
  title,
  excerpt
}: {
  href: string;
  title: string;
  excerpt: string;
}) {
  const t = useTranslations();
  return (
    <Card>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
      <Link href={href} className="mt-4 inline-block text-sm font-semibold text-brand-blue">
        {t("common.readMore")}
      </Link>
    </Card>
  );
}
