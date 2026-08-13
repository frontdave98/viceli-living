"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP);

const VARIANTS = [
  { xPercent: 2.5, yPercent: -2 },
  { xPercent: -2.5, yPercent: 2 },
  { xPercent: 2, yPercent: 2.5 },
  { xPercent: -2, yPercent: -2.5 },
] as const;

type KenBurnsProps = {
  children: ReactNode;
  className?: string;
  /** Seed so adjacent banners drift differently */
  variant?: number;
  duration?: number;
  /** Pause motion when false (inactive carousel slides) */
  active?: boolean;
  /** absolute inset-0 wrapper; use relative when parent already sizes */
  fill?: boolean;
};

export function KenBurns({
  children,
  className = "",
  variant = 0,
  duration = 20,
  active = true,
  fill = true,
}: KenBurnsProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const el = innerRef.current;
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(el, { clearProps: "transform" });
        return;
      }

      const drift = VARIANTS[Math.abs(variant) % VARIANTS.length];

      gsap.set(el, { scale: 1, xPercent: 0, yPercent: 0, force3D: true });

      const tween = gsap.to(el, {
        scale: 1.08,
        xPercent: drift.xPercent,
        yPercent: drift.yPercent,
        duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      tweenRef.current = tween;
      if (!active) tween.pause();

      return () => {
        tween.kill();
        tweenRef.current = null;
      };
    },
    { dependencies: [variant, duration] },
  );

  useGSAP(
    () => {
      const tween = tweenRef.current;
      if (!tween) return;
      if (active) tween.play();
      else tween.pause();
    },
    { dependencies: [active] },
  );

  return (
    <div
      className={`${fill ? "absolute inset-0" : "relative h-full w-full"} overflow-hidden ${className}`}
    >
      <div ref={innerRef} className="absolute inset-0 will-change-transform">
        {children}
      </div>
    </div>
  );
}
