"use client";

import { useContact } from "@/components/contact/contact-context";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { FormEvent, useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-black/[0.08] bg-[#f7f7f5] px-4 py-3 text-[15px] text-light-primary outline-none transition-[border-color,box-shadow,background-color] placeholder:text-light-muted-text focus:border-blue/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,113,227,0.12)]";

export function ContactFormDialog() {
  const { isOpen, closeContact } = useContact();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleClose = () => {
    closeContact();
    window.setTimeout(() => {
      setSubmitted(false);
      setSending(false);
    }, 280);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
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
            className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.18)] md:max-h-[90vh] md:max-w-[520px] md:rounded-[28px] md:shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
          >
            <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-black/10 md:hidden" />

            <div className="flex items-start justify-between gap-4 px-6 pb-2 pt-5 md:px-8 md:pt-7">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-orange">
                  Free quote
                </p>
                <h2
                  id="contact-form-title"
                  className="mt-1 text-[22px] font-semibold tracking-[-0.02em] text-light-primary md:text-[24px]"
                >
                  {submitted ? "Request received" : "Tell us what you need"}
                </h2>
                <p className="mt-1.5 text-[14px] leading-[1.45] text-light-secondary">
                  {submitted
                    ? "We'll review your brief and get back within 48 hours."
                    : "Share a few details and what you'd like sourced. We'll reply within 48 hours."}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-light-primary transition-colors hover:bg-black/[0.08]"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 pb-8 pt-4 md:px-8 md:pb-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <CheckCircle2 size={28} strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 text-[16px] font-medium text-light-primary">
                    Thanks for reaching out
                  </p>
                  <p className="mt-2 max-w-[32ch] text-[14px] leading-[1.5] text-light-secondary">
                    A sourcing specialist from {siteConfig.name} will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-8 inline-flex h-11 items-center rounded-full bg-blue px-6 text-[14px] font-semibold text-white transition-colors hover:bg-blue/90"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-medium text-light-primary">
                        Full name
                      </span>
                      <input
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-medium text-light-primary">
                        Company
                      </span>
                      <input
                        name="company"
                        autoComplete="organization"
                        placeholder="Company name"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-medium text-light-primary">
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
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[13px] font-medium text-light-primary">
                        Phone
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+92 300 0000000"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-medium text-light-primary">
                      What do you want us to source?
                    </span>
                    <textarea
                      name="sourcing"
                      required
                      rows={4}
                      placeholder="Product type, quantity, target price, destination..."
                      className={cn(fieldClass, "resize-none")}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-blue text-[15px] font-semibold text-white transition-colors hover:bg-blue/90 disabled:opacity-70"
                  >
                    {sending ? "Sending..." : "Submit request"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
