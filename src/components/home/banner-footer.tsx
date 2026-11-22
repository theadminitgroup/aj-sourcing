"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { siteConfig, homepageCopy, navLinks } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { QuoteButton } from "@/components/contact/quote-button";
import { FadeUp } from "@/components/ui/motion";
import {
  ctaBase,
  ctaRadius,
  ctaSizeStyles,
  ctaVariantStyles,
} from "@/design/cta";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "Instagram", href: siteConfig.instagram },
  { label: "WhatsApp", href: siteConfig.whatsapp },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

const footerNav = [
  ...navLinks.map(({ label, href }) => ({ label, href })),
  { label: "Shipping Terms", href: "#shipping" },
  { label: "Clients", href: "#clients" },
];

const offices = [
  {
    title: "Pakistan",
    lines: ["Lahore, Pakistan"],
    linkLabel: "Contact us",
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "China",
    lines: ["On ground sourcing team", "Manufacturing hubs across China"],
    linkLabel: "Talk to us",
    href: siteConfig.whatsapp,
    external: true,
  },
  {
    title: "Worldwide",
    lines: ["Import support to your", "destination market"],
    linkLabel: "Get a quote",
    href: "#contact",
  },
] as const;

/**
 * Closing CTA (full-bleed image) + white footer aligned to TRUMUV-style structure.
 */
export function BannerFooter() {
  const { heading, subtext, primaryCta, secondaryCta } = homepageCopy.banner;
  const { openContact } = useContact();
  const year = new Date().getFullYear();

  const onFooterLink = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#contact") {
      e.preventDefault();
      openContact();
    }
  };

  return (
    <div id="contact" className="scroll-mt-24">
      {/* —— Ready to Import — end-to-end image band —— */}
      <section data-surface="dark" className="relative isolate overflow-hidden">
        <Image
          src="/images/shipping/port-delivery.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        <div aria-hidden className="absolute inset-0 bg-[#0D0F12]/72" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/80 via-transparent to-[#0D0F12]/35"
        />

        <div className="content-width section-x relative z-[1] py-28 text-center md:py-36 lg:py-44">
          <FadeUp>
            <div className="mx-auto max-w-[720px]">
              <h2 className="heading-section-dark text-balance text-white">
                {heading}
              </h2>
              <p className="section-subtext-dark mx-auto mt-4 max-w-[46ch] text-white/80">
                {subtext}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
                <QuoteButton variant="onDark" size="lg">
                  {primaryCta}
                </QuoteButton>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    ctaBase,
                    ctaVariantStyles.outlineOnDark,
                    ctaSizeStyles.lg
                  )}
                  style={{ borderRadius: ctaRadius }}
                >
                  {secondaryCta}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* —— White footer —— */}
      <footer data-surface="light" className="overflow-hidden bg-white">
        {/* Nav + socials — one aligned row */}
        <div className="content-width section-x pt-12 md:pt-14 lg:pt-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 md:gap-x-9">
                {footerNav.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => onFooterLink(e, link.href)}
                      className="text-[14px] text-[#171717] transition-colors duration-200 hover:text-black md:text-[15px]"
                      style={{ fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 md:gap-x-9 md:justify-end">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-[14px] text-[#626A73] transition-colors duration-200 hover:text-black md:text-[15px]"
                    style={{ fontWeight: 400 }}
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices / presence — 4-column row */}
          <div className="mt-10 grid gap-8 border-t border-[#E8E8E8] pt-10 sm:grid-cols-2 md:mt-12 md:gap-x-12 md:pt-12 lg:grid-cols-4 lg:gap-x-10">
            <div>
              <p
                className="text-[14px] leading-[1.55] text-[#9A9A9A] md:text-[15px]"
                style={{ fontWeight: 400 }}
              >
                Find Us
              </p>
              <p
                className="mt-1 text-[14px] leading-[1.55] text-[#9A9A9A] md:text-[15px]"
                style={{ fontWeight: 400 }}
              >
                AJ Sourcing
              </p>
            </div>

            {offices.map((office) => (
              <div key={office.title}>
                <p
                  className="text-[15px] leading-[1.4] text-[#171717] md:text-[16px]"
                  style={{ fontWeight: 400 }}
                >
                  {office.title}
                </p>
                <div className="mt-2 space-y-0.5">
                  {office.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[14px] leading-[1.55] text-[#8A8A8A] md:text-[15px]"
                      style={{ fontWeight: 400 }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <Link
                  href={office.href}
                  onClick={(e) => onFooterLink(e, office.href)}
                  {...("external" in office && office.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-[#171717] transition-opacity duration-200 hover:opacity-60 md:text-[14px]"
                  style={{ fontWeight: 400 }}
                >
                  {office.linkLabel}
                  <span aria-hidden className="text-[12px]">
                    ↗
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Wordmark zone — same content-width as rest of page */}
        <div className="relative mt-20 md:mt-24 lg:mt-28">
          <div className="content-width section-x" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/aj-sourcing-wordmark.svg"
              alt=""
              width={403}
              height={41}
              className="block h-auto w-full opacity-[0.55] grayscale"
              decoding="async"
            />
          </div>

          {/* Soft fade to white at the bottom of the wordmark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[48px] h-[55%] bg-gradient-to-t from-white via-white/85 to-transparent md:bottom-[52px]"
          />

          <div className="content-width section-x relative z-[1] mt-8 md:mt-10">
            <div className="border-t border-[#E8E8E8] pb-7 pt-5 md:pb-8 md:pt-6">
              <div className="grid grid-cols-1 gap-2 text-[12px] text-[#8A8A8A] md:grid-cols-3 md:items-center md:gap-4 md:text-[13px]">
                <p className="md:justify-self-start" style={{ fontWeight: 400 }}>
                  {siteConfig.location}
                </p>
                <p
                  className="md:justify-self-center md:text-center"
                  style={{ fontWeight: 400 }}
                >
                  © {year} {siteConfig.name}. All rights reserved.
                </p>
                <p
                  className="md:justify-self-end md:text-right"
                  style={{ fontWeight: 400 }}
                >
                  Sourcing with clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
