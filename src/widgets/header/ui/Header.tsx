import { useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { profile } from "@/entities/profile";
import { DownloadResumeLink } from "@/features/download-resume";
import { useSectionNavigation } from "@/features/section-navigation";
import { NAV_ITEMS, SECTION_ID } from "@/shared/config";
import { cn } from "@/shared/lib";
import { buttonVariants, GithubIcon, iconButtonStyles } from "@/shared/ui";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeId, navigateTo } = useSectionNavigation(SECTION_IDS);

  const handleNavigate: typeof navigateTo = (event, id) => {
    setIsMenuOpen(false);
    navigateTo(event, id);
  };

  return (
    // Solid background, no backdrop-filter: a blurred fixed header lags behind
    // the page during scroll in Firefox and visibly shifts.
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#26262B] bg-[#0A0A0A]">
      <div className="w-full h-16 px-6 sm:px-10 lg:px-16 2xl:px-24 flex items-center justify-between">
        {/* Navigation (Left) */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            className={cn(iconButtonStyles, "bg-[#121214] md:hidden")}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <DesktopNav items={NAV_ITEMS} activeId={activeId} onNavigate={handleNavigate} />
        </div>

        {/* Desktop actions (Right) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconButtonStyles}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <DownloadResumeLink
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
          >
            <Download className="w-3.5 h-3.5" />
            Резюме PDF
          </DownloadResumeLink>
          <a
            href={`#${SECTION_ID.contact}`}
            onClick={(e) => handleNavigate(e, SECTION_ID.contact)}
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            Связаться
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile actions (Right) */}
        <div className="flex items-center gap-2 md:hidden">
          <DownloadResumeLink aria-label="Скачать резюме" className={iconButtonStyles}>
            <Download className="w-4 h-4" />
          </DownloadResumeLink>
        </div>
      </div>

      {isMenuOpen && (
        <MobileMenu
          items={NAV_ITEMS}
          activeId={activeId}
          onNavigate={handleNavigate}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
