"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        el.dataset.revealed = "true";
        return;
      }

      let played = false;
      const markDone = () => {
        el.dataset.revealed = "true";
      };

      const play = (instant = false) => {
        if (played) return;
        played = true;

        if (instant) {
          gsap.set(el, { opacity: 1, y: 0 });
          markDone();
          return;
        }

        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.15,
            delay,
            ease: "power2.out",
            overwrite: true,
            onComplete: markDone,
          },
        );
        window.setTimeout(markDone, (delay + 1.2) * 1000);
      };

      gsap.set(el, { opacity: 0, y: 24 });
      el.dataset.revealed = "false";

      const inView = () => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        return rect.top < vh * 0.95 && rect.bottom > 0;
      };

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              play(false);
              io.disconnect();
              break;
            }
          }
        },
        { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0 },
      );
      io.observe(el);

      // Hash / already-visible: show immediately so jumps never leave empty space.
      const sync = () => {
        if (inView()) play(Boolean(window.location.hash) || window.scrollY > 80);
      };

      window.addEventListener("hashchange", sync);
      const timers = [0, 120, 400].map((ms) => window.setTimeout(sync, ms));

      return () => {
        io.disconnect();
        window.removeEventListener("hashchange", sync);
        timers.forEach(clearTimeout);
      };
    },
    { dependencies: [delay], scope: ref },
  );

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
