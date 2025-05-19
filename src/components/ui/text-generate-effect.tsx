
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  delay = 0.05,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const [isInView, setIsInView] = useState(false);
  const [renderedContent, setRenderedContent] = useState<React.ReactNode[]>([]);

  // Split the words into an array
  const wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".text-generate-effect");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isInView) {
      // Render each word with animation
      const content: React.ReactNode[] = [];
      
      wordsArray.forEach((word, idx) => {
        const letters = word.split("");
        
        const wordSpan = (
          <span key={`word-${idx}`} className="inline-block">
            {letters.map((letter, letterIdx) => (
              <motion.span
                key={`letter-${idx}-${letterIdx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: (idx * letters.length + letterIdx) * delay,
                  ease: [0.455, 0.03, 0.515, 0.955]
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {idx < wordsArray.length - 1 && "\u00A0"}
          </span>
        );
        
        content.push(wordSpan);
      });
      
      timeout = setTimeout(() => {
        setRenderedContent(content);
      }, 0);
    }
    
    return () => clearTimeout(timeout);
  }, [isInView, words, delay, wordsArray]);

  return (
    <div className={cn("text-generate-effect", className)}>
      {isInView ? renderedContent : <span>{words}</span>}
    </div>
  );
};
