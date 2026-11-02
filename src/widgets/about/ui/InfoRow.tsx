import type { ReactNode } from "react";
import { cn } from "@/shared/lib";

interface InfoRowProps {
  title: string;
  meta?: string;
  description: string;
  monoDescription?: boolean;
  aside: ReactNode;
}

// Title with a short description on the left and a chip or link on the right.
export function InfoRow({ title, meta, description, monoDescription, aside }: InfoRowProps) {
  return (
    <div className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#3E3E44] transition-colors min-h-[68px]">
      <div className="space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-neutral-100">
            {title}
          </span>
          {meta && <span className="text-[11px] font-mono text-neutral-400">• {meta}</span>}
        </div>
        <div className={cn("text-[11px] sm:text-xs text-neutral-400", monoDescription && "font-mono")}>
          {description}
        </div>
      </div>
      {aside}
    </div>
  );
}

export function InfoChip({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] text-neutral-300 text-xs font-mono shrink-0">
      {children}
    </div>
  );
}
