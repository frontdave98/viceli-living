import { brand, primaryConsult, residences, showrooms } from "@/lib/content";

export type Cta = {
  label: string;
  href: string;
};

export type NavChild = {
  label: string;
  href: string;
  image?: string;
  lede?: string;
};

export type NavItem = {
  label: string;
  href: string;
  description: string;
  ctaLabel: string;
  children?: readonly NavChild[];
  mega?: "image" | "text";
};

export const locales = [
  { code: "EN", active: true },
  { code: "IT", active: false },
  { code: "DE", active: false },
  { code: "FR", active: false },
  { code: "ES", active: false },
  { code: "CN", active: false },
  { code: "JP", active: false },
  { code: "KR", active: false },
] as const;

const consultCta: Cta = { label: "Consult", href: primaryConsult };
const visitCta: Cta = { label: "Visit", href: "/visit" };
const tokopediaCta: Cta = { label: "Tokopedia", href: brand.tokopedia };

export const productCategories = [
  {
    slug: "sofas",
    title: "Sofas",
    lede: "Lounge forms in linen, boucle, and leather, sized to how you gather.",
    image: "/images/collection-sofas.jpg",
  },
  {
    slug: "dining",
    title: "Dining Tables",
    lede: "Stone, walnut, and glass for long evenings at the table.",
    image: "/images/collection-dining.jpg",
  },
  {
    slug: "mirrors",
    title: "Custom Mirrors",
    lede: "Framed and frameless pieces cut for the architecture.",
    image: "/images/collection-mirrors.jpg",
  },
  {
    slug: "office",
    title: "Office",
    lede: "Desks and seating for rooms made for focused work.",
    image: "/images/collection-office.jpg",
  },
] as const;

export type ProductCategorySlug = (typeof productCategories)[number]["slug"];

export const products = [
  {
    slug: "linen-lounge",
    category: "sofas",
    title: "Linen Lounge",
    lede: "A low lounge in natural linen, made to the width of your room.",
    image: "/images/collection-sofas.jpg",
    finish: "Natural linen",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: tokopediaCta },
  },
  {
    slug: "boucle-corner",
    category: "sofas",
    title: "Boucle Corner",
    lede: "A corner composition in boucle, built around how you sit together.",
    image: "/images/hero.jpg",
    finish: "Ivory boucle",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: visitCta },
  },
  {
    slug: "leather-settee",
    category: "sofas",
    title: "Leather Settee",
    lede: "A compact settee in leather for rooms that need a quieter seat.",
    image: "/images/residence-gading.jpg",
    finish: "Warm leather",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: tokopediaCta },
  },
  {
    slug: "walnut-dining",
    category: "dining",
    title: "Walnut Dining",
    lede: "A solid walnut table sized to the number of seats you actually use.",
    image: "/images/collection-dining.jpg",
    finish: "Oiled walnut",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: visitCta },
  },
  {
    slug: "stone-table",
    category: "dining",
    title: "Stone Table",
    lede: "A stone top on a quiet base, made for long dinners.",
    image: "/images/residence-emerald.jpg",
    finish: "Honed stone",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: tokopediaCta },
  },
  {
    slug: "frameless-mirror",
    category: "mirrors",
    title: "Frameless Mirror",
    lede: "A frameless pane cut to the wall, with a polished edge.",
    image: "/images/collection-mirrors.jpg",
    finish: "Polished edge",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: visitCta },
  },
  {
    slug: "framed-arch",
    category: "mirrors",
    title: "Framed Arch",
    lede: "An arched mirror in a thin metal frame for halls and dressing rooms.",
    image: "/images/residence-bakrie.jpg",
    finish: "Brushed metal frame",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: tokopediaCta },
  },
  {
    slug: "focus-desk",
    category: "office",
    title: "Focus Desk",
    lede: "A writing desk with cable drop and a top sized to your work.",
    image: "/images/collection-office.jpg",
    finish: "Walnut and steel",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: visitCta },
  },
  {
    slug: "work-chair",
    category: "office",
    title: "Work Chair",
    lede: "Upholstered seating for a study, specified with the desk.",
    image: "/images/residence-ancol.jpg",
    finish: "Leather or linen",
    madeToMeasure: true,
    cta: { primary: consultCta, secondary: tokopediaCta },
  },
] as const;

