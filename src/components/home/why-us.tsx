"use client";

import { useContact } from "@/components/contact/contact-context";
import { homepageCopy, whyUsFeatures } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { HeadingReveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ArrowUpRight, MapPin, Network, Zap, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const icons: Record<(typeof whyUsFeatures)[number]["icon"], LucideIcon> = {
  network: Network,
  "map-pin": MapPin,
  zap: Zap,
};

const staggerOffsets = ["md:translate-y-0", "md:translate-y-8", "md:translate-y-16"];

export function WhyUsSection() {
  const { label, heading } = homepageCopy.whyUs;
  const { openContact } = useContact();

  return (
    <LightSection
      id="why-us"
      className="scroll-mt-24"
      innerClassName="py-20 md:py-28 lg:pb-[160px] lg:pt-[120px]"
    >
      <div className="mx-auto max-w-[720px] stack-label items-center text-center">
        <p className="label">{label}</p>
        <HeadingReveal className="heading-section text-balance">{heading}</HeadingReveal>
      </div>

      <Stagger
        className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-5 md:pb-16 lg:mt-20 lg:gap-6"
        delay={0.1}
        stagger={0.1}
      >
        {whyUsFeatures.map((feature, i) => {
          const Icon = icons[feature.icon];

          return (
            <StaggerItem key={feature.title} className={cn(staggerOffsets[i])}>
              <motion.article
                whileHover="hover"
                whileTap={{ scale: 0.99 }}
                initial="rest"
                animate="rest"
                variants={{
                  rest: { y: 0 },
                  hover: { y: -4 },
                }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full min-h-[280px] cursor-default flex-col justify-between rounded-[24px] bg-[#f5f5f7] p-7 transition-colors duration-300 hover:bg-[#efefef] md:min-h-[320px] md:p-8"
              >
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between">
                    <motion.span
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.06, rotate: -4 },
                      }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="icon-tile flex h-11 w-11 items-center justify-center bg-white text-light-primary shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition-colors duration-300 group-hover:text-orange"
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </motion.span>

                    <motion.button
                      type="button"
                      aria-label="Get a free quote"
                      onClick={openContact}
                      variants={{
                        rest: { opacity: 0.55, x: 0, y: 0 },
                        hover: { opacity: 1, scale: 1.06 },
                      }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-light-primary/70 ring-1 ring-black/[0.06] transition-colors hover:bg-orange hover:text-white hover:ring-orange"
                    >
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </motion.button>
                  </div>

                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-light-primary md:text-[24px]">
                    {feature.title}
                  </h3>
                </div>

                <p className="relative mt-10 max-w-[28ch] text-[14px] leading-[1.5] text-light-secondary transition-colors duration-300 group-hover:text-light-primary/70 md:text-[15px]">
                  {feature.description}
                </p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </LightSection>
  );
}
