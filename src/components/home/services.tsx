"use client";

import Image from "next/image";
import { useState } from "react";
import { homepageCopy, services } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

/**
 * What We Do — equal-width columns; image height matches content. First open; hover/click.
 */
export function ServicesSection() {
  const { heading, subtext } = homepageCopy.services;
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      id="services"
      data-surface="light"
      className="scroll-mt-24 bg-white section-y"
    >
      <div className="content-width section-x">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <FadeUp className="relative h-full min-h-[280px] overflow-hidden bg-[#F5F6F8] lg:min-h-full">
            {services.map((service, index) => {
              const visible = index === active;
              return (
                <div
                  key={service.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    visible ? "opacity-100" : "pointer-events-none opacity-0"
                  )}
                  aria-hidden={!visible}
                >
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-start justify-end bg-[#F5F6F8] p-6 md:p-8">
                      <p
                        className="text-[13px] uppercase tracking-[0.12em] text-[#112947]/50"
                        style={{ fontWeight: 400 }}
                      >
                        Image pending
                      </p>
                      <p
                        className="mt-2 max-w-[28ch] text-[15px] leading-[1.5] text-[#626A73]"
                        style={{ fontWeight: 400 }}
                      >
                        {service.title}: relevant operations photography needed.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
            <span className="sr-only">{current.imageAlt}</span>
          </FadeUp>

          <FadeUp className="flex flex-col justify-center">
            <div className="stack-copy">
              <h2 className="heading-section text-balance">{heading}</h2>
              <p className="section-subtext">{subtext}</p>
            </div>

            <ul className="mt-8 list-none md:mt-10">
              {services.map((service, index) => {
                const isOpen = index === active;

                return (
                  <li
                    key={service.id}
                    className="border-t border-[#E4E7EB] last:border-b"
                    onMouseEnter={() => setActive(index)}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-expanded={isOpen}
                      className={cn(
                        "flex w-full items-start gap-4 py-5 text-left transition-colors duration-200 md:gap-5 md:py-6",
                        isOpen
                          ? "text-[#171717]"
                          : "text-[#171717]/45 hover:text-[#171717]"
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0 pt-0.5 text-[13px] tracking-[0.06em] transition-colors duration-200 md:text-[14px]",
                          isOpen ? "text-[#112947]" : "text-[#112947]/30"
                        )}
                        style={{ fontWeight: 400 }}
                      >
                        {service.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-[17px] leading-[1.3] tracking-[-0.01em] md:text-[18px]"
                          style={{ fontWeight: 400 }}
                        >
                          {service.title}
                        </span>

                        <span
                          className={cn(
                            "grid transition-[grid-template-rows] duration-300 ease-out",
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          )}
                        >
                          <span className="overflow-hidden">
                            <span
                              className={cn(
                                "mt-3 block max-w-[42ch] text-[15px] leading-[1.55] text-[#626A73] transition-opacity duration-300 md:text-[16px]",
                                isOpen ? "opacity-100" : "opacity-0"
                              )}
                              style={{ fontWeight: 400 }}
                            >
                              {service.description}
                            </span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
