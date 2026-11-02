import { personalInfo, keyMetrics } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Download, CheckCircle2, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 2xl:pt-36 2xl:pb-20 border-b border-[#26262B]">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16 flex flex-col justify-center gap-10 sm:gap-12 lg:gap-14 2xl:gap-16">
        {/* Split-screen Grid per Design.md */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          
          {/* Left Column: Selling Text & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#2E2E32] bg-[#121214] text-xs font-mono text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Доступен для B2B SaaS и Full-time</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400">{personalInfo.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[clamp(2.3rem,4.5vw,3.8rem)] font-bold text-white tracking-[-0.04em] leading-[1.08]">
              Fullstack-разработчик и инженер AI-систем
            </h1>

            {/* Clean Subtitle per user instruction */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-[72ch] leading-relaxed">
              Проектирую высоконагруженные B2B SaaS и ERP-экосистемы. Интегрирую AI-агентов и выстраиваю масштабируемую архитектуру проектов. Закрываю полный цикл разработки.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#contact" className="inline-flex">
                <Button variant="primary" size="lg" className="h-11 gap-2">
                  Контакты
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Button>
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                download="Danil_Resume_Fullstack_AI.pdf"
                className="inline-flex"
              >
                <Button variant="outline" size="lg" className="h-11 gap-2">
                  <Download className="w-4 h-4 shrink-0 text-neutral-400" />
                  Резюме (PDF)
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Hard-Stack Terminal Window (5 cols) */}
          <div className="lg:col-span-5">
            <div className="surface-card p-5 border border-[#2E2E32] rounded-lg space-y-3.5">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white shrink-0" />
                  <span className="font-mono text-xs text-neutral-400">
                    Технические навыки
                  </span>
                </div>
                <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
                  Hard Skills
                </Badge>
              </div>

              {/* Pure Code / Hard Stack List without marketing clutter */}
              <div className="p-3.5 sm:p-4 rounded-md bg-[#161618] border border-[#26262B] font-mono text-xs space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-neutral-600 select-none text-[11px]">01</span>
                  <div className="leading-relaxed">
                    <span className="text-neutral-400 font-semibold">Frontend:</span>{" "}
                    <span className="text-white font-medium">React, Next.js, FSD</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-neutral-600 select-none text-[11px]">02</span>
                  <div className="leading-relaxed">
                    <span className="text-neutral-400 font-semibold">Backend:</span>{" "}
                    <span className="text-white font-medium">Node.js, Express, Supabase</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-neutral-600 select-none text-[11px]">03</span>
                  <div className="leading-relaxed">
                    <span className="text-neutral-400 font-semibold">Database:</span>{" "}
                    <span className="text-white font-medium">PostgreSQL, mongoDb</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-neutral-600 select-none text-[11px]">04</span>
                  <div className="leading-relaxed">
                    <span className="text-neutral-400 font-semibold">Integrations:</span>{" "}
                    <span className="text-white font-medium">Meta Cloud API, LLM + STT</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-neutral-600 select-none text-[11px]">05</span>
                  <div className="leading-relaxed">
                    <span className="text-neutral-400 font-semibold">DevTools:</span>{" "}
                    <span className="text-white font-medium">Docker | Claude Code, Antigravity</span>
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Придерживаюсь использования современных - строго типизированных технологий</span>
                <span className="text-neutral-400"></span>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid (Fast Delivery, Meta Tech, 24/7, Zero-Downtime) */}
        <div className="pt-6 sm:pt-8 border-t border-[#26262B] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
          {keyMetrics.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="font-display font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-mono font-medium text-neutral-300">
                {item.label}
              </div>
              <p className="text-xs text-neutral-500 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
