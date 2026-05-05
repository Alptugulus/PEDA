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
  { slug: "ergen-koclugunda-denge", category: "blog.categories.guidance", title: "blog.posts.2.title", excerpt: "blog.posts.2.excerpt", date: "blog.posts.2.date" },
  { slug: "dil-atolyeleri-yeni-yol", category: "blog.categories.languageWorkshops", title: "blog.posts.3.title", excerpt: "blog.posts.3.excerpt", date: "blog.posts.3.date" }
];

export type GalleryFilterCategory = "children" | "family" | "language";

export type GalleryItem = {
  id: string;
  titleKey: string;
  categoryLabelKey: string;
  imageSrc: string;
  altKey: keyof GalleryPhotoAlts;
  filterCategory: GalleryFilterCategory;
};

/** Keys must match `gallery.photoAlts` in messages */
export type GalleryPhotoAlts = {
  playroom1: string;
  classroom: string;
  amigurumi: string;
  climbing: string;
  learningMaterials: string;
  cozyCorner: string;
  shelfToys: string;
};

/** Image filenames do not match scene content; paths are mapped to match each photo’s subject and alt text. */
export const galleryItems: GalleryItem[] = [
  {
    id: "playroom-1",
    titleKey: "gallery.items.playroom1.title",
    categoryLabelKey: "gallery.categories.children",
    imageSrc: "/images/about/classroom-bunny-chairs.png",
    altKey: "playroom1",
    filterCategory: "children"
  },
  {
    id: "classroom",
    titleKey: "gallery.items.classroom.title",
    categoryLabelKey: "gallery.categories.children",
    imageSrc: "/images/about/playroom-climbing.png",
    altKey: "classroom",
    filterCategory: "children"
  },
  {
    id: "amigurumi",
    titleKey: "gallery.items.amigurumi.title",
    categoryLabelKey: "gallery.categories.children",
    imageSrc: "/images/about/playroom-1.png",
    altKey: "amigurumi",
    filterCategory: "children"
  },
  {
    id: "climbing",
    titleKey: "gallery.items.climbing.title",
    categoryLabelKey: "gallery.categories.children",
    imageSrc: "/images/about/amigurumi-family.png",
    altKey: "climbing",
    filterCategory: "children"
  },
  {
    id: "learning-materials",
    titleKey: "gallery.items.learningMaterials.title",
    categoryLabelKey: "gallery.categories.children",
    imageSrc: "/images/about/gallery-learning-materials.png",
    altKey: "learningMaterials",
    filterCategory: "children"
  },
  {
    id: "cozy-corner",
    titleKey: "gallery.items.cozyCorner.title",
    categoryLabelKey: "gallery.categories.family",
    imageSrc: "/images/about/gallery-cozy-corner.png",
    altKey: "cozyCorner",
    filterCategory: "family"
  },
  {
    id: "shelf-toys",
    titleKey: "gallery.items.shelfToys.title",
    categoryLabelKey: "gallery.categories.children",
    imageSrc: "/images/about/gallery-shelf-toys.png",
    altKey: "shelfToys",
    filterCategory: "children"
  }
];
