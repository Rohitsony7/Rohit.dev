
import { cn } from "@/lib/utils";
import { useTheme } from "../theme-provider";

interface GridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeWidth?: number;
}

export function GridPattern({
  className,
  width = 100,
  height = 100,
  x = 0,
  y = 0,
  strokeWidth = 1,
}: GridPatternProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <div className={cn(
        "absolute h-full w-full", 
        isDark ? "bg-dotted-grid-dark" : "bg-dotted-grid"
      )} />
    </div>
  );
}
