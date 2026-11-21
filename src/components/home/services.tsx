"use client";

import { homepageCopy, services } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/motion";
import {
  ClipboardCheck,
  Factory,
  Globe2,
  MessageSquare,
  Ship,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  factory: Factory,
  message: MessageSquare,
  clipboard: ClipboardCheck,
  ship: Ship,
  truck: Truck,
  globe: Globe2,
};

export function ServicesSection() {
  const { heading, subtext } = homepageCopy.services;

  return (
    <LightSection
      id="services"
      className="scroll-mt-24"
      innerClassName="py-16 md:py-20 lg:py-24"
    >
      <FadeUp>
        <div className="mx-auto mb-10 max-w-[640px] stack-copy items-center text-center md:mb-14">
          <h2 className="heading-section text-balance">{heading}</h2>
          <p className="section-subtext text-center">{subtext}</p>
        </div>
      </FadeUp>

      <Stagger
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        delay={0.04}
        stagger={0.06}
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <StaggerItem key={service.id}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="group flex h-full min-h-[200px] flex-col gap-5 rounded-[var(--radius-card)] bg-light-card p-6 shadow-card transition-colors duration-300 hover:bg-[#efefef] md:min-h-[220px] md:p-7"
              >
                <span className="icon-tile flex h-11 w-11 items-center justify-center bg-white text-light-primary shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition-colors duration-300 group-hover:text-orange">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div className="stack-copy mt-auto">
                  <h3 className="heading-card text-light-primary">
                    {service.title}
                  </h3>
                  <p className="body-muted">{service.description}</p>
                </div>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </LightSection>
  );
}
