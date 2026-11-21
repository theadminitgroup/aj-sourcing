"use client";

import { homepageCopy, metrics } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/ui/motion";

/**
 * Compact navy metrics band — static figures (no count-up that can stick at 0).
 */
export function MetricsBanner() {
  const { heading, subtext } = homepageCopy.metrics;

  return (
    <section
      id="metrics"
      data-surface="dark"
      className="text-white"
      style={{ backgroundColor: "#112947" }}
    >
      <div className="content-width section-x py-10 md:py-12 lg:py-14">
        <FadeUp>
          <div className="mb-8 max-w-[480px] stack-copy md:mb-10">
            <h2 className="heading-section-dark text-balance">{heading}</h2>
            <p className="section-subtext-dark">{subtext}</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {metrics.map((m) => (
            <div key={m.id} className="flex flex-col">
              <p
                className={cn(
                  "text-[32px] leading-none tracking-[-0.03em] md:text-[40px] lg:text-[44px]",
                  m.accent ? "text-[#F3D3A1]" : "text-white"
                )}
                style={{ fontWeight: 500 }}
              >
                {m.value}
                <span className="text-[18px] md:text-[22px]">{m.suffix}</span>
              </p>
              <p
                className="mt-2.5 max-w-[16ch] text-[13px] leading-[1.4] text-[#CFD9E6]/75 md:text-[14px]"
                style={{ fontWeight: 400 }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
