
import { useEffect, useState } from "react";
import { BookOpen, CalendarIcon, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  activities?: string[];
}

// LinkedIn data for Rohit Sony (https://www.linkedin.com/in/rohitsony7/)
const linkedinEducation: Education[] = [
  {
    id: 1,
    school: "VIT University",
    degree: "B.Tech",
    field: "Computer Science",
    period: "2014 - 2018",
    location: "Vellore, Tamil Nadu, India",
    activities: [
      "Technical club member",
      "Web development projects",
      "Participated in hackathons"
    ]
  }
];

export function EducationSection() {
  const [educationData, setEducationData] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchLinkedInEducation = async () => {
      try {
        // In a real implementation, you would make an API call to fetch LinkedIn data
        await new Promise(resolve => setTimeout(resolve, 700));
        setEducationData(linkedinEducation);
        
        toast({
          title: "Education data loaded",
          description: "Successfully loaded education from Rohit Sony's LinkedIn profile",
        });
      } catch (error) {
        console.error("Error fetching LinkedIn education:", error);
        toast({
          title: "Error",
          description: "Failed to load LinkedIn education data.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLinkedInEducation();
  }, [toast]);

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <BookOpen size={16} />
                <span>Education</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
                Academic Background
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                My educational journey that has shaped my technical foundation and problem-solving approach.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/in/rohitsony7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin size={16} />
                <span className="hidden md:inline">View on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array(1).fill(0).map((_, index) => (
              <div key={index} className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm animate-pulse">
                <div className="h-6 bg-secondary/50 rounded w-3/4 mb-3" />
                <div className="h-5 bg-secondary/40 rounded w-1/2 mb-4" />
                <div className="h-4 bg-secondary/30 rounded w-1/3 mb-6" />
                <div className="space-y-2 mb-4">
                  {Array(3).fill(0).map((_, idx) => (
                    <div key={idx} className="h-3 bg-secondary/20 rounded w-full" />
                  ))}
                </div>
              </div>
            ))
          ) : (
            educationData.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow overflow-hidden relative bg-card/50 backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      
      <h3 className="text-xl font-semibold mb-1">{education.school}</h3>
      <p className="text-primary font-medium">{education.degree}, {education.field}</p>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 mb-4">
        <CalendarIcon size={14} />
        <span>{education.period}</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{education.location}</p>
      
      {education.activities && education.activities.length > 0 && (
        <div>
          <p className="text-sm font-medium mb-2">Activities:</p>
          <ul className="space-y-1">
            {education.activities.map((activity, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary min-w-4">•</span> {activity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
