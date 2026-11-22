"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { homepageCopy, howItWorks } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/** Light surfaces that read clearly on white, each slightly different. */
const cardThemes = [
  {
    surface: "bg-[#F7F8F9]",
    title: "text-[#171717]",
    body: "text-[#626A73]",
    step: "text-[#112947]",
  },
  {
    surface: "bg-[#F3F4F6]",
    title: "text-[#171717]",
    body: "text-[#626A73]",
    step: "text-[#112947]",
  },
  {
    surface: "bg-[#EFF1F3]",
    title: "text-[#171717]",
    body: "text-[#626A73]",
    step: "text-[#112947]",
  },
  {
    surface: "bg-[#EBEDF0]",
    title: "text-[#171717]",
    body: "text-[#626A73]",
    step: "text-[#112947]",
  },
] as const;

/** Desktop sticky offset only — never apply as `top` on mobile `relative` cards. */
const STICKY_TOP = "max(5.5rem, calc(50vh - 13rem))";
/** Previous card shrinks to this as the next one covers it. */
const SCALE_TO = 0.88;

/**
 * How It Works — sticky mid-page stack.
 * As the next card rises, the current one scales down slightly.
 */
export function HowItWorksSection() {
  const { heading, subtext } = homepageCopy.howItWorks;
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMq = window.matchMedia("(min-width: 768px)");
    const cards = Array.from(
      stack.querySelectorAll<HTMLElement>("[data-hiw-card]")
    );
    const panels = cards.map(
      (card) => card.querySelector<HTMLElement>("[data-hiw-panel]")
    );

    const resetPanels = () => {
      panels.forEach((panel) => {
        if (!panel) return;
        panel.style.transformOrigin = "50% 50%";
        panel.style.willChange = desktopMq.matches ? "transform" : "auto";
        panel.style.transform = "scale(1)";
        panel.style.opacity = "1";
      });
    };

    resetPanels();

    let ticking = false;

    const update = () => {
      ticking = false;
      // Sticky + scale is desktop-only — mobile uses a simple stacked layout.
      if (!desktopMq.matches) {
        resetPanels();
        return;
      }

      const reduce = reduceMq.matches;
      const vh = window.innerHeight;
      const startY = vh;
      const endY = vh * 0.45;

      cards.forEach((card, i) => {
        const next = cards[i + 1];
        const panel = panels[i];
        if (!next || !panel) return;

        const nextTop = next.getBoundingClientRect().top;
        const raw = (startY - nextTop) / (startY - endY);
        const progress = Math.min(1, Math.max(0, raw));

        if (reduce) {
          panel.style.opacity = String(1 - progress * 0.28);
          panel.style.transform = "scale(1)";
          return;
        }

        const scale = 1 - progress * (1 - SCALE_TO);
        panel.style.transform = `scale(${scale})`;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    desktopMq.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktopMq.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section
      id="how-it-works"
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

        <div
          ref={stackRef}
          className="relative mt-12 space-y-6 md:mt-14 md:space-y-8 lg:mt-16"
        >
          {howItWorks.map((step, i) => {
            const theme = cardThemes[i] ?? cardThemes[0];

            return (
              <article
                key={step.step}
                data-hiw-card
                className="relative top-auto rounded-none md:sticky md:[top:var(--hiw-sticky-top)]"
                style={
                  {
                    zIndex: i + 1,
                    ["--hiw-sticky-top"]: STICKY_TOP,
                  } as CSSProperties
                }
              >
                <div
                  data-hiw-panel
                  className={cn("overflow-hidden rounded-none", theme.surface)}
                  style={{ borderRadius: 4 }}
                >
                  <div className="grid min-h-0 grid-cols-1 md:min-h-[480px] lg:min-h-[520px] lg:grid-cols-2">
                    <div className="flex flex-col justify-center px-5 py-8 sm:px-9 sm:py-10 md:px-10 md:py-12 lg:px-12 xl:px-14">
                      <p
                        className={cn(
                          "text-[18px] tracking-[0.04em] md:text-[20px]",
                          theme.step
                        )}
                        style={{ fontWeight: 400 }}
                      >
                        {step.step}
                      </p>
                      <h3
                        className={cn(
                          "mt-4 max-w-[20ch] text-[22px] leading-[1.25] tracking-[-0.015em] md:mt-5 md:text-[24px] lg:text-[26px]",
                          theme.title
                        )}
                        style={{ fontWeight: 400 }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-3 max-w-[36ch] text-[15px] leading-[1.65] md:mt-4 md:text-[16px]",
                          theme.body
                        )}
                        style={{ fontWeight: 400 }}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div className="flex items-stretch px-6 pb-6 pt-6 lg:pl-0">
                      <div
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-none md:aspect-[5/4] lg:aspect-auto lg:min-h-0 lg:flex-1"
                        style={{ borderRadius: 4 }}
                      >
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover object-center"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
