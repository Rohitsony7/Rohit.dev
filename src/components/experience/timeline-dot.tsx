
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineDotProps {
  isCurrent?: boolean;
}

export function TimelineDot({ isCurrent }: TimelineDotProps) {
  return (
    <motion.div 
      className={cn(
        "w-10 h-10 rounded-full border-4 border-background flex items-center justify-center z-10",
        isCurrent ? "bg-primary shadow-lg shadow-primary/30" : "bg-card"
      )}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {isCurrent && (
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-background"></span>
        </div>
      )}
      
      {/* Inner glow effect */}
      <motion.div 
        className={cn(
          "absolute inset-0 rounded-full opacity-0",
          isCurrent ? "bg-primary" : "bg-muted"
        )}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        animate={{ 
          boxShadow: isCurrent 
            ? ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"] 
            : "none" 
        }}
        transition={{ 
          repeat: isCurrent ? Infinity : 0, 
          duration: 2 
        }}
      />
    </motion.div>
  );
}
