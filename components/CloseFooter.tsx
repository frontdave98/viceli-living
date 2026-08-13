import Image from "next/image";
import Link from "next/link";
import { brand, primaryConsult, showrooms, story } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";
import { ConsultButton } from "./ConsultButton";
import { Reveal } from "./Reveal";

export function CloseFooter() {
  return (
    <>
      <section
        id="consult"
        className="relative overflow-hidden border-t border-hairline bg-background px-4 py-28 md:px-8 md:py-36"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-ink/85" />
        </div>

        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl tracking-tight text-stone md:text-6xl">
            {story.epilogue.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-stone/65">
            {story.epilogue.body}
          </p>
          <div className="mt-10 flex justify-center">
            <ConsultButton href={primaryConsult} />
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-hairline bg-background px-4 py-14 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo size={40} className="rounded-md ring-1 ring-white/10" />
            <div>
              <p className="font-display text-xl tracking-[0.12em] text-stone">
                VICÉLI LIVING
              </p>
              <p className="mt-1 text-xs text-muted">{brand.tagline}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-stone/75">
                {showrooms.map((s) => (
                  <li key={s.id}>
                    <a href={s.phoneHref} className="hover:text-stone">
                      {s.name}: {s.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Visit
              </p>
              <ul className="mt-3 space-y-2 text-stone/75">
                <li>
                  <Link href="#showrooms" className="hover:text-stone">
                    Showrooms
                  </Link>
                </li>
                <li>
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={brand.tokopedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone"
                  >
                    Tokopedia
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Consult
              </p>
              <a
                href={primaryConsult}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-stone/75 hover:text-stone"
              >
                WhatsApp PIK
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1400px] border-t border-hairline pt-6 text-xs text-muted">
          © {new Date().getFullYear()} Vicéli Living. Custom furniture, Jakarta.
        </div>
      </footer>
    </>
  );
}
