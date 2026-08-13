"use client";

import { chapterRail } from "@/lib/content";
import { scrollToTarget } from "./SmoothScroll";

export function ChapterRail() {
  return (
    <nav
      data-gsap="chapter-rail"
      aria-label="Story chapters"
      className="pointer-events-none fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex motion-reduce:hidden"
    >
      {chapterRail.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-chapter-href={item.href}
          onClick={(event) => {
            event.preventDefault();
            const id = item.href.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
              scrollToTarget(el, { duration: 1.3 });
              window.history.replaceState(null, "", item.href);
            }
          }}
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
        </a>
      ))}
    </nav>
  );
}
