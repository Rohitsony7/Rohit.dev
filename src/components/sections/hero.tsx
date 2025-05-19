
import { motion } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";
import { resumeData } from "../../utils/resume-data";
import { ResumeDialog } from "./ResumeDialog";

// Aceternity-inspired components
const Spotlight = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100%] opacity-50 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-[100px] z-[-1]" />
      </div>
      {children}
    </div>
  );
};

const Meteors = ({ number }: { number: number }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={`absolute top-1/2 left-1/2 h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)]
            before:absolute before:top-1/2 before:left-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:-translate-x-[70%] before:bg-gradient-to-r before:from-[rgba(255,255,255,0.01)] before:to-[rgba(255,255,255,0.5)]`}
          style={{
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
          }}
        />
      ))}
    </>
  );
};

const ShimmerButton = ({ 
  children, 
  className = "", 
  onClick 
}: { 
  children: React.ReactNode, 
  className?: string, 
  onClick?: () => void 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full px-6 py-2 border border-primary/20 bg-background shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" 
          style={{
            transform: "translateX(-100%)",
            animation: "shimmer 2s infinite",
            backgroundSize: "200% 100%"
          }}
        />
      </span>
      <span className="relative z-10 flex items-center justify-center text-sm font-medium transition-colors">{children}</span>
    </motion.button>
  );
};

export function HeroSection() {
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pb-20 overflow-hidden">
      <Meteors number={15} />
      <Spotlight className="px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-muted-foreground mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient mb-6"
          >
            {resumeData.name}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-16 flex items-center mb-6"
          >
            <TypewriterEffect />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground mb-8"
          >
            {resumeData.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <ShimmerButton onClick={() => window.open(resumeData.github, "_blank")}>
              View GitHub
            </ShimmerButton>
            <ShimmerButton 
              className="bg-secondary text-secondary-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </ShimmerButton>
            <ShimmerButton 
              onClick={() => setShowResumeDialog(true)}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              View Resume
            </ShimmerButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </Spotlight>

      {/* Resume Dialog */}
      {showResumeDialog && <ResumeDialog open={showResumeDialog} onOpenChange={setShowResumeDialog} />}
    </section>
  );
}

function TypewriterEffect() {
  return (
    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient">
      <span className="text-primary">{resumeData.title}</span>
    </div>
  );
}
