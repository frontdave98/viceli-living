import { ConsultButton } from "@/components/ConsultButton";
import { brand, primaryConsult } from "@/lib/content";
import Link from "next/link";

export function CatalogFooter() {
  return (
    <footer className="border-t border-hairline bg-background px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl tracking-[0.12em] text-stone">VICÉLI LIVING</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{brand.tagline}</p>
        </div>
        <ConsultButton href={primaryConsult} />
      </div>
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-3 text-xs text-muted sm:flex-row sm:gap-8">
        <Link href={brand.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-stone">
          Instagram
        </Link>
        <Link href={brand.tokopedia} target="_blank" rel="noopener noreferrer" className="hover:text-stone">
          Tokopedia
        </Link>
        <Link href="/visit" className="hover:text-stone">
          Showrooms
        </Link>
      </div>
    </footer>
  );
}
