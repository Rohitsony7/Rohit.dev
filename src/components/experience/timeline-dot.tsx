
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";

interface TimelineDotProps {
  isCurrent?: boolean;
}

export function TimelineDot({ isCurrent }: TimelineDotProps) {
  return (
    <motion.div 
      className={cn(
        "w-10 h-10 rounded-full border-4 flex items-center justify-center z-10",
        isCurrent 
          ? "bg-primary border-background shadow-lg shadow-primary/50" 
          : "bg-card border-muted-foreground/30"
      )}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Add icon to improve visibility */}
      {isCurrent ? (
        <CircleDot className="h-5 w-5 text-background" />
      ) : (
        <div className="h-3 w-3 rounded-full bg-muted-foreground/70" />
      )}
      
      {/* Simplified glow effect with improved visibility */}
      <motion.div 
        className={cn(
          "absolute inset-0 rounded-full",
          isCurrent ? "bg-primary/20" : "bg-muted-foreground/10"
        )}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}
