import { useState } from 'react';
import { Calendar, MoreHorizontal, Briefcase, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MovingBorder } from '../ui/moving-border';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { useToast } from '@/hooks/use-toast';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

// Default experiences data
const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2022 - Present',
    description: [
      'Led the frontend development of a major e-commerce platform, increasing conversion rates by 30%',
      'Architected and implemented a new component library using React and TypeScript',
      'Mentored junior developers and conducted code reviews to maintain high code quality'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'TailwindCSS'],
    current: true
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    period: 'Mar 2020 - Dec 2021',
    description: [
      'Built responsive web applications for clients in finance and healthcare sectors',
      'Improved application performance by 40% through code optimization',
      'Collaborated with UX/UI designers to implement pixel-perfect designs'
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'SCSS', 'Webpack']
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'Creative Agency',
    period: 'Jul 2018 - Feb 2020',
    description: [
      'Developed and maintained client websites, ensuring mobile compatibility',
      'Integrated third-party APIs for payment processing and data visualization',
      'Assisted in transitioning from jQuery to modern JavaScript frameworks'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'WordPress']
  },
  {
    id: 4,
    title: 'Junior Frontend Developer',
    company: 'StartUp Solutions',
    period: 'Aug 2017 - Jun 2018',
    description: [
      'Built interactive UI components for web applications',
      'Contributed to the development of responsive landing pages',
      'Participated in daily stand-ups and sprint planning sessions'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git']
  }
];

export function ExperienceSection() {
  const [linkedinUsername, setLinkedinUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState<Experience[]>(experiences);
  const { toast } = useToast();

  const fetchLinkedinProfile = async () => {
    if (!linkedinUsername.trim()) {
      toast({
        title: "Username Required",
        description: "Please enter a LinkedIn username to fetch your timeline",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real implementation, this would be an API call to your backend
      // which would handle LinkedIn API authentication and data fetching
      // For now, we'll just simulate a successful fetch with a delay
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // You would replace this with actual LinkedIn API response handling
      // For now, we're keeping the original experiences
      setProfileData(experiences);
      
      toast({
        title: "Profile Fetched!",
        description: "Your LinkedIn experiences have been imported.",
      });
      
      // Close the form after successful fetch
      setIsOpen(false);
    } catch (error) {
      console.error("Error fetching LinkedIn profile:", error);
      toast({
        title: "Error",
        description: "Failed to fetch LinkedIn profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Briefcase size={16} />
                <span>Work Experience</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
                My Professional Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Over the past 6.7 years, I've had the opportunity to work with amazing teams and contribute to impactful projects.
              </p>
            </div>
            <div>
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Linkedin size={16} />
                    <span>Import from LinkedIn</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Card className="p-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Enter your LinkedIn username to import your professional timeline:</p>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="username" 
                            value={linkedinUsername}
                            onChange={(e) => setLinkedinUsername(e.target.value)}
                            className="flex-1"
                          />
                          <ShimmerButton 
                            onClick={fetchLinkedinProfile} 
                            disabled={isLoading}
                            className="whitespace-nowrap"
                          >
                            {isLoading ? "Importing..." : "Import Timeline"}
                          </ShimmerButton>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Note: This will fetch your public LinkedIn profile information. Make sure your profile is public and the username is correct.
                      </p>
                    </div>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-border transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12 relative">
            {profileData.map((exp, index) => (
              <ExperienceItem 
                key={exp.id} 
                experience={exp} 
                isEven={index % 2 === 0} 
              />
            ))}
          </div>
          
          {/* Start indicator */}
          <div className="absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="text-xs text-muted-foreground mt-2">Start</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ 
  experience, 
  isEven 
}: { 
  experience: Experience,
  isEven: boolean
}) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-4",
      !isEven && "md:flex-row-reverse"
    )}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-primary flex items-center justify-center">
        {experience.current ? (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
          </span>
        ) : (
          <MoreHorizontal className="h-4 w-4 text-primary-foreground" />
        )}
      </div>
      
      {/* Content */}
      <div className={cn(
        "w-full md:w-1/2 pl-10 md:pl-0",
        !isEven ? "md:pr-10" : "md:pl-10"
      )}>
        <div className={cn(
          experience.current ? "border-primary" : "border-border",
          "p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm"
        )}>
          {experience.current && (
            <MovingBorder
              duration={2500}
              containerClassName="absolute inset-0"
              className="opacity-30"
              borderRadius="0.75rem"
            >
              {/* Empty div as child */}
              <div />
            </MovingBorder>
          )}
          
          <div className="flex flex-wrap gap-2 items-start justify-between mb-3">
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/50 text-xs">
              <Calendar className="h-3.5 w-3.5" />
              <span>{experience.period}</span>
            </div>
          </div>
          
          <p className="text-primary font-medium mb-4">{experience.company}</p>
          
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary min-w-4">•</span> {item}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
