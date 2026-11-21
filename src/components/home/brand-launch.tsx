"use client";

import { homepageCopy } from "@/lib/data";
import { QuoteButton } from "@/components/contact/quote-button";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeUp } from "@/components/ui/motion";

/** Compact promo strip — light with soft dark tint */
export function BrandLaunchBanner() {
  const { heading, subtext, primaryCta, primaryHref, secondaryCta } =
    homepageCopy.brandLaunch;

  return (
    <section
      id="brand-launch"
      className="scroll-mt-24 bg-page px-4 py-6 sm:px-5 md:px-8 md:py-8 lg:px-10 xl:px-0"
    >
      <div className="content-width">
        <FadeUp>
          <div className="flex flex-col gap-5 rounded-[var(--radius-panel)] bg-[#111111] px-6 py-7 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:py-8">
            <div className="max-w-[560px] stack-copy">
              <h2 className="text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-white md:text-[26px]">
                {heading}
              </h2>
              <p className="text-[15px] leading-[1.6] text-white/60 md:text-[16px]">
                {subtext}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <ButtonLink href={primaryHref} variant="ghost" size="default">
                {primaryCta}
              </ButtonLink>
              <QuoteButton variant="primary" size="default">
                {secondaryCta}
              </QuoteButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
