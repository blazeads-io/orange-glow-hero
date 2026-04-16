import { motion } from "framer-motion";
import { BarChart3, Megaphone, Smartphone, Tv } from "lucide-react";

const items = [
  { icon: BarChart3, title: "Performance Marketing", desc: "Data-driven campaigns optimized for measurable results." },
  { icon: Megaphone, title: "Brand Campaigns", desc: "Creative strategies that build lasting brand recall." },
  { icon: Smartphone, title: "Mobile App Growth", desc: "Scale user acquisition with high-performing campaigns." },
  { icon: Tv, title: "OTT & Content Marketing", desc: "Drive subscriptions and engagement for content platforms." },
];

const WhatWeDoSection = () => {
  return (
    <section className="px-6 py-24 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Vibeads Digital, we combine brand storytelling with performance execution to deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
