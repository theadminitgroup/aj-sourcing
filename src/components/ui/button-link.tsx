import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-dark";
type ButtonSize = "default" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue text-white hover:bg-blue/90",
  secondary: "border border-[#e0e0e0] bg-white text-light-primary hover:bg-[#fafafa]",
  ghost: "bg-white/10 text-white hover:bg-white/15",
  "outline-dark": "border border-white/20 bg-transparent text-white hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-3 text-[14px] font-semibold leading-[1.25]",
  lg: "px-7 py-4 text-base font-semibold leading-[1.25]",
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
        "inline-flex items-center justify-center rounded-full transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
