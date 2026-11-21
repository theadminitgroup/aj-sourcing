"use client";

import { homepageCopy, metrics } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/ui/motion";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function useCountUp(value: number, enabled: boolean) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 55, damping: 22 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (enabled) motionValue.set(value);
  }, [enabled, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = String(Math.round(v));
      }
    });
  }, [spring]);

  return displayRef;
}

function MetricItem({
  value,
  suffix,
  label,
  accent,
}: {
  value: number;
  suffix: string;
  label: string;
  accent?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const displayRef = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p
        className={cn(
          "text-[28px] font-semibold tracking-[-0.03em] md:text-[34px]",
          accent ? "text-orange" : "text-white"
        )}
      >
        <span ref={displayRef}>0</span>
        <span className="text-[18px] md:text-[20px]">{suffix}</span>
      </p>
      <p className="mt-2 max-w-[14ch] text-[13px] leading-[1.4] text-white/55 md:text-[14px]">
        {label}
      </p>
    </div>
  );
}

/** Compact dark metrics banner */
export function MetricsBanner() {
  const { heading, subtext } = homepageCopy.metrics;

  return (
    <section id="metrics" className="bg-dark-base text-white">
      <div className="content-width section-x py-12 md:py-14">
        <FadeUp>
          <div className="mx-auto mb-8 max-w-[480px] stack-copy items-center text-center md:mb-10">
            <h2 className="heading-section-dark text-balance">{heading}</h2>
            <p className="section-subtext-dark text-center">{subtext}</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {metrics.map((m) => (
            <MetricItem key={m.id} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
