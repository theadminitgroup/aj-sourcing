"use client";

import { useEffect, useRef, useState } from "react";
import { homepageCopy, whyUsFeatures } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * Why AJ Sourcing — 4-col features with short center dividers (no top rule).
 */
export function WhyUsSection() {
  const { heading, subtext } = homepageCopy.whyUs;
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      data-surface="light"
      className="scroll-mt-24 bg-white section-y"
    >
      <div className="content-width section-x" ref={ref}>
        <FadeUp>
          <div className="mx-auto max-w-[560px] stack-copy items-center text-center">
            <h2 className="heading-section text-balance">{heading}</h2>
            <p className="section-subtext text-center">{subtext}</p>
          </div>
        </FadeUp>

        <ol className="mt-10 grid list-none grid-cols-1 md:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {whyUsFeatures.map((feature, i) => (
            <li
              key={feature.number}
              className={cn(
                "relative border-b border-[#E4E7EB] py-6 last:border-b-0 transition-all duration-500 md:border-b-0 md:px-6 md:py-8 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0",
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              )}
              style={{
                transitionDelay: revealed ? `${80 + i * 100}ms` : "0ms",
              }}
            >
              {/* Short vertical divider — centered, not full column height */}
              {i > 0 && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-[#E4E7EB] lg:h-32",
                    i % 2 === 1 ? "md:block" : "lg:block"
                  )}
                />
              )}
              <p
                className="text-[13px] tracking-[0.06em] text-[#112947] md:text-[14px]"
                style={{ fontWeight: 400 }}
              >
                {feature.number}
              </p>
              <h3
                className="mt-4 text-[17px] leading-[1.3] tracking-[-0.01em] text-[#171717] md:mt-5 md:text-[18px]"
                style={{ fontWeight: 400 }}
              >
                {feature.title}
              </h3>
              <p
                className="mt-2.5 max-w-[32ch] text-[15px] leading-[1.55] text-[#626A73] md:mt-3"
                style={{ fontWeight: 400 }}
              >
                {feature.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
