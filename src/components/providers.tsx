"use client";

import { ContactProvider } from "@/components/contact/contact-context";
import { ContactFormDialog } from "@/components/contact/contact-form-dialog";
import { AssistantWidget } from "@/components/chat/assistant-widget";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      {children}
      <ContactFormDialog />
      <AssistantWidget />
    </ContactProvider>
  );
}
