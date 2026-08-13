import { CatalogDetail } from "@/components/catalog/CatalogDetail";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { getMaterialInGroup, materials } from "@/lib/catalog";
import { brand } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type MaterialParams = { group: string; slug: string };

export function generateStaticParams() {
  return materials.map((item) => ({
    group: item.group,
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<MaterialParams>;
}): Promise<Metadata> {
  const { group, slug } = await params;
  const item = getMaterialInGroup(group, slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${brand.name}`,
    description: item.lede,
  };
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<MaterialParams>;
}) {
  const { group, slug } = await params;
  const item = getMaterialInGroup(group, slug);
  if (!item) notFound();

  return (
    <>
      <CatalogDetail
        eyebrow={item.group}
        title={item.title}
        lede={item.lede}
        image={item.image}
        morphName={`catalog-material-${item.group}-${item.slug}`}
        primary={item.cta.primary}
      />
      <CatalogFooter />
    </>
  );
}
