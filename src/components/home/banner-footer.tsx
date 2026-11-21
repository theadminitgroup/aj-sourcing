"use client";

import { siteConfig, homepageCopy } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { QuoteButton } from "@/components/contact/quote-button";
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
      { label: "About us", href: "#why-us" },
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our clients", href: "#clients" },
      { label: "Shipping terms", href: "#shipping" },
      { label: "Get a quote", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export function BannerFooter() {
  const { heading, subtext, primaryCta, secondaryCta } = homepageCopy.banner;
  const { openContact } = useContact();

  const onFooterLink = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#contact") {
      e.preventDefault();
      openContact();
    }
  };

  return (
    <section id="contact" className="overflow-hidden bg-dark-base text-white">
      <div className="content-width section-x border-b border-white/[0.06] pb-16 pt-16 md:pb-20 md:pt-20">
        <FadeUp>
          <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
            <div className="stack-copy items-center">
              <h2 className="heading-section-dark text-balance">{heading}</h2>
              <p className="section-subtext-dark text-center">{subtext}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <QuoteButton size="lg">{primaryCta}</QuoteButton>
              <QuoteButton variant="ghost" size="lg">
                {secondaryCta}
              </QuoteButton>
            </div>
          </div>
        </FadeUp>
      </div>

      <footer className="section-x pb-8 pt-10 md:pb-10 md:pt-12">
        <div className="content-width">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-12">
            <div className="max-w-[280px]">
              <p className="text-[18px] font-semibold tracking-[-0.02em] text-white">
                {siteConfig.name}
              </p>
              <p className="mt-3 text-[14px] leading-[1.55] text-white/50">
                {siteConfig.tagline}
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
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-colors hover:bg-white/[0.1] hover:text-white"
                  >
                    <social.icon size={15} strokeWidth={1.75} />
                  </Link>
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-[14px] font-semibold text-white">
                  {column.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={(e) => onFooterLink(e, link.href)}
                        className="text-[14px] text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 text-[13px] text-white/40 md:mt-14 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white/70">
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white/70"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
