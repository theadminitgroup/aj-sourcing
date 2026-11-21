"use client";

import { clients, homepageCopy } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp } from "@/components/ui/motion";

/**
 * Clients — left header, luminosity logos (Figma blend via CSS on img).
 */
export function ClientsSection() {
  const { heading, subtext } = homepageCopy.clients;

  return (
    <LightSection
      id="clients"
      className="scroll-mt-24"
      innerClassName="py-16 md:py-20 lg:py-24"
    >
      <FadeUp>
        <div className="max-w-[560px] stack-copy text-left">
          <h2 className="heading-section text-balance">{heading}</h2>
          <p className="section-subtext">{subtext}</p>
        </div>
      </FadeUp>

      <FadeUp>
        <ul className="mt-10 grid list-none grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:mt-12 md:grid-cols-4 md:gap-x-8 md:gap-y-12 lg:gap-x-10">
          {clients.map((client) => (
            <li
              key={client.id}
              className="flex h-[88px] items-center justify-center md:h-[104px]"
            >
              {/* Native img — SVG; next/image blocks SVG by default */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                width={280}
                height={120}
                className="max-h-[64px] w-auto max-w-[180px] object-contain mix-blend-luminosity sm:max-h-[72px] sm:max-w-[200px] md:max-h-[80px] md:max-w-[220px]"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </FadeUp>
    </LightSection>
  );
}
