"use client";

import { BrandLogo } from "@/components/brand/logo";
import { useContact } from "@/components/contact/contact-context";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavTone = "hero" | "sticky";

function MobileMenu({
  open,
  onClose,
  onQuote,
  tone,
}: {
  open: boolean;
  onClose: () => void;
  onQuote: () => void;
  tone: NavTone;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden",
        tone === "hero" ? "bg-[#0c1d33]/97" : "bg-white/97",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="flex h-full flex-col items-center justify-center gap-1 px-6 pt-16">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-4 py-3 text-[13px] font-normal uppercase tracking-[0.14em]",
              tone === "hero" ? "text-white" : "text-navy"
            )}
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
          className="mt-6 inline-flex h-11 items-center bg-blue px-6 text-[13px] font-normal uppercase tracking-[0.08em] text-white"
          style={{ borderRadius: 2 }}
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
}

function NavChrome({
  tone,
  showRule,
  onQuote,
  menuOpen,
  onToggleMenu,
}: {
  tone: NavTone;
  showRule: boolean;
  onQuote: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  const isHero = tone === "hero";

  return (
    <div className="content-width section-x mx-auto">
      <nav className="relative flex h-[72px] items-center justify-between md:h-[80px]">
        <Link href="/" className="relative z-10 shrink-0" aria-label="AJ Sourcing home">
          <BrandLogo priority={isHero} />
        </Link>

        <ul className="absolute inset-x-0 hidden items-center justify-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-[12px] font-normal uppercase tracking-[0.16em] transition-colors duration-300",
                  isHero
                    ? "text-white/80 hover:text-white"
                    : "text-navy/70 hover:text-navy"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onQuote}
            className="hidden items-center bg-blue px-5 py-2.5 text-[12px] font-normal uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-blue/90 lg:inline-flex"
            style={{ borderRadius: 2 }}
          >
            Get a Free Quote
          </button>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center transition-colors lg:hidden",
              isHero
                ? "text-white hover:bg-white/10"
                : "text-navy hover:bg-black/[0.04]"
            )}
            style={{ borderRadius: 2 }}
            onClick={onToggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Container-width rule — hero only */}
      {showRule && (
        <div aria-hidden className="h-px w-full bg-white/30" />
      )}
    </div>
  );
}

/**
 * Hero: absolute (scrolls away) + container rule.
 * Past hero: fixed bar slides in from top.
 */
export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [stickyIn, setStickyIn] = useState(false);
  const { openContact } = useContact();

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      const onScroll = () => setPastHero(window.scrollY > 48);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Sticky only when the hero has fully left the viewport
    const io = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, root: null, rootMargin: "0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!pastHero) {
      setStickyIn(false);
      setOpen(false);
      return;
    }
    const id = requestAnimationFrame(() => setStickyIn(true));
    return () => cancelAnimationFrame(id);
  }, [pastHero]);

  return (
    <>
      {/* Scrolls with the hero — not fixed */}
      <header
        className="absolute inset-x-0 top-0 z-50 bg-transparent"
        inert={pastHero ? true : undefined}
      >
        <NavChrome
          tone="hero"
          showRule
          onQuote={openContact}
          menuOpen={open && !pastHero}
          onToggleMenu={() => setOpen((v) => !v)}
        />
      </header>

      {/* Moves in after leaving the hero */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-md transition-transform duration-500 ease-out",
          pastHero
            ? stickyIn
              ? "pointer-events-auto translate-y-0"
              : "pointer-events-none -translate-y-full"
            : "pointer-events-none -translate-y-full"
        )}
        aria-hidden={!pastHero}
        inert={!pastHero ? true : undefined}
      >
        <NavChrome
          tone="sticky"
          showRule={false}
          onQuote={openContact}
          menuOpen={open && pastHero}
          onToggleMenu={() => setOpen((v) => !v)}
        />
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onQuote={openContact}
        tone={pastHero ? "sticky" : "hero"}
      />
    </>
  );
}

/** @deprecated Prefer SiteNavbar */
export function HeroNavbar() {
  return null;
}

/** @deprecated Prefer SiteNavbar */
export function StickyNavbar() {
  return null;
}

/** @deprecated Prefer SiteNavbar */
export function Navbar() {
  return <SiteNavbar />;
}
