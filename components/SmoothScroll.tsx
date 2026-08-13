"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function scrollToTarget(
  target: string | number | HTMLElement,
  options?: { offset?: number; duration?: number },
) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    return;
  }

  if (typeof target === "string") {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const lenis = new Lenis({
      duration: isMobile ? 0.95 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
    };
  }, []);

  return null;
}
