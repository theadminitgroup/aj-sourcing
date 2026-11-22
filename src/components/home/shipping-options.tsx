import {
  Warehouse,
  Ship,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { homepageCopy, shippingOptions } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";

const termIcons: Record<(typeof shippingOptions)[number]["id"], LucideIcon> = {
  exw: Warehouse,
  fob: Ship,
  cif: ShieldCheck,
  ddp: Truck,
};

/**
 * Shipping Terms — four equal cards (EXW / FOB / CIF / DDP).
 */
export function ShippingOptionsSection() {
  const { heading, subtext } = homepageCopy.shipping;

  return (
    <section
      id="shipping"
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
          <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {shippingOptions.map((term) => {
              const Icon = termIcons[term.id];
              return (
                <li
                  key={term.id}
                  className="flex min-h-[280px] flex-col bg-[#F5F6F8] p-6 md:min-h-[300px] md:p-7 lg:min-h-[320px] lg:p-8"
                  style={{ borderRadius: 4 }}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#171717]"
                    aria-hidden
                  />
                  <h3
                    className="mt-8 text-[18px] leading-[1.25] tracking-[-0.015em] text-[#171717] md:mt-10 md:text-[20px]"
                    style={{ fontWeight: 400 }}
                  >
                    {term.code}
                  </h3>
                  <p
                    className="mt-1.5 text-[13px] leading-[1.4] tracking-[0.02em] text-[#112947] md:text-[14px]"
                    style={{ fontWeight: 400 }}
                  >
                    {term.title}
                  </p>
                  <p
                    className="mt-4 flex-1 text-[15px] leading-[1.55] text-[#626A73]"
                    style={{ fontWeight: 400 }}
                  >
                    {term.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
