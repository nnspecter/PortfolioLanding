import type { ComponentType } from "react";

export interface Profile {
  name: string;
  title: string;
  roleSubtitle: string;
  location: string;
  github: string;
  telegram: string;
  telegramHandle: string;
  email: string;
  phone: string;
  whatsapp: string;
  resume: {
    url: string;
    fileName: string;
  };
}

export interface ProfileHighlight {
  value: string;
  label: string;
  description: string;
}

export interface TechStackItem {
  area: string;
  tools: string;
}

export interface ContactChannel {
  id: "telegram" | "github" | "email" | "whatsapp";
  label: string;
  value: string;
  href: string;
  external: boolean;
  actionLabel: string;
  copyValue: string;
  copyTitle: string;
  icon: ComponentType<{ className?: string }>;
  primary?: boolean;
}
