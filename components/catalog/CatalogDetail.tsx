import Image from "next/image";
import { ViewTransition, type ReactNode } from "react";
import { KenBurns } from "@/components/KenBurns";
import { PageTransition } from "@/components/PageTransition";
import { CatalogCtas } from "./CatalogCtas";
import type { Cta } from "@/lib/catalog";

type CatalogDetailProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  morphName?: string;
  meta?: ReactNode;
  primary: Cta;
  secondary?: Cta;
  children?: ReactNode;
};

export function CatalogDetail({
  eyebrow,
  title,
  lede,
  image,
  morphName,
  meta,
  primary,
  secondary,
  children,
}: CatalogDetailProps) {
  const media = (
    <div className="overflow-hidden rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10 lg:col-span-7">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)] sm:aspect-[5/4] lg:aspect-[4/3]">
        <KenBurns variant={1} duration={22}>
          <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
        </KenBurns>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <main className="flex-1 bg-background pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {morphName ? (
            <ViewTransition name={morphName} share="morph" default="none">
              {media}
            </ViewTransition>
          ) : (
            media
          )}
          <div className="lg:col-span-5">
            <p className="font-display text-sm tracking-[0.35em] text-muted">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-stone md:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-stone/70">{lede}</p>
            {meta ? <div className="mt-6 text-sm text-muted">{meta}</div> : null}
            <div className="mt-8">
              <CatalogCtas primary={primary} secondary={secondary} />
            </div>
            {children}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
