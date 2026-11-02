import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseDetails, projectCases } from "@/entities/project-case";
import { SECTION_ID } from "@/shared/config";
import { Reveal, Section, SectionHeading } from "@/shared/ui";
import { CaseTabs } from "./CaseTabs";

const arrowButtonStyles =
  "p-2.5 rounded-lg border border-[#2E2E32] bg-[#121214] text-neutral-400 hover:text-white hover:bg-[#1C1C20] transition-colors cursor-pointer";

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

export function CasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = projectCases[activeIndex];
  const total = projectCases.length;

  const showPrev = () => setActiveIndex((index) => (index - 1 + total) % total);
  const showNext = () => setActiveIndex((index) => (index + 1) % total);

  return (
    <Section id={SECTION_ID.cases} className="py-20 md:py-24">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Коммерческие кейсы"
          title="Реализованные бизнес проекты"
          description="Практический опыт разработки B2B продуктов, подтвержденный прохождением официальных аудитов, снижением операционных затрат и стабильной работой под нагрузкой."
        />

        <div className="hidden sm:flex items-center gap-2">
          <button type="button" onClick={showPrev} aria-label="Предыдущий кейс" className={arrowButtonStyles}>
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-neutral-500 px-1">
            {formatIndex(activeIndex)} / {formatIndex(total - 1)}
          </span>
          <button type="button" onClick={showNext} aria-label="Следующий кейс" className={arrowButtonStyles}>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mb-8">
        <CaseTabs cases={projectCases} activeId={activeCase.id} onSelect={setActiveIndex} />
      </Reveal>

      {/* Keyed so the card fades in again when the case changes. */}
      <Reveal key={activeCase.id} className="surface-card p-6 sm:p-8 border border-[#2E2E32] rounded-lg">
        <CaseDetails projectCase={activeCase} />
      </Reveal>
    </Section>
  );
}
