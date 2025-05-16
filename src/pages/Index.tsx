
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { GridPattern } from "@/components/ui/grid-pattern";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <GridPattern />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
