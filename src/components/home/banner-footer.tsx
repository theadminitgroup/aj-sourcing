"use client";

import Image from "next/image";
import { siteConfig, homepageCopy, showcaseItems } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";
import { QuoteButton } from "@/components/contact/quote-button";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeUp, HeadingReveal } from "@/components/ui/motion";
import Link from "next/link";
import {
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Megaphone,
  Package,
  Share2,
  Youtube,
} from "lucide-react";
import type { MouseEvent } from "react";

const socials = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "#founder" },
      { label: "Services", href: "#services" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "#founder" },
      { label: "Testimonials", href: "#stories" },
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

function ProjectVisual() {
  const products = showcaseItems.slice(0, 3);

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-[#1c1c1c]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-orange/[0.08] to-transparent"
      />

      <div className="relative flex items-center justify-center gap-3 px-6 pb-8 pt-10">
        {products.map((item, i) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl bg-[#252525]"
            style={{
              width: i === 1 ? 104 : 72,
              height: i === 1 ? 104 : 72,
              opacity: i === 1 ? 1 : 0.55,
            }}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-contain p-2.5"
              sizes="104px"
            />
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-center gap-6 border-t border-white/[0.06] px-5 py-4 text-[12px] text-white/45">
        <span>MOQ 1,000</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>Ship to PK</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>ETA 24h</span>
      </div>
    </div>
  );
}

const serviceItems = [
  { icon: Package, label: "Source" },
  { icon: Globe2, label: "Web" },
  { icon: Share2, label: "Social" },
  { icon: Megaphone, label: "Ads" },
];

function ServicesVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-[#1c1c1c]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue/[0.08] to-transparent"
      />

      <div className="relative grid grid-cols-2 gap-px bg-white/[0.06] p-px">
        {serviceItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-3 bg-[#1c1c1c] px-4 py-9"
          >
            <span className="icon-tile flex h-11 w-11 items-center justify-center bg-white/[0.06] text-white/65">
              <item.icon size={18} strokeWidth={1.75} />
            </span>
            <span className="text-[13px] font-medium text-white/80">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BannerFooter() {
  const { label, heading, subtext, cards } = homepageCopy.banner;
  const { openContact } = useContact();

  const onFooterLink = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#contact") {
      e.preventDefault();
      openContact();
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden rounded-t-[40px] bg-black text-white md:rounded-t-[60px]"
    >
      <div className="content-width section-x pb-24 pt-20 md:pb-32 md:pt-28 lg:pb-40 lg:pt-[120px]">
        <div className="stack-cta mx-auto max-w-[849px] items-center text-center">
          <div className="stack-label items-center">
            <p className="label-dark">{label}</p>
            <div className="stack-copy items-center">
              <HeadingReveal className="heading-section-dark text-balance text-white">
                {heading}
              </HeadingReveal>
              <FadeUp delay={0.15}>
                <p className="max-w-[620px] text-[16px] leading-[1.55] text-dark-muted">
                  {subtext}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-[60px] grid gap-5 md:grid-cols-2 md:gap-6">
            {cards.map((card, i) => (
              <article
                key={card.title}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-dark-surface transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                <div className="flex flex-col items-center gap-6 px-6 pb-2 pt-10 text-center md:px-8 md:pt-12">
                  <div className="stack-copy max-w-[300px] items-center">
                    <h3 className="text-[22px] font-medium leading-[1.25] text-white md:text-[24px]">
                      {card.title}
                    </h3>
                    <p className="text-[15px] leading-[1.55] text-dark-secondary md:text-[16px]">
                      {card.description}
                    </p>
                  </div>
                  {card.primary ? (
                    <QuoteButton size="lg">{card.cta}</QuoteButton>
                  ) : (
                    <ButtonLink href={card.href} variant="ghost" size="lg">
                      {card.cta}
                    </ButtonLink>
                  )}
                </div>

                <div className="mt-8 px-4 pb-4 md:px-5 md:pb-5">
                  {i === 0 ? <ProjectVisual /> : <ServicesVisual />}
                </div>
              </article>
            ))}
          </div>
        </FadeUp>
      </div>

      <footer className="section-x pb-8 pt-10 md:pb-10 md:pt-14">
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
                <p className="text-[14px] font-semibold text-white">{column.title}</p>
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
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white/70">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
