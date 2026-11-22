"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { siteConfig, navLinks } from "@/lib/data";
import { useContact } from "@/components/contact/contact-context";

const socialLinks = [
  { label: "Instagram", href: siteConfig.instagram },
  { label: "Facebook", href: siteConfig.facebook },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

const offices = [
  {
    title: "Hong Kong",
    lines: [
      "Room 1506, International Trade Centre",
      "Sha Tsui Road, Tsuen Wan",
      "New Territories, Hong Kong",
    ],
    linkLabel: "Email us",
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "Worldwide",
    lines: ["Import support to your", "destination market"],
    linkLabel: siteConfig.primaryCta,
    href: "/#contact",
  },
] as const;

/**
 * White site footer — shared by homepage (below CTA) and legal pages.
 */
export function SiteFooter() {
  const { openContact } = useContact();

  const onFooterLink = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/#contact" || href === "#contact") {
      e.preventDefault();
      openContact();
    }
  };

  return (
    <footer data-surface="light" className="overflow-hidden bg-white">
      <div className="content-width section-x pt-12 md:pt-14 lg:pt-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 md:gap-x-9">
              {navLinks.map((link) => (
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

        <div className="mt-10 grid gap-8 border-t border-[#E8E8E8] pt-10 sm:grid-cols-2 md:mt-12 md:gap-x-12 md:pt-12 lg:grid-cols-2 lg:gap-x-10">
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

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[48px] h-[55%] bg-gradient-to-t from-white via-white/85 to-transparent md:bottom-[52px]"
        />

        <div className="content-width section-x relative z-[1] mt-8 md:mt-10">
          <div className="border-t border-[#E8E8E8] pb-7 pt-5 md:pb-8 md:pt-6">
            <div className="flex flex-col gap-3 text-[12px] text-[#8A8A8A] md:flex-row md:items-center md:justify-between md:gap-4 md:text-[13px]">
              <p style={{ fontWeight: 400 }}>
                © 2026 AJ Sourcing. All rights reserved.
              </p>
              <p
                className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end"
                style={{ fontWeight: 400 }}
              >
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-[#171717]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="transition-colors hover:text-[#171717]"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
