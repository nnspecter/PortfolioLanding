import { Mail, MessageSquare } from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "@/shared/ui";
import { profile } from "./profile";
import type { ContactChannel } from "./types";

export const contactChannels: ContactChannel[] = [
  {
    id: "telegram",
    label: "Telegram",
    value: profile.telegramHandle,
    href: profile.telegram,
    external: true,
    actionLabel: "Написать",
    copyValue: profile.telegramHandle,
    copyTitle: "Скопировать юзернейм",
    icon: MessageSquare,
    primary: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    external: true,
    actionLabel: "Перейти",
    copyValue: profile.github,
    copyTitle: "Скопировать ссылку",
    icon: GithubIcon,
  },
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
    actionLabel: "Написать",
    copyValue: profile.email,
    copyTitle: "Скопировать email",
    icon: Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp / Телефон",
    value: profile.phone,
    href: profile.whatsapp,
    external: true,
    actionLabel: "Написать",
    copyValue: profile.phone,
    copyTitle: "Скопировать номер телефона",
    icon: WhatsAppIcon,
  },
];
