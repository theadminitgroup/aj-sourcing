"use client";

import Image from "next/image";
import { homepageCopy, showcaseItems } from "@/lib/data";
import { DarkBlock } from "@/components/ui/section-shell";
import { HeadingReveal, FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

function Tile({
  item,
  className,
}: {
  item: (typeof showcaseItems)[number];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-dark-tile transition-transform duration-500 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative h-[78%] w-[78%]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
          sizes="360px"
        />
      </div>
      <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/90 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        {item.title}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: (typeof showcaseItems)[number][];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <div
        className={cn(
          "flex shrink-0 items-end gap-6 px-1",
          reverse ? "marquee-track-reverse" : "marquee-track"
        )}
      >
        {doubled.map((item, i) => (
          <Tile
            key={`${item.id}-${i}`}
            item={item}
            className={cn(
              item.tall
                ? "h-[320px] w-[280px] md:h-[400px] md:w-[300px]"
                : item.wide
                  ? "h-[220px] w-[420px] md:h-[248px] md:w-[520px]"
                  : "h-[220px] w-[280px] md:h-[248px] md:w-[320px]"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const { label, heading } = homepageCopy.showcase;
  const rowA = showcaseItems.filter((_, i) => i % 2 === 0);
  const rowB = showcaseItems.filter((_, i) => i % 2 === 1);

  return (
    <DarkBlock id="showcase" innerClassName="max-w-none !px-0">
      <div className="content-width section-x mb-[60px] text-center">
        <div className="stack-label mx-auto items-center">
          <FadeUp>
            <p className="label-dark">{label}</p>
          </FadeUp>
          <HeadingReveal className="heading-section-dark mx-auto max-w-[20ch] text-balance">
            {heading}
          </HeadingReveal>
        </div>
      </div>

      <div className="marquee-paused space-y-6 overflow-hidden">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </DarkBlock>
  );
}
