"use client";

import Image from "next/image";
import { homepageCopy, showcaseItems } from "@/lib/data";
import { QuoteButton } from "@/components/contact/quote-button";
import { ButtonLink } from "@/components/ui/button-link";
import { HeroNavbar } from "@/components/layout/navbar";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

function HeroMarqueeRow({
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
          "flex shrink-0 items-center gap-3 px-1 md:gap-4",
          reverse ? "marquee-track-reverse" : "marquee-track"
        )}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="group relative flex h-[180px] w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-panel)] bg-[#f0f0ee] md:h-[220px] md:w-[220px] lg:h-[240px] lg:w-[240px]"
          >
            <div className="relative h-[72%] w-[72%]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="240px"
              />
            </div>
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-light-primary opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const { heading, subtext, ctas } = homepageCopy.hero;
  const rowA = showcaseItems.filter((_, i) => i % 2 === 0);
  const rowB = showcaseItems.filter((_, i) => i % 2 === 1);

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.05),transparent_60%)]"
      />

      <HeroNavbar />

      <div className="content-width section-x relative flex flex-col items-center pb-12 pt-10 md:pb-14 md:pt-14 lg:pt-16">
        <div className="flex max-w-[920px] flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3">
            <FadeUp immediate>
              <h1 className="heading-hero text-balance">{heading}</h1>
            </FadeUp>
            <FadeUp delay={0.1} immediate>
              <p className="section-subtext mx-auto text-center">{subtext}</p>
            </FadeUp>
          </div>

          <FadeUp delay={0.22} immediate>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <QuoteButton size="lg">{ctas[0].label}</QuoteButton>
              <ButtonLink href={ctas[1].href} variant="secondary" size="lg">
                {ctas[1].label}
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={0.3} immediate>
        <div
          id="hero-showcase"
          className="marquee-paused relative w-full space-y-4 pb-14 md:space-y-5 md:pb-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28"
          />
          <HeroMarqueeRow items={rowA} />
          <HeroMarqueeRow items={rowB} reverse />
        </div>
      </FadeUp>
    </section>
  );
}
