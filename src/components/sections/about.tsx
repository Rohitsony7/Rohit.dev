import { TextSpotlight } from "../ui/text-spotlight";
import { GridPattern } from "../ui/grid-pattern";
import { MutedButton } from "../ui/muted-button";
import { CalendarIcon, User, Linkedin } from "lucide-react";
import { Meteors } from "../ui/meteors";
import { cn } from "@/lib/utils";
import { resumeData } from "@/utils/resume-data";

export function AboutSection() {
  const aboutData = {
    name: resumeData.name,
    title: resumeData.title,
    experienceYears: resumeData.totalExperience,
    summary: [resumeData.bio],
    skills: resumeData.skills,
    stats: [
      {
        title: resumeData.totalExperience,
        description: "Years of Experience",
        bgClass: "from-blue-500/20 to-cyan-400/20",
      },
      {
        title: `${resumeData.experience.length}`,
        description: "Companies Worked With",
        bgClass: "from-purple-500/20 to-pink-500/20",
      },
      {
        title: "10+",
        description: "Projects Completed",
        bgClass: "from-amber-400/20 to-orange-500/20",
      },
      {
        title: `${resumeData.certificates.length}`,
        description: "Certifications",
        bgClass: "from-green-400/20 to-emerald-500/20",
      },
    ],
  };

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
                  {aboutData?.title} with {aboutData?.experienceYears} years of
                  experience
                </h2>
              </TextSpotlight>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CalendarIcon size={16} />
                  <span>
                    Since{" "}
                    {
                      resumeData.experience[
                        resumeData.experience.length - 1
                      ].period.split(" - ")[0]
                    }
                    <span className="hidden md:inline">
                      {" "}
                      - {aboutData?.experienceYears}
                    </span>
                  </span>
                </div>

                <a
                  href={resumeData.linkedin}
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
                {aboutData?.skills.slice(0, 8).map((skill) => (
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
  bgClass,
}: {
  title: string;
  description: string;
  bgClass: string;
}) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border shadow-sm",
        "bg-gradient-to-br",
        bgClass
      )}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
