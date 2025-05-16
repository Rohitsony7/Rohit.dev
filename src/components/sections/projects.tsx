
import { useEffect, useState } from 'react';
import { Briefcase, ExternalLink, Github, Loader2 } from 'lucide-react';
import { CardHover } from '../ui/card-hover';
import { ShimmerButton } from '../ui/shimmer-button';
import { MutedButton } from '../ui/muted-button';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/users/Rohitsony7/repos?sort=updated&per_page=12');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data: Repository[] = await response.json();
        
        // Filter out forked repositories and sort by stars
        const filteredProjects = data
          .filter(repo => !repo.name.includes('leetcode') && !repo.name.includes('clone'))
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        setProjects(filteredProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub projects:', err);
        setError('Failed to load projects. Please try again later.');
        toast({
          title: "Error",
          description: "Failed to fetch projects from GitHub",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);
  
  const getLanguageClass = (language: string | null) => {
    const languageColors: Record<string, string> = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500',
      Python: 'bg-green-500',
      // Add more as needed
    };
    
    return languageColors[language || ''] || 'bg-gray-500';
  };
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.language === activeFilter || 
        (project.topics && project.topics.includes(activeFilter.toLowerCase()))
      );
  
  // Get unique languages for filtering
  const languages = ['all', ...Array.from(new Set(projects.map(p => p.language).filter(Boolean)))];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Briefcase size={16} />
            <span>Projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
                Recent Work
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore my projects from GitHub, showcasing my skills and expertise as a frontend engineer.
              </p>
            </div>
            
            <a 
              href="https://github.com/Rohitsony7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View All Projects <ExternalLink size={14} />
            </a>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {languages.map((language) => (
            <Button
              key={language}
              variant={activeFilter === language ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(language)}
              className="capitalize"
            >
              {language}
            </Button>
          ))}
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <CardHover
                key={project.id}
                className="h-full"
                hoverClassName="scale-[1.02] shadow-lg"
              >
                <div className="p-6 rounded-xl border bg-card h-full flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 capitalize">
                        {project.name.replace(/-/g, ' ')}
                      </h3>
                      {project.language && (
                        <div className="flex items-center gap-2">
                          <span 
                            className={`w-3 h-3 rounded-full ${getLanguageClass(project.language)}`}
                          />
                          <span className="text-xs text-muted-foreground">
                            {project.language}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">
                        {project.stargazers_count}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {project.description || `A ${project.language || 'code'} project by Rohit.`}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.topics && project.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                    {project.topics && project.topics.length > 3 && (
                      <MutedButton className="px-2 py-1 text-xs h-auto">
                        +{project.topics.length - 3}
                      </MutedButton>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <ShimmerButton
                      className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground"
                      onClick={() => window.open(project.html_url, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </ShimmerButton>
                    
                    {project.homepage && (
                      <ShimmerButton
                        className="flex-1 flex items-center justify-center gap-2"
                        onClick={() => window.open(project.homepage, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live</span>
                      </ShimmerButton>
                    )}
                  </div>
                </div>
              </CardHover>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
