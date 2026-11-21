"use client";

import { homepageCopy, howItWorks } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";

/**
 * Connected process timeline — navy full-bleed, horizontal desktop / vertical mobile.
 */
export function HowItWorksSection() {
  const { heading, subtext } = homepageCopy.howItWorks;

  return (
    <section
      id="how-it-works"
      data-surface="dark"
      className="scroll-mt-24 py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#112947" }}
    >
      <div className="content-width section-x">
        <FadeUp>
          <div className="max-w-[560px] stack-copy">
            <h2 className="heading-section-dark text-balance">{heading}</h2>
            <p className="section-subtext-dark">{subtext}</p>
          </div>
        </FadeUp>

        {/* Desktop horizontal timeline */}
        <FadeUp className="relative mt-14 hidden md:mt-16 md:block lg:mt-20">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[18px] h-px bg-white/20"
          />
          <ol className="relative grid list-none grid-cols-4 gap-8 lg:gap-10">
            {howItWorks.map((step) => (
              <li key={step.step} className="relative pt-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center bg-[#112947]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white ring-[6px] ring-[#112947]" />
                </span>
                <p
                  className="text-[13px] tracking-[0.08em] text-white/55"
                  style={{ fontWeight: 500 }}
                >
                  {step.step}
                </p>
                <h3
                  className="mt-3 text-[18px] leading-[1.3] tracking-[-0.01em] text-white lg:text-[20px]"
                  style={{ fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2.5 max-w-[28ch] text-[15px] leading-[1.55] lg:text-[16px]"
                  style={{ color: "#CFD9E6", fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </FadeUp>

        {/* Mobile vertical timeline */}
        <FadeUp className="relative mt-12 md:hidden">
          <div
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-white/20"
          />
          <ol className="relative list-none space-y-10">
            {howItWorks.map((step) => (
              <li key={step.step} className="relative flex gap-5 pl-1">
                <span className="relative z-[1] mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-white ring-[5px] ring-[#112947]" />
                </span>
                <div className="min-w-0 flex-1 pb-1">
                  <p
                    className="text-[12px] tracking-[0.08em] text-white/55"
                    style={{ fontWeight: 500 }}
                  >
                    {step.step}
                  </p>
                  <h3
                    className="mt-2 text-[17px] leading-[1.3] tracking-[-0.01em] text-white"
                    style={{ fontWeight: 500 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.55]"
                    style={{ color: "#CFD9E6", fontWeight: 400 }}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </FadeUp>
      </div>
    </section>
  );
}
