"use client";

import { homepageCopy } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { FadeUp } from "@/components/ui/motion";

/**
 * Navy editorial promo — brand launch interlude between services and process.
 */
export function BrandLaunchBanner() {
  const { heading, subtext, cta } = homepageCopy.brandLaunch;
  const { openContact } = useContact();

  return (
    <section
      id="brand-launch"
      data-surface="light"
      className="scroll-mt-24 bg-white pb-16 pt-2 md:pb-20 md:pt-4 lg:pb-24"
    >
      <div className="content-width section-x">
        <FadeUp>
          <div
            data-surface="dark"
            className="flex flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-10 md:py-[72px] lg:px-14"
            style={{ backgroundColor: "#112947", borderRadius: 2 }}
          >
            <div className="max-w-[720px] flex-[0.7] stack-copy">
              <h2 className="heading-section-dark text-balance">{heading}</h2>
              <p className="section-subtext-dark">{subtext}</p>
            </div>

            <div className="flex shrink-0 md:flex-[0.3] md:justify-end">
              <button
                type="button"
                onClick={() => openContact()}
                className="inline-flex h-12 items-center justify-center bg-white px-7 text-[13px] uppercase tracking-[0.1em] text-[#112947] transition-colors duration-200 hover:bg-[#F3D3A1] hover:text-[#112947] md:h-[52px] md:px-8"
                style={{ borderRadius: 2, fontWeight: 500 }}
              >
                {cta}
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
