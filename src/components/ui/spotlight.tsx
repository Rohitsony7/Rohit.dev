import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface SpotlightProps {
  className?: string;
  children?: React.ReactNode;
}

export function Spotlight({ className, children }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePositionRef.current = { x, y };

      if (container) {
        const spotlightEl = container.querySelector(
          "[data-spotlight]"
        ) as HTMLElement;
        if (spotlightEl) {
          spotlightEl.style.background = `radial-gradient(circle 600px at ${x}px ${y}px, rgba(120, 119, 198, 0.15), transparent)`;
        }
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        data-spotlight
        className="pointer-events-none absolute inset-0 z-10 transition duration-300 ease-in-out"
      />
      {children}
    </div>
  );
}
