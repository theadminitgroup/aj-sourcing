export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  heading: 1,
  fade: 0.7,
  card: 0.65,
  image: 0.8,
  cta: 0.8,
} as const;

export const STAGGER = {
  card: 0.1,
  section: 0.12,
} as const;

export const OFFSET = {
  cardY: 25,
} as const;

export const VIEWPORT = { once: true, margin: "-80px" as const };
