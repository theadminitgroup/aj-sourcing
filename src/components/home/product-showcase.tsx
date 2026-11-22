"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { homepageCopy, sourcingCategories } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

type Category = (typeof sourcingCategories)[number];

const LOOP = [...sourcingCategories, ...sourcingCategories];
const SPEED = 0.55; // px per frame at ~60fps

/**
 * What Can We Source — horizontal auto-carousel.
 * Moves continuously; pauses on hover; drag to scrub.
 */
export function ProductShowcase() {
  const { heading, subtext, ctaLabel } = homepageCopy.showcase;
  const { openContact } = useContact();

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const movedRef = useRef(false);
  const reduceMotionRef = useRef(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // Two identical sets → loop when we've scrolled one set's width
    halfWidthRef.current = track.scrollWidth / 2;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }, []);

  const wrapOffset = useCallback(() => {
    const half = halfWidthRef.current;
    if (half <= 0) return;
    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
  }, []);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    measure();
    const ro = new ResizeObserver(() => {
      measure();
      wrapOffset();
      applyTransform();
    });
    if (trackRef.current) ro.observe(trackRef.current);

    let raf = 0;
    const tick = () => {
      if (
        !reduceMotionRef.current &&
        !pausedRef.current &&
        !draggingRef.current
      ) {
        offsetRef.current -= SPEED;
        wrapOffset();
        applyTransform();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [applyTransform, measure, wrapOffset]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    draggingRef.current = true;
    movedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    pausedRef.current = true;
    viewportRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    if (Math.abs(dx) > 4) movedRef.current = true;
    offsetRef.current = dragStartOffsetRef.current + dx;
    wrapOffset();
    applyTransform();
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      viewportRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    // Resume auto-move unless pointer still hovering (handled by enter/leave)
    const viewport = viewportRef.current;
    if (viewport && !viewport.matches(":hover")) {
      pausedRef.current = reduceMotionRef.current;
    } else {
      pausedRef.current = true;
    }
  };

  const openCategory = (category: Category) => {
    if (movedRef.current) return; // was a drag, not a click
    openContact({
      category: category.title,
      product: `Looking to source: ${category.title}`,
    });
  };

  return (
    <section
      id="products"
      data-surface="light"
      className="scroll-mt-24 bg-white section-y"
    >
      <div className="content-width section-x">
        <FadeUp>
          <div className="mx-auto max-w-[640px] stack-copy items-center text-center">
            <h2 className="heading-section text-balance">{heading}</h2>
            <p className="section-subtext text-center">{subtext}</p>
          </div>
        </FadeUp>
      </div>

      <FadeUp className="mt-10 md:mt-12 lg:mt-14">
        <div
          ref={viewportRef}
          className={cn(
            "relative cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing",
            "select-none"
          )}
          onPointerEnter={() => {
            pausedRef.current = true;
          }}
          onPointerLeave={() => {
            if (!draggingRef.current) {
              pausedRef.current = reduceMotionRef.current;
            }
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          role="region"
          aria-label="Product categories carousel"
        >
          <ul
            ref={trackRef}
            className="flex w-max list-none gap-4 px-[max(1rem,calc((100vw-var(--max-width-content))/2+1rem))] md:gap-5 lg:gap-6"
            style={{ willChange: "transform" }}
          >
            {LOOP.map((category, i) => {
              const src = category.src;
              const key = `${category.id}-${i}`;

              return (
                <li
                  key={key}
                  className="flex w-[min(72vw,280px)] shrink-0 flex-col sm:w-[260px] md:w-[280px] lg:w-[300px]"
                >
                  <button
                    type="button"
                    onClick={() => openCategory(category)}
                    className="group relative flex aspect-[4/5] w-full overflow-hidden text-left"
                    style={{ borderRadius: 4, backgroundColor: "#F5F6F8" }}
                    aria-label={`Enquire about ${category.title}`}
                  >
                    {src && (
                      <div className="pointer-events-none absolute inset-4 sm:inset-5 md:inset-6">
                        <Image
                          src={src}
                          alt={category.title}
                          fill
                          sizes="300px"
                          draggable={false}
                          className="object-contain object-center transition-[filter,transform] duration-300 ease-out group-hover:scale-[1.02] group-hover:blur-[3px] group-focus-visible:blur-[3px]"
                        />
                      </div>
                    )}

                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 px-4 opacity-0 transition-[opacity,background-color] duration-300 ease-out group-hover:bg-black/20 group-hover:opacity-100 group-focus-visible:bg-black/20 group-focus-visible:opacity-100"
                      style={{ borderRadius: 4 }}
                    >
                      <span
                        className="inline-flex items-center justify-center border border-white bg-white px-4 py-2.5 text-[12px] uppercase tracking-[0.1em] text-[#0D0F12] sm:px-5 sm:py-3 sm:text-[13px]"
                        style={{ borderRadius: 2, fontWeight: 400 }}
                      >
                        {ctaLabel}
                      </span>
                    </div>
                  </button>

                  <div className="mt-3 px-0.5 text-center md:mt-3.5">
                    <p
                      className="text-[14px] leading-[1.3] tracking-[-0.01em] text-[#171717] sm:text-[15px] md:text-[16px] lg:text-[17px]"
                      style={{ fontWeight: 400 }}
                    >
                      {category.title}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </FadeUp>
    </section>
  );
}
