import { AboutSection } from "@/widgets/about";
import { CasesSection } from "@/widgets/cases";
import { ContactSection } from "@/widgets/contact";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";

export function HomePage() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A] text-[#EDEDED] font-sans flex flex-col antialiased selection:bg-white/20 selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <CasesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
