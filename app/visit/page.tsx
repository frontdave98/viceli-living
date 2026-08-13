import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { CatalogShell } from "@/components/catalog/CatalogShell";
import { Showrooms } from "@/components/Showrooms";
import { catalogPages } from "@/lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit — VICÉLI LIVING",
  description: catalogPages.visit.body,
};

export default function VisitPage() {
  return (
    <>
      <CatalogShell {...catalogPages.visit}>
        <div className="-mx-4 -mt-4 md:-mx-8 md:-mt-6">
          <Showrooms hideIntro />
        </div>
      </CatalogShell>
      <CatalogFooter />
    </>
  );
}
