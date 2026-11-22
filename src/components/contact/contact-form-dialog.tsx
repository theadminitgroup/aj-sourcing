"use client";

import { trackMetaEvent } from "@/components/analytics/meta-pixel";
import { useContact } from "@/components/contact/contact-context";
import { Button } from "@/components/ui/button";
import { contactFormServices, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { FormEvent, useState } from "react";

const fieldClass =
  "w-full rounded-[var(--radius-input)] border border-black/[0.08] bg-[#f7f7f5] px-4 py-3 text-[15px] text-light-primary outline-none transition-[border-color,box-shadow,background-color] placeholder:text-light-muted-text focus:border-[#0D0F12]/35 focus:bg-white focus:shadow-[0_0_0_3px_rgba(13,15,18,0.1)]";

export function ContactFormDialog() {
  const { isOpen, closeContact, prefill } = useContact();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const briefDefault =
    prefill?.product ||
    (prefill?.category ? `Looking to source: ${prefill.category}` : "");
  const formKey = `${prefill?.category ?? ""}-${prefill?.product ?? ""}-${isOpen}`;

  const handleClose = () => {
    closeContact();
    window.setTimeout(() => {
      setSubmitted(false);
      setSending(false);
      setError(null);
    }, 280);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          email: data.get("email"),
          company: data.get("company"),
          city: data.get("city"),
          country: data.get("country"),
          service: data.get("service"),
          brief: data.get("brief"),
        }),
      });

      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      trackMetaEvent("Lead");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send enquiry.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-6">
          <motion.button
            type="button"
            aria-label="Close contact form"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 48 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.18)] md:max-h-[90vh] md:max-w-[560px] md:shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
            style={{ borderRadius: 2 }}
          >
            <div className="mx-auto mt-3 h-1 w-10 shrink-0 bg-black/10 md:hidden" style={{ borderRadius: 2 }} />

            <div className="flex items-start justify-between gap-4 px-6 pb-2 pt-5 md:px-8 md:pt-7">
              <div>
                <h2
                  id="contact-form-title"
                  className="text-[22px] font-normal tracking-[-0.02em] text-light-primary md:text-[24px]"
                >
                  {submitted ? "Request received" : "Tell us what you need"}
                </h2>
                <p className="mt-1.5 text-[14px] font-normal leading-[1.45] text-light-secondary">
                  {submitted
                    ? "We’ll review your brief and get back within 48 hours."
                    : "Share a few details and we’ll guide you on the next step."}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-black/[0.04] text-light-primary transition-colors hover:bg-black/[0.08]"
                style={{ borderRadius: 2 }}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 pb-8 pt-4 md:px-8 md:pb-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center bg-orange/10 text-orange" style={{ borderRadius: 2 }}>
                    <CheckCircle2 size={28} strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 text-[16px] font-normal text-light-primary">
                    Thanks for reaching out
                  </p>
                  <p className="mt-2 max-w-[32ch] text-[14px] font-normal leading-[1.5] text-light-secondary">
                    A sourcing specialist from {siteConfig.name} will contact you
                    shortly.
                  </p>
                  <Button type="button" variant="primary" className="mt-8" onClick={handleClose}>
                    Done
                  </Button>
                </div>
              ) : (
                <form
                  key={formKey}
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                        Full Name
                      </span>
                      <input
                        name="fullName"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                        Email
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                      Company Name
                    </span>
                    <input
                      name="company"
                      autoComplete="organization"
                      placeholder="Company name"
                      className={fieldClass}
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                        City
                      </span>
                      <input
                        name="city"
                        autoComplete="address-level2"
                        placeholder="e.g. Karachi"
                        className={fieldClass}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                        Country
                      </span>
                      <input
                        name="country"
                        autoComplete="country-name"
                        placeholder="e.g. Pakistan"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                      Service Needed
                    </span>
                    <select name="service" defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {contactFormServices.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12px] font-normal uppercase tracking-[0.08em] text-light-primary">
                      Brief
                    </span>
                    <textarea
                      name="brief"
                      required
                      rows={4}
                      defaultValue={briefDefault}
                      placeholder="What do you need sourced? Specs, quantity, timeline…"
                      className={cn(fieldClass, "resize-none")}
                    />
                  </label>

                  {error && (
                    <p className="text-[13px] leading-[1.4] text-red-600">{error}</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={sending}
                    className="mt-2 w-full"
                  >
                    {sending ? "Sending..." : "Submit request"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
