export type BrandContacts = {
  instagram: string;
  tokopedia: string;
  googleBusiness: string;
};

export type ShowroomRecord = {
  id: string;
  name: string;
  label: string;
  address: string;
  city: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  maps: string;
  image: string;
};

export type ShowroomList = readonly [ShowroomRecord, ShowroomRecord];

export type ResidenceRecord = {
  id: string;
  name: string;
  detail: string;
  image: string;
};

export type ReviewRecord = {
  quote: string;
  source: string;
};

export type ProductDraft = {
  slug: string;
  category: "sofas" | "dining" | "mirrors" | "office";
  title: string;
  lede: string;
  image: string;
  finish: string;
  madeToMeasure: boolean;
  secondaryCta: "tokopedia" | "visit";
};
