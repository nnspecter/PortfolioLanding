import { Award, Briefcase, CheckCircle2, ExternalLink, Globe2, GraduationCap, Languages } from "lucide-react";
import { courses, education, languages, workExperience, workPreferences } from "@/entities/resume";
import { SECTION_ID } from "@/shared/config";
import { Reveal, Section, SectionHeading } from "@/shared/ui";
import { InfoCard } from "./InfoCard";
import { InfoChip, InfoRow } from "./InfoRow";
import { KeyValueList } from "./KeyValueList";

// Cards in the right column appear slightly later, forming a light wave.
const RIGHT_COLUMN_DELAY = 0.08;

export function AboutSection() {
  return (
    <Section id={SECTION_ID.about} className="py-20 md:py-24">
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="О себе"
          title="Опыт, образование и курсы"
          description="Информация о коммерческом опыте, формате работы, высшем образовании, знании языков и сертифицированных курсах."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <InfoCard
          icon={Briefcase}
          title="Опыт работы и локация"
          badge="Опыт"
          noteIcon={Globe2}
          note="Открыт к предложениям с полной удаленной занятостью"
        >
          {workExperience.map((job) => (
            <InfoRow
              key={job.company}
              title={job.company}
              meta={job.role}
              description={job.focus}
              aside={<InfoChip>{job.duration}</InfoChip>}
            />
          ))}
          <KeyValueList
            items={[
              { label: "Локация:", value: workPreferences.location },
              { label: "Формат:", value: workPreferences.format, tone: "accent" },
              { label: "Часовой пояс:", value: workPreferences.timezone, tone: "muted" },
            ]}
          />
        </InfoCard>

        <InfoCard
          delay={RIGHT_COLUMN_DELAY}
          icon={GraduationCap}
          title="Высшее образование"
          badge={education.graduationYear}
          noteIcon={CheckCircle2}
          note="Фундаментальная подготовка и системный подход к разработке"
        >
          <InfoRow
            title={education.institutionShort}
            meta={education.institutionType}
            description={education.institution}
            aside={<InfoChip>{education.graduationYear}</InfoChip>}
          />
          <InfoRow
            title={education.specialty}
            meta={education.specialtyCode}
            description={education.specialtyDescription}
            aside={<InfoChip>{education.degreeBadge}</InfoChip>}
          />
          <KeyValueList
            items={[
              { label: "Статус:", value: education.status, tone: "accent" },
              { label: "Квалификация:", value: education.degree },
              { label: "Направление:", value: education.faculty, tone: "muted" },
            ]}
          />
        </InfoCard>

        <InfoCard
          icon={Languages}
          title="Знание языков"
          badge="Языки"
          noteIcon={CheckCircle2}
          note="Свободное ведение технической документации и переписки"
        >
          {languages.map((language) => (
            <InfoRow
              key={language.name}
              title={language.name}
              description={language.description}
              aside={<InfoChip>{language.level}</InfoChip>}
            />
          ))}
        </InfoCard>

        <InfoCard
          delay={RIGHT_COLUMN_DELAY}
          icon={Award}
          title="Пройденные курсы"
          badge="Coursera"
          noteIcon={CheckCircle2}
          note="Официальные верифицированные сертификаты Coursera"
        >
          {courses.map((course) => (
            <InfoRow
              key={course.title}
              title={course.title}
              description={course.organization}
              monoDescription
              aside={
                <a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-2.5 py-1.5 rounded border border-[#2E2E32] bg-[#1F1F23] hover:bg-[#28282E] transition-colors shrink-0"
                >
                  <span>Сертификат</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>
              }
            />
          ))}
        </InfoCard>
      </div>
    </Section>
  );
}
