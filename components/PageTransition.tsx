"use client";

import { ViewTransition } from "react";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return <ViewTransition default="page-fade">{children}</ViewTransition>;
}
