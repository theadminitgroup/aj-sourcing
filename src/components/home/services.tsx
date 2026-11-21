"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { homepageCopy, services } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const AUTO_MS = 5500;

/**
 * What We Do — left accordion (one open + timed progress), right ops image.
 */
export function ServicesSection() {
  const { heading, subtext } = homepageCopy.services;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);

  const goTo = useCallback((index: number) => {
    elapsedRef.current = 0;
    setProgress(0);
    setActive(index);
  }, []);

  useEffect(() => {
    if (paused) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }

    const start = performance.now() - elapsedRef.current;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(1, elapsed / AUTO_MS);
      setProgress(next);

      if (elapsed >= AUTO_MS) {
        elapsedRef.current = 0;
        setProgress(0);
        setActive((i) => (i + 1) % services.length);
        return;
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      elapsedRef.current = performance.now() - start;
    };
  }, [active, paused]);

  return (
    <section
      id="services"
      data-surface="light"
      className="scroll-mt-24 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="content-width section-x">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <FadeUp className="lg:col-span-6">
            <div className="max-w-[520px] stack-copy">
              <h2 className="heading-section text-balance">{heading}</h2>
              <p className="section-subtext">{subtext}</p>
            </div>

            <ul
              className="mt-10 list-none md:mt-12"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {services.map((service, index) => {
                const isOpen = index === active;

                return (
                  <li
                    key={service.id}
                    className="border-t border-[#E3E7ED] last:border-b"
                  >
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      aria-expanded={isOpen}
                      className={cn(
                        "flex w-full items-start gap-4 py-5 text-left transition-colors duration-200 md:gap-5 md:py-6",
                        isOpen
                          ? "text-[#171717]"
                          : "text-[#171717]/50 hover:text-[#171717]"
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0 pt-0.5 text-[13px] tracking-[0.06em] transition-colors duration-200 md:text-[14px]",
                          isOpen ? "text-[#112947]" : "text-[#112947]/35"
                        )}
                        style={{ fontWeight: 400 }}
                      >
                        {service.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-[17px] leading-[1.3] tracking-[-0.01em] md:text-[18px]"
                          style={{ fontWeight: 400 }}
                        >
                          {service.title}
                        </span>

                        {isOpen && (
                          <>
                            <span
                              className="mt-4 block h-px w-full overflow-hidden bg-[#E3E7ED]"
                              aria-hidden
                            >
                              <span
                                className="block h-full origin-left bg-[#112947]"
                                style={{
                                  width: "100%",
                                  transform: `scaleX(${progress})`,
                                }}
                              />
                            </span>
                            <span
                              className="mt-4 block max-w-[42ch] text-[15px] leading-[1.55] text-[#606873] md:text-[16px]"
                              style={{ fontWeight: 400 }}
                            >
                              {service.description}
                            </span>
                          </>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </FadeUp>

          <FadeUp className="lg:col-span-6">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] lg:aspect-auto lg:min-h-[560px] lg:h-full"
              style={{ borderRadius: 2 }}
            >
              <Image
                src="/images/operations/logistics-operations.jpg"
                alt="International logistics and freight operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
