import { aboutData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { 
  Languages, 
  Globe2, 
  GraduationCap, 
  Award, 
  ExternalLink,
  CheckCircle2,
  Briefcase
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 border-b border-[#26262B]">
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <Reveal className="max-w-2xl mx-auto md:mx-0 mb-12 space-y-3 text-center md:text-left">
          <Badge variant="outline">
            О себе
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
            Опыт, образование и курсы
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Информация о коммерческом опыте, формате работы, высшем образовании, знании языков и сертифицированных курсах.
          </p>
        </Reveal>

        {/* 2-Column Responsive Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Experience & Work format */}
          <Reveal className="surface-card p-6 sm:p-7 border border-[#2E2E32] rounded-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-white" />
                  <h3 className="font-display font-bold text-base text-white tracking-tight">
                    Опыт работы и локация
                  </h3>
                </div>
                <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
                  Опыт
                </Badge>
              </div>

              <div className="space-y-2.5">
                {/* Experience Pills */}
                {aboutData.experience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#3E3E44] transition-colors min-h-[68px]"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-neutral-100">
                          {item.company}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400">
                          • {item.role}
                        </span>
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-400">
                        {item.focus}
                      </div>
                    </div>

                    <div className="inline-flex items-center px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] text-neutral-300 text-xs font-mono shrink-0">
                      {item.duration}
                    </div>
                  </div>
                ))}

                {/* Location & Format */}
                <div className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400 font-mono">Локация:</span>
                    <span className="text-white font-medium">{aboutData.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400 font-mono">Формат:</span>
                    <span className="text-emerald-400 font-medium">{aboutData.workFormat}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400 font-mono">Часовой пояс:</span>
                    <span className="text-neutral-300 font-mono text-xs">{aboutData.timezone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-neutral-400 border-t border-[#26262B]">
              <Globe2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Открыт к предложениям с полной удаленной занятостью</span>
            </div>
          </Reveal>

          {/* Card 2: Higher Education */}
          <Reveal delay={0.08} className="surface-card p-6 sm:p-7 border border-[#2E2E32] rounded-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-white" />
                  <h3 className="font-display font-bold text-base text-white tracking-tight">
                    Высшее образование
                  </h3>
                </div>
                <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
                  {aboutData.education.graduationYear}
                </Badge>
              </div>

              <div className="space-y-2.5">
                {/* Pill 1: Institution */}
                <div className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#3E3E44] transition-colors min-h-[68px]">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-neutral-100">
                        {aboutData.education.institutionShort}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        • {aboutData.education.institutionType}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-neutral-400">
                      {aboutData.education.institution}
                    </div>
                  </div>

                  <div className="inline-flex items-center px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] text-neutral-300 text-xs font-mono shrink-0">
                    {aboutData.education.graduationYear}
                  </div>
                </div>

                {/* Pill 2: Specialty */}
                <div className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#3E3E44] transition-colors min-h-[68px]">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-neutral-100">
                        {aboutData.education.specialty}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        • {aboutData.education.specialtyCode}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-neutral-400">
                      {aboutData.education.specialtyDesc}
                    </div>
                  </div>

                  <div className="inline-flex items-center px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] text-neutral-300 text-xs font-mono shrink-0">
                    {aboutData.education.degreeBadge}
                  </div>
                </div>

                {/* Pill 3: Status & Degree */}
                <div className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400 font-mono">Статус:</span>
                    <span className="text-emerald-400 font-medium">{aboutData.education.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400 font-mono">Квалификация:</span>
                    <span className="text-white font-medium">{aboutData.education.degree}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-400 font-mono">Направление:</span>
                    <span className="text-neutral-300 font-mono text-xs">{aboutData.education.faculty}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-neutral-400 border-t border-[#26262B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Фундаментальная подготовка и системный подход к разработке</span>
            </div>
          </Reveal>

          {/* Card 3: Languages */}
          <Reveal className="surface-card p-6 sm:p-7 border border-[#2E2E32] rounded-lg flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-white" />
                  <h3 className="font-display font-bold text-base text-white tracking-tight">
                    Знание языков
                  </h3>
                </div>
                <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
                  Языки
                </Badge>
              </div>

              <div className="space-y-2.5">
                {aboutData.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#3E3E44] transition-colors min-h-[68px]"
                  >
                    <div className="space-y-0.5">
                      <div className="font-semibold text-xs sm:text-sm text-white group-hover:text-neutral-100">
                        {lang.name}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-400">
                        {lang.desc}
                      </div>
                    </div>

                    <div className="inline-flex items-center px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] text-neutral-300 text-xs font-mono shrink-0">
                      {lang.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Language note */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-neutral-400 border-t border-[#26262B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Свободное ведение технической документации и переписки</span>
            </div>
          </Reveal>

          {/* Card 4: Completed Courses & Certifications */}
          <Reveal delay={0.08} className="surface-card p-6 sm:p-7 border border-[#2E2E32] rounded-lg flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-white" />
                  <h3 className="font-display font-bold text-base text-white tracking-tight">
                    Пройденные курсы
                  </h3>
                </div>
                <Badge variant="outline" className="text-[11px] font-mono text-neutral-400">
                  Coursera
                </Badge>
              </div>

              <div className="space-y-2.5">
                {aboutData.courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:border-[#3E3E44] transition-colors min-h-[68px]"
                  >
                    <div className="space-y-0.5">
                      <div className="font-semibold text-xs sm:text-sm text-white group-hover:text-neutral-100">
                        {course.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-400 font-mono">
                        {course.organization}
                      </div>
                    </div>

                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] hover:bg-[#28282E] transition-colors shrink-0"
                    >
                      <span>Сертификат</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses note */}
            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-neutral-400 border-t border-[#26262B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Официальные верифицированные сертификаты Coursera</span>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
