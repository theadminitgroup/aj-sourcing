"use client";

import { homepageCopy, whyUsFeatures } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/motion";
import {
  ClipboardCheck,
  MapPin,
  MessageSquare,
  Route,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const icons: Record<(typeof whyUsFeatures)[number]["icon"], LucideIcon> = {
  route: Route,
  "map-pin": MapPin,
  message: MessageSquare,
  clipboard: ClipboardCheck,
};

export function WhyUsSection() {
  const { heading, subtext } = homepageCopy.whyUs;

  return (
    <LightSection
      id="why-us"
      className="scroll-mt-24"
      innerClassName="py-16 md:py-20 lg:py-24"
    >
      <FadeUp>
        <div className="mx-auto max-w-[560px] stack-copy items-center text-center">
          <h2 className="heading-section text-balance">{heading}</h2>
          <p className="section-subtext text-center">{subtext}</p>
        </div>
      </FadeUp>

      <Stagger
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5"
        delay={0.06}
        stagger={0.06}
      >
        {whyUsFeatures.map((feature) => {
          const Icon = icons[feature.icon];

          return (
            <StaggerItem key={feature.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="group flex h-full min-h-[220px] flex-col gap-5 rounded-[var(--radius-card)] bg-light-card p-6 shadow-card transition-colors duration-300 hover:bg-[#efefef] md:p-7"
              >
                <span className="icon-tile flex h-11 w-11 items-center justify-center bg-white text-light-primary shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition-colors duration-300 group-hover:text-orange">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div className="stack-copy mt-auto">
                  <h3 className="heading-card text-light-primary">
                    {feature.title}
                  </h3>
                  <p className="body-muted">{feature.description}</p>
                </div>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </LightSection>
  );
}
