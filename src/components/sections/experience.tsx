
import { useState, useEffect } from 'react';
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

// Real experiences data from LinkedIn: Rohit Sony (https://www.linkedin.com/in/rohitsony7/)
const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Software Engineer (Frontend)',
    company: 'Ericsson',
    period: 'May 2023 - Present',
    description: [
      'Leading frontend development for cloud-native application architectures',
      'Building microservices and distributed systems for network applications',
      'Implementing advanced UI/UX design patterns for complex telecom dashboards',
      'Mentoring junior developers and conducting technical training sessions'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'WebSockets', 'Redux'],
    current: true
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Fexle Services Pvt. Ltd.',
    period: 'Oct 2021 - May 2023',
    description: [
      'Developed and maintained responsive web applications with React',
      'Built reusable components and front-end libraries for future use',
      'Implemented state management with Redux for complex application states',
      'Optimized applications for maximum speed and scalability'
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Angular', 'Material-UI', 'CSS3']
  },
  {
    id: 3,
    title: 'Frontend Engineer',
    company: 'Freelance',
    period: 'Apr 2020 - Oct 2021',
    description: [
      'Built custom websites and applications for various clients',
      'Implemented modern JavaScript frameworks and libraries',
      'Created responsive designs and cross-browser compatible solutions',
      'Integrated REST APIs and third-party services'
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery']
  },
  {
    id: 4,
    title: 'Associate - Technology',
    company: 'Cognizant',
    period: 'Jul 2018 - Apr 2020',
    description: [
      'Supported development of web applications for financial services clients',
      'Implemented UI designs using HTML, CSS, and JavaScript',
      'Participated in Agile development processes and SCRUM ceremonies',
      'Collaborated with cross-functional teams to deliver projects on schedule'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Responsive Design']
  }
];

export function ExperienceSection() {
  const [profileData, setProfileData] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching data from LinkedIn API
    const fetchLinkedInData = async () => {
      try {
        // In a real implementation, you would make an API call here
        // For now, we'll use the hardcoded data after a slight delay to simulate fetch
        await new Promise(resolve => setTimeout(resolve, 800));
        setProfileData(experiences);
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

    fetchLinkedInData();
  }, [toast]);

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
            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/in/rohitsony7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                <span className="hidden md:inline">View on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-border transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12 relative">
            {isLoading ? (
              // Loading skeleton state
              Array(4).fill(0).map((_, index) => (
                <div key={index} className={cn(
                  "flex flex-col md:flex-row gap-4",
                  index % 2 !== 0 && "md:flex-row-reverse"
                )}>
                  {/* Timeline dot skeleton */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-secondary animate-pulse" />
                  
                  {/* Content skeleton */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-10 md:pl-0",
                    index % 2 !== 0 ? "md:pr-10" : "md:pl-10"
                  )}>
                    <div className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm">
                      <div className="h-6 bg-secondary/50 rounded w-3/4 mb-3 animate-pulse" />
                      <div className="h-4 bg-secondary/40 rounded w-1/3 mb-4 animate-pulse" />
                      <div className="space-y-2 mb-4">
                        {Array(3).fill(0).map((_, idx) => (
                          <div key={idx} className="h-3 bg-secondary/30 rounded w-full animate-pulse" />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {Array(4).fill(0).map((_, idx) => (
                          <div key={idx} className="h-6 w-16 bg-secondary/40 rounded-full animate-pulse" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              profileData.map((exp, index) => (
                <ExperienceItem 
                  key={exp.id} 
                  experience={exp} 
                  isEven={index % 2 === 0} 
                />
              ))
            )}
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
