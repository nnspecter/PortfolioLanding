import type { MouseEvent } from "react";
import { m } from "framer-motion";
import type { SectionId } from "@/shared/config";
import { cn } from "@/shared/lib";

interface DesktopNavProps {
  items: ReadonlyArray<{ id: SectionId; label: string }>;
  activeId: SectionId;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => void;
}

export function DesktopNav({ items, activeId, onNavigate }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-7">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => onNavigate(e, item.id)}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "relative py-1 text-sm font-medium transition-colors",
              isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            {item.label}
            {isActive && (
              <m.span
                layoutId="activeNavUnderline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}
