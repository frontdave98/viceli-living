import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import {
  collectionLines,
  getCollectionLine,
  getProductsBySlugs,
  productHref,
} from "@/lib/catalog";
import { primaryConsult } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type CollectionParams = { slug: string };

export function generateStaticParams() {
  return collectionLines.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CollectionParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionLine(slug);
  if (!item) return {};
  return {
    title: `${item.title} — VICÉLI LIVING`,
    description: item.lede,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<CollectionParams>;
}) {
  const { slug } = await params;
  const item = getCollectionLine(slug);
  if (!item) notFound();

  const pieces = getProductsBySlugs(item.productSlugs);

  return (
    <>
      <CatalogShell eyebrow="Collection" title={item.title} body={item.lede}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pieces.map((product) => (
            <CatalogCard
              key={product.slug}
              href={productHref(product)}
              image={product.image}
              eyebrow={product.category}
              title={product.title}
              lede={product.lede}
              morphName={`catalog-product-${product.category}-${product.slug}`}
              primary={{ label: "Consult", href: primaryConsult }}
              secondary={{ label: "View piece", href: productHref(product) }}
            />
          ))}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
