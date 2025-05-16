
import { TextSpotlight } from "../ui/text-spotlight";
import { GridPattern } from "../ui/grid-pattern";
import { MutedButton } from "../ui/muted-button";
import { CalendarIcon, User } from "lucide-react";
import { Meteors } from "../ui/meteors";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <GridPattern />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-2/5 space-y-6 relative">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User size={16} />
                <span>About Me</span>
              </div>
              
              <TextSpotlight className="relative">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
                  Frontend Engineer with 6.7 years of experience
                </h2>
              </TextSpotlight>
              
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CalendarIcon size={16} />
                <span>Since 2017</span>
              </div>
            </div>
            
            <div className="relative p-6 rounded-xl bg-card/50 border shadow-sm">
              <Meteors number={3} />
              <p className="text-muted-foreground mb-4">
                I'm a frontend engineer passionate about creating intuitive and performant web applications. With extensive experience in React, TypeScript, and modern frontend architecture, I craft web experiences that users love.
              </p>
              
              <p className="text-muted-foreground">
                My focus is on building accessible, performant applications that combine beautiful aesthetics with practical functionality. I'm committed to staying at the forefront of frontend development, constantly learning and implementing the latest technologies and best practices.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <MutedButton>React</MutedButton>
                <MutedButton>TypeScript</MutedButton>
                <MutedButton>Next.js</MutedButton>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <StatCard
              title="6.7+"
              description="Years of Experience"
              bgClass="from-blue-500/20 to-cyan-400/20"
            />
            <StatCard 
              title="50+"
              description="Projects Completed"
              bgClass="from-purple-500/20 to-pink-500/20"
            />
            <StatCard
              title="20+"
              description="Happy Clients"
              bgClass="from-amber-400/20 to-orange-500/20"
            />
            <StatCard
              title="100%"
              description="Client Satisfaction"
              bgClass="from-green-400/20 to-emerald-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  title, 
  description, 
  bgClass 
}: { 
  title: string; 
  description: string;
  bgClass: string;
}) {
  return (
    <div className={cn(
      "p-6 rounded-xl border shadow-sm",
      "bg-gradient-to-br",
      bgClass
    )}>
      <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
