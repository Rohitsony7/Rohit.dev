import { motion } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { resumeData } from "../../utils/resume-data";
import { ResumeDialog } from "./ResumeDialog";
import { Meteors } from "@/components/ui/meteors";

const titles = [
  { text: "Frontend Engineer", icon: "👨‍💻" },
  { text: "Full Stack Engineer", icon: "🌐" },
  { text: "JavaScript Engineer", icon: "⚡" },
  { text: "React Developer", icon: "⚛️" },
  { text: "UI/UX Enthusiast", icon: "🎨" },
  { text: "Angular Developer", icon: "🅰️" },
  { text: "Software Engineer", icon: "💻" },
];

export function HeroSection() {
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pb-20 overflow-hidden">
      <Meteors number={15} />
      <div className="px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:py-32">
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
          >
            {resumeData.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-16 flex items-center mb-6 text-xl md:text-2xl lg:text-3xl font-bold"
          >
            <Typewriter
              words={titles.map((title) => `${title.text} ${title.icon}`)}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000} // Delay before switching to the next word
            />
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
            <ShimmerButton
              onClick={() => window.open(resumeData.github, "_blank")}
            >
              View GitHub
            </ShimmerButton>
            <ShimmerButton
              className="bg-secondary text-secondary-foreground"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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
        </div>
      </div>

      {/* Resume Dialog */}
      {showResumeDialog && (
        <ResumeDialog
          open={showResumeDialog}
          onOpenChange={setShowResumeDialog}
        />
      )}
    </section>
  );
}

const Spotlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      <div className="absolute inset-0 overflow-hidden"></div>
      {children}
    </div>
  );
};

const ShimmerButton = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full px-6 py-2 border border-primary/20 bg-background shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
          style={{
            transform: "translateX(-100%)",
            animation: "shimmer 2s infinite",
            backgroundSize: "200% 100%",
          }}
        />
      </span>
      <span className="relative z-10 flex items-center justify-center text-sm font-medium transition-colors">
        {children}
      </span>
    </motion.button>
  );
};
