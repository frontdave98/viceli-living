import Image from "next/image";
import { story } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Atelier() {
  return (
    <section id="atelier" data-chapter="atelier" className="bg-stone text-ink">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="font-display text-sm tracking-[0.35em] text-ink/40">
            {story.atelier.roman}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            {story.atelier.headline}
          </h2>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-ink/70">
            {story.atelier.body}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-ink/45">
                Made
              </dt>
              <dd className="mt-2 font-display text-2xl tracking-tight">
                Indonesia
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-ink/45">
                Shipping
              </dt>
              <dd className="mt-2 font-display text-2xl tracking-tight">
                Nationwide
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.12}>
          <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.375rem)]">
              <div data-gsap="zoom-image" className="absolute inset-0 will-change-transform">
                <Image
                  src="/images/collection-office.jpg"
                  alt="Custom walnut office interior by Meubelous"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
