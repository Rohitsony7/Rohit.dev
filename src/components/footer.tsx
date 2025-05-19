
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t relative overflow-hidden">
      {/* Aceternity-inspired background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <motion.a 
              href="#" 
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Rohit.dev
            </motion.a>
            <p className="text-sm text-muted-foreground mt-1">
              Frontend Engineer
            </p>
          </div>
          
          <motion.div 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Rohit Sony. All rights reserved.
          </motion.div>
        </motion.div>
        
        {/* Aceternity-inspired animated line */}
        <motion.div 
          className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  );
}
