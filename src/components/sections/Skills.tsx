import { technicalSkills } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Bot, Cpu } from "lucide-react";

export function Skills() {
  const domainIcons: Record<string, React.ReactNode> = {
    "Frontend & Architecture": <Code2 className="w-4 h-4 text-white" />,
    "Backend & Базы данных": <Server className="w-4 h-4 text-white" />,
    "AI, Интеграции & Безопасность": <Bot className="w-4 h-4 text-white" />,
    "Инфраструктура & Процессы": <Cpu className="w-4 h-4 text-white" />,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#26262B]">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <Badge variant="outline">
            Технологический стек
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
            Стек инструментов и проверенные компетенции
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Технологии, которые ежедневно используются в продакшене для реализации высоконагруженных B2B-продуктов.
          </p>
        </div>

        {/* 2-Column Grid (Not 3 equal columns per Design.md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalSkills.map((category, idx) => (
            <div
              key={idx}
              className="surface-card p-6 border border-[#2E2E32] rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#26262B]">
                <span className="p-1.5 rounded bg-[#18181B] border border-[#26262B]">
                  {domainIcons[category.domain] || <Code2 className="w-4 h-4 text-white" />}
                </span>
                <h3 className="font-display font-bold text-base text-white tracking-tight">
                  {category.domain}
                </h3>
              </div>

              <div className="space-y-2">
                {category.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:border-[#3E3E44] transition-colors"
                  >
                    <span className="font-mono text-xs font-semibold text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {skill.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
