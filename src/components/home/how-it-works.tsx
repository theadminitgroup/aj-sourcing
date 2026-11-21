"use client";

import { homepageCopy, howItWorks } from "@/lib/data";
import { DarkSection } from "@/components/ui/section-shell";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/motion";
import {
  ClipboardList,
  PackageCheck,
  Search,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const stepIcons: LucideIcon[] = [ClipboardList, Search, PackageCheck, Ship];

export function HowItWorksSection() {
  const { heading, subtext } = homepageCopy.howItWorks;

  return (
    <DarkSection
      id="how-it-works"
      className="scroll-mt-24"
      innerClassName="py-16 md:py-20 lg:py-24"
    >
      <FadeUp>
        <div className="mx-auto mb-10 max-w-[560px] stack-copy items-center text-center md:mb-14">
          <h2 className="heading-section-dark text-balance">{heading}</h2>
          <p className="section-subtext-dark text-center">{subtext}</p>
        </div>
      </FadeUp>

      <Stagger
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        delay={0.08}
        stagger={0.08}
      >
        {howItWorks.map((step, i) => {
          const Icon = stepIcons[i] ?? ClipboardList;

          return (
            <StaggerItem key={step.step}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="group flex h-full min-h-[260px] flex-col gap-5 rounded-[var(--radius-card)] bg-dark-surface p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-white/[0.06] px-3 py-1 text-[12px] font-medium text-white/55">
                    Step {step.step}
                  </span>
                  <Icon
                    size={20}
                    className="text-white/45 transition-colors duration-300 group-hover:text-orange"
                    strokeWidth={1.75}
                  />
                </div>

                <div className="stack-copy mt-auto">
                  <h3 className="heading-card text-white">{step.title}</h3>
                  <p className="body-muted-dark">{step.description}</p>
                </div>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </DarkSection>
  );
}