export const projects = residences.map((place) => ({
  slug: place.id,
  name: place.name,
  detail: place.detail,
  image: place.image,
  program:
    place.id === "emerald" || place.id === "gading"
      ? "Full living"
      : place.id === "bakrie"
        ? "Joinery"
        : "Lounge",
  cta: {
    primary: { label: "Begin a similar brief", href: primaryConsult } satisfies Cta,
    secondary: visitCta,
  },
}));

export const collectionLines = [
  {
    slug: "atelier-line",
    title: "Atelier Line",
    lede: "Pieces specified from the brief: one material story, made to measure.",
    image: "/images/hero.jpg",
    productSlugs: ["linen-lounge", "walnut-dining", "frameless-mirror"],
    cta: { primary: { label: "Explore the line", href: "/collections/atelier-line" } satisfies Cta },
  },
  {
    slug: "lounge-program",
    title: "Lounge Program",
    lede: "Sofas and seating for rooms built around gathering.",
    image: "/images/collection-sofas.jpg",
    productSlugs: ["linen-lounge", "boucle-corner", "leather-settee"],
    cta: { primary: { label: "Explore the line", href: "/collections/lounge-program" } satisfies Cta },
  },
  {
    slug: "dining-program",
    title: "Dining Program",
    lede: "Tables and the seats that belong with them.",
    image: "/images/collection-dining.jpg",
    productSlugs: ["walnut-dining", "stone-table"],
    cta: { primary: { label: "Explore the line", href: "/collections/dining-program" } satisfies Cta },
  },
  {
    slug: "studio-2026",
    title: "2026 Studio",
    lede: "A quieter studio set: desk, chair, and a mirror for the wall.",
    image: "/images/collection-office.jpg",
    productSlugs: ["focus-desk", "work-chair", "framed-arch"],
    cta: { primary: { label: "Explore the line", href: "/collections/studio-2026" } satisfies Cta },
  },
] as const;

export const materialGroups = [
  { slug: "woods", title: "Woods" },
  { slug: "fabrics", title: "Fabrics" },
  { slug: "stones", title: "Stones" },
  { slug: "metals", title: "Metals" },
] as const;

export type MaterialGroupSlug = (typeof materialGroups)[number]["slug"];

export const materials = [
  {
    slug: "walnut",
    group: "woods",
    title: "Walnut",
    lede: "Oiled walnut for tables, desks, and joinery with a calm grain.",
    image: "/images/collection-dining.jpg",
    cta: { primary: { label: "Request a sample", href: primaryConsult } satisfies Cta },
  },
  {
    slug: "teak",
    group: "woods",
    title: "Teak",
    lede: "Teak for pieces that need a warmer, more durable surface.",
    image: "/images/residence-pik.jpg",
    cta: { primary: { label: "Request a sample", href: primaryConsult } satisfies Cta },
  },
  {
    slug: "linen",
    group: "fabrics",
    title: "Linen",
    lede: "Natural linen for lounge forms that stay light in the room.",
    image: "/images/collection-sofas.jpg",
    cta: { primary: { label: "Request a sample", href: primaryConsult } satisfies Cta },
  },
  {
    slug: "boucle",
    group: "fabrics",
    title: "Boucle",
    lede: "A textured loop for sofas that ask to be sat in, not just seen.",
    image: "/images/hero.jpg",
    cta: { primary: { label: "Request a sample", href: primaryConsult } satisfies Cta },
  },
  {
    slug: "marble",
    group: "stones",
    title: "Marble",
    lede: "Honed marble for dining tops and consoles.",
    image: "/images/residence-emerald.jpg",
    cta: { primary: { label: "Request a sample", href: primaryConsult } satisfies Cta },
  },
  {
    slug: "brushed-brass",
    group: "metals",
    title: "Brushed brass",
    lede: "A muted brass for frames, pulls, and quiet hardware.",
    image: "/images/collection-mirrors.jpg",
    cta: { primary: { label: "Request a sample", href: primaryConsult } satisfies Cta },
  },
] as const;

