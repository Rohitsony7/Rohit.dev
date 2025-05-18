
import { Code } from 'lucide-react';
import { CardHover } from '../ui/card-hover';
import { resumeData } from '../../utils/resume-data';

interface SkillCategory {
  name: string;
  skills: string[];
}

export function SkillsSection() {
  // Transform skills_categories from resumeData into an array
  const skillCategories: SkillCategory[] = Object.entries(resumeData.skills_categories || {}).map(([key, value]) => ({
    name: key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    skills: value as string[]
  }));

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/40 pointer-events-none" />
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code size={16} />
            <span>My Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            With {resumeData.bio.split(' ')[2]} years of experience, I've mastered a diverse range of technologies and tools to build exceptional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <CardHover
              key={category.name}
              className="rounded-xl transition-all duration-300"
              hoverClassName="scale-[1.02] shadow-lg"
            >
              <div className="p-6 rounded-xl border bg-card h-full">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardHover>
          ))}
        </div>
      </div>
    </section>
  );
}
