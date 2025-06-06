import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/utils/resume-data";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { SparklesCore } from "../ui/sparkles";
import { Meteors } from "../ui/meteors";
import { ExperienceTimeline } from "../experience/timeline";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="experienceSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={12}
          className="w-full h-full"
          particleColor="#888"
        />
      </div>

      {/* Floating meteors effect */}
      <Meteors number={8} className="opacity-30" />

      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
          >
            <Briefcase size={18} className="text-primary" />
            <span>Work Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            <TextGenerateEffect
              words="My Professional Journey"
              className="inline"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl"
          >
            Over the past{" "}
            <span className="text-primary font-medium">
              {resumeData.totalExperience}
            </span>
            , I've collaborated with exceptional teams and contributed to
            impactful projects across various domains.
          </motion.p>
        </motion.div>

        <ExperienceTimeline experiences={resumeData.experience} />
      </div>
    </section>
  );
}
