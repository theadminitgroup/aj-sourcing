import {
  ctaBase,
  ctaRadius,
  ctaSizeStyles,
  ctaVariantStyles,
  type CtaSize,
  type CtaVariant,
} from "@/design/cta";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CtaVariant;
  size?: CtaSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          ctaBase,
          ctaVariantStyles[variant],
          ctaSizeStyles[size],
          className
        )}
        style={{ borderRadius: ctaRadius }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
