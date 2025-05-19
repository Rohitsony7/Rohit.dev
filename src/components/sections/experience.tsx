
import { useState, useRef } from "react";
import { Calendar, Briefcase, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Motion, AnimatePresence, motion } from "framer-motion";
import { resumeData } from "@/utils/resume-data";
import { CardHoverEffect } from "../ui/card-hover";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { HoverEffect } from "../ui/card-hover-effect";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="experienceSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={12}
          className="w-full h-full"
          particleColor="#888"
        />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
          >
            <Briefcase size={16} />
            <span>Work Experience</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            <TextGenerateEffect words={`My Professional Journey`} />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl"
          >
            Over the past {resumeData.totalExperience}, I've had the opportunity
            to work with amazing teams and contribute to impactful projects.
          </motion.p>
        </div>
        
        <ExperienceTimeline experiences={resumeData.experience} />
      </div>
    </section>
  );
}

function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative mt-16">
      {/* Timeline line with animated gradient */}
      <div className="absolute left-0 md:left-1/2 top-0 h-full transform md:-translate-x-1/2">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-[2px] h-full bg-gradient-to-b from-primary/30 via-primary to-primary/30 mx-auto"
        />
      </div>
      
      {/* Experience items */}
      <div className="space-y-24 relative">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            experience={exp}
            index={index}
            isEven={index % 2 === 0}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
      
      {/* Start indicator */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.5 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
        <div className="text-xs text-muted-foreground mt-2 font-medium">Career Start</div>
      </motion.div>
    </div>
  );
}

function ExperienceItem({
  experience,
  index,
  isEven,
  isLast,
}: {
  experience: Experience;
  index: number;
  isEven: boolean;
  isLast: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col md:flex-row gap-8",
        !isEven && "md:flex-row-reverse"
      )}
      ref={containerRef}
    >
      {/* Timeline dot with ripple effect */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-8 z-20">
        <motion.div 
          className={cn(
            "w-10 h-10 rounded-full border-4 border-background flex items-center justify-center",
            experience.current ? "bg-primary" : "bg-card"
          )}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {experience.current && (
            <>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-background"></span>
              </span>
            </>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "w-full md:w-1/2 pl-12 md:pl-0",
          !isEven ? "md:pr-16" : "md:pl-16"
        )}
      >
        <CardHoverEffect
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            experience.current 
              ? "border-primary shadow-lg shadow-primary/10" 
              : "border-border",
            "p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden group"
          )}
        >
          {/* Animated background effect */}
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-10 transition-opacity duration-500",
              experience.current 
                ? "from-primary/40 via-primary/5 to-transparent" 
                : "from-muted/40 via-muted/5 to-transparent"
            )} 
          />
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
            <div className="absolute inset-0 translate-x-full group-hover:animate-[shimmer_2s_infinite]">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-start justify-between mb-3 relative">
            <motion.h3 
              className="text-xl font-bold"
              animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
              transition={{ duration: 0.2 }}
            >
              {experience.title}
            </motion.h3>
            
            <motion.div 
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs",
                experience.current 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary text-secondary-foreground"
              )}
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-3 w-3" />
              <span>{experience.period}</span>
            </motion.div>
          </div>

          <motion.p 
            className={cn(
              "font-medium mb-4",
              experience.current ? "text-primary" : "text-foreground/80"
            )}
          >
            {experience.company}
          </motion.p>

          <motion.ul
            initial={{ height: "auto" }}
            className="space-y-2 mb-4 relative"
          >
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                viewport={{ once: true, root: containerRef }}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className={cn(
                  "text-lg min-w-4", 
                  experience.current ? "text-primary" : ""
                )}>
                  •
                </span> 
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {experience.technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  transition: { duration: 0.2 } 
                }}
                className={cn(
                  "px-2.5 py-1 text-xs rounded-full transition-colors",
                  experience.current 
                    ? "bg-primary/10 text-primary" 
                    : "bg-secondary/80 text-secondary-foreground"
                )}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </CardHoverEffect>
      </div>
    </motion.div>
  );
}
