"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import { heroSlides, primaryConsult, story } from "@/lib/content";
import { ConsultButton } from "./ConsultButton";
import { KenBurns } from "./KenBurns";
import { notifyScrollRefresh } from "./notifyScrollRefresh";

gsap.registerPlugin(useGSAP);

const HOLD = 5.4;
const FADE = 1.4;

export function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const root = mediaRef.current;
      if (!root) return;

      const slides = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-hero-slide]"),
      );
      if (slides.length < 2) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(slides, { opacity: 0 });
        gsap.set(slides[0], { opacity: 1 });
        return;
      }

      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });
      setActiveIndex(0);

      const tl = gsap.timeline({ repeat: -1 });
      for (let i = 0; i < slides.length; i += 1) {
        const current = slides[i];
        const nextIndex = (i + 1) % slides.length;
        const next = slides[nextIndex];
        tl.to(current, {
          opacity: 0,
          duration: FADE,
          ease: "power2.inOut",
          delay: HOLD,
        }).to(
          next,
          {
            opacity: 1,
            duration: FADE,
            ease: "power2.inOut",
            onStart: () => setActiveIndex(nextIndex),
          },
          "<",
        );
      }

      return () => {
        tl.kill();
      };
    },
    { scope: mediaRef },
  );

  return (
    <section
      id="top"
      data-gsap="hero"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <div
        ref={mediaRef}
        data-gsap="hero-media"
        className="absolute inset-0 will-change-transform"
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            data-hero-slide
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <KenBurns
              variant={i}
              duration={18 + (i % 3) * 2}
              active={i === activeIndex || i === (activeIndex + 1) % heroSlides.length}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                onLoad={i === 0 ? notifyScrollRefresh : undefined}
              />
            </KenBurns>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-24 pt-28 md:px-8 md:pb-24">
        <div data-gsap="hero-copy">
          <p
            data-gsap="hero-line"
            className="mb-8 text-[11px] uppercase tracking-[0.28em] text-stone/70"
          >
            {story.prologue.eyebrow}
          </p>
          <h1
            data-gsap="hero-line"
            className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-stone md:text-6xl lg:text-7xl"
          >
            {story.prologue.headline}
          </h1>
          <p
            data-gsap="hero-line"
            className="mt-5 max-w-md text-base leading-relaxed text-stone/75 md:text-lg"
          >
            {story.prologue.support}
          </p>
          <div data-gsap="hero-line" className="mt-8">
            <ConsultButton href={primaryConsult} />
          </div>
        </div>
      </div>

      <p
        data-gsap="scroll-cue"
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-stone/45 md:bottom-8"
      >
        {story.prologue.scrollCue}
      </p>
    </section>
  );
}
