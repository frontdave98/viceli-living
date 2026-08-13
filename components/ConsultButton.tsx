"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

type ConsultButtonProps = {
  href: string;
  label?: string;
  variant?: "light" | "dark" | "ghost";
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
};

export function ConsultButton({
  href,
  label = "Consult",
  variant = "light",
  size = "md",
  className = "",
  onClick,
}: ConsultButtonProps) {
  const styles =
    variant === "light"
      ? "bg-stone text-ink hover:bg-stone/90"
      : variant === "dark"
        ? "bg-ink text-stone hover:bg-ink/90"
        : "bg-transparent text-stone ring-1 ring-stone/25 hover:ring-stone/50";

  const sizing =
    size === "sm"
      ? "gap-2 pl-3.5 pr-1.5 py-1 text-xs"
      : "gap-3 pl-6 pr-2 py-2 text-sm";

  const iconWrap = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <Link
      href={href}
      onClick={onClick}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center rounded-full font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${sizing} ${styles} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${iconWrap} ${
          variant === "light"
            ? "bg-ink/10"
            : variant === "dark"
              ? "bg-stone/15"
              : "bg-stone/10"
        }`}
      >
        <ArrowUpRight weight="light" className={icon} />
      </span>
    </Link>
  );
}
