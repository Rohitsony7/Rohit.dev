import { Meteors } from "./ui/meteors";

export const UnifiedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
        {/* Base Gradient */}
      <div className="absolute inset-0 h-full w-full bg-background" />

        {/* Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-background via-background/90 to-background/50">
        <svg
          className="absolute inset-0 h-full w-full stroke-primary/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="unified-grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="0"
              patternTransform="translate(0 0)"
            >
              <path
                d="M.5 40V.5H40"
                fill="none"
                strokeDasharray="0"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#unified-grid-pattern)" />
        </svg>
      </div>

      {/* Meteors Layer - slightly adjusted for better visibility without being overwhelming */}
      <Meteors number={20} className="opacity-50" />
      
      {/* Optional: Add a subtle vignette or radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-background/20 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)' }} />
    </div>
  );
};
