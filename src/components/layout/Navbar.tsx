import { useState, useEffect } from "react";
import { personalInfo } from "@/data/resumeData";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Кейсы", href: "#cases" },
    { label: "Архитектура", href: "#architecture" },
    { label: "Стек", href: "#skills" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#26262B] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-white text-black font-mono font-bold flex items-center justify-center text-sm">
            D
          </div>
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
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

          <a href="#contact" className="inline-flex">
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
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-neutral-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
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
              onClick={() => setMobileMenuOpen(false)}
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
