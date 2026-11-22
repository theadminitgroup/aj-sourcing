"use client";

import { useContact } from "@/components/contact/contact-context";
import {
  ctaBase,
  ctaRadius,
  ctaSizeStyles,
  ctaVariantStyles,
  type CtaSize,
  type CtaVariant,
} from "@/design/cta";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface QuoteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CtaVariant;
  size?: CtaSize;
  children: ReactNode;
}

/**
 * Primary quote CTA — opens the contact dialog.
 * Styles come only from src/design/cta.ts (see CTA.md).
 */
export function QuoteButton({
  className,
  variant = "primary",
  size = "default",
  children,
  onClick,
  ...props
}: QuoteButtonProps) {
  const { openContact } = useContact();

  return (
    <button
      type="button"
      className={cn(
        ctaBase,
        ctaVariantStyles[variant],
        ctaSizeStyles[size],
        className
      )}
      style={{ borderRadius: ctaRadius }}
      onClick={(e) => {
        onClick?.(e);
        openContact();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
