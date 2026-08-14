import type {
  BrandContacts,
  ProductDraft,
  ResidenceRecord,
  ReviewRecord,
  ShowroomList,
} from "./types";

export const brandContacts: BrandContacts = {
  instagram: "https://www.instagram.com/viceliliving/",
  tokopedia: "https://www.tokopedia.com/viceli-living",
  googleBusiness: "https://share.google/BEsMpWuWsSCilN0G6",
};

export const showrooms: ShowroomList = [
  {
    id: "pik",
    name: "Golf Island PIK",
    label: "Showroom PIK",
    address: "Beach Theme Park, Block D No. 70 L",
    city: "Jakarta Utara 14460",
    phone: "+62 813 1188 8048",
    phoneHref: "tel:+6281311888048",
    whatsapp: "https://wa.me/6281311888048",
    maps: "https://maps.google.com/?q=Viceli+Living+Golf+Island+PIK",
    image: "/images/showroom-pik.jpg",
  },
  {
    id: "alam-sutera",
    name: "Alam Sutera",
    label: "Showroom Alam Sutera",
    address: "Alam Sutera Town Center, Block 10 C No. 1",
    city: "Tangerang Selatan",
    phone: "+62 857 7626 6740",
    phoneHref: "tel:+6285776266740",
    whatsapp: "https://wa.me/6285776266740",
    maps: "https://maps.google.com/?q=Viceli+Living+Alam+Sutera+Town+Center",
    image: "/images/showroom-alam.jpg",
  },
];

export const residences: readonly ResidenceRecord[] = [
  {
    id: "pik",
    name: "PIK",
    detail: "A coastal suite that opens to the water.",
    image: "/images/residence-pik.jpg",
  },
  {
    id: "gading",
    name: "Gading Serpong",
    detail: "A family home built around lounge and dining.",
    image: "/images/residence-gading.jpg",
  },
  {
    id: "ancol",
    name: "Ancol",
    detail: "Soft seating for a waterfront apartment.",
    image: "/images/residence-ancol.jpg",
  },
  {
    id: "bakrie",
    name: "Bakrie Tower",
    detail: "Custom joinery for a sky residence.",
    image: "/images/residence-bakrie.jpg",
  },
  {
    id: "emerald",
    name: "Emerald Selatan",
    detail: "A villa with a full living program.",
    image: "/images/residence-emerald.jpg",
  },
];

export const reviews: readonly ReviewRecord[] = [
  {
    quote: "Furniture Bagus, tempatnya Nyaman, Sales Ramah, Pelayanan Baik.",
    source: "Google Review",
  },
  {
    quote: "Owner profesional, permintaan diakomodasi, customer puas!",
    source: "Google Review",
  },
];

export const products: readonly ProductDraft[] = [
  {
    slug: "linen-lounge",
    category: "sofas",
    title: "Linen Lounge",
    lede: "A low lounge in natural linen, made to the width of your room.",
    image: "/images/collection-sofas.jpg",
    finish: "Natural linen",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "boucle-corner",
    category: "sofas",
    title: "Boucle Corner",
    lede: "A corner composition in boucle, built around how you sit together.",
    image: "/images/hero.jpg",
    finish: "Ivory boucle",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "leather-settee",
    category: "sofas",
    title: "Leather Settee",
    lede: "A compact settee in leather for rooms that need a quieter seat.",
    image: "/images/residence-gading.jpg",
    finish: "Warm leather",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "walnut-dining",
    category: "dining",
    title: "Walnut Dining",
    lede: "A solid walnut table sized to the number of seats you actually use.",
    image: "/images/collection-dining.jpg",
    finish: "Oiled walnut",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "stone-table",
    category: "dining",
    title: "Stone Table",
    lede: "A stone top on a quiet base, made for long dinners.",
    image: "/images/residence-emerald.jpg",
    finish: "Honed stone",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "frameless-mirror",
    category: "mirrors",
    title: "Frameless Mirror",
    lede: "A frameless pane cut to the wall, with a polished edge.",
    image: "/images/collection-mirrors.jpg",
    finish: "Polished edge",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "framed-arch",
    category: "mirrors",
    title: "Framed Arch",
    lede: "An arched mirror in a thin metal frame for halls and dressing rooms.",
    image: "/images/residence-bakrie.jpg",
    finish: "Brushed metal frame",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "focus-desk",
    category: "office",
    title: "Focus Desk",
    lede: "A writing desk with cable drop and a top sized to your work.",
    image: "/images/collection-office.jpg",
    finish: "Walnut and steel",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "work-chair",
    category: "office",
    title: "Work Chair",
    lede: "Upholstered seating for a study, specified with the desk.",
    image: "/images/residence-ancol.jpg",
    finish: "Leather or linen",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
];
