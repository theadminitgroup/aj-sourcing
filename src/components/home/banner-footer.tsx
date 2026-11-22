"use client";

import Image from "next/image";
import { homepageCopy, siteConfig } from "@/lib/data";
import { QuoteButton } from "@/components/contact/quote-button";
import { FadeUp } from "@/components/ui/motion";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  ctaBase,
  ctaRadius,
  ctaSizeStyles,
  ctaVariantStyles,
} from "@/design/cta";
import { cn } from "@/lib/utils";

/**
 * Closing CTA (full-bleed image) + shared white site footer.
 */
export function BannerFooter() {
  const { heading, subtext, primaryCta, secondaryCta } = homepageCopy.banner;

  return (
    <div id="contact" className="scroll-mt-24">
      <section data-surface="dark" className="relative isolate overflow-hidden">
        <Image
          src="/images/shipping/port-delivery.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        <div aria-hidden className="absolute inset-0 bg-[#0D0F12]/78" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/88 via-[#0D0F12]/40 to-[#0D0F12]/45"
        />

        <div className="content-width section-x relative z-[1] py-28 text-center md:py-36 lg:py-44">
          <FadeUp>
            <div className="mx-auto max-w-[720px]">
              <h2
                className="text-balance text-[36px] leading-[1.1] tracking-[-0.03em] text-white md:text-[48px] lg:text-[56px]"
                style={{ fontWeight: 500 }}
              >
                {heading}
              </h2>
              <p
                className="mx-auto mt-5 max-w-[42ch] text-[16px] leading-[1.65] text-white/85 md:mt-6 md:text-[18px]"
                style={{ fontWeight: 400 }}
              >
                {subtext}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
                <QuoteButton variant="onDark" size="lg">
                  {primaryCta}
                </QuoteButton>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={cn(
                    ctaBase,
                    ctaVariantStyles.outlineOnDark,
                    ctaSizeStyles.lg
                  )}
                  style={{ borderRadius: ctaRadius }}
                >
                  {secondaryCta}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
