
import { motion } from "framer-motion";
import { TimelineItem } from "./timeline-item";

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

interface TimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: TimelineProps) {
  return (
    <div className="relative mt-16">
      {/* Timeline line with animated gradient */}
      <div className="absolute left-0 md:left-1/2 top-0 h-full transform md:-translate-x-1/2">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-[3px] h-full bg-gradient-to-b from-primary/10 via-primary to-primary/10 mx-auto shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
      </div>
      
      {/* Experience items */}
      <div className="space-y-24 relative">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            index={index}
            isEven={index % 2 === 0}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
      
      {/* Career start indicator with improved positioning */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20, 
          delay: 0.5 
        }}
        viewport={{ once: true }}
        className="absolute bottom-[-40px] left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse" />
        <div className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">Career Start</div>
      </motion.div>
    </div>
  );
}
