import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Cta } from "@/lib/catalog";
import { CatalogCtas } from "./CatalogCtas";

type CatalogCardProps = {
  href: string;
  image: string;
  eyebrow?: string;
  title: string;
  lede: string;
  morphName?: string;
  primary?: Cta;
  secondary?: Cta;
};

export function CatalogCard({
  href,
  image,
  eyebrow,
  title,
  lede,
  morphName,
  primary,
  secondary,
}: CatalogCardProps) {
  const media = (
    <div className="overflow-hidden rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.375rem)] md:aspect-[5/4]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );

  return (
    <article className="flex flex-col">
      <Link href={href} className="group block">
        {morphName ? (
          <ViewTransition name={morphName} share="morph" default="none">
            {media}
          </ViewTransition>
        ) : (
          media
        )}
        <div className="mt-4 px-1">
          {eyebrow ? (
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
          ) : null}
          <h2 className="mt-1 font-display text-2xl tracking-tight text-stone">{title}</h2>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted">{lede}</p>
        </div>
      </Link>
      {primary ? (
        <div className="mt-5 px-1">
          <CatalogCtas primary={primary} secondary={secondary} />
        </div>
      ) : null}
    </article>
  );
}
