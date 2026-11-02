import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Badge, Reveal } from "@/shared/ui";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  badge: string;
  note: string;
  noteIcon: LucideIcon;
  delay?: number;
  children: ReactNode;
}

export function InfoCard({ icon: Icon, title, badge, note, noteIcon: NoteIcon, delay, children }: InfoCardProps) {
  return (
    <Reveal
      delay={delay}
      className="surface-card p-6 sm:p-7 border border-[#2E2E32] rounded-lg flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-white" />
            <h3 className="font-display font-bold text-base text-white tracking-tight">{title}</h3>
          </div>
          <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
            {badge}
          </Badge>
        </div>

        <div className="space-y-2.5">{children}</div>
      </div>

      <div className="pt-4 flex items-center gap-2 text-xs font-mono text-neutral-400 border-t border-[#26262B]">
        <NoteIcon className="w-3.5 h-3.5 text-white shrink-0" />
        <span>{note}</span>
      </div>
    </Reveal>
  );
}
