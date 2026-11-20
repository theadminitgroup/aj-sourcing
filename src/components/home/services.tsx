"use client";

import { homepageCopy, services } from "@/lib/data";
import { DarkBlock } from "@/components/ui/section-shell";
import { HeadingReveal, Stagger, StaggerItem } from "@/components/ui/motion";
import {
  ClipboardCheck,
  Globe2,
  MessageSquare,
  Scale,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  "shield-check": ShieldCheck,
  globe: Globe2,
  clipboard: ClipboardCheck,
  message: MessageSquare,
  truck: Truck,
  scale: Scale,
};

export function ServicesSection() {
  const { label, heading } = homepageCopy.services;

  return (
    <DarkBlock id="services" className="scroll-mt-24">
      <div className="stack-label mb-12 max-w-[640px] md:mb-16">
        <p className="label-dark">{label}</p>
        <HeadingReveal className="heading-section-dark text-balance">{heading}</HeadingReveal>
      </div>

      <Stagger
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        delay={0.06}
        stagger={0.07}
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <StaggerItem key={service.id}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group card-p relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-xl bg-dark-surface"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex flex-col gap-3">
                  <span className="icon-tile flex h-11 w-11 items-center justify-center bg-white/[0.06] ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange/15 group-hover:ring-orange/25">
                    <Icon
                      size={18}
                      className="text-white/55 transition-colors duration-300 group-hover:text-orange"
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="heading-card text-white">{service.title}</h3>
                </div>
                <p className="relative mt-8 body-muted-dark">{service.description}</p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </DarkBlock>
  );
}
