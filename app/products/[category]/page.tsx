import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import {
  getCategory,
  getProductsByCategory,
  productCategories,
  productHref,
} from "@/lib/catalog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type CategoryParams = { category: string };

export function generateStaticParams() {
  return productCategories.map((item) => ({ category: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CategoryParams>;
}): Promise<Metadata> {
  const { category } = await params;
  const item = getCategory(category);
  if (!item) return {};
  return {
    title: `${item.title} — VICÉLI LIVING`,
    description: item.lede,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<CategoryParams>;
}) {
  const { category } = await params;
  const item = getCategory(category);
  if (!item) notFound();

  const items = getProductsByCategory(category);

  return (
    <>
      <CatalogShell eyebrow="Products" title={item.title} body={item.lede}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <CatalogCard
              key={product.slug}
              href={productHref(product)}
              image={product.image}
              title={product.title}
              lede={product.lede}
              morphName={`catalog-product-${product.category}-${product.slug}`}
              primary={{ label: "Consult", href: product.cta.primary.href }}
              secondary={{ label: "View piece", href: productHref(product) }}
            />
          ))}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
