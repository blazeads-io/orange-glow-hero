import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Performance-first approach",
  "Data-driven decision making",
  "Global market expertise (India, UAE, Singapore)",
  "Scalable campaign structures",
  "Focus on measurable ROI",
];

const WhyUsSection = () => {
  return (
    <section className="px-6 py-24 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why <span className="text-primary">Vibeads Digital</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We deliver results that matter, powered by data and driven by performance.
            </p>
            <div className="flex flex-col gap-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Clients Served", value: "50+" },
              { label: "Campaigns Run", value: "200+" },
              { label: "Countries", value: "10+" },
              { label: "ROI Delivered", value: "3x+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
