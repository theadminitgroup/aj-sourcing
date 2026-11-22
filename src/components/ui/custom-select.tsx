"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

type CustomSelectProps = {
  name: string;
  options: readonly string[];
  placeholder?: string;
  className?: string;
  defaultValue?: string;
};

/**
 * Site-styled select — replaces native OS/browser dropdown chrome.
 */
export function CustomSelect({
  name,
  options,
  placeholder = "Select an option",
  className,
  defaultValue = "",
}: CustomSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectedLabel = value || placeholder;
  const isPlaceholder = !value;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectOption = (option: string) => {
    setValue(option);
    setOpen(false);
  };

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex(value ? Math.max(0, options.indexOf(value)) : 0);
    }
  };

  const onListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, (i < 0 ? -1 : i) + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, (i < 0 ? 0 : i) - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeIndex >= 0) selectOption(options[activeIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setOpen((o) => !o);
          setActiveIndex(value ? Math.max(0, options.indexOf(value)) : 0);
        }}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-[var(--radius-input)] border border-black/[0.08] bg-[#f7f7f5] px-4 py-3 text-left text-[15px] outline-none transition-[border-color,box-shadow,background-color]",
          "focus:border-[#0D0F12]/35 focus:bg-white focus:shadow-[0_0_0_3px_rgba(13,15,18,0.1)]",
          open && "border-[#0D0F12]/35 bg-white shadow-[0_0_0_3px_rgba(13,15,18,0.1)]",
          isPlaceholder ? "text-light-muted-text" : "text-light-primary"
        )}
        style={{ fontWeight: 400 }}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.75}
          className={cn(
            "shrink-0 text-light-secondary transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            tabIndex={-1}
            aria-activedescendant={
              activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined
            }
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={onListKeyDown}
            className="absolute left-0 right-0 z-20 mt-1.5 max-h-60 overflow-auto border border-black/[0.08] bg-white py-1 shadow-[0_12px_40px_rgba(13,15,18,0.12)] outline-none"
            style={{ borderRadius: 2 }}
          >
            {options.map((option, index) => {
              const selected = option === value;
              const active = index === activeIndex;
              return (
                <li
                  key={option}
                  id={`${listId}-opt-${index}`}
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectOption(option)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-[15px] text-light-primary transition-colors",
                    active && "bg-[#f7f7f5]",
                    selected && "text-light-primary"
                  )}
                  style={{ fontWeight: 400 }}
                >
                  <span>{option}</span>
                  {selected && (
                    <Check
                      size={15}
                      strokeWidth={2}
                      className="shrink-0 text-light-primary"
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
