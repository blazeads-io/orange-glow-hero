import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FloatingOrb, GridPattern, FloatingParticles, GlowingDot } from "@/components/AnimatedBackgrounds";
import {
  Target, Smartphone, Palette, Tv, TrendingUp, Users,
  BarChart3, Megaphone, CheckCircle, Building2, Zap, Globe,
  Mail, MapPin, CreditCard,
} from "lucide-react";

import performance1 from "@/assets/services/performance-1.jpg";
import performance2 from "@/assets/services/performance-2.jpg";
import appMarketing1 from "@/assets/services/app-marketing-1.jpg";
import brand1 from "@/assets/services/brand-1.jpg";
import ott1 from "@/assets/services/ott-1.jpg";
import growth1 from "@/assets/services/growth-1.jpg";

import team1 from "@/assets/about/team-1.jpg";
import global1 from "@/assets/about/global-1.jpg";
import strategy1 from "@/assets/about/strategy-1.jpg";
import creative1 from "@/assets/about/creative-1.jpg";
import mobile1 from "@/assets/about/mobile-1.jpg";

/* ─── Data ─── */

const whatWeDoItems = [
  { icon: BarChart3, title: "Performance Marketing", desc: "Data-driven campaigns optimized for measurable results." },
  { icon: Megaphone, title: "Brand Campaigns", desc: "Creative strategies that build lasting brand recall." },
  { icon: Smartphone, title: "Mobile App Growth", desc: "Scale user acquisition with high-performing campaigns." },
  { icon: Tv, title: "OTT & Content Marketing", desc: "Drive subscriptions and engagement for content platforms." },
];

const services = [
  { icon: Target, title: "Performance Marketing", subtitle: "Data-Driven Campaigns", desc: "We design and execute campaigns focused on driving measurable outcomes — installs, conversions, and revenue.", images: [performance1, performance2, growth1] },
  { icon: Smartphone, title: "Mobile App Marketing", subtitle: "User Acquisition at Scale", desc: "From launch to scale, we help apps acquire high-quality users through targeted and optimized strategies.", images: [appMarketing1, performance1, growth1] },
  { icon: Palette, title: "Brand Campaigns", subtitle: "Creative Strategy", desc: "We create impactful brand campaigns that enhance visibility, improve recall, and support long-term growth.", images: [brand1, performance2, ott1] },
  { icon: Tv, title: "OTT Growth Strategy", subtitle: "Content Platforms", desc: "We work with OTT platforms to drive subscriptions, improve engagement, and scale user base.", images: [ott1, brand1, appMarketing1] },
  { icon: TrendingUp, title: "Revenue Optimization", subtitle: "Maximize ROI", desc: "Continuous optimization of campaigns and funnels to maximize revenue and reduce acquisition costs.", images: [growth1, performance1, performance2] },
  { icon: Users, title: "Audience Growth", subtitle: "Expand Your Reach", desc: "Automate marketing, scale campaigns, and improve productivity with intelligent growth solutions.", images: [appMarketing1, brand1, ott1] },
];

const tags = ["Performance Ads", "User Acquisition", "OTT Marketing", "Brand Strategy", "App Growth", "Revenue Optimization", "Data Analytics"];

const reasons = [
  "Performance-first approach",
  "Data-driven decision making",
  "Global market expertise (India, UAE, Singapore)",
  "Scalable campaign structures",
  "Focus on measurable ROI",
];

const industries = [
  { icon: Tv, title: "OTT Platforms" },
  { icon: Smartphone, title: "Mobile Applications" },
  { icon: Globe, title: "Digital Products" },
  { icon: CreditCard, title: "Subscription-Based Businesses" },
];

const fanImages = [
  { src: global1, rotate: -18 },
  { src: strategy1, rotate: -9 },
  { src: team1, rotate: 0 },
  { src: creative1, rotate: 9 },
  { src: mobile1, rotate: 18 },
];

