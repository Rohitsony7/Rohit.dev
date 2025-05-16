import { CalendarCheck, MoreHorizontal, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MovingBorder } from '../ui/moving-border';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

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
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-border transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
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
              <CalendarCheck className="h-3.5 w-3.5" />
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
