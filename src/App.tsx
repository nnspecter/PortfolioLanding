import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { KeyCases } from "@/components/sections/KeyCases";
import { AboutSection } from "@/components/sections/AboutSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export function App() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A] text-[#EDEDED] font-sans flex flex-col antialiased selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <KeyCases />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
