
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface CardHoverEffectProps {
  items: {
    id: string;
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    className?: string;
    buttonText?: string;
  }[];
  className?: string;
  cardClassName?: string;
}

export function HoverEffect({
  items,
  className,
  cardClassName,
}: CardHoverEffectProps) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={cn(
            "group relative h-full w-full p-4 transition-colors hover:cursor-pointer",
            cardClassName
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 shadow-lg shadow-primary/30"
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 h-full w-full overflow-hidden rounded-xl border border-zinc-800 bg-card p-6">
            {item.icon && <div className="mb-2">{item.icon}</div>}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              {item.link && item.buttonText && (
                <a
                  href={item.link}
                  className="mt-auto inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  {item.buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
