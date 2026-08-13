"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/lib/catalog";

type MegaMenuProps = {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
};

function isNavActive(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function MegaMenu({ item, pathname, onNavigate }: MegaMenuProps) {
  const children = item.children ?? [];
  const isImage = item.mega === "image";

  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
      <div className="flex flex-col justify-between border-b border-hairline p-5 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-6">
        <div>
          <p className="font-display text-2xl tracking-tight text-stone">{item.label}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone/60">{item.description}</p>
        </div>
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={pathname === item.href ? "page" : undefined}
          className={`group mt-6 inline-flex min-h-11 items-center gap-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
            pathname === item.href ? "text-stone" : "text-stone/70 hover:text-stone"
          }`}
        >
          {item.ctaLabel}
          <ArrowUpRight
            weight="light"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px"
          />
        </Link>
      </div>

      <div className="lg:col-span-8">
        {isImage ? (
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4 lg:p-5">
            {children.map((child) => {
              const active = !child.href.includes("#") && isNavActive(pathname, child.href);
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className="group min-h-11"
                >
                  {child.image ? (
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 ring-1 transition-colors ${
                        active ? "ring-stone/40" : "ring-white/10"
                      }`}
                    >
                      <Image
                        src={child.image}
                        alt=""
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : null}
                  <p
                    className={`mt-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                      active ? "text-stone" : "text-stone/70 group-hover:text-stone"
                    }`}
                  >
                    {child.label}
                  </p>
                  {child.lede ? (
                    <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted">{child.lede}</p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 sm:p-4">
            {children.map((child) => {
              const active = !child.href.includes("#") && isNavActive(pathname, child.href);
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 flex-col justify-center rounded-2xl px-4 py-3 transition-colors ${
                      active ? "bg-white/5" : "hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-[12px] uppercase tracking-[0.16em] ${
                        active ? "text-stone" : "text-stone/70"
                      }`}
                    >
                      {child.label}
                    </span>
                    {child.lede ? (
                      <span className="mt-1 text-xs leading-snug text-muted">{child.lede}</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
