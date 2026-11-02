import type { MouseEvent } from "react";
import { ArrowUpRight, Check, Download } from "lucide-react";
import { DownloadResumeLink } from "@/features/download-resume";
import { SECTION_ID, type SectionId } from "@/shared/config";
import { cn } from "@/shared/lib";
import { buttonVariants } from "@/shared/ui";

interface MobileMenuProps {
  items: ReadonlyArray<{ id: SectionId; label: string }>;
  activeId: SectionId;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => void;
  onClose: () => void;
}

export function MobileMenu({ items, activeId, onNavigate, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden border-b border-[#26262B] bg-[#0E0E10] px-6 py-5 space-y-4">
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => onNavigate(e, item.id)}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#1C1C20] text-white"
                  : "text-neutral-400 hover:text-white hover:bg-[#161618]"
              )}
            >
              <span>{item.label}</span>
              {isActive && <Check className="w-3.5 h-3.5 text-white" />}
            </a>
          );
        })}
      </nav>

      <div className="pt-3 border-t border-[#26262B] flex flex-col gap-2">
        <DownloadResumeLink
          onClick={onClose}
          className={cn(buttonVariants({ variant: "outline" }), "w-full gap-2 text-xs")}
        >
          <Download className="w-3.5 h-3.5" />
          Скачать резюме (PDF)
        </DownloadResumeLink>
        <a
          href={`#${SECTION_ID.contact}`}
          onClick={(e) => onNavigate(e, SECTION_ID.contact)}
          className={cn(buttonVariants(), "w-full gap-1 text-xs")}
        >
          Связаться
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
