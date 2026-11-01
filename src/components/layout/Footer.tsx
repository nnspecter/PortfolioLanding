import { personalInfo } from "@/data/resumeData";
import { ArrowUp, Mail, Send } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#26262B]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-black font-mono font-bold flex items-center justify-center text-sm">
              D
            </div>
            <div>
              <div className="font-semibold text-sm text-white">
                {personalInfo.name} • {personalInfo.roleSubtitle}
              </div>
              <div className="text-xs text-neutral-500 font-mono">
                {personalInfo.location} • Fast Time-to-Market
              </div>
            </div>
          </div>

          {/* Socials & Top Action */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-[#2E2E32] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1A1A1E] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-[#2E2E32] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1A1A1E] transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg border border-[#2E2E32] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1A1A1E] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-[#2E2E32] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1A1A1E] transition-colors cursor-pointer ml-2"
              title="Наверх"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}
            {personalInfo.handle && personalInfo.handle !== personalInfo.name ? ` (${personalInfo.handle})` : ""}.
          </div>
          <div>
            React • TypeScript • Tailwind CSS • Feature-Sliced Design
          </div>
        </div>
      </div>
    </footer>
  );
}
