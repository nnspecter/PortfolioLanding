import { sellingCases } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, MessageSquare, Layers, PhoneCall } from "lucide-react";

export function KeyCases() {
  const iconMap: Record<string, React.ReactNode> = {
    "meta-tech-provider": <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    "omnichannel-ai": <MessageSquare className="w-5 h-5 text-sky-400" />,
    "erp-crm-fsd": <Layers className="w-5 h-5 text-neutral-300" />,
    "webrtc-mobile": <PhoneCall className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="cases" className="py-20 md:py-28 border-b border-[#26262B]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <Badge variant="outline">
            Коммерческие кейсы
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
            Реализованные проекты и влияние на бизнес
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Практический опыт разработки B2B SaaS, подтвержденный прохождением официальных аудитов, снижением операционных затрат и стабильной работой под нагрузкой.
          </p>
        </div>

        {/* Zig-Zag Alternating Rows per Design.md */}
        <div className="space-y-20 md:space-y-28">
          {sellingCases.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`md:col-span-6 space-y-5 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-md bg-[#18181B] border border-[#2E2E32]">
                      {iconMap[item.id]}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {item.company} • {item.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                      {item.role}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-[-0.03em] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-300">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Problem & Solution block */}
                  <div className="space-y-3 text-sm text-neutral-400 leading-relaxed">
                    <div>
                      <strong className="text-neutral-200">Задача бизнеса:</strong>{" "}
                      {item.problem}
                    </div>
                    <div>
                      <strong className="text-neutral-200">Решение:</strong>{" "}
                      {item.solution}
                    </div>
                  </div>

                  {/* Business Result Card */}
                  <div className="p-3.5 rounded-lg bg-[#141416] border border-[#2E2E32] text-xs leading-relaxed space-y-1">
                    <div className="font-mono font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Коммерческий результат:
                    </div>
                    <p className="text-neutral-300">
                      {item.businessResult}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#18181B] border border-[#26262B] text-[11px] font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Spec & Visual Card Column */}
                <div
                  className={`md:col-span-6 ${
                    isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="surface-card p-6 border border-[#2E2E32] rounded-lg space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                      <span className="font-mono text-xs text-neutral-400">
                        case-implementation.spec
                      </span>
                      {item.metaBadge && (
                        <Badge variant="default" className="text-[11px]">
                          {item.metaBadge}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Техническая спецификация:
                      </div>
                      <ul className="space-y-2">
                        {item.techDetails.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 bg-[#161618] p-3 rounded-md border border-[#26262B]"
                          >
                            <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                            <span className="leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-neutral-500 flex items-center justify-between border-t border-[#26262B]">
                      <span>Role: {item.role}</span>
                      <span>Verified in Production</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

