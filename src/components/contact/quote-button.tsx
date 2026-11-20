"use client";

import { useContact } from "@/components/contact/contact-context";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-dark" | "tertiary";
type ButtonSize = "default" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue text-white hover:bg-blue/90 rounded-full",
  secondary:
    "border border-[#e0e0e0] bg-white text-light-primary hover:bg-[#fafafa] rounded-full",
  ghost: "bg-white/10 text-white hover:bg-white/15 rounded-full",
  "outline-dark":
    "border border-white/20 bg-transparent text-white hover:bg-white/5 rounded-full",
  tertiary:
    "rounded-none bg-transparent px-0 py-0 text-white/70 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-3 text-[14px] font-semibold leading-[1.25]",
  lg: "px-7 py-4 text-base font-semibold leading-[1.25]",
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
        variant === "tertiary" && "gap-2 text-[15px] font-medium",
        className
      )}
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
