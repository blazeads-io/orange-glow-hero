import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-primary/30 p-12 md:p-20 text-center overflow-hidden shadow-[0_30px_80px_-20px_hsl(24_100%_50%/0.45)]"
        >
          {/* Background image — more visible */}
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          {/* Lighter overlay so image shows through */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/55 to-background/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(24_100%_50%/0.30),transparent_65%)]" />

          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />

          {/* Decorative corner brackets */}
          <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-primary/70 rounded-tl-xl" />
          <div className="absolute top-5 right-5 w-10 h-10 border-t-2 border-r-2 border-primary/70 rounded-tr-xl" />
          <div className="absolute bottom-5 left-5 w-10 h-10 border-b-2 border-l-2 border-primary/70 rounded-bl-xl" />
          <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-primary/70 rounded-br-xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/40 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Ready When You Are</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight drop-shadow-[0_4px_30px_hsl(24_100%_50%/0.3)]">
              Let's Scale Your{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Growth
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Partner with Vibeads Digital to build campaigns that deliver real, measurable business impact.
            </p>
            <Link to="/contact">
              <Button
                variant="hero"
                size="lg"
                className="rounded-full px-10 group shadow-[0_10px_40px_-10px_hsl(24_100%_50%/0.6)]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
