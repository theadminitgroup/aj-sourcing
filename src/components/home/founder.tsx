"use client";

import Image from "next/image";
import { founder, homepageCopy } from "@/lib/data";
import { images } from "@/lib/images";
import { FadeUp } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function FounderSection() {
  const { label } = homepageCopy.founder;

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(90vw,780px)] w-[min(110vw,960px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,107,44,0.11)_0%,rgba(255,107,44,0.05)_38%,rgba(255,107,44,0.02)_58%,transparent_72%)]"
      />

      <div className="content-width section-x relative flex w-full flex-col items-center text-center">
        <FadeUp>
          <p className="label">{label}</p>
        </FadeUp>

        <FadeUp delay={0.1} className="relative mt-3 w-full max-w-[820px]">
          <blockquote>
            <p className="text-[clamp(1.375rem,2.8vw,2rem)] font-medium leading-[1.35] tracking-[-0.02em] text-light-primary/80">
              &ldquo;{founder.quote}&rdquo;
            </p>
          </blockquote>
        </FadeUp>

        <FadeUp delay={0.2}>
          <motion.figcaption
            whileHover={{ y: -4 }}
            className="mt-12 flex flex-col items-center gap-5"
          >
            <div className="relative h-[112px] w-[112px] overflow-hidden rounded-full bg-[#f0f0ee] ring-4 ring-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <Image
                src={images.founder}
                alt={founder.name}
                fill
                className="object-cover object-top"
                sizes="112px"
              />
            </div>
            <div className="stack-copy items-center">
              <p className="text-[22px] font-semibold leading-none text-light-primary">
                {founder.name}
              </p>
              <p className="text-[14px] font-medium text-light-muted-text">
                {founder.title}
              </p>
            </div>
          </motion.figcaption>
        </FadeUp>
      </div>
    </section>
  );
}
