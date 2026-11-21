"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homepageCopy, sourcingCategories } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * Sourcing carousel — image panels, labels below, black marks, site blue accents.
 */
export function ProductShowcase() {
  const { heading, subtext } = homepageCopy.showcase;
  const { openContact } = useContact();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
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
    const card = el.querySelector<HTMLElement>("[data-category-card]");
    const gap = 20;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowBtn = (enabled: boolean) =>
    cn(
      "flex h-10 w-10 items-center justify-center transition-colors duration-200 md:h-11 md:w-11",
      enabled
        ? "bg-blue text-white hover:bg-blue/90"
        : "cursor-not-allowed bg-[#F1F3F5] text-[#A8B0B8]"
    );

  return (
    <section
      id="products"
      data-surface="light"
      className="scroll-mt-24 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="content-width section-x">
        <FadeUp>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-[640px] stack-copy">
              <h2 className="heading-section text-balance">{heading}</h2>
              <p className="section-subtext">{subtext}</p>
            </div>

            <div className="flex shrink-0 items-center gap-2 pb-0.5">
              <button
                type="button"
                aria-label="Previous categories"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className={arrowBtn(canPrev)}
                style={{ borderRadius: 4 }}
              >
                <ChevronLeft size={18} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                aria-label="Next categories"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className={arrowBtn(canNext)}
                style={{ borderRadius: 4 }}
              >
                <ChevronRight size={18} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </FadeUp>

        <div className="relative mt-7 md:mt-8 lg:mt-9">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 [&::-webkit-scrollbar]:hidden"
          >
            {sourcingCategories.map((category) => {
              const isSpecial = "special" in category && category.special;
              const src = "src" in category ? category.src : null;

              return (
                <div
                  key={category.id}
                  data-category-card
                  className="flex w-[min(86vw,300px)] shrink-0 snap-start flex-col sm:w-[min(48vw,320px)] md:w-[calc((100%-3.75rem)/4)]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      isSpecial
                        ? openContact()
                        : openContact({
                            category: category.title,
                            product: `Looking to source: ${category.title}`,
                          })
                    }
                    className="group relative flex aspect-[4/5] w-full overflow-hidden text-left"
                    style={{ borderRadius: 4, backgroundColor: "#F5F6F8" }}
                    aria-label={
                      isSpecial
                        ? "Request a product"
                        : `Enquire about ${category.title}`
                    }
                  >
                    {src && (
                      <div className="absolute inset-5 md:inset-6">
                        <Image
                          src={src}
                          alt={category.title}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 48vw, 25vw"
                          className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                  </button>

                  <div className="mt-3 px-0.5 md:mt-3.5">
                    <p
                      className="text-[16px] leading-[1.3] tracking-[-0.01em] text-[#171717] md:text-[17px]"
                      style={{ fontWeight: 400 }}
                    >
                      {category.title}
                    </p>

                    {isSpecial && "description" in category && (
                      <p
                        className="mt-1.5 max-w-[28ch] text-[14px] leading-[1.5] text-light-primary/65 md:text-[15px]"
                        style={{ fontWeight: 400 }}
                      >
                        {category.description}
                      </p>
                    )}

                    {isSpecial && (
                      <button
                        type="button"
                        onClick={() => openContact()}
                        className="mt-3 inline-flex w-fit items-center text-[13px] text-blue transition-opacity hover:opacity-70 md:text-[14px]"
                        style={{ fontWeight: 500 }}
                      >
                        {"cta" in category
                          ? category.cta
                          : "Request a Product →"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
