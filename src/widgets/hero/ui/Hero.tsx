import { ArrowUpRight, CheckCircle2, Download, Terminal } from "lucide-react";
import { profile, profileHighlights, techStack } from "@/entities/profile";
import { DownloadResumeLink } from "@/features/download-resume";
import { SECTION_ID } from "@/shared/config";
import { cn } from "@/shared/lib";
import { Badge, buttonVariants, Container } from "@/shared/ui";

export function Hero() {
  return (
    <section
      id={SECTION_ID.hero}
      className="min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 2xl:pt-36 2xl:pb-20 border-b border-[#26262B]"
    >
      <Container className="flex flex-col justify-center gap-10 sm:gap-12 lg:gap-14 2xl:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#2E2E32] bg-[#121214] text-xs font-mono text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Доступен для B2B SaaS и Full-time</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400">{profile.location}</span>
            </div>

            <h1 className="font-display text-[clamp(2.3rem,4.5vw,3.8rem)] font-bold text-white tracking-[-0.04em] leading-[1.08]">
              Fullstack-разработчик и инженер AI-систем
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-[72ch] mx-auto lg:mx-0 leading-relaxed">
              Проектирую высоконагруженные B2B SaaS и ERP-экосистемы. Интегрирую AI-агентов и
              выстраиваю масштабируемую архитектуру проектов. Закрываю полный цикл разработки.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={`#${SECTION_ID.contact}`}
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                Контакты
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
              <DownloadResumeLink
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
              >
                <Download className="w-4 h-4 shrink-0" />
                Резюме (PDF)
              </DownloadResumeLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="surface-card p-5 border border-[#2E2E32] rounded-lg space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white shrink-0" />
                  <span className="font-mono text-xs text-neutral-400">Технические навыки</span>
                </div>
                <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
                  Hard Skills
                </Badge>
              </div>

              <ol className="p-3.5 sm:p-4 rounded-md bg-[#161618] border border-[#26262B] font-mono text-xs space-y-2.5 sm:space-y-3">
                {techStack.map((item, index) => (
                  <li key={item.area} className="flex items-start gap-3">
                    <span className="text-neutral-600 select-none text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="leading-relaxed">
                      <span className="text-neutral-400 font-semibold">{item.area}:</span>{" "}
                      <span className="text-white font-medium">{item.tools}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="pt-1 text-[11px] font-mono text-neutral-500">
                Придерживаюсь использования современных - строго типизированных технологий
              </p>
            </div>
          </div>
        </div>

        <ul className="pt-6 sm:pt-8 border-t border-[#26262B] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
          {profileHighlights.map((item) => (
            <li key={item.value} className="space-y-1.5 text-center md:text-left">
              <div className="font-display font-bold text-lg sm:text-2xl lg:text-3xl text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs font-mono font-medium text-neutral-300">{item.label}</div>
              <p className="text-xs text-neutral-500 leading-normal">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
