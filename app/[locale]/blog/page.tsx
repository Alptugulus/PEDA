 "use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { blogPosts } from "@/lib/data/site-data";
import { BlogCard } from "@/components/sections/blog-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/site-sections";

export default function BlogPage() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: t("gallery.categories.all"), categories: [] as string[] },
    {
      key: "childDevelopment",
      label: t("blog.categories.childDevelopment"),
      categories: ["blog.categories.childDevelopment", "blog.categories.education"]
    },
    {
      key: "parentGuidance",
      label: t("blog.categories.parentGuidance"),
      categories: ["blog.categories.parentGuidance", "blog.categories.family"]
    },
    {
      key: "languageWorkshops",
      label: t("blog.categories.languageWorkshops"),
      categories: ["blog.categories.languageWorkshops"]
    },
    {
      key: "studentCoaching",
      label: t("blog.categories.studentCoaching"),
      categories: ["blog.categories.studentCoaching", "blog.categories.guidance"]
    },
  ];

  const filteredPosts = useMemo(() => {
    const selectedFilter = filters.find((filter) => filter.key === activeFilter);
    if (!selectedFilter || selectedFilter.key === "all") return blogPosts;
    return blogPosts.filter((post) => selectedFilter.categories.includes(post.category));
  }, [activeFilter, filters]);

  return (
    <div className="container-peda py-14">
      <SectionHeading title={t("blog.pageTitle")} subtitle={t("blog.pageDesc")} />
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
              activeFilter === filter.key
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} href={`/blog/${post.slug}`} title={t(post.title)} excerpt={t(post.excerpt)} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="secondary">{t("common.loadMore")}</Button>
      </div>
    </div>
  );
}
