
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineDotProps {
  isCurrent?: boolean;
}

export function TimelineDot({ isCurrent }: TimelineDotProps) {
  return (
    <motion.div 
      className={cn(
        "w-10 h-10 rounded-full border-4 border-background flex items-center justify-center",
        isCurrent ? "bg-primary" : "bg-card"
      )}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {isCurrent && (
        <>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-background"></span>
          </span>
        </>
      )}
    </motion.div>
  );
}
