import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { catalogPages, productCategories } from "@/lib/catalog";
import { primaryConsult } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — VICÉLI LIVING",
  description: catalogPages.products.body,
};

export default function ProductsPage() {
  return (
    <>
      <CatalogShell {...catalogPages.products}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((item) => (
            <CatalogCard
              key={item.slug}
              href={`/products/${item.slug}`}
              image={item.image}
              title={item.title}
              lede={item.lede}
              primary={{ label: "View the line", href: `/products/${item.slug}` }}
              secondary={{ label: "Consult", href: primaryConsult }}
            />
          ))}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
