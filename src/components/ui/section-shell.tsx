import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function LightSection({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      data-surface="light"
      className={cn("bg-page text-light-primary", className)}
    >
      <div className={cn("content-width section-x", innerClassName)}>{children}</div>
    </section>
  );
}

/** Full-bleed dark section — normal scroll, no sticky overlap */
export function DarkSection({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      data-surface="dark"
      className={cn("bg-dark-base text-dark-primary", className)}
    >
      <div className={cn("content-width section-x", innerClassName)}>{children}</div>
    </section>
  );
}

/** @deprecated Prefer DarkSection — kept for any legacy imports */
export function DarkZone({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden bg-dark-base text-white", className)}>
      {children}
    </div>
  );
}

/** @deprecated Prefer DarkSection */
export function DarkBlock({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-20 lg:py-24", className)}>
      <div className={cn("content-width section-x", innerClassName)}>{children}</div>
    </section>
  );
}
