import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-dark";
type ButtonSize = "default" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue text-white hover:bg-blue/90",
  secondary: "border border-[#e0e0e0] bg-white text-light-primary hover:bg-[#fafafa]",
  ghost: "border border-white/40 bg-transparent text-white hover:bg-white/10",
  "outline-dark": "border border-white/30 bg-transparent text-white hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-3 text-[13px] font-normal uppercase tracking-[0.1em] leading-[1.25]",
  lg: "px-7 py-3.5 text-[13px] font-normal uppercase tracking-[0.1em] leading-[1.25]",
};

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{ borderRadius: 2 }}
      {...props}
    />
  );
}
