"use client";

import { ContactProvider } from "@/components/contact/contact-context";
import { ContactFormDialog } from "@/components/contact/contact-form-dialog";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      {children}
      <ContactFormDialog />
    </ContactProvider>
  );
}
