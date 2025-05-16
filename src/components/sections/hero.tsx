
import { Spotlight } from "../ui/spotlight";
import { ShimmerButton } from "../ui/shimmer-button";
import { Meteors } from "../ui/meteors";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pb-20 overflow-hidden">
      <Meteors number={15} />
      <Spotlight className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:py-32">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm md:text-base font-medium text-muted-foreground mb-3 animate-fade-in">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient mb-6 animate-fade-in">
            Rohit Sony
          </h1>

          <div className="h-16 flex items-center mb-6">
            <TypewriterEffect />
          </div>

          <p className="max-w-2xl text-base md:text-lg text-muted-foreground mb-8 animate-fade-in">
            With over 6.7 years of experience crafting exceptional web experiences. 
            I specialize in building modern, performant, and accessible applications 
            that users love.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <ShimmerButton onClick={() => window.open("https://github.com/Rohitsony7", "_blank")}>
              View GitHub
            </ShimmerButton>
            <ShimmerButton 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </ShimmerButton>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </Spotlight>
    </section>
  );
}

function TypewriterEffect() {
  return (
    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient">
      <span className="text-primary">Frontend Engineer</span>
    </div>
  );
}
