import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { catalogPages, getMaterialsByGroup, materialGroups } from "@/lib/catalog";
import { brand } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Materials — ${brand.name}`,
  description: catalogPages.materials.body,
};

export default function MaterialsPage() {
  return (
    <>
      <CatalogShell {...catalogPages.materials}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {materialGroups.map((group) => {
            const sample = getMaterialsByGroup(group.slug)[0];
            return (
              <CatalogCard
                key={group.slug}
                href={`/materials/${group.slug}`}
                image={sample?.image ?? "/images/hero.jpg"}
                title={group.title}
                lede={`Finishes in ${group.title.toLowerCase()} for custom pieces.`}
                primary={{ label: "View finishes", href: `/materials/${group.slug}` }}
              />
            );
          })}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
