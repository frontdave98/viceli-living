"use client";

import Image from "next/image";
import { primaryConsult, story } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";
import { ConsultButton } from "./ConsultButton";
import { notifyScrollRefresh } from "./notifyScrollRefresh";

export function Hero() {
  return (
    <section
      id="top"
      data-gsap="hero"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <div data-gsap="hero-media" className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero.jpg"
          alt="Custom living room interior by Vicéli Living"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onLoad={notifyScrollRefresh}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-24 pt-28 md:px-8 md:pb-24">
        <div data-gsap="hero-copy">
          <div data-gsap="hero-line" className="mb-8 flex items-center gap-3">
            <BrandLogo size={44} className="rounded-md ring-1 ring-white/10" />
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone/70">
              {story.prologue.eyebrow}
            </p>
          </div>
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
