"use client";

import Image from "next/image";
import { Package, Palette, MonitorSmartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homepageCopy } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";

const pillarIcons: Record<string, LucideIcon> = {
  "product-sourcing": Package,
  "branding-design": Palette,
  "digital-presence": MonitorSmartphone,
};

/**
 * Light section — three pillars for new launches + supporting visual.
 */
export function BrandLaunchBanner() {
  const { heading, subtext, pillars } = homepageCopy.brandLaunch;

  return (
    <section
      id="brand-launch"
      data-surface="light"
      className="scroll-mt-24 bg-[#F5F6F8] section-y"
    >
      <div className="content-width section-x">
        <FadeUp>
          <div className="max-w-[640px] stack-copy text-left">
            <h2 className="heading-section text-balance">{heading}</h2>
            <p className="section-subtext text-left">{subtext}</p>
          </div>
        </FadeUp>

        <FadeUp className="mt-12 md:mt-14 lg:mt-16">
          <ul className="grid list-none grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:gap-10 lg:gap-14">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id] ?? Package;
              return (
                <li key={pillar.id} className="flex flex-col items-start">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#171717]"
                    aria-hidden
                  />
                  <h3
                    className="mt-5 text-[18px] leading-[1.3] tracking-[-0.015em] text-[#171717] md:mt-6 md:text-[20px]"
                    style={{ fontWeight: 400 }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="mt-3 max-w-[36ch] text-[15px] leading-[1.6] text-[#626A73] md:text-[16px]"
                    style={{ fontWeight: 400 }}
                  >
                    {pillar.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </FadeUp>

        <FadeUp className="mt-12 md:mt-14 lg:mt-16">
          <div className="relative aspect-[2/1] w-full overflow-hidden">
            <Image
              src="/images/brand-launch/from-china-to-new-brand.png"
              alt="From China to a new brand launch — packaging sketches, samples, and design work in progress"
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              quality={95}
              priority={false}
              className="object-cover object-center"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
