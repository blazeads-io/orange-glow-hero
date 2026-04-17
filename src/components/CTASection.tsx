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
          className="relative rounded-3xl border border-primary/30 p-12 md:p-20 text-center overflow-hidden shadow-[0_30px_80px_-20px_hsl(24_100%_50%/0.35)]"
        >
          {/* Background image */}
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1536}
            height={768}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(24_100%_50%/0.25),transparent_60%)]" />

          {/* Decorative corner brackets */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-xl" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-primary/60 rounded-tr-xl" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-primary/60 rounded-bl-xl" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Ready When You Are</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
              Let's Scale Your <span className="text-primary">Growth</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Partner with Vibeads Digital to build campaigns that deliver real, measurable business impact.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="rounded-full px-10 group">
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
