import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-white hover:bg-orange focus-visible:ring-blue/30",
  secondary:
    "border border-white/15 bg-transparent text-white hover:bg-white/5 focus-visible:ring-white/20",
  ghost:
    "bg-transparent text-white/70 hover:bg-white/5 hover:text-white focus-visible:ring-white/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-3 text-[13px] font-normal uppercase tracking-[0.1em]",
  lg: "px-7 py-3.5 text-[13px] font-normal uppercase tracking-[0.1em]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-normal transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={{ borderRadius: 2 }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
