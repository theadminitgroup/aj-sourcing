"use client";

import Image from "next/image";
import { clients, homepageCopy } from "@/lib/data";
import { LightSection } from "@/components/ui/section-shell";
import { FadeUp } from "@/components/ui/motion";

function LogoTrack({ setKey }: { setKey: string }) {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5 md:gap-14 md:px-7">
      {clients.map((client) => (
        <div
          key={`${setKey}-${client.id}`}
          className="flex h-[72px] w-[160px] shrink-0 items-center justify-center md:h-[88px] md:w-[200px]"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={200}
            height={88}
            className="max-h-[56px] w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 md:max-h-[68px]"
          />
        </div>
      ))}
    </div>
  );
}

export function ClientsSection() {
  const { heading, subtext } = homepageCopy.clients;

  return (
    <LightSection
      id="clients"
      className="scroll-mt-24"
      innerClassName="pb-16 pt-4 md:pb-20 md:pt-6"
    >
      <FadeUp>
        <div className="mx-auto max-w-[640px] stack-copy items-center text-center">
          <h2 className="heading-section text-balance">{heading}</h2>
          <p className="section-subtext text-center">{subtext}</p>
        </div>
      </FadeUp>

      <div className="marquee-paused relative mt-10 overflow-hidden md:mt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24"
        />
        <div className="flex w-max marquee-clients">
          <LogoTrack setKey="a" />
          <LogoTrack setKey="b" />
        </div>
      </div>
    </LightSection>
  );
}
