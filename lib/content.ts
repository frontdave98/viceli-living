import * as dummy from "@/lib/data/dummy";
import * as live from "@/lib/data/live";
import { USE_DUMMY_DATA } from "@/lib/data/mode";

const source = USE_DUMMY_DATA ? dummy : live;

export const brand = {
  name: "MEUBELOUS",
  shortName: "Meubelous",
  tagline: "Transform your space into the perfect room",
  category: "Custom-made furniture",
  description:
    "Custom furniture atelier in Jakarta. Sofas, dining, mirrors, and office pieces made to your measure.",
  rating: 4.9,
  reviewCount: 15,
  hours: "Open daily · Closes 19:00",
  instagram: source.brandContacts.instagram,
  tokopedia: source.brandContacts.tokopedia,
  googleBusiness: source.brandContacts.googleBusiness,
} as const;

export const loader = {
  wordmark: "MEUBELOUS",
  sessionKey: "viceli-intro-seen",
  doneEvent: "viceli:intro-done",
} as const;

export const heroSlides = [
  {
    src: "/images/hero.jpg",
    alt: "Custom living room interior by Meubelous",
  },
  {
    src: "/images/residence-pik.jpg",
    alt: "Coastal suite residence furnished by Meubelous",
  },
  {
    src: "/images/collection-sofas.jpg",
    alt: "Custom sofa lounge by Meubelous",
  },
  {
    src: "/images/residence-emerald.jpg",
    alt: "Villa living program by Meubelous",
  },
] as const;

export const story = {
  prologue: {
    eyebrow: "A prologue",
    headline: "Every room waits for something.",
    support: "The right piece turns space into a place you return to.",
    scrollCue: "Continue the story",
  },
  atelier: {
    roman: "I",
    title: "The atelier",
    headline: "Built where the brief meets the wood.",
    body: "Meubelous is a custom furniture atelier in Indonesia. We measure the room, lock the materials, and make the piece — then ship it nationwide.",
  },
  collections: {
    roman: "II",
    title: "The pieces",
    headline: "A vocabulary for living.",
    body: "Sofas, dining, mirrors, and office — each line made to your measure.",
  },
  craft: {
    roman: "III",
    title: "The making",
    headline: "How a piece becomes yours.",
  },
  residences: {
    roman: "IV",
    title: "The rooms",
    headline: "Places already living with Meubelous.",
    body: "From coastal suites to sky residences — rooms we furnished, one brief at a time.",
  },
  proof: {
    title: "Voices from the rooms",
  },
  showrooms: {
    title: "Walk in. Sit down.",
    body: "Two showrooms. Come see the work in person.",
  },
  epilogue: {
    headline: "Begin your piece.",
    body: "Tell us the room, the dimensions, and the timeline.",
  },
  bridges: {
    "bridge-pieces": {
      roman: "II",
      title: "Pieces",
      line: "First, the forms a room can hold.",
    },
    "bridge-rooms": {
      roman: "IV",
      title: "Rooms",
      line: "Then, the spaces already living with them.",
    },
    "bridge-visit": {
      roman: "",
      title: "Visit",
      line: "When you are ready, come sit with the work.",
    },
  },
} as const;

export type BridgeId = keyof typeof story.bridges;

export const showrooms = source.showrooms;

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/collections", label: "Collections" },
  { href: "/projects", label: "Projects" },
  { href: "/materials", label: "Materials" },
  { href: "/visit", label: "Visit" },
] as const;

/** Chapter rail anchors for storytelling progress */
export const chapterRail = [
  { href: "#top", label: "Prologue", short: "00" },
  { href: "#atelier", label: "Atelier", short: "I" },
  { href: "#collections", label: "Pieces", short: "II" },
  { href: "#craft", label: "Making", short: "III" },
  { href: "#residences", label: "Rooms", short: "IV" },
  { href: "#showrooms", label: "Visit", short: "→" },
] as const;

export const collections = [
  {
    id: "sofas",
    title: "Sofas",
    description: "Lounge forms in linen, bouclé, and leather — sized to how you gather.",
    image: "/images/collection-sofas.jpg",
    span: "md:col-span-1 lg:col-span-7",
  },
  {
    id: "dining",
    title: "Dining Tables",
    description: "Stone, walnut, and glass for long evenings at the table.",
    image: "/images/collection-dining.jpg",
    span: "md:col-span-1 lg:col-span-5",
  },
  {
    id: "mirrors",
    title: "Custom Mirrors",
    description: "Framed and frameless pieces cut for the architecture.",
    image: "/images/collection-mirrors.jpg",
    span: "md:col-span-1 lg:col-span-5",
  },
  {
    id: "office",
    title: "Office",
    description: "Desks and seating for rooms made for focused work.",
    image: "/images/collection-office.jpg",
    span: "md:col-span-1 lg:col-span-7",
  },
] as const;

export const craftSteps = [
  {
    number: "01",
    title: "Consult",
    description:
      "You share the room — how light falls, how you move through it, what must live there.",
  },
  {
    number: "02",
    title: "Spec",
    description:
      "Together we lock materials, dimensions, and finishes. Nothing moves to the workshop until the brief is clear.",
  },
  {
    number: "03",
    title: "Make",
    description:
      "In Indonesia, joinery and upholstery take shape. Slow where it matters. Exact where it counts.",
  },
  {
    number: "04",
    title: "Place",
    description:
      "The piece arrives and finds its place. We ship nationwide — from first sketch to the floor.",
  },
] as const;

export const residences = source.residences;

export const reviews = source.reviews;

/** Primary consult CTA */
export const primaryConsult = showrooms[0].whatsapp;
