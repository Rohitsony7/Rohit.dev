
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
  
  const meteors = Array.from({ length: number }).map((_, idx) => ({
    id: idx,
    size: Math.floor(Math.random() * 12) + 10,
    top: Math.floor(Math.random() * 100),
    left: Math.floor(Math.random() * 100),
    animationDelay: Math.random() * 20,
    animationDuration: Math.random() * 8 + 2,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {mounted && meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute pointer-events-none rounded-full bg-slate-500 rotate-[215deg] animate-meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            boxShadow: `0 0 ${meteor.size * 2}px ${meteor.size / 2}px rgba(255,255,255,0.4)`,
          }}
        />
      ))}
    </div>
  );
};
