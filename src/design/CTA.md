# AJ Sourcing — CTA Design System

**Source of truth (code):** `src/design/cta.ts`  
**Components that must use it:**

- `src/components/ui/button.tsx` — generic `<button>`
- `src/components/ui/button-link.tsx` — `<Link>` styled as CTA
- `src/components/contact/quote-button.tsx` — opens contact / quote dialog

Do **not** hand-roll CTA colors, borders, or hover styles in section files. Pick a `variant` + `size` from this system. No arrows inside CTAs.

---

## Variants

| Variant | When to use | Default | Hover | Focus |
|---------|-------------|---------|-------|-------|
| `primary` | Default CTA on **light** surfaces | Fill `#0D0F12`, text white | Slightly darker fill (`#000`) — stays filled | 2px ring `#0D0F12` @ 30% |
| `secondary` | Secondary action on **light** | Outline `#0D0F12`, transparent fill, text `#0D0F12` | Light tint fill — stays outline | Same ring |
| `onDark` | Primary CTA on **dark / image** | Fill white, text `#0D0F12` | Soft grey fill — stays filled | 2px ring white @ 40% |
| `outlineOnDark` | Secondary on **dark / image** | Outline white/50, text white | Stronger border + light wash — stays outline | Same white ring |

Hover never swaps primary ↔ secondary. Each variant only deepens within its own style.

**Banned**

- Blue (`#0071E3` / `bg-blue`) on CTAs
- Gold / yellow (`#F3D3A1`) on CTAs
- Inline arrows (`→`, `ArrowRight`) inside CTA labels
- One-off `className` color overrides that fight the variant

---

## Sizes

| Size | Height / padding | Type |
|------|------------------|------|
| `nav` | `h-11` + `px-6` | 13px / uppercase / tracking 0.1em (top + sticky nav only) |
| `sm` | `px-5 py-2.5` | 12px / uppercase / tracking 0.12em |
| `default` | `px-5 py-3` | 13px / uppercase / tracking 0.1em |
| `lg` | `px-7 py-3.5` (min-height ~52px) | 13px / uppercase / tracking 0.1em |

Font weight is always **400**. Corner radius is always **2px**.

---

## States

| State | Behavior |
|-------|----------|
| Default | Variant colors above |
| Hover | Color shift only (no scale, no shadow jump) |
| Focus-visible | Ring + offset 2px (keyboard) |
| Disabled | `opacity: 0.5`, no pointer |
| Active / pressed | Same as hover (no extra style) |

---

## Usage

```tsx
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { QuoteButton } from "@/components/contact/quote-button";

// Light section — primary action
<QuoteButton variant="primary" size="lg">Get a Free Quote</QuoteButton>

// Light section — secondary
<ButtonLink href="#services" variant="secondary" size="lg">Our Services</ButtonLink>

// Dark / image CTA band
<QuoteButton variant="onDark" size="lg">Get a Free Quote</QuoteButton>
<QuoteButton variant="outlineOnDark" size="lg">Talk to Us</QuoteButton>
```

If a section needs a different look, **change `src/design/cta.ts`** — do not fork styles in the section.
