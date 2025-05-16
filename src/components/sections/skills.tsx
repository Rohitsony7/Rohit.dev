
import { Code } from 'lucide-react';
import { CardHover } from '../ui/card-hover';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend Core
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 95, category: 'Frontend' },
  
  // Frontend Frameworks & Libraries
  { name: 'Next.js', level: 85, category: 'Framework' },
  { name: 'Redux', level: 90, category: 'State Management' },
  { name: 'React Query', level: 80, category: 'Data Fetching' },
  { name: 'TailwindCSS', level: 92, category: 'Styling' },
  { name: 'Styled Components', level: 85, category: 'Styling' },
  
  // Testing
  { name: 'Jest', level: 80, category: 'Testing' },
  { name: 'React Testing Library', level: 78, category: 'Testing' },
  
  // Build Tools & Others
  { name: 'Webpack', level: 75, category: 'Build Tools' },
  { name: 'Vite', level: 85, category: 'Build Tools' },
  { name: 'Git', level: 88, category: 'Version Control' },
  { name: 'GraphQL', level: 75, category: 'API' },
];

export function SkillsSection() {
  // Group skills by category
  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

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
            With 6.7 years of experience, I've mastered a diverse range of technologies and tools to build exceptional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <CardHover
              key={category}
              className="rounded-xl transition-all duration-300"
              hoverClassName="scale-[1.02] shadow-lg"
            >
              <div className="p-6 rounded-xl border bg-card h-full">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
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

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
