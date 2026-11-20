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
    <section id={id} className={cn("bg-page text-light-primary", className)}>
      <div className={cn("content-width section-x", innerClassName)}>{children}</div>
    </section>
  );
}

/** Full-bleed dark slab - no side white gutters */
export function DarkZone({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-black text-white",
        className
      )}
    >
      {children}
    </div>
  );
}

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
    <section id={id} className={cn("py-16 md:py-24 lg:py-[120px]", className)}>
      <div className={cn("content-width section-x", innerClassName)}>{children}</div>
    </section>
  );
}
