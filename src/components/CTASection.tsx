import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.18),transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative z-10">
            {/* Minimal eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-[11px] font-medium text-primary uppercase tracking-[0.2em]">
                Get Started
              </span>
              <span className="h-px w-8 bg-primary/60" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Let's Scale Your{" "}
              <span className="text-primary">Growth</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Partner with Vibeads Digital to build campaigns that deliver real, measurable business impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full px-8 group"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 text-muted-foreground hover:text-foreground"
                >
                  View Services
                </Button>
              </Link>
            </div>

            {/* Minimal trust line */}
            <div className="mt-10 flex items-center justify-center gap-6 text-[11px] text-muted-foreground/70 uppercase tracking-[0.18em]">
              <span>No Lock-in</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Free Audit</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>24h Reply</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
