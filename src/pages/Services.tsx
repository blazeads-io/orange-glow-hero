import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Smartphone, Palette, Tv, TrendingUp, Users } from "lucide-react";

import performance1 from "@/assets/services/performance-1.jpg";
import performance2 from "@/assets/services/performance-2.jpg";
import appMarketing1 from "@/assets/services/app-marketing-1.jpg";
import brand1 from "@/assets/services/brand-1.jpg";
import ott1 from "@/assets/services/ott-1.jpg";
import growth1 from "@/assets/services/growth-1.jpg";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    subtitle: "Data-Driven Campaigns",
    desc: "We design and execute campaigns focused on driving measurable outcomes — installs, conversions, and revenue.",
    images: [performance1, performance2, growth1],
  },
  {
    icon: Smartphone,
    title: "Mobile App Marketing",
    subtitle: "User Acquisition at Scale",
    desc: "From launch to scale, we help apps acquire high-quality users through targeted and optimized strategies.",
    images: [appMarketing1, performance1, growth1],
  },
  {
    icon: Palette,
    title: "Brand Campaigns",
    subtitle: "Creative Strategy",
    desc: "We create impactful brand campaigns that enhance visibility, improve recall, and support long-term growth.",
    images: [brand1, performance2, ott1],
  },
  {
    icon: Tv,
    title: "OTT Growth Strategy",
    subtitle: "Content Platforms",
    desc: "We work with OTT platforms to drive subscriptions, improve engagement, and scale user base.",
    images: [ott1, brand1, appMarketing1],
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    subtitle: "Maximize ROI",
    desc: "Continuous optimization of campaigns and funnels to maximize revenue and reduce acquisition costs.",
    images: [growth1, performance1, performance2],
  },
  {
    icon: Users,
    title: "Audience Growth",
    subtitle: "Expand Your Reach",
    desc: "Automate marketing, scale campaigns, and improve productivity with intelligent growth solutions.",
    images: [appMarketing1, brand1, ott1],
  },
];

const tags = [
  "Performance Ads",
  "User Acquisition",
  "OTT Marketing",
  "Brand Strategy",
  "App Growth",
  "Revenue Optimization",
  "Data Analytics",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20 overflow-hidden">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 text-center mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 h-12 w-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
          >
            <span className="text-primary text-xs font-bold">Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Growth-Driven Services for{" "}
            <span className="text-primary">Future-Ready Brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-muted-foreground max-w-xl mx-auto"
          >
            Our cutting-edge strategies are designed to transform businesses, enhance efficiency, and drive innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Link to="/contact">
              <Button variant="hero" size="lg" className="rounded-full px-8">
                Book a Free Consult
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col group hover:border-primary/40 transition-colors"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-xs text-primary/80 font-medium mt-1">{service.subtitle}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* Image grid */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                {service.images.map((img, j) => (
                  <motion.div
                    key={j}
                    className="aspect-square rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={img}
                      alt={`${service.title} example ${j + 1}`}
                      loading="lazy"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30 p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Scale Your Growth?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Partner with Vibeads Digital to build campaigns that deliver real business impact.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="rounded-full px-10">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
