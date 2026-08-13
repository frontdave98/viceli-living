"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { locales } from "@/lib/catalog";

type LocaleSwitchProps = {
  className?: string;
  variant?: "pill" | "overlay";
};

export function LocaleSwitch({ className = "", variant = "overlay" }: LocaleSwitchProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const active = locales.find((locale) => locale.active) ?? locales[0];
  const others = locales.filter((locale) => !locale.active);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "overlay") {
    return (
      <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`} aria-label="Language">
        {locales.map((locale) => (
          <button
            key={locale.code}
            type="button"
            aria-pressed={locale.active}
            aria-disabled={!locale.active}
            className={`min-h-11 min-w-11 px-1.5 text-[10px] uppercase tracking-[0.18em] transition-colors ${
              locale.active ? "text-stone" : "text-stone/35 hover:text-stone/60"
            }`}
          >
            {locale.code}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[11px] uppercase tracking-[0.18em] text-stone ring-1 ring-white/20 transition-colors hover:bg-white/5 hover:ring-white/35"
      >
        {active.code}
        <CaretDown weight="light" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[7.5rem] overflow-hidden rounded-2xl border border-white/10 bg-ink/95 py-1 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        >
          {others.map((locale) => (
            <button
              key={locale.code}
              type="button"
              role="option"
              aria-selected={false}
              aria-disabled
              className="flex w-full px-3 py-2 text-left text-[10px] uppercase tracking-[0.18em] text-stone/40"
            >
              {locale.code}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
