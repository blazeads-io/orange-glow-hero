import { motion } from "framer-motion";
import { Tv, Smartphone, Globe, CreditCard } from "lucide-react";

const industries = [
  { icon: Tv, title: "OTT Platforms" },
  { icon: Smartphone, title: "Mobile Applications" },
  { icon: Globe, title: "Digital Products" },
  { icon: CreditCard, title: "Subscription-Based Businesses" },
];

const IndustriesSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Work With</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-foreground font-medium text-sm">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
