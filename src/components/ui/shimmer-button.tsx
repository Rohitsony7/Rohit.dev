
import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, onClick }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5",
          "text-sm font-medium text-primary-foreground shadow-sm transition-colors",
          "hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1",
          "focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          "relative overflow-hidden",
          className
        )}
        ref={ref}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 z-0 overflow-hidden rounded-md">
          <span className="absolute inset-0 bg-[length:100%_100%] bg-gradient-to-r from-transparent via-white/25 to-transparent bg-[200%_auto] animate-shimmer" />
        </span>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
