import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * AJ Sourcing wordmark (same asset as footer) — gold lockup for top nav.
 */
export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/aj-sourcing-wordmark.svg"
      alt="AJ Sourcing"
      width={403}
      height={41}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={cn(
        "h-auto w-[176px] object-contain object-left sm:w-[188px] md:w-[200px] lg:w-[210px]",
        className
      )}
    />
  );
}
