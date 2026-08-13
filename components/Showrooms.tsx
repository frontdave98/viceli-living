import { ArrowUpRight, MapPin, Phone, Clock } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { brand, showrooms, story } from "@/lib/content";
import { Reveal } from "./Reveal";

type ShowroomsProps = {
  hideIntro?: boolean;
};

export function Showrooms({ hideIntro = false }: ShowroomsProps) {
  return (
    <section
      id="showrooms"
      data-chapter="showrooms"
      className={`bg-background px-4 md:px-8 ${hideIntro ? "py-0" : "py-24 md:py-32"}`}
    >
      <div className="mx-auto max-w-[1400px]">
        {hideIntro ? null : (
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight text-stone md:text-5xl">
              {story.showrooms.title}
            </h2>
            <p className="mt-4 max-w-md text-stone/60">
              {story.showrooms.body}
            </p>
          </Reveal>
        )}

        <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${hideIntro ? "" : "mt-14"}`}>
          {showrooms.map((room, i) => (
            <Reveal key={room.id} delay={0.08 * i}>
              <article
                id={`showroom-${room.id}`}
                className="scroll-mt-28 rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10"
              >
                <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ink">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div data-gsap="zoom-image" className="absolute inset-0 will-change-transform">
                      <Image
                        src={room.image}
                        alt={`${room.name} showroom`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-5 p-6 md:p-8">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                        {room.label}
                      </p>
                      <h3 className="mt-2 font-display text-3xl tracking-tight text-stone">
                        {room.name}
                      </h3>
                    </div>

                    <ul className="space-y-3 text-sm text-stone/75">
                      <li className="flex gap-3">
                        <MapPin weight="light" className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                        <span>
                          {room.address}
                          <br />
                          {room.city}
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Clock weight="light" className="h-4 w-4 shrink-0 text-muted" />
                        <span>{brand.hours}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Phone weight="light" className="h-4 w-4 shrink-0 text-muted" />
                        <a href={room.phoneHref} className="hover:text-stone">
                          {room.phone}
                        </a>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={room.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full bg-stone px-5 py-2.5 text-sm font-medium text-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                      >
                        WhatsApp
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                          <ArrowUpRight weight="light" className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                      <Link
                        href={room.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full px-5 py-2.5 text-sm text-stone ring-1 ring-white/15 transition-colors hover:ring-white/30"
                      >
                        Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
