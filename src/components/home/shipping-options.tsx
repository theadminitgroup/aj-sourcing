"use client";

import { homepageCopy, shippingOptions } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/motion";

export function ShippingOptionsSection() {
  const { heading, subtext, note } = homepageCopy.shipping;

  return (
    <LightSection
      id="shipping"
      className="scroll-mt-24"
      innerClassName="py-16 md:py-20 lg:py-24"
    >
      <FadeUp>
        <div className="mx-auto max-w-[640px] stack-copy items-center text-center">
          <h2 className="heading-section text-balance">{heading}</h2>
          <p className="section-subtext text-center">{subtext}</p>
        </div>
      </FadeUp>

      <Stagger
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5"
        delay={0.06}
        stagger={0.06}
      >
        {shippingOptions.map((option) => (
          <StaggerItem key={option.id}>
            <article className="flex h-full flex-col gap-3 rounded-[var(--radius-card)] bg-light-card p-6 shadow-card md:p-7">
              <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-[12px] font-semibold tracking-[0.04em] text-orange ring-1 ring-black/[0.04]">
                {option.code}
              </span>
              <h3 className="heading-card text-light-primary">{option.title}</h3>
              <p className="body-muted">{option.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp delay={0.2}>
        <p className="mx-auto mt-8 max-w-[56ch] text-center text-[14px] leading-[1.6] text-light-secondary md:mt-10 md:text-[15px]">
          {note}
        </p>
      </FadeUp>
    </LightSection>
  );
}
