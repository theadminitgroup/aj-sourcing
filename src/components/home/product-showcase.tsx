"use client";

import Image from "next/image";
import { homepageCopy, sourcingCategories } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { FadeUp } from "@/components/ui/motion";

/**
 * What Can We Source — 2×4 grid (Anything You Need last). No arrows.
 */
export function ProductShowcase() {
  const { heading, subtext, ctaLabel } = homepageCopy.showcase;
  const { openContact } = useContact();

  return (
    <section
      id="products"
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
          <ul className="grid list-none grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6">
            {sourcingCategories.map((category) => {
              const isSpecial = "special" in category && category.special;
              const src = "src" in category ? category.src : null;

              return (
                <li key={category.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      isSpecial
                        ? openContact()
                        : openContact({
                            category: category.title,
                            product: `Looking to source: ${category.title}`,
                          })
                    }
                    className="group relative flex aspect-[4/5] w-full overflow-hidden text-left"
                    style={{ borderRadius: 4, backgroundColor: "#F5F6F8" }}
                    aria-label={
                      isSpecial
                        ? "Request a quote"
                        : `Enquire about ${category.title}`
                    }
                  >
                    {src && (
                      <div className="absolute inset-4 sm:inset-5 md:inset-6">
                        <Image
                          src={src}
                          alt={category.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-contain object-center transition-[filter,transform] duration-300 ease-out group-hover:scale-[1.02] group-hover:blur-[3px] group-focus-visible:blur-[3px]"
                        />
                      </div>
                    )}

                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 opacity-0 transition-[opacity,background-color] duration-300 ease-out group-hover:bg-black/20 group-hover:opacity-100 group-focus-visible:bg-black/20 group-focus-visible:opacity-100"
                      style={{ borderRadius: 4 }}
                    >
                      <span
                        className="inline-flex items-center justify-center border border-white bg-white px-4 py-2.5 text-[12px] uppercase tracking-[0.1em] text-[#0D0F12] sm:px-5 sm:py-3 sm:text-[13px]"
                        style={{ borderRadius: 2, fontWeight: 400 }}
                      >
                        {ctaLabel}
                      </span>
                    </div>
                  </button>

                  <div className="mt-3 px-0.5 md:mt-3.5">
                    <p
                      className="text-[14px] leading-[1.3] tracking-[-0.01em] text-[#171717] sm:text-[15px] md:text-[16px] lg:text-[17px]"
                      style={{ fontWeight: 400 }}
                    >
                      {category.title}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
