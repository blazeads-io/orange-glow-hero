import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Smartphone, Target, Palette, Tv } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "We design and execute campaigns focused on driving measurable outcomes — installs, conversions, and revenue. Every campaign is optimized continuously for maximum efficiency and scale.",
  },
  {
    icon: Palette,
    title: "Brand Campaigns",
    desc: "We create impactful brand campaigns that enhance visibility, improve recall, and support long-term growth objectives.",
  },
  {
    icon: Smartphone,
    title: "Mobile App User Acquisition",
    desc: "From launch to scale, we help apps acquire high-quality users through targeted and optimized marketing strategies.",
  },
  {
    icon: Tv,
    title: "OTT Growth Strategy",
    desc: "We work with OTT platforms to drive subscriptions, improve engagement, and scale user base through performance-driven campaigns.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to scale your business.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
