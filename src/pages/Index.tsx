
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { useEffect, useState } from "react";
import { UnifiedBackground } from "@/components/unified-background";
import { motion } from "framer-motion";


// Custom cursor implementation
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Update cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    // Handle mouse click
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    // Handle mouse leaving the window
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Hide on mobile devices
  if (typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[999] mix-blend-difference"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: clicked ? 0.8 : 1,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <div className="w-full h-full rounded-full bg-white" />
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <UnifiedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
