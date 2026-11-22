"use client";

import { useEffect, useState } from "react";
import { homepageCopy, whyUsFeatures, siteConfig } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const HIGHLIGHT_MS = 3200;

/**
 * Why AJ Sourcing — centered header; left feature cards + right video.
 * Cards highlight in turn on a delay (placeholder until video cues exist).
 */
export function WhyUsSection() {
  const { heading, subtext } = homepageCopy.whyUs;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % whyUsFeatures.length);
    }, HIGHLIGHT_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      id="why-us"
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

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <FadeUp className="min-w-0">
            <ol
              className="flex h-full list-none flex-col gap-4 md:gap-5"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setPaused(false);
                }
              }}
            >
              {whyUsFeatures.map((feature, i) => {
                const isActive = active === i;

                return (
                  <li key={feature.number}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "w-full border p-5 text-left transition-[background-color,border-color,box-shadow] duration-300 md:p-6",
                        isActive
                          ? "border-[#112947]/25 bg-white shadow-[0_8px_28px_rgba(13,15,18,0.06)]"
                          : "border-transparent bg-[#F5F6F8] hover:bg-[#EEF0F3]"
                      )}
                      style={{ borderRadius: 4 }}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="flex items-start gap-3.5 md:gap-4">
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 text-[13px] tracking-[0.06em] transition-colors duration-300 md:text-[14px]",
                            isActive ? "text-[#112947]" : "text-[#112947]/55"
                          )}
                          style={{ fontWeight: 500 }}
                        >
                          {feature.number}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={cn(
                              "text-[17px] leading-[1.3] tracking-[-0.01em] transition-colors duration-300 md:text-[18px]",
                              isActive ? "text-[#171717]" : "text-[#171717]/80"
                            )}
                            style={{ fontWeight: 400 }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={cn(
                              "mt-2 max-w-[46ch] text-[15px] leading-[1.55] transition-colors duration-300",
                              isActive ? "text-[#626A73]" : "text-[#626A73]/75"
                            )}
                            style={{ fontWeight: 400 }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </FadeUp>

          <FadeUp className="min-w-0">
            <div
              className="relative h-full min-h-[360px] overflow-hidden bg-[#0D0F12] md:min-h-[420px] lg:min-h-full"
              style={{ borderRadius: 4 }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={siteConfig.heroVideo.src}
                poster={siteConfig.heroVideo.poster}
                autoPlay
                muted
                loop
                playsInline
                aria-label="AJ Sourcing operations placeholder video"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
