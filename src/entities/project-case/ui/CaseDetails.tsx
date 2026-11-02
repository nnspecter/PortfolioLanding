import { Check, TrendingUp } from "lucide-react";
import { Badge } from "@/shared/ui";
import type { ProjectCase } from "../model/types";

interface CaseDetailsProps {
  projectCase: ProjectCase;
}

// Business story on the left, technical spec on the right.
export function CaseDetails({ projectCase }: CaseDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      <div className="lg:col-span-7 space-y-5">
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <span className="text-xs font-mono text-neutral-500">{projectCase.period}</span>
          <span className="hidden md:inline text-neutral-700">|</span>
          <span className="text-xs font-mono text-neutral-400">{projectCase.role}</span>
        </div>

        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-snug">
            {projectCase.title}
          </h3>
          <p className="text-sm font-medium text-neutral-300">{projectCase.tagline}</p>
        </div>

        <div className="space-y-3 text-sm text-neutral-400 leading-relaxed border-t border-[#26262B] pt-4">
          <p>
            <strong className="text-neutral-200">Задача бизнеса:</strong> {projectCase.problem}
          </p>
          <p>
            <strong className="text-neutral-200">Решение:</strong> {projectCase.solution}
          </p>
        </div>

        <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] space-y-1">
          <div className="font-mono text-xs font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-white shrink-0" />
            Коммерческий результат:
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {projectCase.businessResult}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5 pt-1">
          {projectCase.tags.map((tag) => (
            <li
              key={tag}
              className="px-2 py-0.5 rounded bg-[#18181B] border border-[#26262B] text-[11px] font-mono text-neutral-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5 my-auto">
        <div className="p-5 rounded-md bg-[#161618] border border-[#26262B] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
            <span className="font-mono text-xs text-neutral-400">Техническая спецификация</span>
            {projectCase.metaBadge && (
              <Badge variant="outline" className="text-[11px] font-mono text-neutral-300">
                {projectCase.metaBadge}
              </Badge>
            )}
          </div>

          <ul className="space-y-2">
            {projectCase.techDetails.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2.5 text-xs text-neutral-300 bg-[#121214] p-3 rounded border border-[#26262B]"
              >
                <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
