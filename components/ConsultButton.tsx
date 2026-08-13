"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

type ConsultButtonProps = {
  href: string;
  label?: string;
  variant?: "light" | "dark" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function ConsultButton({
  href,
  label = "Consult",
  variant = "light",
  className = "",
  onClick,
}: ConsultButtonProps) {
  const styles =
    variant === "light"
      ? "bg-stone text-ink hover:bg-stone/90"
      : variant === "dark"
        ? "bg-ink text-stone hover:bg-ink/90"
        : "bg-transparent text-stone ring-1 ring-stone/25 hover:ring-stone/50";

  return (
    <Link
      href={href}
      onClick={onClick}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${styles} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${
          variant === "light"
            ? "bg-ink/10"
            : variant === "dark"
              ? "bg-stone/15"
              : "bg-stone/10"
        }`}
      >
        <ArrowUpRight weight="light" className="h-4 w-4" />
      </span>
    </Link>
  );
}
