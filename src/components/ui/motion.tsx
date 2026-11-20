"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";
import {
  DURATION,
  EASE_OUT,
  OFFSET,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET.cardY, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.card, ease: EASE_OUT },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fade, ease: EASE_OUT },
  },
};

interface HeadingRevealProps {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function HeadingReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  immediate = false,
}: HeadingRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();
  const words = children.split(" ");
  const active = immediate || inView;

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.22em] inline-block overflow-hidden pb-[0.06em] -mb-[0.06em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={active ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: DURATION.heading,
              delay: delay + i * 0.055,
              ease: EASE_OUT,
            }}
            aria-hidden
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  immediate = false,
}: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();
  const active = immediate || inView;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={fadeUpVariants}
      transition={{ delay, duration: DURATION.fade, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeaderProps {
  label?: string | null;
  heading: string;
  subtext?: string;
  headingClassName?: string;
  subtextClassName?: string;
  labelClassName?: string;
  layout?: "stacked" | "split";
  dark?: boolean;
  headingAs?: ElementType;
}

export function SectionHeader({
  label,
  heading,
  subtext,
  headingClassName,
  subtextClassName,
  labelClassName,
  layout = "stacked",
  dark = false,
  headingAs = "h2",
}: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();
  const labelDelay = 0;
  const headingDelay = label ? 0.15 : 0;
  const subtextDelay = headingDelay + 0.35;

  const labelEl = label ? (
    reduced ? (
      <p className={labelClassName ?? (dark ? "label-dark mb-4" : "label mb-4")}>
        {label}
      </p>
    ) : (
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: labelDelay, ease: EASE_OUT }}
        className={labelClassName ?? (dark ? "label-dark mb-4" : "label mb-4")}
      >
        {label}
      </motion.p>
    )
  ) : null;

  const headingEl = (
    <HeadingReveal
      as={headingAs}
      className={headingClassName}
      delay={headingDelay}
    >
      {heading}
    </HeadingReveal>
  );

  const subtextEl = subtext ? (
    reduced ? (
      <p className={subtextClassName}>{subtext}</p>
    ) : (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: DURATION.fade, delay: subtextDelay, ease: EASE_OUT }}
        className={subtextClassName}
      >
        {subtext}
      </motion.p>
    )
  ) : null;

  if (layout === "split") {
    return (
      <div ref={ref} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          {labelEl}
          {headingEl}
        </div>
        {subtextEl}
      </div>
    );
  }

  return (
    <div ref={ref}>
      {labelEl}
      {headingEl}
      {subtextEl}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({
  children,
  className,
  stagger = STAGGER.card,
  delay = 0,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={cardVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: DURATION.image, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
}

export function MaskReveal({ children, className }: MaskRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** @deprecated Use FadeUp or SectionHeader */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeUp className={className} delay={delay}>
      {children}
    </FadeUp>
  );
}

export const cardHover =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover";

export const imageHover =
  "transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-[1.03]";

export const iconHover =
  "text-blue transition-all duration-300 group-hover:rotate-12 group-hover:border-orange group-hover:bg-orange group-hover:text-white";
