"use client";

import { useContact } from "@/components/contact/contact-context";
import { siteConfig } from "@/lib/data";
import { chatNodes, chatWelcomeId, type ChatNode } from "@/lib/chat-flow";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Headphones, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [nodeId, setNodeId] = useState(chatWelcomeId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [booted, setBooted] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const reducedMotion = useReducedMotion();
  const { openContact } = useContact();

  const node: ChatNode = chatNodes[nodeId] ?? chatNodes[chatWelcomeId];

  const pushBot = useCallback((texts: string[]) => {
    setMessages((prev) => [
      ...prev,
      ...texts.map((text, i) => ({
        id: `bot-${Date.now()}-${i}`,
        role: "bot" as const,
        text,
      })),
    ]);
  }, []);

  useEffect(() => {
    if (!open || booted) return;
    pushBot(chatNodes[chatWelcomeId].bot);
    setBooted(true);
  }, [open, booted, pushBot]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [messages, nodeId, open, reducedMotion]);

  const runSideEffect = (nextId: string) => {
    if (nextId === "open-quote") {
      openContact();
      return;
    }
    if (nextId === "open-email") {
      window.location.href = `mailto:${siteConfig.email}`;
      return;
    }
    if (nextId === "go-shipping") {
      document.getElementById("shipping")?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
      });
      return;
    }
    if (nextId === "go-how") {
      document.getElementById("how-it-works")?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
      });
      return;
    }
  };

  const onReply = (label: string, next: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", text: label },
    ]);

    runSideEffect(next);

    const nextNode = chatNodes[next];
    if (!nextNode) return;

    window.setTimeout(
      () => {
        setNodeId(next);
        pushBot(nextNode.bot);
      },
      reducedMotion ? 0 : 220
    );
  };

  const panelTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[90] flex flex-col items-end gap-3 md:bottom-9 md:right-9">
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="AJ Sourcing Assistant"
            initial={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 8, scale: 0.98 }
            }
            transition={panelTransition}
            className="pointer-events-auto flex w-[min(390px,calc(100vw-2rem))] max-h-[min(520px,calc(100dvh-5.5rem))] flex-col overflow-hidden border border-black/[0.06] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            style={{ borderRadius: 2 }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-black/[0.06] bg-[#0a0a0a] px-4 py-3 text-white">
              <div className="min-w-0">
                <p className="truncate text-[13px] font-normal tracking-[0.02em] text-white">
                  AJ Sourcing Assistant
                </p>
                <p className="truncate text-[12px] font-normal text-white/55">
                  Quick answers · Guided support
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/10 text-white/80 transition-colors duration-200 hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                style={{ borderRadius: 2 }}
              >
                <X size={16} aria-hidden />
              </button>
            </div>

            {/* Grows with messages; scrolls once it hits the panel max */}
            <div
              ref={listRef}
              className="min-h-0 flex-1 basis-auto overflow-y-auto overscroll-contain bg-[#f7f7f5] px-3.5 py-3"
              aria-live="polite"
            >
              <div className="flex flex-col gap-2.5">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "flex",
                      m.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[88%] px-3 py-2 text-[13.5px] font-normal leading-[1.45]",
                        m.role === "user"
                          ? "bg-[#0D0F12] text-white"
                          : "border border-black/[0.04] bg-white text-light-primary shadow-card"
                      )}
                      style={{ borderRadius: 2 }}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 border-t border-black/[0.06] bg-white px-3 py-2.5">
              <div
                className="flex flex-wrap gap-1.5"
                role="group"
                aria-label="Suggested replies"
              >
                {node.replies.map((reply) => (
                  <button
                    key={`${nodeId}-${reply.label}-${reply.next}`}
                    type="button"
                    onClick={() => onReply(reply.label, reply.next)}
                    className="border border-black/[0.08] bg-[#f7f7f5] px-3 py-2 text-[13px] font-normal leading-snug text-light-primary transition-colors duration-200 hover:border-[#0D0F12]/20 hover:bg-black/[0.03] hover:text-[#0D0F12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0F12]/40 active:bg-black/[0.05]"
                    style={{ borderRadius: 2 }}
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            aria-label="Open AJ Sourcing assistant"
            aria-controls={panelId}
            aria-expanded={false}
            onClick={() => setOpen(true)}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.96 }}
            className="pointer-events-auto flex h-14 w-14 items-center justify-center overflow-hidden bg-[#0D0F12] text-white shadow-[0_12px_32px_rgba(13,15,18,0.28)] transition-colors duration-200 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0F12]"
            style={{ borderRadius: 2 }}
          >
            <Headphones size={24} strokeWidth={1.75} aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
