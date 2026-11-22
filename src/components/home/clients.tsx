"use client";

import { clients, homepageCopy } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * Trusted Across Industries — logo grid with hairline dividers.
 * Logos: muted grayscale by default; original color on cell hover.
 * Empty placeholder slots omitted until an 8th logo arrives.
 */
export function ClientsSection() {
  const { heading, subtext } = homepageCopy.clients;
  const count = clients.length;

  return (
    <section
      id="clients"
      data-surface="light"
      className="scroll-mt-24 bg-white section-y"
    >
      <div className="content-width section-x">
        <FadeUp>
          <div className="mx-auto max-w-[640px] stack-copy items-center text-center">
            <h2 className="heading-section text-balance">{heading}</h2>
            <p className="section-subtext text-center">{subtext}</p>
          </div>
        </FadeUp>

        <FadeUp className="mt-10 md:mt-12 lg:mt-14">
          <ul className="grid w-full list-none grid-cols-2 sm:grid-cols-4">
            {clients.map((client, i) => {
              const isLastRowMobile = i >= count - (count % 2 === 0 ? 2 : 1);
              const isLastRowDesktop = i >= count - ((count % 4) || 4);
              return (
                <li
                  key={client.id}
                  className={cn(
                    "group relative flex min-h-[160px] items-center justify-center border-[#E4E7EB] px-2 py-7 sm:min-h-[200px] sm:py-8 md:min-h-[240px] md:py-10 lg:min-h-[260px] lg:py-12",
                    "border-r border-b",
                    "[&:nth-child(2n)]:border-r-0",
                    "sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0",
                    isLastRowMobile && "border-b-0",
                    "sm:border-b",
                    isLastRowDesktop && "sm:border-b-0"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={480}
                    height={220}
                    className="max-h-[88px] w-auto max-w-[92%] object-contain opacity-70 grayscale transition-[opacity,filter] duration-200 sm:max-h-[120px] md:max-h-[148px] lg:max-h-[168px] group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              );
            })}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
