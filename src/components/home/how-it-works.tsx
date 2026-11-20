"use client";

import { homepageCopy, howItWorks } from "@/lib/data";
import { DarkBlock } from "@/components/ui/section-shell";
import { HeadingReveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ArrowRight, ClipboardList, PackageCheck, Search } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const stepIcons: LucideIcon[] = [ClipboardList, Search, PackageCheck];

export function HowItWorksSection() {
  const { label, heading } = homepageCopy.howItWorks;

  return (
    <DarkBlock id="how-it-works">
      <div className="stack-label mb-[60px] items-center text-center">
        <p className="label-dark">{label}</p>
        <HeadingReveal className="heading-section-dark mx-auto max-w-[18ch] text-balance">
          {heading}
        </HeadingReveal>
      </div>

      <Stagger
        className="flex flex-col items-stretch gap-4 md:flex-row md:items-stretch md:gap-3"
        delay={0.12}
        stagger={0.1}
      >
        {howItWorks.map((step, i) => {
          const Icon = stepIcons[i] ?? ClipboardList;

          return (
            <div key={step.step} className="contents">
              <StaggerItem className="flex-1">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group card-p flex h-full min-h-[320px] flex-col gap-6 rounded-xl bg-dark-surface"
                >
                  <span className="inline-flex w-fit rounded-full bg-white/[0.06] px-3 py-1 text-[12px] font-medium text-white/55 transition-colors group-hover:bg-white/[0.1] group-hover:text-white/70">
                    Step {step.step}
                  </span>

                  <div className="flex min-h-[120px] items-center justify-center rounded-2xl bg-[#1a1a1a]">
                    <Icon
                      size={32}
                      className="text-white/70 transition-colors duration-300 group-hover:text-orange"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="stack-copy mt-auto">
                    <h3 className="heading-card text-white">{step.title}</h3>
                    <p className="body-muted-dark">{step.description}</p>
                  </div>
                </motion.article>
              </StaggerItem>

              {i < howItWorks.length - 1 && (
                <div aria-hidden className="hidden shrink-0 items-center self-center md:flex">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06]">
                    <ArrowRight size={14} className="text-white/45" />
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </Stagger>
    </DarkBlock>
  );
}
