import { siteConfig } from "@/lib/data";

export type ChatAction =
  | { type: "message"; text: string; replies?: string[] }
  | { type: "openQuote" }
  | { type: "openEmail" }
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
      "Hi there! 👋 I'm the AJ Sourcing assistant. What can I help you with today?",
    ],
    replies: [
      { label: "Get a quote", next: "quote" },
      { label: "What can you source?", next: "source" },
      { label: "How does it work?", next: "how" },
      { label: "Shipping options", next: "shipping" },
      { label: "Contact our team", next: "email" },
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
      { label: "Main topics", next: "welcome" },
    ],
  },
  "open-quote": {
    id: "open-quote",
    bot: ["Opening the quote form for you…"],
    replies: [{ label: "Main topics", next: "welcome" }],
  },
  source: {
    id: "source",
    bot: [
      "We source across industries: from auto parts and electronics to apparel, packaging, machinery, and custom OEM.",
      "Tell us the product, quantity, and destination, and we’ll match the right manufacturer.",
    ],
    replies: [
      { label: "Get a quote", next: "quote" },
      { label: "See services", next: "services" },
      { label: "Main topics", next: "welcome" },
    ],
  },
  services: {
    id: "services",
    bot: [
      "Our core support covers manufacturer sourcing, product coordination, quality inspection, freight, Pakistan delivery, and import support.",
    ],
    replies: [
      { label: "Get a quote", next: "quote" },
      { label: "Main topics", next: "welcome" },
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
      { label: "Get a quote", next: "quote" },
      { label: "Main topics", next: "welcome" },
    ],
  },
  "go-shipping": {
    id: "go-shipping",
    bot: ["Scrolling to Shipping Terms…"],
    replies: [{ label: "Main topics", next: "welcome" }],
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
      { label: "Get a quote", next: "quote" },
      { label: "Main topics", next: "welcome" },
    ],
  },
  "go-how": {
    id: "go-how",
    bot: ["Scrolling to How It Works…"],
    replies: [{ label: "Main topics", next: "welcome" }],
  },
  email: {
    id: "email",
    bot: [
      `Reach us at ${siteConfig.email}. You can also open the quote form and a specialist will reply within 48 hours.`,
    ],
    replies: [
      { label: "Open email", next: "open-email" },
      { label: "Open quote form", next: "open-quote" },
      { label: "Main topics", next: "welcome" },
    ],
  },
  "open-email": {
    id: "open-email",
    bot: ["Opening your email app…"],
    replies: [{ label: "Main topics", next: "welcome" }],
  },
};
