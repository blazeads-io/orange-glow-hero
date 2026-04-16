import { motion } from "framer-motion";
import { Smartphone, Target, Palette, Tv } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Marketing",
    desc: "We help apps scale user acquisition with high-performing campaigns across global markets, focusing on retention and ROI.",
  },
  {
    icon: Target,
    title: "Performance Advertising",
    desc: "Data-driven campaigns across platforms like Meta and Google, optimized for conversions, revenue, and scale.",
  },
  {
    icon: Palette,
    title: "Brand Campaign Strategy",
    desc: "Creative-led campaigns designed to build brand recall while supporting long-term growth.",
  },
  {
    icon: Tv,
    title: "OTT & Content Promotion",
    desc: "Specialized strategies to grow OTT platforms, drive subscriptions, and increase user engagement.",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
