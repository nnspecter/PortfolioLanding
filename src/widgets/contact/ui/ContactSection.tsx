import { ArrowUpRight, CheckCircle2, Download } from "lucide-react";
import { ContactChannelCard, contactChannels, profile } from "@/entities/profile";
import { CopyButton } from "@/features/copy-to-clipboard";
import { DownloadResumeLink } from "@/features/download-resume";
import { SECTION_ID } from "@/shared/config";
import { cn } from "@/shared/lib";
import { buttonVariants, Reveal, Section, SectionHeading } from "@/shared/ui";

export function ContactSection() {
  return (
    <Section id={SECTION_ID.contact} className="py-20 md:py-28">
      <Reveal className="mb-12">
        <SectionHeading
          eyebrow="Контакты и сотрудничество"
          title="Обсудить задачу или предложение о работе"
          description="Открыт к предложениям о долгосрочном найме (Full-time Remote) и контрактам на проектирование B2B SaaS или интеграцию AI-систем."
        />
      </Reveal>

      <Reveal delay={0.05} className="surface-card p-6 sm:p-8 border border-[#2E2E32] rounded-lg space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#26262B] text-center md:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-white tracking-tight">
              Прямые каналы связи
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Оперативный ответ в Telegram в течение 15–30 минут в рабочее время.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
            <span className="text-xs font-mono text-neutral-300">Online • Казахстан (UTC+5)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactChannels.map((channel) => (
            <ContactChannelCard
              key={channel.id}
              channel={channel}
              actions={<CopyButton value={channel.copyValue} title={channel.copyTitle} />}
            />
          ))}
        </div>

        <div className="pt-6 border-t border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-neutral-400 text-center sm:text-left">
            Резюме обновлено в текущем квартале • 178 KB PDF
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <DownloadResumeLink
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto gap-2 text-xs"
              )}
            >
              <Download className="w-4 h-4 text-neutral-400" />
              Скачать резюме (PDF)
            </DownloadResumeLink>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto gap-2 text-xs")}
            >
              Написать в Telegram
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
