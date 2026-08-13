import { ConsultButton } from "@/components/ConsultButton";
import type { Cta } from "@/lib/catalog";

type CatalogCtasProps = {
  primary: Cta;
  secondary?: Cta;
};

export function CatalogCtas({ primary, secondary }: CatalogCtasProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ConsultButton href={primary.href} label={primary.label} className="w-full justify-between sm:w-auto" />
      {secondary ? (
        <ConsultButton
          href={secondary.href}
          label={secondary.label}
          variant="ghost"
          className="w-full justify-between sm:w-auto"
        />
      ) : null}
    </div>
  );
}
