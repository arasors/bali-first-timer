"use client";

import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";
type RevealDelay = "none" | "short" | "medium" | "long";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: RevealDelay;
};

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = "none",
}: ScrollRevealProps) {
  return (
    <div
      data-scroll-reveal={direction}
      data-reveal-delay={delay}
      className={`bft-scroll-reveal ${className}`}
    >
      {children}
    </div>
  );
}
