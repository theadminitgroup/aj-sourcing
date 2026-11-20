"use client";

import { homepageCopy } from "@/lib/data";
import { QuoteButton } from "@/components/contact/quote-button";
import { DarkBlock } from "@/components/ui/section-shell";
import { FadeUp, HeadingReveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ArrowRight, Globe2, Megaphone, Package } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Package,
    title: "Product",
    detail: "Plan, source, and produce what you’ll sell.",
  },
  {
    icon: Globe2,
    title: "Presence",
    detail: "Website, socials, and content that look ready.",
  },
  {
    icon: Megaphone,
    title: "Growth",
    detail: "Marketing and ads that bring customers in.",
  },
];

export function BrandLaunchBanner() {
  const { label, heading, subtext, cta } = homepageCopy.brandLaunch;

  return (
    <DarkBlock id="brand-launch" className="scroll-mt-24">
      <div className="mx-auto max-w-[720px] stack-label items-center text-center">
        <p className="label-dark">{label}</p>
        <div className="stack-copy items-center">
          <HeadingReveal className="heading-section-dark text-balance">
            {heading}
          </HeadingReveal>
          <FadeUp delay={0.12}>
            <p className="max-w-[48ch] text-[15px] leading-[1.55] text-white/55 md:text-[16px]">
              {subtext}
            </p>
          </FadeUp>
        </div>
      </div>

      <Stagger
        className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5"
        delay={0.1}
        stagger={0.08}
      >
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col items-center gap-4 rounded-xl bg-dark-surface px-6 py-8 text-center md:px-7 md:py-10"
            >
              <span className="icon-tile flex h-12 w-12 items-center justify-center bg-white/[0.05] ring-1 ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange/15 group-hover:ring-orange/25">
                <pillar.icon
                  size={20}
                  className="text-white/70 transition-colors duration-300 group-hover:text-orange"
                  strokeWidth={1.75}
                />
              </span>
              <div className="stack-copy items-center">
                <h3 className="text-[18px] font-medium text-white">{pillar.title}</h3>
                <p className="max-w-[22ch] text-[14px] leading-[1.5] text-white/45">
                  {pillar.detail}
                </p>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp delay={0.2} className="mt-10 flex justify-center md:mt-12">
        <QuoteButton variant="tertiary" className="group gap-2">
          {cta}
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </QuoteButton>
      </FadeUp>
    </DarkBlock>
  );
}