const aboutFeatures = [
  { icon: Zap, title: "Performance First", desc: "Every campaign is optimized for measurable outcomes and ROI." },
  { icon: Users, title: "Expert Team", desc: "Our team combines creative strategy with data-driven execution." },
  { icon: Globe, title: "Global Reach", desc: "Operating across India, UAE, and Singapore with scalable solutions." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/* ─── Component ─── */

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 noise-bg">
        {/* Animated background elements */}
        <FloatingOrb className="bg-primary/20 -top-20 -left-40" delay={0} duration={25} size="w-96 h-96" />
        <FloatingOrb className="bg-primary/15 -bottom-20 -right-32" delay={3} duration={20} size="w-80 h-80" />
        <FloatingOrb className="bg-primary/10 top-1/3 right-1/4" delay={5} duration={30} size="w-64 h-64" />
        <GridPattern className="opacity-50" />
        <FloatingParticles count={25} />

        {/* Animated rings */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          <div className="absolute inset-0 rounded-full border border-primary/5" />
          <div className="absolute inset-8 rounded-full border border-primary/[0.03]" />
          <div className="absolute inset-16 rounded-full border border-primary/[0.02]" />
          <GlowingDot className="top-0 left-1/2 -translate-x-1/2" delay={0} />
          <GlowingDot className="bottom-0 left-1/2 -translate-x-1/2" delay={1.5} />
          <GlowingDot className="top-1/2 left-0 -translate-y-1/2" delay={0.75} />
        </motion.div>

        {/* Glow arc */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] md:w-[1200px] md:h-[600px]">
          <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-primary/40 via-primary/10 to-transparent blur-3xl animate-glow-pulse" />
          <div className="absolute inset-4 rounded-t-full border-t-2 border-l border-r border-primary/30" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mb-10">
            <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">2026</motion.span>
            <span className="text-sm text-muted-foreground">Performance Marketing Agency</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.3 }} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
            Performance Marketing{" "}<br />
            <motion.span className="text-primary inline-block" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>Built for Scale</motion.span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-6 text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
            We help brands and digital platforms acquire users, scale revenue, and build sustainable growth through data-driven marketing strategies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="hero" size="lg" className="rounded-full px-8" onClick={() => scrollTo("#contact")}>Get in Touch</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="hero-outline" size="lg" className="rounded-full px-8" onClick={() => scrollTo("#services")}>View Services</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════ WHAT WE DO ════════════ */}
      <section className="relative px-6 py-24 overflow-hidden">
        <FloatingOrb className="bg-primary/10 -top-32 right-0" delay={2} duration={22} size="w-72 h-72" />
        <FloatingOrb className="bg-primary/8 bottom-0 -left-20" delay={4} duration={18} size="w-56 h-56" />
        <GridPattern />

        {/* Horizontal animated line */}
        <motion.div className="absolute top-0 left-0 right-0 h-px pointer-events-none" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)" }} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</motion.h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">At Vibeads Digital, we combine brand storytelling with performance execution to deliver measurable results.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }} whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group relative overflow-hidden">
                {/* Card inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative z-10">
                  <item.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-foreground font-semibold mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section id="services" className="relative px-6 py-24 overflow-hidden noise-bg">
        <FloatingOrb className="bg-primary/15 top-20 -left-40" delay={1} duration={24} size="w-96 h-96" />
        <FloatingOrb className="bg-primary/10 bottom-40 -right-20" delay={6} duration={28} size="w-72 h-72" />
        <FloatingParticles count={15} />

        {/* Vertical gradient lines */}
        {[20, 40, 60, 80].map((pos) => (
          <motion.div key={pos} className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${pos}%`, width: "1px", background: "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)" }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: pos * 0.01 }} />
        ))}

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-1 bg-primary rounded-full mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Growth-driven services for future-ready brands.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col group hover:border-primary/40 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors relative z-10">
                  <service.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground relative z-10">{service.title}</h3>
                <p className="text-xs text-primary/80 font-medium mt-1 relative z-10">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1 relative z-10">{service.desc}</p>
                <div className="grid grid-cols-3 gap-2 mt-5 relative z-10">
                  {service.images.map((img, j) => (
                    <motion.div key={j} className="aspect-square rounded-lg overflow-hidden" whileHover={{ scale: 1.08, rotate: 2 }} transition={{ duration: 0.3 }}>
                      <img src={img} alt={`${service.title} ${j + 1}`} loading="lazy" width={160} height={160} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-3 mt-20">
            {tags.map((tag, i) => (
              <motion.span key={tag} initial={{ opacity: 0, y: 20, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} className="h-2 w-2 rounded-full bg-primary" />
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════ WHY US ════════════ */}
      <section className="relative px-6 py-24 overflow-hidden">
        <FloatingOrb className="bg-primary/12 top-0 left-1/3" delay={3} duration={20} size="w-64 h-64" />
        <FloatingOrb className="bg-primary/8 bottom-10 right-1/4" delay={7} duration={25} size="w-48 h-48" />
        <GridPattern />

        {/* Corner decorations */}
        <GlowingDot className="top-20 left-20 hidden md:block" delay={0} />
        <GlowingDot className="bottom-20 right-20 hidden md:block" delay={1} />
        <GlowingDot className="top-40 right-40 hidden md:block" delay={2} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-1 bg-primary rounded-full mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why <span className="text-primary">Vibeads Digital</span></h2>
              <p className="text-muted-foreground mb-8">We deliver results that matter, powered by data and driven by performance.</p>
              <div className="flex flex-col gap-4">
                {reasons.map((reason, i) => (
                  <motion.div key={reason} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 150 }} className="flex items-center gap-3 group">
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    </motion.div>
                    <span className="text-foreground group-hover:text-primary transition-colors">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {[
                { label: "Clients Served", value: "50+" },
                { label: "Campaigns Run", value: "200+" },
                { label: "Countries", value: "10+" },
                { label: "ROI Delivered", value: "3x+" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }} whileHover={{ scale: 1.05, y: -4 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/10 to-transparent transition-all duration-500 pointer-events-none" />
                  <motion.div className="text-3xl font-bold text-primary mb-1 relative z-10" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}>{stat.value}</motion.div>
                  <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ INDUSTRIES ════════════ */}
      <section className="relative px-6 py-24 overflow-hidden noise-bg">
        <FloatingOrb className="bg-primary/10 -top-10 -right-20" delay={2} duration={22} size="w-60 h-60" />
        <FloatingParticles count={10} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-1 bg-primary rounded-full mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Work With</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 150 }} whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/10 to-transparent transition-all duration-500 pointer-events-none" />
                <motion.div whileHover={{ rotate: 15, scale: 1.15 }} className="relative z-10">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                </motion.div>
                <h3 className="text-foreground font-medium text-sm relative z-10">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section id="about" className="relative px-6 py-24 overflow-hidden">
        {/* Multiple glows */}
        <FloatingOrb className="bg-primary/20 -top-20 left-1/2 -translate-x-1/2" delay={0} duration={20} size="w-[500px] h-[300px]" />
        <FloatingOrb className="bg-primary/8 bottom-20 -left-20" delay={5} duration={25} size="w-72 h-72" />
        <FloatingOrb className="bg-primary/6 bottom-40 -right-20" delay={8} duration={22} size="w-60 h-60" />
        <GridPattern />
        <FloatingParticles count={18} />

        <div className="relative z-10 text-center mx-auto max-w-3xl mb-8">
          <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -10 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, type: "spring" }} className="inline-flex items-center gap-2 mb-6">
            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">About Us</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Driving Growth When You{" "}<span className="text-muted-foreground">Need It Most.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Vibeads Digital is a performance-driven company delivering scalable growth solutions for brands across global markets.
          </motion.p>
        </div>

        {/* Fan Image Spread */}
        <div className="relative px-6 py-12 overflow-hidden">
          <motion.div initial={{ opacity: 0, x: -40, rotate: -5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute left-[10%] top-[20%] z-20 hidden md:block">
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-primary/30">Data-Driven</motion.span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40, rotate: 5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 }} className="absolute right-[10%] top-[15%] z-20 hidden md:block">
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-primary/30">Scalable Growth</motion.span>
          </motion.div>

          <div className="flex items-end justify-center gap-2 md:gap-4 h-[300px] md:h-[400px]">
            {fanImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 100, rotate: 0, scale: 0.7 }} whileInView={{ opacity: 1, y: 0, rotate: img.rotate, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + i * 0.12, type: "spring", stiffness: 100 }} whileHover={{ y: -20, scale: 1.08, rotate: 0, transition: { duration: 0.4 } }} className="w-[100px] md:w-[140px] h-[150px] md:h-[220px] rounded-2xl overflow-hidden border-2 border-border shadow-2xl cursor-pointer hover:shadow-primary/20 hover:border-primary/40 transition-all" style={{ transformOrigin: "bottom center" }}>
                <img src={img.src} alt={`Showcase ${i + 1}`} loading="lazy" width={140} height={220} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Row */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {aboutFeatures.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 40, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }} whileHover={{ y: -8, scale: 1.03 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-all relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/8 to-transparent transition-all duration-500 pointer-events-none" />
              <motion.div whileHover={{ rotate: 15, scale: 1.15 }} className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                <feature.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-foreground font-semibold mb-2 relative z-10">{feature.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="mx-auto max-w-4xl mt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
            {[
              "We specialise in building and executing both brand-oriented and performance-oriented campaigns, combining creative strategy with data-driven execution. From user acquisition to revenue optimization, our approach is designed to deliver measurable impact at every stage of the funnel.",
              "Our core expertise includes mobile app marketing, performance advertising, and digital media strategy, with a strong focus on high-growth sectors such as OTT and content platforms.",
              "Beyond client services, Vibeads Digital is actively developing its own digital ecosystem, including OTT platforms and mobile applications, enabling us to operate at the intersection of media, technology, and performance marketing.",
            ].map((text, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>{text}</motion.p>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-12 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-semibold text-foreground mb-6 relative z-10">Company Information</h3>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-2 relative z-10">
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

      {/* ════════════ CONTACT ════════════ */}
      <section id="contact" className="relative px-6 py-24 overflow-hidden noise-bg">
        <FloatingOrb className="bg-primary/15 -top-20 right-1/3" delay={1} duration={20} size="w-80 h-80" />
        <FloatingOrb className="bg-primary/8 bottom-20 left-10" delay={4} duration={24} size="w-56 h-56" />
        <GridPattern />
        <FloatingParticles count={12} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-1 bg-primary rounded-full mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We're always open to discussing new projects, partnerships, and growth opportunities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.form initial={{ opacity: 0, x: -40, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8 }} onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..." required rows={5} className="mt-2" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="lg" className="rounded-full w-full mt-2" type="submit">Submit</Button>
                </motion.div>
              </div>
            </motion.form>

            <motion.div initial={{ opacity: 0, x: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-col gap-8">
              <motion.div whileHover={{ y: -4, scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/40 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/5 to-transparent transition-all duration-500 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div whileHover={{ rotate: 15 }}>
                    <Mail className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="text-foreground font-semibold">Email</h3>
                </div>
                <a href="mailto:support@vibeads.com" className="text-muted-foreground hover:text-primary transition-colors relative z-10">support@vibeads.com</a>
              </motion.div>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/40 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 group-hover:from-primary/5 to-transparent transition-all duration-500 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div whileHover={{ rotate: 15 }}>
                    <MapPin className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h3 className="text-foreground font-semibold">Registered Office</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  Vibeads Digital Private Limited<br />
                  Managobindpur, Near Govt Hospital<br />
                  Daleiput, Khurda, Odisha – 752056<br />
                  India
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative px-6 pb-24 overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }} className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30 p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
            <FloatingOrb className="bg-primary/15 -top-10 -left-10" delay={0} duration={15} size="w-40 h-40" />
            <FloatingOrb className="bg-primary/10 -bottom-10 -right-10" delay={3} duration={18} size="w-32 h-32" />
            <FloatingParticles count={8} />
            <div className="relative z-10">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Scale Your Growth</motion.h2>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-muted-foreground max-w-lg mx-auto mb-8">Partner with Vibeads Digital to build campaigns that deliver real business impact.</motion.p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="hero" size="lg" className="rounded-full px-10" onClick={() => scrollTo("#contact")}>Contact Us</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
