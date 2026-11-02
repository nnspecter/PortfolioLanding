import type { ProjectCase } from "@/entities/project-case";
import { cn } from "@/shared/lib";

interface CaseTabsProps {
  cases: ProjectCase[];
  activeId: string;
  onSelect: (index: number) => void;
}

// Equal 2x2 grid on mobile and tablet, a single row from lg.
export function CaseTabs({ cases, activeId, onSelect }: CaseTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Кейсы"
      className="grid grid-cols-2 lg:flex lg:flex-wrap items-stretch lg:items-center gap-2 p-1.5 rounded-lg bg-[#121214] border border-[#26262B] w-full lg:w-fit"
    >
      {cases.map((projectCase, index) => {
        const Icon = projectCase.icon;
        const isActive = projectCase.id === activeId;

        return (
          <button
            key={projectCase.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(index)}
            className={cn(
              "inline-flex flex-col lg:flex-row items-center justify-center gap-1.5 lg:gap-2 px-2 lg:px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
              isActive
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-neutral-400 hover:text-white hover:bg-[#1A1A1E]"
            )}
          >
            <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-black" : "text-neutral-400")} />
            <span className="text-center">{projectCase.shortTitle}</span>
          </button>
        );
      })}
    </div>
  );
}
