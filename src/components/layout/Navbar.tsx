import { useState, useEffect, useRef, type MouseEvent } from "react";
import { m } from "framer-motion";
import { personalInfo } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Menu, X, ArrowUpRight, Download, Check } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  // While a nav click is scrolling the page, keep the clicked item active
  // instead of highlighting every section the page passes through.
  const navScrollTarget = useRef<number | null>(null);

  const navLinks = [
    { id: "hero", label: "Главная", href: "#hero" },
    { id: "cases", label: "Кейсы", href: "#cases" },
    { id: "about", label: "О себе", href: "#about" },
    { id: "contact", label: "Контакты", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navScrollTarget.current !== null) {
        if (Math.abs(window.scrollY - navScrollTarget.current) <= 2) {
          navScrollTarget.current = null;
        }
        return;
      }

      // Check if user is scrolled to the very bottom
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = ["hero", "cases", "about", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // The nav-click lock ends when the scroll finishes or the user takes over.
    const releaseNavLock = () => {
      navScrollTarget.current = null;
    };
    const releaseEvents = ["scrollend", "wheel", "touchstart", "keydown"] as const;

    // At most one section check per frame, so scrolling stays off the main thread.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        handleScroll();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    releaseEvents.forEach((type) =>
      window.addEventListener(type, releaseNavLock, { passive: true })
    );
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      releaseEvents.forEach((type) =>
        window.removeEventListener(type, releaseNavLock)
      );
    };
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();

    setMobileMenuOpen(false);
    setActiveSection(id);

    // Where scrollIntoView will land: section top minus the header offset,
    // clamped to the bottom of the page.
    const headerOffset =
      parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    navScrollTarget.current = Math.max(
      0,
      Math.min(el.getBoundingClientRect().top + window.scrollY - headerOffset, maxScroll)
    );

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    // Solid background, no backdrop-filter: a blurred fixed header lags behind
    // the page during scroll in Firefox and visibly shifts.
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#26262B] bg-[#0A0A0A]">
      <div className="w-full h-16 px-6 sm:px-10 lg:px-16 2xl:px-24 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
          className="flex items-center gap-3 group"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
              {personalInfo.name}
              {personalInfo.handle && personalInfo.handle !== personalInfo.name && (
                <span className="text-neutral-500 font-mono text-xs">/ {personalInfo.handle}</span>
              )}
            </span>
            <span className="text-[11px] text-neutral-400 font-mono">
              Fullstack & AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav with Animated Underline */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {link.label}
                {isActive && (
                  <m.span
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg border border-[#2E2E32] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1A1A1E] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumePdfUrl}
            download="Danil_Resume_Fullstack_AI.pdf"
            className="inline-flex"
          >
            <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
              <Download className="w-3.5 h-3.5" />
              Резюме PDF
            </Button>
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="inline-flex"
          >
            <Button variant="primary" size="sm" className="h-8 gap-1 text-xs">
              Связаться
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={personalInfo.resumePdfUrl}
            download="Danil_Resume_Fullstack_AI.pdf"
            className="w-9 h-9 rounded-lg border border-[#2E2E32] flex items-center justify-center text-neutral-300"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-lg border border-[#2E2E32] bg-[#121214] flex items-center justify-center text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#26262B] bg-[#0E0E10] px-6 py-5 space-y-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#1C1C20] text-white"
                      : "text-neutral-400 hover:text-white hover:bg-[#161618]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-white" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#26262B] flex flex-col gap-2">
            <a
              href={personalInfo.resumePdfUrl}
              download="Danil_Resume_Fullstack_AI.pdf"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full justify-center gap-2 text-xs">
                <Download className="w-3.5 h-3.5" />
                Скачать резюме (PDF)
              </Button>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              <Button variant="primary" className="w-full justify-center gap-1 text-xs">
                Связаться
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
