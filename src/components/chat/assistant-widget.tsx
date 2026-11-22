"use client";

import { useContact } from "@/components/contact/contact-context";
import { siteConfig } from "@/lib/data";
import { chatNodes, chatWelcomeId, type ChatNode } from "@/lib/chat-flow";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Headphones, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

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
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, nodeId, open]);

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
      document.getElementById("shipping")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (nextId === "go-how") {
      document
        .getElementById("how-it-works")
        ?.scrollIntoView({ behavior: "smooth" });
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

    window.setTimeout(() => {
      setNodeId(next);
      pushBot(nextNode.bot);
    }, 220);
  };

  return (
    <div className="pointer-events-none fixed bottom-7 right-7 z-[90] flex flex-col items-end gap-3 md:bottom-9 md:right-9">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto flex h-[min(520px,70dvh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden border border-black/[0.06] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            style={{ borderRadius: 2 }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] bg-[#0a0a0a] px-4 py-3.5 text-white">
              <div className="min-w-0">
                <p className="truncate text-[13px] font-normal uppercase tracking-[0.1em]">
                  AJ Sourcing Assistant
                </p>
                <p className="truncate text-[12px] font-normal text-white/55">
                  Guided help · usually replies instantly
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center bg-white/10 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                style={{ borderRadius: 2 }}
              >
                <X size={16} />
              </button>
            </div>

            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto bg-[#f7f7f5] px-3.5 py-4"
            >
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
                      "max-w-[85%] px-3.5 py-2.5 text-[13.5px] font-normal leading-[1.45]",
                      m.role === "user"
                        ? "bg-[#0D0F12] text-white"
                        : "bg-white text-light-primary shadow-card"
                    )}
                    style={{ borderRadius: 2 }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-black/[0.06] bg-white px-3 py-3">
              <div className="flex flex-wrap gap-2">
                {node.replies.map((reply) => (
                  <button
                    key={reply.label}
                    type="button"
                    onClick={() => onReply(reply.label, reply.next)}
                    className="border border-black/[0.08] bg-[#f7f7f5] px-3 py-1.5 text-[12px] font-normal uppercase tracking-[0.06em] text-light-primary transition-colors hover:border-[#0D0F12]/25 hover:bg-black/[0.04] hover:text-[#0D0F12]"
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

      <motion.button
        type="button"
        aria-label={open ? "Close assistant" : "Open assistant"}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.96 }}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center overflow-hidden bg-[#0D0F12] text-white shadow-[0_12px_32px_rgba(13,15,18,0.28)] transition-colors duration-200 hover:bg-black"
        style={{ borderRadius: 2 }}
      >
        {open ? (
          <X size={22} strokeWidth={1.75} />
        ) : (
          <Headphones size={24} strokeWidth={1.75} aria-hidden />
        )}
      </motion.button>
    </div>
  );
}
