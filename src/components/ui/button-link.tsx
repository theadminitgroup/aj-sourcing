import {
  ctaBase,
  ctaRadius,
  ctaSizeStyles,
  ctaVariantStyles,
  type CtaSize,
  type CtaVariant,
} from "@/design/cta";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentProps } from "react";

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: CtaVariant;
  size?: CtaSize;
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
