import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { catalogPages, collectionLines } from "@/lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections — VICÉLI LIVING",
  description: catalogPages.collections.body,
};

export default function CollectionsIndexPage() {
  return (
    <>
      <CatalogShell {...catalogPages.collections}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {collectionLines.map((item) => (
            <CatalogCard
              key={item.slug}
              href={`/collections/${item.slug}`}
              image={item.image}
              title={item.title}
              lede={item.lede}
              primary={item.cta.primary}
            />
          ))}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
