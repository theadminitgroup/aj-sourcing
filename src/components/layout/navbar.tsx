"use client";

import { BrandLogo } from "@/components/brand/logo";
import { useContact } from "@/components/contact/contact-context";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const isDark = tone === "hero";

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        isDark ? "bg-[#0D0F12]/98" : "bg-white/97"
      )}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className={cn(
          "absolute right-4 top-[max(1rem,env(safe-area-inset-top))] inline-flex h-11 w-11 items-center justify-center sm:right-5 md:right-7",
          isDark ? "text-white hover:bg-white/10" : "text-navy hover:bg-black/[0.04]"
        )}
        style={{ borderRadius: 2 }}
        aria-label="Close menu"
      >
        <X size={20} />
      </button>

      <div className="flex h-full flex-col items-center justify-center gap-1 px-6 pt-16 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-4 py-3.5 text-[13px] font-normal uppercase tracking-[0.14em]",
              isDark ? "text-white" : "text-navy"
            )}
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <Button
          type="button"
          variant={isDark ? "onDark" : "primary"}
          size="nav"
          className="mt-6"
          onClick={() => {
            onClose();
            onQuote();
          }}
        >
          {siteConfig.primaryCta}
        </Button>
      </div>
    </div>
  );
}

function NavChrome({
  tone,
  onQuote,
  menuOpen,
  onToggleMenu,
}: {
  tone: NavTone;
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
          <Button
            type="button"
            variant={isHero ? "onDark" : "primary"}
            size="nav"
            onClick={onQuote}
            className="hidden lg:inline-flex"
          >
            {siteConfig.primaryCta}
          </Button>

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
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </div>
  );
}

/**
 * Homepage: transparent nav over hero, then white sticky after scroll.
 * Inner pages: light top nav at rest; white sticky only after scroll.
 * Never show both bars at once.
 *
 * Lives in root layout (does not remount on navigation) — sticky/hero
 * state must reset on every pathname change or it leaks across pages.
 */
export function SiteNavbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContact();

  // Reset sticky state + re-bind listeners on every route change
  useEffect(() => {
    setOpen(false);
    setPastHero(false);
    setScrolled(false);

    let cancelled = false;
    let cleanup: (() => void) | undefined;
    let raf1 = 0;
    let raf2 = 0;

    const bindHome = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        // Hero not mounted yet — try once more next frame
        raf2 = requestAnimationFrame(() => {
          if (cancelled) return;
          const late = document.getElementById("hero");
          if (!late) return;
          observeHero(late);
        });
        return;
      }
      observeHero(hero);
    };

    const observeHero = (hero: Element) => {
      const sync = () => {
        // Guard: only sticky once we've actually scrolled past the hero
        const rect = hero.getBoundingClientRect();
        setPastHero(rect.bottom <= 0);
      };
      sync();

      const onScroll = () => {
        if (cancelled) return;
        sync();
        setOpen(false);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanup = () => window.removeEventListener("scroll", onScroll);
    };

    const bindInner = () => {
      const onScroll = () => setScrolled(window.scrollY > 48);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanup = () => window.removeEventListener("scroll", onScroll);
    };

    // Double rAF: wait for App Router to swap page content + scroll to top
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (cancelled) return;
        if (isHome) bindHome();
        else bindInner();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cleanup?.();
    };
  }, [pathname, isHome]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const showSticky = isHome ? pastHero : scrolled;
  const showTopBar = isHome ? !pastHero : !scrolled;
  const menuTone: NavTone = isHome && !pastHero ? "hero" : "sticky";

  return (
    <>
      {/* Homepage hero nav — fully hidden once sticky takes over */}
      {isHome && (
        <header
          className={cn(
            "absolute inset-x-0 top-0 z-50 bg-transparent transition-opacity duration-200",
            showTopBar && !open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
          aria-hidden={!showTopBar || open}
          inert={!showTopBar || open ? true : undefined}
        >
          <NavChrome
            tone="hero"
            onQuote={openContact}
            menuOpen={open && showTopBar}
            onToggleMenu={() => setOpen((v) => !v)}
          />
        </header>
      )}

      {/* Inner-page top nav (light) — only before scroll */}
      {!isHome && (
        <header
          className={cn(
            "absolute inset-x-0 top-0 z-50 border-b border-black/[0.04] bg-white transition-opacity duration-200",
            showTopBar && !open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
          aria-hidden={!showTopBar || open}
          inert={!showTopBar || open ? true : undefined}
        >
          <NavChrome
            tone="sticky"
            onQuote={openContact}
            menuOpen={open && showTopBar}
            onToggleMenu={() => setOpen((v) => !v)}
          />
        </header>
      )}

      {/* Sticky white bar — only after scroll / past hero */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-black/[0.04] bg-white/95 backdrop-blur-md transition-transform duration-300 ease-out",
          showSticky && !open
            ? "pointer-events-auto translate-y-0 shadow-[0_1px_0_rgba(17,41,71,0.04),0_8px_24px_rgba(13,15,18,0.06)]"
            : "pointer-events-none -translate-y-full shadow-none"
        )}
        aria-hidden={!showSticky || open}
        inert={!showSticky || open ? true : undefined}
      >
        <NavChrome
          tone="sticky"
          onQuote={openContact}
          menuOpen={open && showSticky}
          onToggleMenu={() => setOpen((v) => !v)}
        />
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onQuote={openContact}
        tone={menuTone}
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
