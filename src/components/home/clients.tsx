import { clients, homepageCopy } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * Trusted Across Industries — single horizontal marquee.
 * Tile sizes match the previous grid (square ~280px; JD double-width).
 */
const WIDE_IDS = new Set(["jd"]);

function LogoTrack({ setKey }: { setKey: string }) {
  return (
    <ul className="flex shrink-0 list-none items-stretch gap-4 md:gap-5 lg:gap-6">
      {clients.map((client) => {
        const wide = WIDE_IDS.has(client.id);
        return (
          <li
            key={`${setKey}-${client.id}`}
            className={cn(
              "shrink-0 overflow-hidden bg-white opacity-60",
              wide
                ? "h-[240px] w-[min(90vw,520px)] sm:h-[260px] sm:w-[540px] md:h-[280px] md:w-[580px] lg:h-[300px] lg:w-[620px]"
                : "h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] md:h-[280px] md:w-[280px] lg:h-[300px] lg:w-[300px]"
            )}
            style={{ borderRadius: 4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={client.name}
              width={wide ? 1100 : 520}
              height={520}
              className="h-full w-full object-contain mix-blend-luminosity"
              loading="lazy"
              decoding="async"
            />
          </li>
        );
      })}
    </ul>
  );
}

export function ClientsSection() {
  const { heading, subtext } = homepageCopy.clients;

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
      </div>

      <FadeUp className="mt-12 md:mt-14">
        <div className="marquee-paused overflow-hidden">
          <div className="marquee-clients flex w-max items-stretch gap-4 md:gap-5 lg:gap-6">
            <LogoTrack setKey="a" />
            <LogoTrack setKey="b" />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
