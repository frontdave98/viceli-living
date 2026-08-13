"use client";

import Link from "next/link";
import { chapterRail } from "@/lib/content";

export function ChapterRail() {
  return (
    <nav
      data-gsap="chapter-rail"
      aria-label="Story chapters"
      className="pointer-events-none fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex motion-reduce:hidden"
    >
      {chapterRail.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-chapter-href={item.href}
          className="pointer-events-auto group flex items-center gap-3 text-stone/35 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-stone"
        >
          <span className="max-w-0 overflow-hidden text-[10px] uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:max-w-[6rem] group-hover:opacity-100">
            {item.label}
          </span>
          <span
            data-chapter-dot
            className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[9px] tracking-wider"
          >
            {item.short}
          </span>
        </Link>
      ))}
    </nav>
  );
}
