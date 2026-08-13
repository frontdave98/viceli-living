"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export function notifyScrollRefresh() {
  if (typeof window === "undefined") return;
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}
