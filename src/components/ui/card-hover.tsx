
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export const CardHover = ({
  className,
  children,
  hoverClassName,
}: {
  className?: string;
  children: React.ReactNode;
  hoverClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const rotateX = ((mouseY - centerY) / centerY) * -10;
      const rotateY = ((mouseX - centerX) / centerX) * 10;
      
      setPosition({ x: rotateY, y: rotateX });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn(
        "transition-transform duration-300 ease-out",
        isHovered && "z-10",
        className
      )}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${position.y}deg) rotateY(${position.x}deg)` : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      }}
    >
      <div className={cn(isHovered && hoverClassName)}>
        {children}
      </div>
    </div>
  );
};

export const CardHoverEffect = ({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out transform",
        isHovered && "translate-y-[-5px] shadow-xl",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
