
import { BookOpen, CalendarIcon, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { resumeData } from "@/utils/resume-data";

interface Certificate {
  issuer: string;
  name: string;
  url: string;
}

export function EducationSection() {
  const { education, certificates } = resumeData;
  
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
                href={resumeData.linkedin}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-md transition-shadow overflow-hidden relative bg-card/50 backdrop-blur-sm md:col-span-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-xl font-semibold mb-1">{education.institution}</h3>
            <p className="text-primary font-medium">{education.degree}</p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 mb-4">
              <CalendarIcon size={14} />
              <span>Graduated {education.year}</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{education.location}</p>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow overflow-hidden relative bg-card/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div key={index} className="border-b border-border pb-3 last:border-0">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                  <a 
                    href={cert.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {resumeData.languages && resumeData.languages.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.languages.map((language, index) => (
                <span key={index} className="px-3 py-1 bg-secondary/50 rounded-full text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
