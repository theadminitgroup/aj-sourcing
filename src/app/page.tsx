import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ServicesSection } from "@/components/home/services";
import { BrandLaunchBanner } from "@/components/home/brand-launch";
import { ClientsSection } from "@/components/home/clients";
import { ProductShowcase } from "@/components/home/product-showcase";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { ShippingOptionsSection } from "@/components/home/shipping-options";
import { WhyUsSection } from "@/components/home/why-us";
import { BannerFooter } from "@/components/home/banner-footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
      <BrandLaunchBanner />
      <ProductShowcase />
      <HowItWorksSection />
      <ShippingOptionsSection />
      <WhyUsSection />
      <BannerFooter />
    </>
  );
}
