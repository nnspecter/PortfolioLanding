import { useState } from "react";
import { sellingCases } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ShieldCheck, 
  MessageSquare, 
  Layers, 
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  TrendingUp
} from "lucide-react";

export function KeyCases() {
  const [activeId, setActiveId] = useState<string>("meta-tech-provider");

  const caseTabs = [
    { id: "meta-tech-provider", label: "Meta Tech Provider", icon: ShieldCheck },
    { id: "omnichannel-ai", label: "AI + Омниканальность", icon: MessageSquare },
    { id: "erp-crm-fsd", label: "ERP / CRM системы", icon: Layers },
    { id: "webrtc-mobile", label: "WebRTC & SIP телефония", icon: PhoneCall },
  ];

  const activeIndex = sellingCases.findIndex((c) => c.id === activeId);
  const activeCase = sellingCases[activeIndex >= 0 ? activeIndex : 0];

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % sellingCases.length;
    setActiveId(sellingCases[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + sellingCases.length) % sellingCases.length;
    setActiveId(sellingCases[prevIndex].id);
  };

  return (
    <section id="cases" className="py-20 md:py-24 border-b border-[#26262B]">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl mx-auto md:mx-0 space-y-3 text-center md:text-left">
            <Badge variant="outline">
              Коммерческие кейсы
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
              Реализованные бизнес проекты 
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Практический опыт разработки B2B продуктов, подтвержденный прохождением официальных аудитов, снижением операционных затрат и стабильной работой под нагрузкой.
            </p>
          </div>

          {/* Prev/Next arrows for quick navigation */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-lg border border-[#2E2E32] bg-[#121214] text-neutral-400 hover:text-white hover:bg-[#1C1C20] transition-colors cursor-pointer"
              aria-label="Предыдущий кейс"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-neutral-500 px-1">
              0{activeIndex + 1} / 0{sellingCases.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-lg border border-[#2E2E32] bg-[#121214] text-neutral-400 hover:text-white hover:bg-[#1C1C20] transition-colors cursor-pointer"
              aria-label="Следующий кейс"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Button Group / Tabs Control */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-stretch lg:items-center gap-2 p-1.5 rounded-lg bg-[#121214] border border-[#26262B] w-full lg:w-fit mb-8">
          {caseTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeId;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-[#1A1A1E]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-neutral-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Compact Active Case Presentation */}
        <div
          key={activeCase.id}
          className="surface-card p-6 sm:p-8 border border-[#2E2E32] rounded-lg transition-opacity duration-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Business context & results (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                <span className="text-xs font-mono text-neutral-500">
                  {activeCase.period}
                </span>
                <span className="hidden md:inline text-neutral-700">|</span>
                <span className="text-xs font-mono text-neutral-400">
                  {activeCase.role}
                </span>
              </div>

              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-snug">
                  {activeCase.title}
                </h3>
                <p className="text-sm font-medium text-neutral-300">
                  {activeCase.tagline}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-3 text-sm text-neutral-400 leading-relaxed border-t border-[#26262B] pt-4">
                <div>
                  <strong className="text-neutral-200">Задача бизнеса:</strong>{" "}
                  {activeCase.problem}
                </div>
                <div>
                  <strong className="text-neutral-200">Решение:</strong>{" "}
                  {activeCase.solution}
                </div>
              </div>

              {/* Commercial Result Highlight */}
              <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] space-y-1">
                <div className="font-mono text-xs font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-white shrink-0" />
                  Коммерческий результат:
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {activeCase.businessResult}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeCase.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[#18181B] border border-[#26262B] text-[11px] font-mono text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Technical Spec Box (5 cols) */}
            <div className="lg:col-span-5 my-auto">
              <div className="p-5 rounded-md bg-[#161618] border border-[#26262B] space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                  <span className="font-mono text-xs text-neutral-400">
                    Техническая спецификация
                  </span>
                  {activeCase.metaBadge && (
                    <Badge variant="outline" className="text-[11px] font-mono text-neutral-300">
                      {activeCase.metaBadge}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2.5">
                  <ul className="space-y-2">
                    {activeCase.techDetails.map((detail, dIdx) => (
                      <li
                        key={dIdx}
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

          </div>
        </div>

      </div>
    </section>
  );
}
