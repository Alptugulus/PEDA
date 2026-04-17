import { useTranslations } from "next-intl";
import { blogPosts } from "@/lib/data/site-data";
import { BlogCard } from "@/components/sections/blog-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/site-sections";

export default function BlogPage() {
  const t = useTranslations();
  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("blog.pageTitle")} subtitle={t("blog.pageDesc")} />
      <div className="mb-6 flex flex-wrap gap-2">
        {["childDevelopment", "parentGuidance", "languageWorkshops", "psychologicalSupport", "studentCoaching", "events"].map((cat) => (
          <button key={cat} className="focus-ring rounded-full border border-slate-200 bg-white px-4 py-2 text-sm">
            {t(`blog.categories.${cat}`)}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} href={`/blog/${post.slug}`} title={t(post.title)} excerpt={t(post.excerpt)} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="secondary">{t("common.loadMore")}</Button>
      </div>
    </div>
  );
}
