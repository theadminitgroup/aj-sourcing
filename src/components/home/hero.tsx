"use client";

import { homepageCopy, siteConfig } from "@/lib/data";
import { QuoteButton } from "@/components/contact/quote-button";
import { ButtonLink } from "@/components/ui/button-link";
import { useEffect, useRef, useState } from "react";

/**
 * Full-viewport cinematic hero — Flexport-like centered corporate composition.
 */
export function Hero() {
  const { heading, subtext, ctas } = homepageCopy.hero;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { src, poster } = siteConfig.heroVideo;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(mq.matches);
      const video = videoRef.current;
      if (!video) return;
      if (mq.matches) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[100svh] flex-col justify-center overflow-hidden bg-[#0c1d33] text-white"
      data-surface="dark"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          aria-hidden
        />
        {!reduceMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-hidden
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
        {/* Even cinematic veil — readable centered type without killing the video */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/50"
        />
      </div>

      <div className="content-width section-x relative z-10 w-full pb-20 pt-[max(5.5rem,12vh)] md:pb-24">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <h1 className="heading-hero text-balance uppercase">{heading}</h1>
          <p className="mt-6 max-w-[560px] text-[16px] font-normal leading-[1.65] text-white/80 md:mt-7 md:text-[18px]">
            {subtext}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
            <QuoteButton variant="onDark" size="lg">
              {ctas[0].label}
            </QuoteButton>
            <ButtonLink href={ctas[1].href} variant="outlineOnDark" size="lg">
              {ctas[1].label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
