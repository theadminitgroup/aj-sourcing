"use client";

import type { ElementType, ReactNode } from "react";

/**
 * Entrance animations were leaving sections stuck at opacity:0 in some
 * environments (local/dev). Content always renders visible so the Vercel
 * design stays readable. Hover/tap motion in section files is unchanged.
 */

interface HeadingRevealProps {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function HeadingReveal({
  children,
  as: Tag = "h2",
  className,
}: HeadingRevealProps) {
  return <Tag className={className}>{children}</Tag>;
}

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function FadeUp({ children, className }: FadeUpProps) {
  return <div className={className}>{children}</div>;
}

interface SectionHeaderProps {
  label?: string | null;
  heading: string;
  subtext?: string;
  headingClassName?: string;
  subtextClassName?: string;
  labelClassName?: string;
  layout?: "stacked" | "split";
  dark?: boolean;
  headingAs?: ElementType;
}

export function SectionHeader({
  label,
  heading,
  subtext,
  headingClassName,
  subtextClassName,
  labelClassName,
  layout = "stacked",
  dark = false,
  headingAs = "h2",
}: SectionHeaderProps) {
  const labelEl = label ? (
    <p className={labelClassName ?? (dark ? "label-dark mb-4" : "label mb-4")}>
      {label}
    </p>
  ) : null;

  const headingEl = (
    <HeadingReveal as={headingAs} className={headingClassName}>
      {heading}
    </HeadingReveal>
  );

  const subtextEl = subtext ? (
    <p className={subtextClassName}>{subtext}</p>
  ) : null;

  if (layout === "split") {
    return (
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          {labelEl}
          {headingEl}
        </div>
        {subtextEl}
      </div>
    );
  }

  return (
    <div>
      {labelEl}
      {headingEl}
      {subtextEl}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({ children, className }: StaggerProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className }: ImageRevealProps) {
  return <div className={className}>{children}</div>;
}

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
}

export function MaskReveal({ children, className }: MaskRevealProps) {
  return <div className={className}>{children}</div>;
}

/** @deprecated Use FadeUp or SectionHeader */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <FadeUp className={className}>{children}</FadeUp>;
}

export const cardHover =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover";

export const imageHover =
  "transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.03]";

export const iconHover =
  "text-blue transition-all duration-300 group-hover:rotate-12 group-hover:border-orange group-hover:bg-orange group-hover:text-white";
