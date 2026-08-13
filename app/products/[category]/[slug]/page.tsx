import { CatalogDetail } from "@/components/catalog/CatalogDetail";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { getProduct, products } from "@/lib/catalog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ProductParams = { category: string; slug: string };

export function generateStaticParams() {
  return products.map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductParams>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const item = getProduct(category, slug);
  if (!item) return {};
  return {
    title: `${item.title} — VICÉLI LIVING`,
    description: item.lede,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<ProductParams>;
}) {
  const { category, slug } = await params;
  const item = getProduct(category, slug);
  if (!item) notFound();

  return (
    <>
      <CatalogDetail
        eyebrow={item.category}
        title={item.title}
        lede={item.lede}
        image={item.image}
        primary={{ label: "Consult this piece", href: item.cta.primary.href }}
        secondary={item.cta.secondary}
        meta={
          <ul className="space-y-2">
            <li>Finish: {item.finish}</li>
            <li>{item.madeToMeasure ? "Made to measure" : "Standard size"}</li>
          </ul>
        }
      />
      <CatalogFooter />
    </>
  );
}
