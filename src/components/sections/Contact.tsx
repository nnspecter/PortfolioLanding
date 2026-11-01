import { useState } from "react";
import { personalInfo } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { 
  Mail, 
  Download, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare,
  ArrowUpRight
} from "lucide-react";

export function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#26262B]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <Badge variant="outline">
            Контакты и сотрудничество
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
            Обсудить задачу или предложение о работе
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Открыт к предложениям о долгосрочном найме (Full-time Remote) и контрактам на проектирование B2B SaaS или интеграцию AI-систем.
          </p>
        </div>

        {/* Full-width Direct Channels Card */}
        <div className="surface-card p-6 sm:p-8 border border-[#2E2E32] rounded-lg space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#26262B]">
            <div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Прямые каналы связи
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Оперативный ответ в Telegram в течение 15–30 минут в рабочее время.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="text-xs font-mono text-neutral-300">
                Online • Казахстан (UTC+5)
              </span>
            </div>
          </div>

          {/* 2-Column Responsive Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Telegram */}
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex items-center justify-between hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5">
                <span className="p-2.5 rounded bg-[#202024] text-white">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Telegram
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.telegramHandle}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.telegramHandle, "tg")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать юзернейм"
                >
                  {copiedType === "tg" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={personalInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-white text-black hover:bg-neutral-200 transition-colors text-xs font-medium inline-flex items-center gap-1"
                >
                  Написать
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex items-center justify-between hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5">
                <span className="p-2.5 rounded bg-[#202024] text-white">
                  <GithubIcon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    GitHub
                  </div>
                  <div className="text-sm font-semibold text-white">
                    github.com/nnspecter
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy("https://github.com/nnspecter", "gh")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать ссылку"
                >
                  {copiedType === "gh" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#26262B] text-neutral-200 hover:text-white transition-colors text-xs font-mono inline-flex items-center gap-1"
                >
                  Перейти
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex items-center justify-between hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5">
                <span className="p-2.5 rounded bg-[#202024] text-white">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-3 py-1.5 rounded bg-[#26262B] text-neutral-200 hover:text-white transition-colors text-xs font-mono inline-flex items-center gap-1"
                >
                  Написать
                </a>
              </div>
            </div>

            {/* Location & Timezone */}
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex items-center justify-between hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5">
                <span className="p-2.5 rounded bg-[#202024] text-white">
                  <MapPin className="w-5 h-5 text-neutral-300" />
                </span>
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Локация & Формат
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
                Часовой пояс: UTC+5
              </span>
            </div>

          </div>

          {/* Action CTAs Strip */}
          <div className="pt-6 border-t border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400">
              Резюме обновлено в текущем квартале • 178 KB PDF
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={personalInfo.resumePdfUrl}
                download="Danil_Resume_Fullstack_AI.pdf"
                className="w-full sm:w-auto inline-flex"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 gap-2 text-xs">
                  <Download className="w-4 h-4 text-neutral-400" />
                  Скачать резюме (PDF)
                </Button>
              </a>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto h-11 gap-2 text-xs">
                  Написать в Telegram
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
