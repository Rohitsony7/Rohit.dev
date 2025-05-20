
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const meteors = [...Array(number)].map((_, idx) => ({
    id: idx,
    size: Math.floor(Math.random() * 12) + 10 + "px",
    opacity: Math.random() * 0.8 + 0.2,
    top: Math.floor(Math.random() * 100) + "vh",
    left: Math.floor(Math.random() * 100) + "vw",
    delay: Math.random() * 20 + "s",
    duration: Math.random() * 8 + 2 + "s",
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {mounted && meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute pointer-events-none rounded-full bg-slate-500 rotate-[215deg]"
          style={{
            top: meteor.top,
            left: meteor.left,
            width: meteor.size,
            height: meteor.size,
            opacity: meteor.opacity,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
            animation: "meteor linear infinite",
            boxShadow: `0 0 ${parseInt(meteor.size) * 2}px ${parseInt(meteor.size) / 2}px rgba(255,255,255,0.4)`,
          }}
        />
      ))}
    </div>
  );
};
