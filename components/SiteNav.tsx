"use client";

import { CaretDown, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navTree } from "@/lib/catalog";
import { primaryConsult } from "@/lib/content";
import { ConsultButton } from "./ConsultButton";
import { LocaleSwitch } from "./LocaleSwitch";
import { MegaMenu } from "./MegaMenu";

function isNavActive(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [accordion, setAccordion] = useState<string | null>(null);
  const closeTimer = useRef<number>(0);
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

  useEffect(() => {
    setOpen(false);
    setMega(null);
    setAccordion(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMega(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setMega(label);
  };

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(null), 180);
  };

  const activeItem = navTree.find((item) => item.label === mega);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
        <nav
          className="pointer-events-auto relative w-full max-w-6xl"
          onMouseLeave={scheduleClose}
        >
          <div
            className={`flex w-full items-center justify-between gap-4 rounded-full border border-white/10 px-3 py-2 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-4 ${
              scrolled ? "bg-ink/80 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-ink/50"
            }`}
          >
            <Link
              href="/"
              className="shrink-0 pl-2 font-display text-lg tracking-[0.12em] text-stone"
              aria-label="Vicéli Living home"
            >
              VICÉLI
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center overflow-hidden lg:flex">
              {navTree.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const active = isNavActive(pathname, item.href);
                return (
                  <div
                    key={item.href}
                    className="shrink-0"
                    onMouseEnter={() => (hasChildren ? openMega(item.label) : setMega(null))}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      aria-expanded={hasChildren ? mega === item.label : undefined}
                      aria-haspopup={hasChildren ? "true" : undefined}
                      className={`whitespace-nowrap rounded-full px-2 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 xl:px-3 xl:text-[12px] xl:tracking-[0.18em] ${
                        active ? "text-stone" : "text-stone/70 hover:text-stone"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <LocaleSwitch variant="pill" className="hidden lg:block" />
              <ConsultButton href={primaryConsult} size="sm" />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
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
          </div>

          <AnimatePresence>
            {activeItem?.children?.length ? (
              <motion.div
                key={activeItem.label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                onMouseEnter={() => openMega(activeItem.label)}
                className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink/90 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              >
                <MegaMenu item={activeItem} pathname={pathname} onNavigate={() => setMega(null)} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 overflow-y-auto bg-ink/90 backdrop-blur-3xl lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex min-h-[100dvh] flex-col justify-center px-8 pt-28 pb-12">
              <ul className="space-y-1">
                {navTree.map((item, i) => {
                  const expanded = accordion === item.label;
                  const hasChildren = Boolean(item.children?.length);
                  const active = isNavActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.06,
                        duration: 0.55,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={`min-h-11 font-display text-4xl tracking-tight transition-opacity hover:opacity-70 md:text-5xl ${
                            active ? "text-stone" : "text-stone/45"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {hasChildren ? (
                          <button
                            type="button"
                            aria-label={`Open ${item.label} submenu`}
                            aria-expanded={expanded}
                            onClick={() =>
                              setAccordion((current) => (current === item.label ? null : item.label))
                            }
                            className="flex h-11 w-11 items-center justify-center rounded-full text-stone/60"
                          >
                            <CaretDown
                              weight="light"
                              className={`h-5 w-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                            />
                          </button>
                        ) : null}
                      </div>
                      {hasChildren && expanded ? (
                        <ul className="mb-4 mt-2 space-y-1 border-l border-hairline pl-4">
                          {item.children?.map((child) => {
                            const childActive =
                              !child.href.includes("#") && isNavActive(pathname, child.href);
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={childActive ? "page" : undefined}
                                  onClick={() => setOpen(false)}
                                  className={`flex min-h-11 flex-col justify-center py-1 text-sm uppercase tracking-[0.16em] transition-colors ${
                                    childActive ? "text-stone" : "text-stone/60 hover:text-stone"
                                  }`}
                                >
                                  <span>{child.label}</span>
                                  {child.lede ? (
                                    <span className="mt-1 normal-case tracking-normal text-xs text-muted">
                                      {child.lede}
                                    </span>
                                  ) : null}
                                </Link>
                              </li>
                            );
                          })}
                          <li>
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="flex min-h-11 items-center text-sm uppercase tracking-[0.16em] text-stone hover:opacity-70"
                            >
                              {item.ctaLabel}
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </motion.li>
                  );
                })}
              </ul>
              <motion.div
                className="mt-10"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <ConsultButton href={primaryConsult} onClick={() => setOpen(false)} />
              </motion.div>
              <LocaleSwitch variant="overlay" className="mt-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
