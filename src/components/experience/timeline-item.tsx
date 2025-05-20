
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExperienceCard } from "./experience-card";
import { TimelineDot } from "./timeline-dot";

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

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isEven: boolean;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isEven, isLast }: TimelineItemProps) {
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
        <TimelineDot isCurrent={experience.current} />
      </div>

      {/* Content */}
      <div
        className={cn(
          "w-full md:w-1/2 pl-12 md:pl-0",
          !isEven ? "md:pr-16" : "md:pl-16"
        )}
      >
        <ExperienceCard experience={experience} />
      </div>
    </motion.div>
  );
}
