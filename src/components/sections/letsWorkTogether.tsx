import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export function LetsWorkTogether() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to collaborate on impactful projects? Get in touch and let's
          create something amazing together.
        </p>
        <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:shadow-lg transition-all">
          Contact Me
        </button>
      </div>
    </section>
  );
}
