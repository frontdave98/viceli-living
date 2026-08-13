import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import {
  getMaterialGroup,
  getMaterialsByGroup,
  materialGroups,
  materialHref,
} from "@/lib/catalog";
import { brand, primaryConsult } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type GroupParams = { group: string };

export function generateStaticParams() {
  return materialGroups.map((item) => ({ group: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<GroupParams>;
}): Promise<Metadata> {
  const { group } = await params;
  const item = getMaterialGroup(group);
  if (!item) return {};
  return {
    title: `${item.title} — ${brand.name}`,
    description: `Finishes in ${item.title.toLowerCase()} for custom ${brand.shortName} pieces.`,
  };
}

export default async function MaterialGroupPage({
  params,
}: {
  params: Promise<GroupParams>;
}) {
  const { group } = await params;
  const item = getMaterialGroup(group);
  if (!item) notFound();

  const finishes = getMaterialsByGroup(group);

  return (
    <>
      <CatalogShell
        eyebrow="Materials"
        title={item.title}
        body={`Finishes in ${item.title.toLowerCase()} we specify in the atelier.`}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {finishes.map((finish) => (
            <CatalogCard
              key={finish.slug}
              href={materialHref(finish)}
              image={finish.image}
              title={finish.title}
              lede={finish.lede}
              morphName={`catalog-material-${finish.group}-${finish.slug}`}
              primary={{ label: "Request a sample", href: primaryConsult }}
              secondary={{ label: "View finish", href: materialHref(finish) }}
            />
          ))}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