export const catalogPages = {
  products: {
    eyebrow: "Products",
    title: "Pieces made to your measure.",
    body: "Sofas, dining, mirrors, and office. Each line starts from the room, not a stock size.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Rooms already living with Viceli.",
    body: "From coastal suites to sky residences. One brief at a time.",
  },
  collections: {
    eyebrow: "Collections",
    title: "Lines you can specify from.",
    body: "Named programs that group seating, tables, and the pieces that sit with them.",
  },
  materials: {
    eyebrow: "Materials",
    title: "Woods, cloth, stone, metal.",
    body: "Finishes we work with in the atelier. Ask for a sample before the spec is locked.",
  },
  visit: {
    eyebrow: "Visit",
    title: "Walk in. Sit down.",
    body: "Two showrooms. Come see the work in person.",
  },
} as const;

export const navTree: readonly NavItem[] = [
  {
    label: "Products",
    href: "/products",
    description: catalogPages.products.body,
    ctaLabel: "View all products",
    mega: "image",
    children: productCategories.map((item) => ({
      label: item.title,
      href: `/products/${item.slug}`,
      image: item.image,
      lede: item.lede,
    })),
  },
  {
    label: "Collections",
    href: "/collections",
    description: catalogPages.collections.body,
    ctaLabel: "View all collections",
    mega: "image",
    children: collectionLines.map((item) => ({
      label: item.title,
      href: `/collections/${item.slug}`,
      image: item.image,
      lede: item.lede,
    })),
  },
  {
    label: "Projects",
    href: "/projects",
    description: catalogPages.projects.body,
    ctaLabel: "View all projects",
    mega: "image",
    children: projects.map((item) => ({
      label: item.name,
      href: `/projects/${item.slug}`,
      image: item.image,
      lede: item.detail,
    })),
  },
  {
    label: "Materials",
    href: "/materials",
    description: catalogPages.materials.body,
    ctaLabel: "View all materials",
    mega: "text",
    children: materialGroups.map((item) => ({
      label: item.title,
      href: `/materials/${item.slug}`,
      lede: `Finishes in ${item.title.toLowerCase()} for custom pieces.`,
    })),
  },
  {
    label: "Visit",
    href: "/visit",
    description: catalogPages.visit.body,
    ctaLabel: "View showrooms",
    mega: "text",
    children: showrooms.map((room) => ({
      label: room.name,
      href: `/visit#showroom-${room.id}`,
      lede: `${room.city}`,
    })),
  },
];

export function getCategory(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((item) => item.category === slug);
}

export function getProduct(category: string, slug: string) {
  return products.find((item) => item.category === category && item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function getCollectionLine(slug: string) {
  return collectionLines.find((item) => item.slug === slug);
}

export function getProductsBySlugs(slugs: readonly string[]) {
  return slugs
    .map((slug) => products.find((item) => item.slug === slug))
    .filter((item): item is (typeof products)[number] => Boolean(item));
}

export function getMaterialGroup(slug: string) {
  return materialGroups.find((item) => item.slug === slug);
}

export function getMaterialsByGroup(slug: string) {
  return materials.filter((item) => item.group === slug);
}

export function getMaterial(slug: string) {
  return materials.find((item) => item.slug === slug);
}

export function getMaterialInGroup(group: string, slug: string) {
  return materials.find((item) => item.group === group && item.slug === slug);
}

export function productHref(product: { category: string; slug: string }) {
  return `/products/${product.category}/${product.slug}`;
}

export function materialHref(material: { group: string; slug: string }) {
  return `/materials/${material.group}/${material.slug}`;
}
