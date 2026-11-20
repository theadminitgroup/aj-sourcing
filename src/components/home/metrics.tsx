"use client";

import { homepageCopy, metrics } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeUp, HeadingReveal } from "@/components/ui/motion";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { Globe2, Package } from "lucide-react";
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

function MetricCard({
  value,
  suffix,
  label,
  className,
}: {
  value: number;
  suffix: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const displayRef = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22 }}
      className={cn(
        "flex h-full min-h-[160px] flex-col justify-between rounded-[20px] bg-[#f3f3f1] p-6 md:min-h-[200px] md:p-7",
        className
      )}
    >
      <p className="text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-light-primary">
        <span ref={displayRef}>0</span>
        <span>{suffix}</span>
      </p>
      <p className="max-w-[18ch] text-[14px] font-medium leading-[1.4] text-light-secondary">
        {label}
      </p>
    </motion.div>
  );
}

function AccentMetricCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const displayRef = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22 }}
      className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#fff1e8] p-6 md:min-h-0 md:p-7"
    >
      <div>
        <p className="text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.04em] text-light-primary">
          <span ref={displayRef}>0</span>
          <span>{suffix}</span>
        </p>
        <p className="mt-3 max-w-[16ch] text-[14px] font-medium leading-[1.4] text-light-secondary">
          {label}
        </p>
      </div>

      <div aria-hidden className="relative mt-8 flex h-28 items-end justify-end">
        <span className="float-soft absolute bottom-2 right-16 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10">
          <Globe2 className="text-orange" size={22} />
        </span>
        <span
          className="float-soft absolute bottom-6 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange/15"
          style={{ animationDelay: "0.6s" }}
        >
          <Package className="text-orange" size={24} />
        </span>
      </div>
    </motion.div>
  );
}

export function MetricsSection() {
  const { label, heading } = homepageCopy.metrics;
  const [years, orders, quote, ontime, partners] = metrics;

  return (
    <section id="metrics" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="content-width section-x">
        <div className="stack-label mb-10 max-w-[560px] md:mb-12">
          <FadeUp>
            <p className="label">{label}</p>
          </FadeUp>
          <HeadingReveal className="heading-section text-balance">{heading}</HeadingReveal>
        </div>

        {/* Mobile stack */}
        <div className="grid gap-3 md:hidden">
          {metrics.map((m) =>
            m.accent ? (
              <AccentMetricCard key={m.id} {...m} />
            ) : (
              <MetricCard key={m.id} {...m} />
            )
          )}
        </div>

        {/* Desktop bento */}
        <div className="hidden h-[clamp(380px,42vw,480px)] grid-cols-3 gap-3 md:grid">
          <div className="flex min-h-0 flex-col gap-3">
            {years && (
              <div className="min-h-0 flex-[1.1]">
                <MetricCard {...years} className="h-full" />
              </div>
            )}
            {orders && (
              <div className="min-h-0 flex-[0.9]">
                <MetricCard {...orders} className="h-full" />
              </div>
            )}
          </div>

          <div className="flex min-h-0 flex-col gap-3">
            {quote && (
              <div className="min-h-0 flex-1">
                <MetricCard {...quote} className="h-full" />
              </div>
            )}
            {ontime && (
              <div className="h-[140px] shrink-0 lg:h-[160px]">
                <MetricCard {...ontime} className="h-full !min-h-0" />
              </div>
            )}
          </div>

          {partners && (
            <div className="min-h-0">
              <AccentMetricCard {...partners} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
