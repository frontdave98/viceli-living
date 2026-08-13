"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";
import { chapterRail } from "@/lib/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollExperienceProps = {
  children: ReactNode;
};

function refreshTriggers() {
  ScrollTrigger.refresh();
}

export function ScrollExperience({ children }: ScrollExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isRail: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, isRail, reduceMotion } = context.conditions!;

          const hero = root.querySelector<HTMLElement>('[data-gsap="hero"]');
          const heroMedia = root.querySelector<HTMLElement>('[data-gsap="hero-media"]');
          const heroLines = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll('[data-gsap="hero-line"]'),
          );
          const scrollCue = root.querySelector<HTMLElement>('[data-gsap="scroll-cue"]');

          if (reduceMotion) {
            gsap.set([heroLines, scrollCue].flat().filter(Boolean), { clearProps: "all" });
            return;
          }

          // Hero prologue lines
          if (heroLines.length) {
            gsap.set(heroLines, { opacity: 0, y: 28 });
            gsap.to(heroLines, {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              delay: 0.2,
            });
          }

          if (scrollCue) {
            gsap.fromTo(
              scrollCue,
              { opacity: 0.25 },
              {
                opacity: 0.7,
                duration: 1.6,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: 1.2,
              },
            );
            if (hero) {
              gsap.to(scrollCue, {
                opacity: 0,
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "+=120",
                  scrub: true,
                },
              });
            }
          }

          // Desktop-only: parallax scale, chapter scrub, image zoom
          if (isDesktop) {
            // Hero parallax
            if (hero && heroMedia) {
              gsap.fromTo(
                heroMedia,
                { scale: 1, yPercent: 0 },
                {
                  scale: 1.12,
                  yPercent: 8,
                  ease: "none",
                  scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            }

            // Chapter card entrances
            const chapters = gsap.utils.toArray<HTMLElement>(
              root.querySelectorAll('[data-gsap="chapter"]'),
            );
            chapters.forEach((chapter) => {
              const inner = chapter.querySelector<HTMLElement>('[data-gsap="chapter-inner"]');
              if (!inner) return;
              gsap.fromTo(
                inner,
                { opacity: 0.35, y: 40, scale: 0.98 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: chapter,
                    start: "top 80%",
                    end: "center center",
                    scrub: true,
                  },
                },
              );
            });

            // Image zoom scrub
            const zoomImages = gsap.utils.toArray<HTMLElement>(
              root.querySelectorAll('[data-gsap="zoom-image"]'),
            );
            zoomImages.forEach((img) => {
              gsap.fromTo(
                img,
                { scale: 1 },
                {
                  scale: 1.06,
                  ease: "none",
                  scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            });
          }

          // Craft pinned storytelling (desktop)
          if (isDesktop) {
            const craft = root.querySelector<HTMLElement>('[data-gsap="craft"]');
            const pinTarget = root.querySelector<HTMLElement>('[data-gsap="craft-pin"]');
            const steps = gsap.utils.toArray<HTMLElement>(
              root.querySelectorAll('[data-gsap="craft-step"]'),
            );
            const copies = gsap.utils.toArray<HTMLElement>(
              root.querySelectorAll('[data-gsap="craft-copy"]'),
            );
            const dots = gsap.utils.toArray<HTMLElement>(
              root.querySelectorAll('[data-gsap="craft-dot"]'),
            );

            if (craft && pinTarget && steps.length > 1) {
              gsap.set(steps, { opacity: 0, y: 16 });
              gsap.set(copies, { opacity: 0, y: 16 });
              gsap.set(steps[0], { opacity: 1, y: 0 });
              gsap.set(copies[0], { opacity: 1, y: 0 });

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: pinTarget,
                  start: "top top",
                  end: () => `+=${steps.length * 100}%`,
                  pin: true,
                  scrub: 0.65,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });

              for (let i = 0; i < steps.length - 1; i++) {
                const next = i + 1;
                tl.to(steps[i], { opacity: 0, y: -20, duration: 0.5, ease: "power2.inOut" }, i)
                  .to(copies[i], { opacity: 0, y: -16, duration: 0.5, ease: "power2.inOut" }, i)
                  .to(
                    dots[i],
                    { backgroundColor: "rgba(230,226,220,0.2)", duration: 0.4 },
                    i,
                  )
                  .fromTo(
                    steps[next],
                    { opacity: 0, y: 24 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" },
                    i + 0.15,
                  )
                  .fromTo(
                    copies[next],
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" },
                    i + 0.15,
                  )
                  .to(
                    dots[next],
                    { backgroundColor: "rgba(230,226,220,0.7)", duration: 0.4 },
                    i + 0.15,
                  );
              }
            }

            // Residences horizontal
            const residences = root.querySelector<HTMLElement>(
              '[data-gsap="residences"]',
            );
            const track = root.querySelector<HTMLElement>(
              '[data-gsap="residences-track"]',
            );

            if (residences && track) {
              const getScrollDistance = () =>
                Math.max(0, track.scrollWidth - window.innerWidth);

              gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                  trigger: residences,
                  start: "top top",
                  end: () => `+=${getScrollDistance()}`,
                  pin: true,
                  scrub: 1,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });
            }
          }

          // Chapter rail active state
          if (isRail) {
            const rail = document.querySelector<HTMLElement>('[data-gsap="chapter-rail"]');
            if (rail) {
              chapterRail.forEach((item) => {
                const id = item.href.replace("#", "");
                const section = document.getElementById(id);
                const link = rail.querySelector<HTMLElement>(
                  `[data-chapter-href="${item.href}"]`,
                );
                if (!section || !link) return;

                ScrollTrigger.create({
                  trigger: section,
                  start: "top center",
                  end: "bottom center",
                  onToggle: (self) => {
                    link.classList.toggle("text-stone", self.isActive);
                    link.classList.toggle("text-stone/35", !self.isActive);
                  },
                });
              });
            }
          }

          const syncHashReveals = () => {
            // Do not call ScrollTrigger.refresh() here — with pinned sections it can
            // reset scroll position and undo the hash jump.
            const vh = window.innerHeight || document.documentElement.clientHeight;
            root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
              const rect = el.getBoundingClientRect();
              if (rect.top < vh * 0.95 && rect.bottom > 0) {
                gsap.to(el, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power3.out",
                  overwrite: true,
                });
              }
            });
          };

          const scheduleSync = () => {
            requestAnimationFrame(syncHashReveals);
            [80, 200, 400, 700, 1200].forEach((ms) => {
              setTimeout(syncHashReveals, ms);
            });
          };

          const onLoad = () => scheduleSync();
          const onHash = () => scheduleSync();
          const onAnchorClick = (event: MouseEvent) => {
            const target = event.target as Element | null;
            const anchor = target?.closest?.('a[href^="#"]');
            if (!anchor) return;
            scheduleSync();
          };

          window.addEventListener("load", onLoad);
          window.addEventListener("hashchange", onHash);
          document.addEventListener("click", onAnchorClick, true);
          requestAnimationFrame(syncHashReveals);
          if (window.location.hash) {
            scheduleSync();
          }

          return () => {
            window.removeEventListener("load", onLoad);
            window.removeEventListener("hashchange", onHash);
            document.removeEventListener("click", onAnchorClick, true);
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
