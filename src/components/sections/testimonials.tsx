
import { MessageSquare, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/utils/resume-data";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  relationship: string;
}

// Custom testimonials based on professional experience
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "Engineering Director",
    company: "Jio Platforms Limited",
    text: "Rohit played a crucial role in leading our frontend team. His exceptional work on JIO UAP and the Learning Platform demonstrated his technical prowess and leadership abilities. His innovations significantly improved our application performance and user experience.",
    relationship: "Manager",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Product Manager",
    company: "Jio Platforms Limited",
    text: "Working with Rohit has been a fantastic experience. His ability to translate complex requirements into intuitive interfaces is remarkable. His contributions to the JIO GPT project were instrumental in its success, and his technical insights have been invaluable.",
    relationship: "Colleague",
  },
  {
    id: 3,
    name: "Rahul Gupta",
    position: "Program Director",
    company: "Newton School",
    text: "Rohit is an exceptional mentor. His deep understanding of web technologies and ability to explain complex concepts in simple terms have made him one of our most valued instructors. Students consistently praise his guidance and practical approach to problem-solving.",
    relationship: "Colleague",
  },
];

export function TestimonialsSection() {
  const testimonialData = testimonials;

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
                Recommendations from colleagues, clients, and managers who I've
                had the pleasure to work with.
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

        {/* Aceternity-inspired testimonial carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      className="h-full"
    >
      <div className="bg-card/50 backdrop-blur-sm border shadow-sm rounded-xl p-6 h-full flex flex-col">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.2 }}
          className="mb-4 text-lg italic text-muted-foreground"
        >
          "{testimonial.text}"
        </motion.div>

        <div className="pt-4 border-t border-border mt-auto">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-primary">
            {testimonial.position}, {testimonial.company}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {testimonial.relationship}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
