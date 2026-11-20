"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type GlowColor = "blue" | "orange" | "purple";

const glowMap: Record<GlowColor, string> = {
  blue: "bg-blue/25",
  orange: "bg-orange/20",
  purple: "bg-[#6366f1]/20",
};

export function GlowCard({
  children,
  className,
  glow = "blue",
  glowPosition = "top-right",
}: {
  children: ReactNode;
  className?: string;
  glow?: GlowColor;
  glowPosition?: "top-right" | "bottom-left" | "center";
}) {
  const reduced = useReducedMotion();

  const glowPos =
    glowPosition === "top-right"
      ? "-right-16 -top-16"
      : glowPosition === "bottom-left"
        ? "-bottom-16 -left-16"
        : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";

  const Wrapper = reduced ? "div" : motion.div;
  const motionProps = reduced
    ? {}
    : {
        whileHover: { y: -4 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <Wrapper
      {...motionProps}
      className={cn(
        "group relative overflow-hidden rounded-[24px] bg-dark-surface p-6",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute h-48 w-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          glowMap[glow],
          glowPos
        )}
      />
      <div className="relative">{children}</div>
    </Wrapper>
  );
}

/** Light-theme interactive card */
export function GlowCardLight({
  children,
  className,
  glow = "blue",
}: {
  children: ReactNode;
  className?: string;
  glow?: GlowColor;
}) {
  const reduced = useReducedMotion();
  const Wrapper = reduced ? "div" : motion.div;
  const motionProps = reduced
    ? {}
    : {
        whileHover: { y: -3 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <Wrapper
      {...motionProps}
      className={cn(
        "group relative overflow-hidden rounded-[24px] bg-light-muted p-6",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          glowMap[glow]
        )}
      />
      <div className="relative">{children}</div>
    </Wrapper>
  );
}
