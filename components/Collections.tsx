import Image from "next/image";
import { collections, story } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Collections() {
  return (
    <section
      id="collections"
      data-chapter="collections"
      className="scroll-mt-28 bg-background px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-sm tracking-[0.35em] text-muted">
            {story.collections.roman}
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-stone md:text-5xl">
            {story.collections.headline}
          </h2>
          <p className="mt-4 max-w-md text-stone/60">
            {story.collections.body}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-12">
          {collections.map((item, i) => (
            <div key={item.id} className={item.span}>
              <Reveal delay={0.05 * i}>
                <div className="rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.375rem)] md:aspect-[5/4]">
                    <div data-gsap="zoom-image" className="absolute inset-0 will-change-transform">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <h3 className="font-display text-2xl tracking-tight text-stone">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
