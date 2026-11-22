/**
 * AJ Sourcing CTA design tokens — single source of truth.
 * Human-readable spec: src/design/CTA.md
 *
 * Rules:
 * - Black / white only (no blue, no gold/yellow on CTAs)
 * - Square radius 2px, font-weight 400, uppercase labels
 * - Never put arrows inside CTA labels
 */

export type CtaVariant =
  | "primary"
  | "secondary"
  | "onDark"
  | "outlineOnDark";

export type CtaSize = "nav" | "sm" | "default" | "lg";

/** Shared layout + focus shell for every CTA. */
export const ctaBase =
  "inline-flex items-center justify-center gap-0 font-normal uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const ctaRadius = 2;

export const ctaVariantStyles: Record<CtaVariant, string> = {
  primary:
    "border border-[#0D0F12] bg-[#0D0F12] text-white hover:border-black hover:bg-black focus-visible:ring-[#0D0F12]/30 focus-visible:ring-offset-white",
  secondary:
    "border border-[#0D0F12] bg-transparent text-[#0D0F12] hover:bg-black/[0.06] focus-visible:ring-[#0D0F12]/30 focus-visible:ring-offset-white",
  onDark:
    "border border-white bg-white text-[#0D0F12] hover:bg-[#F5F6F8] focus-visible:ring-white/40 focus-visible:ring-offset-[#0D0F12]",
  outlineOnDark:
    "border border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/40 focus-visible:ring-offset-[#0D0F12]",
};

export const ctaSizeStyles: Record<CtaSize, string> = {
  /** Top / sticky nav quote button — fixed height, matches prior nav CTA. */
  nav: "h-11 px-6 text-[13px] tracking-[0.1em] leading-none",
  sm: "px-5 py-2.5 text-[12px] tracking-[0.12em] leading-[1.25]",
  default: "px-5 py-3 text-[13px] tracking-[0.1em] leading-[1.25]",
  lg: "min-h-[52px] px-7 py-3.5 text-[13px] tracking-[0.1em] leading-[1.25]",
};
