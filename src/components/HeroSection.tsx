import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const logos = ["BOGO", "IPSUM", "ACME", "CRUX", "FLUX"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Glow arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] md:w-[1200px] md:h-[600px]">
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-primary/40 via-primary/10 to-transparent blur-3xl animate-glow-pulse" />
        <div className="absolute inset-4 rounded-t-full border-t-2 border-l border-r border-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            2025
          </span>
          <span className="text-sm text-muted-foreground">Next-Gen AI Studio</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground"
        >
          AI-Driven Success{" "}
          <br />
          Redefining the Future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed"
        >
          Creating latest solutions that redefine innovation.
          <br />
          Stay ahead with AI-powered technology for the future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button variant="hero" size="lg" className="rounded-full px-8">
            Connect With Us
          </Button>
          <Button variant="hero-outline" size="lg" className="rounded-full px-8">
            What is Nubien?
          </Button>
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex items-center gap-8 md:gap-12"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm md:text-base font-bold tracking-widest text-muted-foreground/50"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
