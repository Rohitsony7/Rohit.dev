import { motion } from "framer-motion";

export function BackgroundBeams() {
  const beams = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          initial={{
            opacity: 0,
            x: beam.x,
            y: beam.y,
            rotate: beam.rotate,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: beam.x + Math.random() * 50 - 25,
            y: beam.y + Math.random() * 50 - 25,
            rotate: beam.rotate + 360,
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute w-[200px] h-[2px] bg-gradient-to-r from-primary to-secondary"
          style={{
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
