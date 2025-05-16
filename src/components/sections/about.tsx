
import { TextSpotlight } from "../ui/text-spotlight";
import { GridPattern } from "../ui/grid-pattern";
import { MutedButton } from "../ui/muted-button";
import { CalendarIcon, User, Linkedin } from "lucide-react";
import { Meteors } from "../ui/meteors";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface AboutData {
  name: string;
  title: string;
  experienceYears: string;
  summary: string[];
  skills: string[];
  stats: {
    title: string;
    description: string;
    bgClass: string;
  }[];
}

// LinkedIn data for Rohit Sony (https://www.linkedin.com/in/rohitsony7/)
const linkedinAboutData: AboutData = {
  name: "Rohit Sony",
  title: "Senior Software Engineer (Frontend)",
  experienceYears: "6.7",
  summary: [
    "I'm a frontend engineer with extensive experience in React and modern JavaScript frameworks, passionate about creating intuitive and performant web applications.",
    "My focus is on building accessible, responsive applications that combine beautiful aesthetics with practical functionality. I'm committed to staying at the forefront of frontend development, constantly learning and implementing the latest technologies and best practices."
  ],
  skills: ["React", "TypeScript", "Next.js", "Redux", "JavaScript", "HTML/CSS"],
  stats: [
    {
      title: "6.7+",
      description: "Years of Experience",
      bgClass: "from-blue-500/20 to-cyan-400/20"
    },
    {
      title: "50+",
      description: "Projects Completed",
      bgClass: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "20+",
      description: "Happy Clients",
      bgClass: "from-amber-400/20 to-orange-500/20"
    },
    {
      title: "100%",
      description: "Client Satisfaction",
      bgClass: "from-green-400/20 to-emerald-500/20"
    }
  ]
};

export function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchLinkedInAbout = async () => {
      try {
        // In a real implementation, you would make an API call to fetch LinkedIn data
        await new Promise(resolve => setTimeout(resolve, 600));
        setAboutData(linkedinAboutData);
        
        toast({
          title: "LinkedIn profile loaded",
          description: "Successfully loaded about section from Rohit Sony's LinkedIn profile",
        });
      } catch (error) {
        console.error("Error fetching LinkedIn profile:", error);
        toast({
          title: "Error",
          description: "Failed to load LinkedIn profile data.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLinkedInAbout();
  }, [toast]);

  if (isLoading) {
    return (
      <section id="about" className="py-20 md:py-32 relative">
        <GridPattern />
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-2/5 space-y-6">
              <div className="h-10 bg-secondary/40 rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-secondary/30 rounded w-full animate-pulse mb-2" />
              <div className="h-6 bg-secondary/30 rounded w-full animate-pulse" />
              <div className="h-6 bg-secondary/30 rounded w-4/5 animate-pulse" />
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="p-6 rounded-xl border shadow-sm bg-card/20 animate-pulse">
                  <div className="h-8 bg-secondary/40 rounded w-1/3 mb-2" />
                  <div className="h-4 bg-secondary/30 rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  {aboutData?.title} with {aboutData?.experienceYears} years of experience
                </h2>
              </TextSpotlight>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CalendarIcon size={16} />
                  <span>Since 2017</span>
                </div>
                
                <a 
                  href="https://www.linkedin.com/in/rohitsony7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            <div className="relative p-6 rounded-xl bg-card/50 border shadow-sm">
              <Meteors number={3} />
              {aboutData?.summary.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
              
              <div className="flex flex-wrap gap-2 mt-6">
                {aboutData?.skills.map((skill) => (
                  <MutedButton key={skill}>{skill}</MutedButton>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {aboutData?.stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                description={stat.description}
                bgClass={stat.bgClass}
              />
            ))}
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
