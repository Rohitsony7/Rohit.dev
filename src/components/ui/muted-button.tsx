
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

interface MutedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MutedButton = forwardRef<HTMLButtonElement, MutedButtonProps>(
  ({ children, className, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "px-4 py-2.5 h-9",
          "bg-secondary/60 text-secondary-foreground shadow-sm hover:bg-secondary/80",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

MutedButton.displayName = "MutedButton";
