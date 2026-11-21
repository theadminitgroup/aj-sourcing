"use client";

import { homepageCopy, whyUsFeatures } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function WhyUsSection() {
  const { heading, subtext, brandStatement } = homepageCopy.whyUs;

  return (
    <section
      id="why-us"
      data-surface="light"
      className="scroll-mt-24 bg-[#F5F6F8]"
    >
      <div className="content-width section-x py-14 md:py-16 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <FadeUp className="lg:col-span-5">
            <div className="max-w-[420px] stack-copy">
              <h2 className="heading-section text-balance">{heading}</h2>
              <p className="section-subtext">{subtext}</p>
            </div>
            <p
              className="mt-10 text-[32px] leading-[1.15] tracking-[-0.03em] text-[#112947] md:mt-12 md:text-[40px] lg:text-[44px]"
              style={{ fontWeight: 500 }}
            >
              {brandStatement}
            </p>
          </FadeUp>

          <FadeUp className="lg:col-span-7">
            <ul className="list-none">
              {whyUsFeatures.map((feature, index) => (
                <li
                  key={feature.number}
                  className={cn(
                    "group border-[#E3E7ED] py-5 transition-colors duration-200 md:py-6",
                    index === 0 ? "border-t" : "",
                    "border-b hover:bg-white/60"
                  )}
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <span
                      className="shrink-0 pt-0.5 text-[13px] tracking-[0.06em] text-[#112947] md:text-[14px]"
                      style={{ fontWeight: 500 }}
                    >
                      {feature.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-[17px] leading-[1.3] tracking-[-0.01em] text-[#171717] transition-colors duration-200 group-hover:text-[#112947] md:text-[18px]"
                        style={{ fontWeight: 500 }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="mt-2 max-w-[48ch] text-[15px] leading-[1.55] text-[#606873] md:text-[16px]"
                        style={{ fontWeight: 400 }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
