"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ContactPrefill = {
  category?: string;
  product?: string;
};

type ContactContextValue = {
  isOpen: boolean;
  prefill: ContactPrefill | null;
  openContact: (prefill?: ContactPrefill) => void;
  closeContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<ContactPrefill | null>(null);

  const openContact = useCallback((next?: ContactPrefill) => {
    setPrefill(next ?? null);
    setIsOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => setPrefill(null), 280);
  }, []);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#contact") {
        setPrefill(null);
        setIsOpen(true);
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, prefill, openContact, closeContact }),
    [isOpen, prefill, openContact, closeContact]
  );

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return ctx;
}
