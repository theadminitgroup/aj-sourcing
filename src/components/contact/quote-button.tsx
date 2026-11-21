"use client";

import { useContact } from "@/components/contact/contact-context";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-dark" | "tertiary";
type ButtonSize = "default" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue text-white hover:bg-blue/90",
  secondary:
    "border border-[#e0e0e0] bg-white text-light-primary hover:bg-[#fafafa]",
  ghost: "border border-white/40 bg-transparent text-white hover:bg-white/10",
  "outline-dark":
    "border border-white/30 bg-transparent text-white hover:bg-white/5",
  tertiary:
    "bg-transparent px-0 py-0 text-white/70 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-3 text-[13px] font-normal uppercase tracking-[0.1em] leading-[1.25]",
  lg: "px-7 py-3.5 text-[13px] font-normal uppercase tracking-[0.1em] leading-[1.25]",
};

interface QuoteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

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
        "inline-flex items-center justify-center transition-colors duration-200",
        variantStyles[variant],
        variant !== "tertiary" && sizeStyles[size],
        variant === "tertiary" && "gap-2 text-[15px] font-normal",
        className
      )}
      style={variant !== "tertiary" ? { borderRadius: 2 } : undefined}
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
