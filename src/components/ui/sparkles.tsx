
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparkleType {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex: number;
  };
}

const DEFAULT_COLOR = "#FFC700";

export const Sparkles = ({
  className,
  children,
  color = DEFAULT_COLOR,
  minSize = 10,
  maxSize = 20,
  glow = true,
  ...props
}: {
  color?: string;
  children?: React.ReactNode;
  className?: string;
  minSize?: number;
  maxSize?: number;
  glow?: boolean;
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      const now = Date.now();
      // Remove sparkles older than 1500ms
      const nextSparkles = sparkles.filter((s) => now - s.createdAt < 1500);
      
      // Add a new sparkle if less than 6 currently
      if (nextSparkles.length < 6) {
        nextSparkles.push(generateSparkle(minSize, maxSize, color));
      }
      
      setSparkles(nextSparkles);
    }, 300);

    return () => clearInterval(sparkleInterval);
  }, [sparkles, color, minSize, maxSize]);

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
          glow={glow}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Sparkle = ({
  color,
  size,
  style,
  glow,
}: {
  color: string;
  size: number;
  style: React.CSSProperties;
  glow: boolean;
}) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      className="absolute pointer-events-none"
      initial={{ scale: 0.25, opacity: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0.75, 1],
        opacity: [0, 1, 0.75, 0],
        rotate: ["0deg", "45deg", "90deg", "135deg"],
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <path
        d={path}
        fill={color}
        className={glow ? `${color === DEFAULT_COLOR ? "shadow-amber-200/30" : ""} shadow-lg` : ""}
      />
    </motion.svg>
  );
};

const generateSparkle = (
  minSize: number,
  maxSize: number,
  color: string
): SparkleType => {
  return {
    id: Math.random().toString(36).slice(2),
    createdAt: Date.now(),
    color,
    size: getRandomValue(minSize, maxSize),
    style: {
      top: getRandomValue(-10, 90) + "%",
      left: getRandomValue(-10, 90) + "%",
      zIndex: 1,
    },
  };
};

const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full absolute top-0 left-0 overflow-hidden",
        className
      )}
      style={{ background }}
    >
      <div className="h-full w-full">
        {Array.from({ length: particleDensity || 20 }).map((_, i) => (
          <Sparkles
            key={`${id}-${i}`}
            color={particleColor}
            minSize={minSize || 1}
            maxSize={maxSize || 2}
            glow={true}
            className="absolute h-full w-full"
          />
        ))}
      </div>
    </div>
  );
};
