
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardHover } from '../ui/card-hover';
import { resumeData } from '../../utils/resume-data';
import { Meteors } from '../ui/meteors';
import { SparklesCore } from '../ui/sparkles';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { useState } from 'react';

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

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="skillsSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#777"
        />
      </div>
      
      {/* Subtle floating meteors */}
      <Meteors number={6} className="opacity-20" />
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Code size={16} />
            <span>My Skills</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            <TextGenerateEffect words="Technical Expertise" />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl"
          >
            With {resumeData.bio.split(' ')[2]} years of experience, I've mastered a diverse range of technologies and tools to build exceptional web experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardHover
                className="rounded-xl transition-all duration-300 h-full"
                hoverClassName="scale-[1.02] shadow-lg"
              >
                <div className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Background gradient that changes on hover */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-10 transition-opacity duration-500"
                    style={{ 
                      opacity: hoveredCategory === category.name ? 0.15 : 0.05,
                      backgroundImage: getGradientByIndex(index)
                    }} 
                  />
                  
                  <h3 className="text-xl font-semibold mb-6 relative z-10">{category.name}</h3>
                  
                  <div className="space-y-4 relative z-10">
                    {category.skills.map((skill, idx) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.1 * idx, duration: 0.3 } 
                        }}
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Subtle shine effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{ opacity: hoveredCategory === category.name ? 1 : 0 }}
                  >
                    <div className="absolute inset-0 translate-x-full group-hover:animate-[shimmer_2s_infinite]">
                      <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
                    </div>
                  </div>
                </div>
              </CardHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to get different gradients for different categories
function getGradientByIndex(index: number): string {
  const gradients = [
    'linear-gradient(to bottom right, var(--blue-500)/30, var(--cyan-400)/30)',
    'linear-gradient(to bottom right, var(--purple-500)/30, var(--pink-500)/30)',
    'linear-gradient(to bottom right, var(--amber-400)/30, var(--orange-500)/30)',
    'linear-gradient(to bottom right, var(--green-400)/30, var(--emerald-500)/30)',
    'linear-gradient(to bottom right, var(--red-400)/30, var(--rose-500)/30)',
    'linear-gradient(to bottom right, var(--indigo-500)/30, var(--violet-500)/30)',
  ];
  
  return gradients[index % gradients.length];
}
