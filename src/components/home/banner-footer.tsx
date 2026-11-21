"use client";

import { siteConfig, homepageCopy } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { QuoteButton } from "@/components/contact/quote-button";
import { BrandLogo } from "@/components/brand/logo";
import { FadeUp } from "@/components/ui/motion";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import type { MouseEvent } from "react";

const socials = [
  {
    label: "WhatsApp",
    href: siteConfig.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    icon: Instagram,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Shipping Terms", href: "#shipping" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Clients", href: "#clients" },
      { label: "Contact Us", href: "#contact" },
      { label: "Get a Quote", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      // Destinations do not exist yet — flagged for review
      { label: "Privacy Policy", href: "#", pending: true },
      { label: "Terms of Use", href: "#", pending: true },
    ],
  },
];

const footerDescription =
  "AJ Sourcing helps businesses worldwide source products from China, coordinate manufacturing, inspect goods, and arrange international shipping.";

export function BannerFooter() {
  const { heading, subtext, primaryCta, secondaryCta } = homepageCopy.banner;
  const { openContact } = useContact();

  const onFooterLink = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#contact") {
      e.preventDefault();
      openContact();
    }
    if (href === "#") {
      e.preventDefault();
    }
  };

  return (
    <>
      {/* Closing CTA — light identity, separate from metrics + footer */}
      <section
        id="contact"
        data-surface="light"
        className="scroll-mt-24 bg-[#F5F6F8]"
      >
        <div className="content-width section-x py-16 md:py-20 lg:py-24">
          <FadeUp>
            <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
              <div className="stack-copy items-center">
                <h2 className="heading-section text-balance">{heading}</h2>
                <p className="section-subtext text-center">{subtext}</p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
                <QuoteButton
                  size="lg"
                  className="bg-[#112947] text-white hover:bg-[#0c1d33]"
                >
                  {primaryCta}
                </QuoteButton>
                <QuoteButton
                  variant="secondary"
                  size="lg"
                  className="border-[#CFD9E6] text-[#112947] hover:bg-white"
                >
                  {secondaryCta}
                </QuoteButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer
        className="section-x pb-8 pt-12 text-white md:pb-10 md:pt-14"
        style={{ backgroundColor: "#112947" }}
      >
        <div className="content-width">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-12">
            <div className="max-w-[320px]">
              <BrandLogo className="w-[160px] md:w-[180px]" />
              <p
                className="mt-4 text-[14px] leading-[1.6] text-[#CFD9E6]/75 md:text-[15px]"
                style={{ fontWeight: 400 }}
              >
                {footerDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center border border-white/15 text-[#CFD9E6] transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white"
                    style={{ borderRadius: 2 }}
                  >
                    <social.icon size={15} strokeWidth={1.75} />
                  </Link>
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <p
                  className="text-[12px] uppercase tracking-[0.14em] text-white/70"
                  style={{ fontWeight: 500 }}
                >
                  {column.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={(e) => onFooterLink(e, link.href)}
                        className="text-[14px] text-[#CFD9E6]/70 transition-colors hover:text-white"
                        aria-disabled={"pending" in link && link.pending ? true : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-[#CFD9E6]/55 md:mt-14 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white/80">
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white/80"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
