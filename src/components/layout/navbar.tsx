"use client";

import { useContact } from "@/components/contact/contact-context";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function MobileMenu({
  open,
  onClose,
  onQuote,
}: {
  open: boolean;
  onClose: () => void;
  onQuote: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] bg-white/95 backdrop-blur-md transition-opacity duration-300 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="flex h-full flex-col items-center justify-center gap-1 px-6 pt-16">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-3 text-lg font-medium text-light-primary"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => {
            onClose();
            onQuote();
          }}
          className="mt-6 inline-flex h-11 items-center rounded-full bg-blue px-6 text-[14px] font-semibold text-white"
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
}

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("absolute inset-x-0 hidden items-center justify-center gap-10 lg:flex", className)}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "text-[14px] font-medium tracking-[-0.01em] transition-colors duration-200",
              link.active
                ? "text-light-primary"
                : "text-[rgba(49,49,49,0.72)] hover:text-light-primary"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** In-flow nav that lives in the hero and scrolls away with it */
export function HeroNavbar() {
  const [open, setOpen] = useState(false);
  const { openContact } = useContact();

  return (
    <>
      <header className="relative z-20 w-full">
        <nav className="content-width section-x relative mx-auto flex h-[88px] items-center justify-between">
          <Link
            href="/"
            className="relative z-10 shrink-0 text-[18px] font-semibold tracking-[-0.03em] text-light-primary transition-opacity hover:opacity-70"
          >
            {siteConfig.name}
          </Link>

          <NavLinks />

          <div className="relative z-10 flex shrink-0 items-center">
            <button
              type="button"
              onClick={openContact}
              className="hidden h-11 items-center rounded-full bg-blue px-6 text-[14px] font-semibold leading-none text-white transition-colors hover:bg-blue/90 lg:inline-flex"
            >
              Get a Free Quote
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-light-primary transition-colors hover:bg-black/[0.04] lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onQuote={openContact}
      />
    </>
  );
}

/** Fixed floating nav that slides in after the hero */
export function StickyNavbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { openContact } = useContact();

  useEffect(() => {
    const why = document.getElementById("why-us");
    if (!why) return;

    const update = () => {
      setSticky(why.getBoundingClientRect().top <= 32);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!sticky) setOpen(false);
  }, [sticky]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-5 pt-3 md:px-6 md:pt-4",
          "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          sticky ? "translate-y-0" : "pointer-events-none -translate-y-[120%]"
        )}
        aria-hidden={!sticky}
      >
        <header className="mx-auto w-full max-w-[var(--max-width-content)] rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
          <nav className="relative mx-auto flex h-[64px] max-w-[var(--max-width-content)] items-center justify-between px-6 md:px-7">
            <Link
              href="/"
              className="relative z-10 shrink-0 text-[18px] font-semibold tracking-[-0.03em] text-light-primary transition-opacity hover:opacity-70"
              tabIndex={sticky ? 0 : -1}
            >
              {siteConfig.name}
            </Link>

            <NavLinks />

            <div className="relative z-10 flex shrink-0 items-center">
              <button
                type="button"
                onClick={openContact}
                tabIndex={sticky ? 0 : -1}
                className="hidden h-10 items-center rounded-full bg-blue px-5 text-[14px] font-semibold leading-none text-white transition-colors hover:bg-blue/90 lg:inline-flex"
              >
                Get a Free Quote
              </button>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-light-primary transition-colors hover:bg-black/[0.04] lg:hidden"
                onClick={() => setOpen(!open)}
                tabIndex={sticky ? 0 : -1}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </header>
      </div>

      <MobileMenu
        open={open && sticky}
        onClose={() => setOpen(false)}
        onQuote={openContact}
      />
    </>
  );
}

/** @deprecated Prefer HeroNavbar + StickyNavbar */
export function Navbar() {
  return <StickyNavbar />;
}
