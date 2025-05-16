
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  as: Component = "div",
  containerClassName,
  borderRadius = "1rem",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  as?: any;
  containerClassName?: string;
  borderRadius?: string;
  [key: string]: any;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect();
      const x = (e.clientX - left) / container.clientWidth;
      const y = (e.clientY - top) / container.clientHeight;
      setPosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  return (
    <Component
      className={cn(
        "relative rounded-[--radius] p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        "--radius": borderRadius,
      }}
      {...otherProps}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden [--radius:theme(borderRadius.3xl)]"
        style={{
          borderRadius,
        }}
      >
        <div
          className={cn(
            "absolute inset-[-100%] bg-gradient-to-r from-primary/40 to-secondary/40 opacity-40 dark:opacity-80",
            "rounded-full transition-opacity"
          )}
          style={{
            transform: `translate(${position.x * 100}%, ${position.y * 100}%)`,
            width: "200%",
            height: "200%",
            transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        />
      </div>
      <div
        className={cn(
          "absolute inset-[1px] bg-background rounded-[calc(var(--radius)-1px)]",
          "overflow-hidden"
        )}
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </Component>
  );
};
