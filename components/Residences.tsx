"use client";

import Image from "next/image";
import { residences, story } from "@/lib/content";
import { Reveal } from "./Reveal";
import { notifyScrollRefresh } from "./notifyScrollRefresh";

export function Residences() {
  return (
    <section
      id="residences"
      data-gsap="residences"
      data-chapter="residences"
      className="bg-background py-24 md:py-0 md:h-[100dvh] md:flex md:flex-col md:justify-center"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 md:pt-24">
        <Reveal>
          <p className="font-display text-sm tracking-[0.35em] text-muted">
            {story.residences.roman}
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-stone md:text-5xl">
            {story.residences.headline}
          </h2>
          <p className="mt-4 max-w-md text-stone/60">
            {story.residences.body}
          </p>
        </Reveal>
      </div>

      <div className="scrollbar-hide mt-12 w-full overflow-x-auto md:mt-14 md:overflow-hidden">
        <div
          data-gsap="residences-track"
          className="flex w-max gap-5 px-4 pb-4 snap-x snap-mandatory md:snap-none md:pb-8 md:will-change-transform"
        >
          {residences.map((place, i) => (
            <article
              key={place.id}
              className="w-[78vw] max-w-md shrink-0 snap-start sm:w-[55vw] lg:w-[28rem]"
            >
              <div className="rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)]">
                  <Image
                    src={place.image}
                    alt={`${place.name} residence`}
                    fill
                    sizes="(max-width: 1024px) 80vw, 28rem"
                    className="object-cover"
                    onLoad={i === 0 ? notifyScrollRefresh : undefined}
                  />
                </div>
              </div>
              <div className="mt-4 px-1">
                <h3 className="font-display text-2xl tracking-tight text-stone">
                  {place.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{place.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
