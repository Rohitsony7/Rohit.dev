import { useState } from "react";
import { Calendar, MoreHorizontal, Briefcase, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { MovingBorder } from "../ui/moving-border";
import { resumeData as experiences, resumeData } from "../../utils/resume-data"; // Adjusted import path

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Briefcase size={16} />
            <span>Resume</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
            Download My Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Click the button below to download my resume and learn more about my
            professional journey.
          </p>
          <a
            href="/resume.pdf" // Path to your resume in the public folder
            download="Rohit_Sony_Resume.pdf" // Suggested download filename
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-primary rounded-md shadow hover:bg-primary/80 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-border transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12 relative">
            {resumeData.experience.map((exp, index) => (
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
  isEven,
}: {
  experience: Experience;
  isEven: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-4",
        !isEven && "md:flex-row-reverse"
      )}
    >
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
      <div
        className={cn(
          "w-full md:w-1/2 pl-10 md:pl-0",
          !isEven ? "md:pr-10" : "md:pl-10"
        )}
      >
        <div
          className={cn(
            experience.current ? "border-primary" : "border-border",
            "p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm relative"
          )}
        >
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
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
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

export function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">{resumeData.name}</h2>
        <p className="text-muted-foreground mb-6">{resumeData.bio}</p>
        <a
          href={resumeData.resumeLink} // Path to the resume file
          target="_blank" // Opens the resume in a new tab
          rel="noopener noreferrer" // Security best practice
          className="px-6 py-3 bg-primary text-white rounded-md shadow hover:bg-primary/80 transition-colors"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
