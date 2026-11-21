import { Hero } from "@/components/home/hero";
import { ProductShowcase } from "@/components/home/product-showcase";
import { ClientsSection } from "@/components/home/clients";
import { ServicesSection } from "@/components/home/services";
import { BrandLaunchBanner } from "@/components/home/brand-launch";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { ShippingOptionsSection } from "@/components/home/shipping-options";
import { WhyUsSection } from "@/components/home/why-us";
import { MetricsBanner } from "@/components/home/metrics";
import { BannerFooter } from "@/components/home/banner-footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <ClientsSection />
      <ServicesSection />
      <BrandLaunchBanner />
      <HowItWorksSection />
      <ShippingOptionsSection />
      <WhyUsSection />
      <MetricsBanner />
      <BannerFooter />
    </>
  );
}
