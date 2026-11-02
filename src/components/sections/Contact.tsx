import { useState } from "react";
import { personalInfo } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { 
  Mail, 
  Download, 
  Copy, 
  Check, 
  MessageSquare,
  ArrowUpRight,
  CheckCircle2
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
      <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto md:mx-0 mb-12 space-y-3 text-center md:text-left">
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
              <span className="text-xs font-mono text-neutral-300">
                Online • Казахстан (UTC+5)
              </span>
            </div>
          </div>

          {/* 2-Column Responsive Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Telegram */}
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex flex-wrap items-center justify-between gap-3 hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="p-2.5 rounded bg-[#202024] text-white shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Telegram
                  </div>
                  <div className="text-sm font-semibold text-white break-words">
                    {personalInfo.telegramHandle}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.telegramHandle, "tg")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать юзернейм"
                >
                  {copiedType === "tg" ? (
                    <Check className="w-4 h-4 text-white" />
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
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex flex-wrap items-center justify-between gap-3 hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="p-2.5 rounded bg-[#202024] text-white shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    GitHub
                  </div>
                  <div className="text-sm font-semibold text-white break-words">
                    github.com/nnspecter
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => handleCopy("https://github.com/nnspecter", "gh")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать ссылку"
                >
                  {copiedType === "gh" ? (
                    <Check className="w-4 h-4 text-white" />
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
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex flex-wrap items-center justify-between gap-3 hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="p-2.5 rounded bg-[#202024] text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-sm font-semibold text-white break-words">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-white" />
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

            {/* WhatsApp / Phone */}
            <div className="p-4 rounded-md bg-[#161618] border border-[#26262B] flex flex-wrap items-center justify-between gap-3 hover:border-[#3E3E44] transition-colors">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="p-2.5 rounded bg-[#202024] text-white shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    WhatsApp / Телефон
                  </div>
                  <div className="text-sm font-semibold text-white break-words">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded text-neutral-400 hover:text-white hover:bg-[#26262B] transition-colors cursor-pointer"
                  title="Скопировать номер телефона"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#26262B] text-neutral-200 hover:text-white transition-colors text-xs font-mono inline-flex items-center gap-1"
                >
                  Написать
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Action CTAs Strip */}
          <div className="pt-6 border-t border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400 text-center sm:text-left">
              Резюме обновлено в текущем квартале • 178 KB PDF
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
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
