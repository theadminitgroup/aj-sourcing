"use client";

import { homepageCopy, shippingOptions } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp } from "@/components/ui/motion";

export function ShippingOptionsSection() {
  const { heading, subtext, note, disclaimer } = homepageCopy.shipping;

  return (
    <LightSection
      id="shipping"
      className="scroll-mt-24"
      innerClassName="py-14 md:py-16 lg:py-20"
    >
      <FadeUp>
        <div className="max-w-[640px] stack-copy">
          <h2 className="heading-section text-balance">{heading}</h2>
          <p className="section-subtext">{subtext}</p>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mt-10 grid gap-0 md:mt-12 md:grid-cols-4">
          {shippingOptions.map((option, index) => (
            <article
              key={option.id}
              className={[
                "py-6 md:px-5 md:py-0 lg:px-6",
                index > 0 ? "border-t border-[#E3E7ED] md:border-t-0 md:border-l" : "",
                "first:md:pl-0 last:md:pr-0",
              ].join(" ")}
            >
              <p
                className="text-[28px] leading-none tracking-[-0.03em] text-[#112947] md:text-[32px] lg:text-[36px]"
                style={{ fontWeight: 500 }}
              >
                {option.code}
              </p>
              <h3
                className="mt-3 text-[15px] leading-[1.35] tracking-[-0.01em] text-[#171717] md:text-[16px]"
                style={{ fontWeight: 500 }}
              >
                {option.title}
              </h3>
              <p
                className="mt-3 text-[14px] leading-[1.6] text-[#606873] md:text-[15px]"
                style={{ fontWeight: 400 }}
              >
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mt-8 max-w-[64ch] space-y-2 border-t border-[#E3E7ED] pt-6 md:mt-10 md:pt-7">
          <p
            className="text-[14px] leading-[1.6] text-[#606873] md:text-[15px]"
            style={{ fontWeight: 400 }}
          >
            {note}
          </p>
          <p
            className="text-[13px] leading-[1.55] text-[#606873]/80 md:text-[14px]"
            style={{ fontWeight: 400 }}
          >
            {disclaimer}
          </p>
        </div>
      </FadeUp>
    </LightSection>
  );
}
