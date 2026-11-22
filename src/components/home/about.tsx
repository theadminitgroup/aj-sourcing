"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { homepageCopy } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/** Count from 0 → target once the metric enters the viewport. */
function CountUpValue({
  value,
  active,
  duration = 1400,
}: {
  value: string;
  active: boolean;
  duration?: number;
}) {
  const target = Number.parseInt(value, 10);
  const isNumeric = Number.isFinite(target);
  const [display, setDisplay] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      return;
    }

    if (!active) {
      setDisplay(0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOutCubic(t) * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, isNumeric, target, value]);

  return <>{display}</>;
}

/**
 * About Us — scroll-highlight body copy + two key metrics.
 * Placed between Hero and What Can We Source.
 */
export function AboutSection() {
  const { label, body, metrics } = homepageCopy.about;
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [metricsInView, setMetricsInView] = useState(false);
  const words = useMemo(() => body.trim().split(/\s+/), [body]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }

    const onScroll = () => {
      const el = textRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Highlight as the paragraph moves through the mid viewport
      const start = vh * 0.72;
      const end = vh * 0.28;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setMetricsInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setMetricsInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      data-surface="light"
      className="scroll-mt-24 bg-white section-y"
    >
      <div className="content-width section-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Label + watermark */}
          <FadeUp className="relative lg:col-span-4">
            <div className="pointer-events-none absolute -left-4 -top-6 select-none opacity-[0.06] md:-left-6 md:-top-8">
              <svg
                width="220"
                height="210"
                viewBox="0 0 120 110"
                fill="none"
                aria-hidden
              >
                <path
                  d="M70.1738 43.0654L24.5127 62.6758L18.5527 72H0L46.9102 0H65.3672L70.1738 43.0654ZM73.9775 72H56.2051L54.9443 57.2715L70.6875 45.7021L73.9775 72ZM117.9 0C105.607 63.7199 100.662 71.1359 79.333 72L77.0576 55.6523C87.2273 55.6523 90.3447 58.4531 97.2236 14.3916H83.4717L86.1201 0H117.9ZM37.3027 43.0947H54.1816L51.5752 19.623L37.3027 43.0947Z"
                  fill="#112947"
                />
              </svg>
            </div>
            <p
              className="relative pt-1 text-[13px] uppercase tracking-[0.14em] text-[#112947] md:text-[14px] lg:pt-2"
              style={{ fontWeight: 400 }}
            >
              {label}
            </p>
          </FadeUp>

          {/* Copy + metrics */}
          <FadeUp className="lg:col-span-8">
            <p
              ref={textRef}
              className="max-w-[38ch] text-[28px] leading-[1.25] tracking-[-0.02em] md:max-w-[42ch] md:text-[34px] lg:text-[38px]"
              style={{ fontWeight: 400 }}
            >
              {words.map((word, index) => {
                const threshold = (index + 0.35) / words.length;
                const active = progress >= threshold;
                return (
                  <span
                    key={`${word}-${index}`}
                    className={cn(
                      "inline transition-colors duration-300 ease-out",
                      active ? "text-[#171717]" : "text-[#171717]/22"
                    )}
                  >
                    {word}
                    {index < words.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </p>

            <div
              ref={metricsRef}
              className="mt-10 border-t border-dotted border-[#C5CCD6] pt-8 md:mt-12 md:pt-10"
            >
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="sr-only">
                      {metric.value} {metric.unit}, {metric.label}
                    </dt>
                    <dd>
                      <p
                        className="text-[40px] leading-none tracking-[-0.03em] md:text-[48px]"
                        style={{ fontWeight: 400 }}
                        aria-label={`${metric.value}${metric.unit ? ` ${metric.unit}` : ""}`}
                      >
                        <span className="text-[#171717]" aria-hidden>
                          <CountUpValue
                            value={metric.value}
                            active={metricsInView}
                          />
                        </span>
                        {metric.unit ? (
                          <span className="ml-2 text-[#626A73]" aria-hidden>
                            {metric.unit}
                          </span>
                        ) : null}
                      </p>
                      <p
                        className="mt-3 max-w-[22ch] text-[14px] leading-[1.45] text-[#626A73] md:text-[15px]"
                        style={{ fontWeight: 400 }}
                      >
                        {metric.label}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
