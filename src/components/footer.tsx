
import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-gradient">
              Rohit.dev
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Frontend Engineer
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Rohit Sony. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
