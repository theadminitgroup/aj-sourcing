import { siteConfig } from "@/lib/data";

export type ChatAction =
  | { type: "message"; text: string; replies?: string[] }
  | { type: "openQuote" }
  | { type: "openWhatsApp" }
  | { type: "scroll"; target: string };

export type ChatNode = {
  id: string;
  bot: string[];
  replies: { label: string; next: string }[];
};

export const chatWelcomeId = "welcome";

export const chatNodes: Record<string, ChatNode> = {
  welcome: {
    id: "welcome",
    bot: [
      "Hi. I’m the AJ Sourcing assistant.",
      "I can help you get a quote, explain shipping terms, or walk you through how we work.",
    ],
    replies: [
      { label: "I want a quote", next: "quote" },
      { label: "What can you source?", next: "source" },
      { label: "Explain shipping terms", next: "shipping" },
      { label: "Tell me how it works", next: "how" },
      { label: "Contact on WhatsApp", next: "whatsapp" },
    ],
  },
  quote: {
    id: "quote",
    bot: [
      "Great. Share your product brief and we’ll guide the next step.",
      "Open the quote form and a specialist will reply within 48 hours.",
    ],
    replies: [
      { label: "Open quote form", next: "open-quote" },
      { label: "Back to menu", next: "welcome" },
    ],
  },
  "open-quote": {
    id: "open-quote",
    bot: ["Opening the quote form for you…"],
    replies: [{ label: "Back to menu", next: "welcome" }],
  },
  source: {
    id: "source",
    bot: [
      "We source across industries: from auto parts and electronics to apparel, packaging, machinery, and custom OEM.",
      "Tell us the product, quantity, and destination, and we’ll match the right manufacturer.",
    ],
    replies: [
      { label: siteConfig.primaryCta, next: "quote" },
      { label: "See services", next: "services" },
      { label: "Back to menu", next: "welcome" },
    ],
  },
  services: {
    id: "services",
    bot: [
      "Our core support covers manufacturer sourcing, product coordination, quality inspection, freight, Pakistan delivery, and import support.",
    ],
    replies: [
      { label: siteConfig.primaryCta, next: "quote" },
      { label: "Back to menu", next: "welcome" },
    ],
  },
  shipping: {
    id: "shipping",
    bot: [
      "EXW: factory pickup only.",
      "FOB: goods loaded at the origin port.",
      "CIF: freight and insurance to the destination port.",
      "DDP: door to door with duties included where applicable.",
      "For Pakistan we can ship by sea or truck; most other destinations go by sea or air.",
    ],
    replies: [
      { label: "View shipping section", next: "go-shipping" },
      { label: siteConfig.primaryCta, next: "quote" },
      { label: "Back to menu", next: "welcome" },
    ],
  },
  "go-shipping": {
    id: "go-shipping",
    bot: ["Scrolling to Shipping Terms…"],
    replies: [{ label: "Back to menu", next: "welcome" }],
  },
  how: {
    id: "how",
    bot: [
      "1. Share your need",
      "2. We source & quote",
      "3. Inspect & confirm",
      "4. Ship & deliver",
    ],
    replies: [
      { label: "See full process", next: "go-how" },
      { label: siteConfig.primaryCta, next: "quote" },
      { label: "Back to menu", next: "welcome" },
    ],
  },
  "go-how": {
    id: "go-how",
    bot: ["Scrolling to How It Works…"],
    replies: [{ label: "Back to menu", next: "welcome" }],
  },
  whatsapp: {
    id: "whatsapp",
    bot: [
      "You can message us on WhatsApp for a quick chat with the team.",
    ],
    replies: [
      { label: "Open WhatsApp", next: "open-whatsapp" },
      { label: "Back to menu", next: "welcome" },
    ],
  },
  "open-whatsapp": {
    id: "open-whatsapp",
    bot: ["Opening WhatsApp…"],
    replies: [{ label: "Back to menu", next: "welcome" }],
  },
};
