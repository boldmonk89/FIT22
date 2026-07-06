import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BranchesSection from "@/components/BranchesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#080808] text-white">
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <BranchesSection />
      <ContactSection />
    </div>
  );
}
