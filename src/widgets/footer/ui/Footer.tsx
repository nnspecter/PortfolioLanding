import { ArrowUp, Mail, Send } from "lucide-react";
import { profile } from "@/entities/profile";
import { cn } from "@/shared/lib";
import { GithubIcon, iconButtonStyles, WhatsAppIcon } from "@/shared/ui";

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: GithubIcon, external: true },
  { label: "Telegram", href: profile.telegram, icon: Send, external: true },
  { label: "WhatsApp", href: profile.whatsapp, icon: WhatsAppIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-[#26262B] py-10">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-sm text-white">
            {profile.name} • {profile.roleSubtitle}
          </div>
          <div className="text-xs text-neutral-500 font-mono">
            {profile.location} • Fast Time-to-Market
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {socialLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={iconButtonStyles}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <button
            type="button"
            onClick={scrollToTop}
            title="Наверх"
            aria-label="Наверх"
            className={cn(iconButtonStyles, "cursor-pointer ml-auto md:ml-2")}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
