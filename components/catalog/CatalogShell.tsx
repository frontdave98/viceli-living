import type { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

type CatalogShellProps = {
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
};

export function CatalogShell({ eyebrow, title, body, children }: CatalogShellProps) {
  return (
    <PageTransition>
      <main className="flex-1 bg-background pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <p className="font-display text-sm tracking-[0.35em] text-muted">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-stone md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-stone/60">{body}</p>
          <div className="mt-12 md:mt-16">{children}</div>
        </div>
      </main>
    </PageTransition>
  );
}
