import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Official AJ Sourcing lockup (SVG). Wide gold mark — size via width classes.
 */
export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.svg"
      alt="AJ Sourcing"
      width={473}
      height={72}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={cn(
        "h-auto w-[160px] object-contain object-left sm:w-[180px] md:w-[200px] lg:w-[210px]",
        className
      )}
    />
  );
}
