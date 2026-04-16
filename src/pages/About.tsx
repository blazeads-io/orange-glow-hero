import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Zap, Users, Globe } from "lucide-react";

import team1 from "@/assets/about/team-1.jpg";
import global1 from "@/assets/about/global-1.jpg";
import strategy1 from "@/assets/about/strategy-1.jpg";
import creative1 from "@/assets/about/creative-1.jpg";
import mobile1 from "@/assets/about/mobile-1.jpg";

const fanImages = [
  { src: global1, rotate: -18, x: -180 },
  { src: strategy1, rotate: -9, x: -90 },
  { src: team1, rotate: 0, x: 0 },
  { src: creative1, rotate: 9, x: 90 },
  { src: mobile1, rotate: 18, x: 180 },
];

const features = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Every campaign is optimized for measurable outcomes and ROI.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our team combines creative strategy with data-driven execution.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Operating across India, UAE, and Singapore with scalable solutions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-8 overflow-hidden">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 text-center mx-auto max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">About Us</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Driving Growth When You{" "}
            <span className="text-muted-foreground">Need It Most.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Vibeads Digital is a performance-driven company delivering scalable growth solutions for brands across global markets.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Link to="/services">
              <Button variant="hero" size="lg" className="rounded-full px-8">
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fan Image Spread */}
      <section className="relative px-6 py-16 overflow-hidden">
        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute left-[10%] top-[20%] z-20 hidden md:block"
        >
          <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            Data-Driven
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute right-[10%] top-[15%] z-20 hidden md:block"
        >
          <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            Scalable Growth
          </span>
        </motion.div>

        <div className="flex items-end justify-center gap-2 md:gap-4 h-[300px] md:h-[400px]">
          {fanImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: img.rotate }}
              transition={{
                duration: 0.7,
                delay: 0.6 + i * 0.1,
                ease: "easeOut" as const,
              }}
              whileHover={{ y: -15, scale: 1.05, transition: { duration: 0.3 } }}
              className="w-[100px] md:w-[140px] h-[150px] md:h-[220px] rounded-2xl overflow-hidden border-2 border-border shadow-2xl cursor-pointer origin-bottom"
              style={{ transformOrigin: "bottom center" }}
            >
              <img
                src={img.src}
                alt={`About showcase ${i + 1}`}
                loading="lazy"
                width={140}
                height={220}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Row */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-muted-foreground leading-relaxed"
          >
            <p>
              We specialise in building and executing both brand-oriented and performance-oriented campaigns, combining creative strategy with data-driven execution. From user acquisition to revenue optimization, our approach is designed to deliver measurable impact at every stage of the funnel.
            </p>
            <p>
              Our core expertise includes mobile app marketing, performance advertising, and digital media strategy, with a strong focus on high-growth sectors such as OTT and content platforms.
            </p>
            <p>
              Beyond client services, Vibeads Digital is actively developing its own digital ecosystem, including OTT platforms and mobile applications, enabling us to operate at the intersection of media, technology, and performance marketing.
            </p>
          </motion.div>

          {/* Company Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-6">Company Information</h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
              <p className="font-medium text-foreground">Vibeads Digital Private Limited</p>
              <p>CIN: U73100OD2026PTC053422</p>
              <div className="pt-4">
                <p className="font-medium text-foreground mb-1">Registered Address</p>
                <p>Managobindpur, Near Govt Hospital</p>
                <p>Daleiput, Khurda, Odisha – 752056</p>
                <p>India</p>
              </div>
            </div>
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
                Let's Build Together
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Partner with Vibeads Digital to build campaigns that deliver real business impact.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="rounded-full px-10">
                  Contact Us
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

export default About;
