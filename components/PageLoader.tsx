"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { loader } from "@/lib/content";

function dispatchIntroDone() {
  window.dispatchEvent(new Event(loader.doneEvent));
}

export function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      sessionStorage.setItem(loader.sessionKey, "1");
      document.body.style.overflow = "";
      setVisible(false);
      dispatchIntroDone();
    };

    if (sessionStorage.getItem(loader.sessionKey) === "1") {
      finish();
      return;
    }

    const root = rootRef.current;
    const bar = barRef.current;
    if (!root || !bar) {
      finish();
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({ onComplete: finish });
    tl.to(bar, {
      scaleX: 1,
      duration: 2,
      ease: "power2.inOut",
    }).to(
      root,
      {
        autoAlpha: 0,
        duration: 0.75,
        ease: "power2.inOut",
      },
      "+=0.15",
    );

    const failsafe = window.setTimeout(finish, 4000);

    return () => {
      window.clearTimeout(failsafe);
      tl.kill();
      if (!doneRef.current) {
        document.body.style.overflow = "";
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink"
      role="status"
      aria-live="polite"
      aria-label="Loading Vicéli Living"
    >
      <div className="flex flex-col items-center px-6">
        <p className="font-display text-xl tracking-[0.28em] text-stone md:text-2xl">
          {loader.wordmark}
        </p>
        <div className="mt-8 h-px w-40 overflow-hidden bg-stone/15 md:w-52">
          <div ref={barRef} className="h-full w-full origin-left bg-stone/70" />
        </div>
      </div>
    </div>
  );
}
