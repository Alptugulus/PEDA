import { useTranslations } from "next-intl";
import { blogPosts } from "@/lib/data/site-data";
import { Card } from "@/components/ui/card";
import { BlogCard } from "@/components/sections/blog-card";

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = useTranslations();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <article className="container-peda py-14">
      <div className="rounded-3xl bg-slate-200 p-20 text-center text-slate-500">{t("blog.featuredImagePlaceholder")}</div>
      <h1 className="mt-8 font-[var(--font-playfair)] text-4xl font-bold">{t(post.title)}</h1>
      <p className="mt-2 text-sm text-slate-500">{t(post.date)}</p>
      <Card className="mt-6">
        <p className="leading-7 text-slate-700">{t("blog.articleBody")}</p>
      </Card>
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">{t("blog.related")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <BlogCard key={item.slug} href={`/blog/${item.slug}`} title={t(item.title)} excerpt={t(item.excerpt)} />
          ))}
        </div>
      </section>
    </article>
  );
}
