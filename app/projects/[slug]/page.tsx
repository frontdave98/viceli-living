import { CatalogDetail } from "@/components/catalog/CatalogDetail";
import { CatalogFooter } from "@/components/catalog/CatalogFooter";
import { getProject, projects } from "@/lib/catalog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ProjectParams = { slug: string };

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) return {};
  return {
    title: `${item.name} — VICÉLI LIVING`,
    description: item.detail,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) notFound();

  return (
    <>
      <CatalogDetail
        eyebrow="Project"
        title={item.name}
        lede={item.detail}
        image={item.image}
        morphName={`catalog-project-${item.slug}`}
        primary={item.cta.primary}
        secondary={item.cta.secondary}
        meta={<p>Program: {item.program}</p>}
      />
      <CatalogFooter />
    </>
  );
}
