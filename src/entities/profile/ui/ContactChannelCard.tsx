import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/shared/lib";
import { buttonVariants } from "@/shared/ui";
import type { ContactChannel } from "../model/types";

interface ContactChannelCardProps {
  channel: ContactChannel;
  // Extra controls placed before the main action, e.g. a copy button.
  actions?: ReactNode;
}

export function ContactChannelCard({ channel, actions }: ContactChannelCardProps) {
  const Icon = channel.icon;

  return (
    <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex flex-wrap items-center justify-between gap-3 hover:border-[#3E3E44] transition-colors">
      <div className="flex items-center gap-3.5 min-w-0">
        <span className="p-2.5 rounded bg-[#202024] text-white shrink-0">
          <Icon className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
            {channel.label}
          </div>
          <div className="text-sm font-semibold text-white break-words">{channel.value}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {actions}
        <a
          href={channel.href}
          {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
          className={cn(
            buttonVariants({
              variant: channel.primary ? "primary" : "secondary",
              size: "sm",
            }),
            "h-8 px-3 text-xs gap-1",
            !channel.primary && "font-mono"
          )}
        >
          {channel.actionLabel}
          {channel.external && <ArrowUpRight className="w-3.5 h-3.5" />}
        </a>
      </div>
    </div>
  );
}
