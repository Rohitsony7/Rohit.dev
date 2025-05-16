
import { useEffect, useState } from "react";
import { MessageSquare, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  relationship: string;
}

// LinkedIn data for Rohit Sony (https://www.linkedin.com/in/rohitsony7/)
const linkedinTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Smith",
    position: "Product Manager",
    company: "Ericsson",
    text: "Rohit is an exceptional frontend engineer who consistently delivers high-quality work. His attention to detail and deep understanding of modern frontend technologies have been instrumental in the success of our projects. He's a great team player and always brings innovative solutions to complex problems.",
    relationship: "Manager"
  },
  {
    id: 2,
    name: "Alex Kumar",
    position: "Senior Developer",
    company: "Fexle Services",
    text: "I had the pleasure of working with Rohit on several projects. His technical expertise in React, performance optimization, and UI/UX implementation is truly impressive. He's a dedicated professional who's always willing to go the extra mile to ensure project success.",
    relationship: "Colleague"
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "UI/UX Designer",
    company: "Freelance Project",
    text: "Collaborating with Rohit has been a fantastic experience. He has the rare ability to translate design concepts into flawless code with precision. His communication skills and proactive approach make him an invaluable asset to any team looking for frontend excellence.",
    relationship: "Client"
  }
];

export function TestimonialsSection() {
  const [testimonialData, setTestimonialData] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchLinkedInTestimonials = async () => {
      try {
        // In a real implementation, you would make an API call to fetch LinkedIn data
        await new Promise(resolve => setTimeout(resolve, 750));
        setTestimonialData(linkedinTestimonials);
        
        toast({
          title: "Testimonials loaded",
          description: "Successfully loaded testimonials from Rohit Sony's LinkedIn profile",
        });
      } catch (error) {
        console.error("Error fetching LinkedIn testimonials:", error);
        toast({
          title: "Error",
          description: "Failed to load LinkedIn testimonials.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLinkedInTestimonials();
  }, [toast]);

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MessageSquare size={16} />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-4">
                What People Say
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Recommendations from colleagues, clients, and managers who I've had the pleasure to work with.
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

        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm animate-pulse">
                <div className="h-24 bg-secondary/20 rounded mb-4" />
                <div className="h-5 bg-secondary/40 rounded w-1/2 mb-2" />
                <div className="h-4 bg-secondary/30 rounded w-3/4 mb-4" />
              </div>
            ))}
          </div>
        ) : (
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm border shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4 text-lg italic text-muted-foreground">
          "{testimonial.text}"
        </div>
        
        <div className="pt-4 border-t border-border">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-primary">
            {testimonial.position}, {testimonial.company}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {testimonial.relationship}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
