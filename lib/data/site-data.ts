export const navItems = [
  { href: "", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/workshops", key: "nav.workshops" },
  { href: "/blog", key: "nav.blog" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/contact", key: "nav.contact" }
];

export const serviceItems = [
  { icon: "Users", title: "services.parent.title", desc: "services.parent.short", long: "services.parent.long", audience: ["children", "families"] },
  { icon: "Languages", title: "services.languages.title", desc: "services.languages.short", long: "services.languages.long", audience: ["children", "adults"] },
  { icon: "ClipboardList", title: "services.assessment.title", desc: "services.assessment.short", long: "services.assessment.long", audience: ["children", "families"] },
  { icon: "HeartHandshake", title: "services.consulting.title", desc: "services.consulting.short", long: "services.consulting.long", audience: ["families"] },
  { icon: "Brain", title: "services.psychology.title", desc: "services.psychology.short", long: "services.psychology.long", audience: ["children", "adults", "families"] },
  { icon: "GraduationCap", title: "services.coaching.title", desc: "services.coaching.short", long: "services.coaching.long", audience: ["students", "families"] }
];

export const events = [
  { id: "1", title: "events.items.0.title", desc: "events.items.0.desc", date: "events.items.0.date", time: "11:00 - 12:30", category: "events.category.workshop", age: "events.age.children" },
  { id: "2", title: "events.items.1.title", desc: "events.items.1.desc", date: "events.items.1.date", time: "14:00 - 15:30", category: "events.category.family", age: "events.age.parent" },
  { id: "3", title: "events.items.2.title", desc: "events.items.2.desc", date: "events.items.2.date", time: "10:30 - 12:00", category: "events.category.language", age: "events.age.preteen" }
];

export const blogPosts = [
  { slug: "oyunla-ogrenme", category: "blog.categories.education", title: "blog.posts.0.title", excerpt: "blog.posts.0.excerpt", date: "blog.posts.0.date" },
  { slug: "evde-duygu-duzenleme", category: "blog.categories.family", title: "blog.posts.1.title", excerpt: "blog.posts.1.excerpt", date: "blog.posts.1.date" },
  { slug: "ergen-koclugunda-denge", category: "blog.categories.guidance", title: "blog.posts.2.title", excerpt: "blog.posts.2.excerpt", date: "blog.posts.2.date" }
];

export const galleryItems = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `gallery.items.${i}.title`,
  category: i % 3 === 0 ? "gallery.categories.children" : i % 3 === 1 ? "gallery.categories.family" : "gallery.categories.language",
  image: `https://images.unsplash.com/photo-${1500000000000 + i * 123456}?auto=format&fit=crop&w=800&q=80`
}));
