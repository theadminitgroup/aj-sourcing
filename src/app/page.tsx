import { Hero } from "@/components/home/hero";
import { MetricsSection } from "@/components/home/metrics";
import { ServicesSection } from "@/components/home/services";
import { BrandLaunchBanner } from "@/components/home/brand-launch";
import { WhyUsSection } from "@/components/home/why-us";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { FounderSection } from "@/components/home/founder";
import { TestimonialsSection } from "@/components/home/testimonials";
import { BannerFooter } from "@/components/home/banner-footer";
import { DarkZone } from "@/components/ui/section-shell";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUsSection />

      {/* Metrics pins; dark slab scrolls over it */}
      <div className="relative">
        <div className="sticky top-0 z-[1]">
          <MetricsSection />
        </div>

        <div className="relative z-[2]">
          <DarkZone className="rounded-t-[32px] shadow-[0_-24px_80px_rgba(0,0,0,0.18)] md:rounded-t-[48px]">
            <ServicesSection />
            <BrandLaunchBanner />
            <HowItWorksSection />
          </DarkZone>
        </div>
      </div>

      <FounderSection />

      {/* Testimonials pin; get-started banner scrolls over it */}
      <div className="relative">
        <div className="sticky top-0 z-[1]">
          <TestimonialsSection />
        </div>
        <div className="relative z-[2]">
          <BannerFooter />
        </div>
      </div>
    </>
  );
}
