import {
  ClipboardList,
  Search,
  Factory,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { homepageCopy, howItWorks } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";

const stepIcons: LucideIcon[] = [ClipboardList, Search, Factory, Truck];

/**
 * How It Works — heading left, four step cards right.
 */
export function HowItWorksSection() {
  const { heading, subtext } = homepageCopy.howItWorks;

  return (
    <section
      id="how-it-works"
      data-surface="light"
      className="scroll-mt-24 bg-white section-y"
    >
      <div className="content-width section-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 xl:gap-16">
          <FadeUp className="max-w-[420px] shrink-0 lg:w-[38%]">
            <div className="stack-copy">
              <h2 className="heading-section text-balance">{heading}</h2>
              <p className="section-subtext">{subtext}</p>
            </div>
          </FadeUp>

          <FadeUp className="min-w-0 flex-1">
            <ol className="list-none space-y-4 md:space-y-5">
              {howItWorks.map((step, i) => {
                const Icon = stepIcons[i] ?? ClipboardList;

                return (
                  <li
                    key={step.step}
                    className="border border-transparent bg-[#F5F6F8] p-5 md:p-6"
                    style={{ borderRadius: 4 }}
                  >
                    <div className="flex items-start gap-3.5 md:gap-4">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-[#171717]"
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <h3
                          className="text-[17px] leading-[1.3] tracking-[-0.01em] text-[#171717] md:text-[18px]"
                          style={{ fontWeight: 400 }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="mt-2 max-w-[46ch] text-[15px] leading-[1.55] text-[#626A73]"
                          style={{ fontWeight: 400 }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
