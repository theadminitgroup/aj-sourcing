"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { homepageCopy, testimonials } from "@/lib/data";
import { images } from "@/lib/images";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp, HeadingReveal } from "@/components/ui/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const { label, heading } = homepageCopy.testimonials;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-story-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <LightSection id="stories" innerClassName="py-24 md:py-28 lg:py-32">
      <div className="stack-label mb-8 max-w-[720px] md:mb-10">
        <p className="label">{label}</p>
        <HeadingReveal className="heading-section text-balance">{heading}</HeadingReveal>
      </div>

      <FadeUp delay={0.1}>
        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, i) => {
            const avatar = images.avatars[i % images.avatars.length];

            return (
              <article
                key={item.author}
                data-story-card
                className="group relative flex w-[min(calc(100vw-3rem),380px)] shrink-0 snap-start cursor-default flex-col justify-between rounded-[22px] bg-[#f5f5f7] p-7 min-h-[300px] transition-colors duration-300 hover:bg-[#efefef] md:w-[400px] md:p-8 md:min-h-[320px]"
              >
                <div className="relative">
                  <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-light-primary md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] text-light-secondary transition-colors duration-300 group-hover:text-light-primary/70 md:text-[16px]">
                    {item.quote}
                  </p>
                </div>

                <footer className="relative mt-10 flex items-center gap-3.5">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#ebebeb] ring-2 ring-transparent transition-[ring-color] duration-300 group-hover:ring-orange/30">
                    <Image
                      src={avatar}
                      alt=""
                      fill
                      className="rounded-full object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-light-primary">
                      {item.author}
                    </p>
                    <p className="truncate text-[13px] text-light-muted-text">
                      {item.role}
                    </p>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous stories"
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
              canPrev
                ? "bg-[#1d1d1f] text-white hover:bg-orange hover:scale-105 active:scale-[0.96]"
                : "cursor-not-allowed bg-[#e8e8ed] text-[#aeaeb2]"
            )}
          >
            <ChevronLeft size={18} strokeWidth={2.25} />
          </button>
          <button
            type="button"
            aria-label="Next stories"
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200",
              canNext
                ? "bg-[#1d1d1f] text-white hover:bg-orange hover:scale-105 active:scale-[0.96]"
                : "cursor-not-allowed bg-[#e8e8ed] text-[#aeaeb2]"
            )}
          >
            <ChevronRight size={18} strokeWidth={2.25} />
          </button>
        </div>
      </FadeUp>
    </LightSection>
  );
}
