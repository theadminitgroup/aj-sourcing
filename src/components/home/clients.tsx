"use client";

import { clients, homepageCopy } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/** Pad to a full 4×2 grid; last slot reserved until the 8th logo arrives. */
const GRID_SLOTS = 8;

/**
 * Trusted Across Industries — 4×2 end-to-end logo grid with hairline dividers.
 * Logos: muted grayscale by default; original color on cell hover.
 */
export function ClientsSection() {
  const { heading, subtext } = homepageCopy.clients;
  const slots = Array.from({ length: GRID_SLOTS }, (_, i) => clients[i] ?? null);

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
            {slots.map((client, i) => (
              <li
                key={client?.id ?? `slot-${i}`}
                className={cn(
                  "group relative flex min-h-[220px] items-center justify-center border-[#E4E7EB] px-2 py-8 sm:min-h-[240px] md:min-h-[260px] md:py-10 lg:min-h-[280px] lg:py-12",
                  "border-r border-b",
                  "[&:nth-child(2n)]:border-r-0",
                  "sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0",
                  /* Last row: no bottom line (mobile 2-col = items 7–8; desktop 4-col = items 5–8) */
                  "[&:nth-child(n+7)]:border-b-0",
                  "sm:[&:nth-child(n+5)]:border-b-0"
                )}
              >
                {client ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={480}
                    height={220}
                    className="max-h-[115px] w-auto max-w-[95%] object-contain opacity-70 grayscale transition-[opacity,filter] duration-200 sm:max-h-[134px] md:max-h-[154px] lg:max-h-[178px] group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span
                    className="text-[12px] uppercase tracking-[0.12em] text-[#626A73]/45"
                    style={{ fontWeight: 400 }}
                    aria-hidden
                  >
                    Partner
                  </span>
                )}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
