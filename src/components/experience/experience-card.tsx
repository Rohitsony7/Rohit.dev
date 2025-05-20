
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { CardHoverEffect } from "../ui/card-hover";

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

export function ExperienceCard({ experience }: { experience: Experience }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
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
            viewport={{ once: true }}
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
  );
}
