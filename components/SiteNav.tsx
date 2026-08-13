"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks, primaryConsult } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";
import { ConsultButton } from "./ConsultButton";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
        <nav
          className={`pointer-events-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-white/10 px-3 py-2 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-4 ${
            scrolled ? "bg-ink/80 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-ink/50"
          }`}
        >
          <Link href="#top" className="flex items-center gap-3 pl-1" aria-label="Vicéli Living home">
            <BrandLogo size={36} className="rounded-[0.35rem] ring-1 ring-white/10" />
            <span className="hidden font-display text-lg tracking-[0.12em] text-stone sm:inline">
              VICÉLI
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[12px] uppercase tracking-[0.18em] text-stone/70 transition-colors duration-300 hover:text-stone"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ConsultButton href={primaryConsult} className="hidden sm:inline-flex" />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-stone/10 text-stone transition-colors duration-300 hover:bg-stone/15 lg:hidden"
            >
              <span className="relative h-4 w-4">
                <List
                  weight="light"
                  className={`absolute inset-0 h-4 w-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                  }`}
                />
                <X
                  weight="light"
                  className={`absolute inset-0 h-4 w-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink/90 backdrop-blur-3xl lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex min-h-[100dvh] flex-col justify-center px-8 pt-24 pb-12">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.55,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-5xl tracking-tight text-stone transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-12"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <ConsultButton
                  href={primaryConsult}
                  onClick={() => setOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
