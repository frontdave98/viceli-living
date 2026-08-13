import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { catalogPages, projects } from "@/lib/catalog";
import { brand } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${brand.name}`,
  description: catalogPages.projects.body,
};

export default function ProjectsPage() {
  return (
    <>
      <CatalogShell {...catalogPages.projects}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <CatalogCard
              key={item.slug}
              href={`/projects/${item.slug}`}
              image={item.image}
              eyebrow={item.program}
              title={item.name}
              lede={item.detail}
              morphName={`catalog-project-${item.slug}`}
              primary={item.cta.primary}
              secondary={item.cta.secondary}
            />
          ))}
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
