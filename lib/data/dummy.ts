import type {
  BrandContacts,
  ProductDraft,
  ResidenceRecord,
  ReviewRecord,
  ShowroomList,
} from "./types";

export const brandContacts: BrandContacts = {
  instagram: "#",
  tokopedia: "#",
  googleBusiness: "#",
};

export const showrooms: ShowroomList = [
  {
    id: "pik",
    name: "Showroom North",
    label: "Showroom North",
    address: "Address on request",
    city: "Jakarta",
    phone: "On request",
    phoneHref: "#",
    whatsapp: "/#consult",
    maps: "#",
    image: "/images/showroom-pik.jpg",
  },
  {
    id: "alam-sutera",
    name: "Showroom West",
    label: "Showroom West",
    address: "Address on request",
    city: "Tangerang",
    phone: "On request",
    phoneHref: "#",
    whatsapp: "/#consult",
    maps: "#",
    image: "/images/showroom-alam.jpg",
  },
];

export const residences: readonly ResidenceRecord[] = [
  {
    id: "pik",
    name: "Residence 01",
    detail: "A sample coastal suite.",
    image: "/images/residence-pik.jpg",
  },
  {
    id: "gading",
    name: "Residence 02",
    detail: "A sample family home.",
    image: "/images/residence-gading.jpg",
  },
  {
    id: "ancol",
    name: "Residence 03",
    detail: "A sample waterfront apartment.",
    image: "/images/residence-ancol.jpg",
  },
  {
    id: "bakrie",
    name: "Residence 04",
    detail: "A sample sky residence.",
    image: "/images/residence-bakrie.jpg",
  },
  {
    id: "emerald",
    name: "Residence 05",
    detail: "A sample villa living program.",
    image: "/images/residence-emerald.jpg",
  },
];

export const reviews: readonly ReviewRecord[] = [
  {
    quote: "A considered piece, made to the room. The process was clear from brief to delivery.",
    source: "Client note",
  },
  {
    quote: "Quiet work, exact where it counts. The showroom visit made the spec easy.",
    source: "Client note",
  },
];

export const products: readonly ProductDraft[] = [
  {
    slug: "linen-lounge",
    category: "sofas",
    title: "Lounge 01",
    lede: "A sample lounge form. Specifications to follow.",
    image: "/images/collection-sofas.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "boucle-corner",
    category: "sofas",
    title: "Lounge 02",
    lede: "A sample corner seat. Specifications to follow.",
    image: "/images/hero.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "leather-settee",
    category: "sofas",
    title: "Lounge 03",
    lede: "A sample compact settee. Specifications to follow.",
    image: "/images/residence-gading.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "walnut-dining",
    category: "dining",
    title: "Dining 01",
    lede: "A sample dining table. Specifications to follow.",
    image: "/images/collection-dining.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "stone-table",
    category: "dining",
    title: "Dining 02",
    lede: "A sample stone table. Specifications to follow.",
    image: "/images/residence-emerald.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "frameless-mirror",
    category: "mirrors",
    title: "Mirror 01",
    lede: "A sample wall mirror. Specifications to follow.",
    image: "/images/collection-mirrors.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "framed-arch",
    category: "mirrors",
    title: "Mirror 02",
    lede: "A sample arched mirror. Specifications to follow.",
    image: "/images/residence-bakrie.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
  {
    slug: "focus-desk",
    category: "office",
    title: "Office 01",
    lede: "A sample writing desk. Specifications to follow.",
    image: "/images/collection-office.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "visit",
  },
  {
    slug: "work-chair",
    category: "office",
    title: "Office 02",
    lede: "A sample study chair. Specifications to follow.",
    image: "/images/residence-ancol.jpg",
    finish: "Sample finish",
    madeToMeasure: true,
    secondaryCta: "tokopedia",
  },
];
