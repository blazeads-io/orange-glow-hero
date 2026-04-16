import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  GridPattern, RevealText, ScrollLine, SectionAccent,
  StaggerContainer, staggerChild, GradientBlur, ParallaxSection,
  FloatingOrb, FloatingParticles, GlowingDot, RotatingRings,
  NoiseOverlay, VerticalGradientLines,
} from "@/components/AnimatedBackgrounds";
import ParticleWave from "@/components/ParticleWave";
import {
  Target, Smartphone, Palette, Tv, TrendingUp, Users,
  BarChart3, Megaphone, CheckCircle, Building2, Zap, Globe,
  Mail, MapPin, CreditCard, ArrowRight,
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

const stats = [
  { label: "Clients Served", value: "50+" },
  { label: "Campaigns Run", value: "200+" },
  { label: "Countries", value: "10+" },
  { label: "ROI Delivered", value: "3x+" },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/* ─── Component ─── */

const Index = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  // Hero parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.7], [1, 0.95]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* ── Background Layers ── */}
        
        {/* Grid pattern */}
        <GridPattern />
        
        {/* Noise texture */}
        <NoiseOverlay opacity={0.04} />
        
        {/* Floating orbs */}
        <FloatingOrb className="-top-20 -left-40" size={500} delay={0} duration={25} />
        <FloatingOrb className="-bottom-32 -right-32" size={400} delay={3} duration={20} />
        <FloatingOrb className="top-1/3 right-1/4" size={250} delay={5} duration={22} />
        
        {/* Floating particles */}
        <FloatingParticles count={25} />
        
        {/* Rotating rings */}
        <RotatingRings className="inset-0 flex items-center justify-center" />
        
        {/* Vertical gradient lines */}
        <VerticalGradientLines count={6} />
        
        {/* Glowing dots in corners */}
        <GlowingDot className="top-32 left-[15%]" size={5} delay={0} />
        <GlowingDot className="top-48 right-[12%]" size={4} delay={1} />
        <GlowingDot className="bottom-40 left-[20%]" size={6} delay={0.5} />
        <GlowingDot className="bottom-32 right-[18%]" size={4} delay={1.5} />
        <GlowingDot className="top-1/2 left-[8%]" size={3} delay={2} />
        <GlowingDot className="top-1/3 right-[8%]" size={5} delay={0.8} />

        {/* Particle wave canvas */}
        <div className="absolute inset-0">
          <ParticleWave className="absolute inset-0 opacity-80" />
          <GradientBlur className="w-[800px] h-[600px] -bottom-60 left-1/2 -translate-x-1/2" />
        </div>

        {/* Animated accent line at top */}
        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 h-1 rounded-full bg-primary/60"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow with spring */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground border border-border rounded-full px-4 py-1.5 backdrop-blur-sm">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Performance Marketing Agency
            </span>
          </motion.div>

          {/* Main heading – word by word blur reveal */}
          <RevealText
            text="Performance Marketing Built for Scale"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground gap-x-[0.25em]"
            delay={0.4}
          />

          {/* Subheading with blur-in */}
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Driving growth across apps, OTT & digital brands through
            data-driven marketing strategies.
          </motion.p>

          {/* CTA with spring */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button variant="hero" size="lg" className="rounded-full px-8 group" onClick={() => scrollTo("#contact")}>
              Get in Touch
              <motion.span
                className="ml-1 inline-block"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
            <Button variant="hero-outline" size="lg" className="rounded-full px-8" onClick={() => scrollTo("#services")}>
              View Services
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5"
            >
              <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════ WHAT WE DO ════════════ */}
      <section className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GridPattern />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionAccent />
          <RevealText text="What We Do" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-muted-foreground max-w-2xl mx-auto text-center mb-16">
            At Vibeads Digital, we combine brand storytelling with performance execution to deliver measurable results.
          </motion.p>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoItems.map((item) => (
              <motion.div key={item.title} variants={staggerChild} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300 group">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section id="services" className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GradientBlur className="w-[600px] h-[400px] top-20 -left-60" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionAccent />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-primary font-medium text-sm tracking-wide text-center mb-3">
            Our Services
          </motion.p>
          <RevealText text="Growth-driven services for future-ready brands" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-16" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerChild}
                whileHover={{ y: -6, borderColor: "hsl(24 100% 50% / 0.4)" }}
                className="bg-card border border-border rounded-2xl p-7 flex flex-col group transition-all duration-300 cursor-pointer"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                <div className="mt-6">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Tags */}
          <StaggerContainer className="flex flex-wrap justify-center gap-3 mt-20" stagger={0.05}>
            {tags.map((tag) => (
              <motion.span key={tag} variants={staggerChild} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors duration-300 cursor-default">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {tag}
              </motion.span>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════ WHY US ════════════ */}
      <section className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GradientBlur className="w-[500px] h-[400px] bottom-0 -right-40" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionAccent />
              <RevealText text="Why Vibeads Digital" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4 justify-start" />
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-muted-foreground mb-10">
                We deliver results that matter, powered by data and driven by performance.
              </motion.p>

              <StaggerContainer className="flex flex-col gap-5" stagger={0.08}>
                {reasons.map((reason) => (
                  <motion.div key={reason} variants={staggerChild} className="flex items-start gap-3 group">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 leading-relaxed">{reason}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>

            <StaggerContainer className="grid grid-cols-2 gap-5" stagger={0.1}>
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerChild} whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl p-7 text-center hover:border-primary/20 transition-colors duration-300">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ════════════ INDUSTRIES ════════════ */}
      <section className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GridPattern />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionAccent />
          <RevealText text="Industries We Work With" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-16" />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((item) => (
              <motion.div key={item.title} variants={staggerChild} whileHover={{ y: -6 }} className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors duration-300">
                <item.icon className="h-9 w-9 text-primary mb-4" />
                <h3 className="text-foreground font-medium text-sm">{item.title}</h3>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section id="about" className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GradientBlur className="w-[700px] h-[500px] -top-40 left-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="text-center mx-auto max-w-3xl mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                <Building2 className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground tracking-wide">About Us</span>
            </motion.div>

            <RevealText text="Driving Growth When You Need It Most." as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight" delay={0.1} />

            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Vibeads Digital is a performance-driven company delivering scalable growth solutions for brands across global markets.
            </motion.p>
          </div>

          {/* Fan Image Spread */}
          <ParallaxSection speed={0.08} className="py-12">
            <div className="relative">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="absolute left-[8%] top-[15%] z-20 hidden md:block">
                <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">Data-Driven</motion.span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }} className="absolute right-[8%] top-[10%] z-20 hidden md:block">
                <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }} className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">Scalable Growth</motion.span>
              </motion.div>

              <div className="flex items-end justify-center gap-2 md:gap-4 h-[280px] md:h-[380px]">
                {fanImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 80, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: img.rotate }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" as const }}
                    whileHover={{ y: -12, scale: 1.04, rotate: 0 }}
                    className="w-[90px] md:w-[130px] h-[140px] md:h-[200px] rounded-2xl overflow-hidden border border-border shadow-xl cursor-pointer hover:border-primary/30 transition-colors duration-300"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    <img src={img.src} alt={`Showcase ${i + 1}`} loading="lazy" width={130} height={200} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </ParallaxSection>

          {/* Features */}
          <StaggerContainer className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {aboutFeatures.map((feature) => (
              <motion.div key={feature.title} variants={staggerChild} whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors duration-300">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* About Content */}
          <div className="mx-auto max-w-4xl mt-20">
            <StaggerContainer className="flex flex-col gap-6">
              {[
                "We specialise in building and executing both brand-oriented and performance-oriented campaigns, combining creative strategy with data-driven execution. From user acquisition to revenue optimization, our approach is designed to deliver measurable impact at every stage of the funnel.",
                "Our core expertise includes mobile app marketing, performance advertising, and digital media strategy, with a strong focus on high-growth sectors such as OTT and content platforms.",
                "Beyond client services, Vibeads Digital is actively developing its own digital ecosystem, including OTT platforms and mobile applications, enabling us to operate at the intersection of media, technology, and performance marketing.",
              ].map((text, i) => (
                <motion.p key={i} variants={staggerChild} className="text-muted-foreground leading-relaxed">{text}</motion.p>
              ))}
            </StaggerContainer>

            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 bg-card border border-border rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-5">Company Information</h3>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                <p className="font-medium text-foreground">Vibeads Digital Private Limited</p>
                <p>CIN: U73100OD2026PTC053422</p>
                <div className="pt-4">
                  <p className="font-medium text-foreground mb-1">Registered Address</p>
                  <p>Managobindpur, Near Govt Hospital<br />Daleiput, Khurda, Odisha – 752056, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT ════════════ */}
      <section id="contact" className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GradientBlur className="w-[600px] h-[400px] -top-20 right-1/4" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionAccent />
          <RevealText text="Get in Touch" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-muted-foreground max-w-2xl mx-auto text-center mb-16">
            We're always open to discussing new projects, partnerships, and growth opportunities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5">
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
              <Button variant="hero" size="lg" className="rounded-full w-full mt-2 group" type="submit">
                Submit
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.form>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col gap-6">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-foreground font-semibold">Email</h3>
                </div>
                <a href="mailto:support@vibeads.com" className="text-muted-foreground hover:text-primary transition-colors">support@vibeads.com</a>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-foreground font-semibold">Registered Office</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vibeads Digital Private Limited<br />
                  Managobindpur, Near Govt Hospital<br />
                  Daleiput, Khurda, Odisha – 752056, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative px-6 pb-28 overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/20 p-14 md:p-20 text-center overflow-hidden">
            <GradientBlur className="w-[400px] h-[300px] -top-20 -left-20" />
            <div className="relative z-10">
              <RevealText text="Let's Scale Your Growth" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-5" />
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-muted-foreground max-w-lg mx-auto mb-10">
                Partner with Vibeads Digital to build campaigns that deliver real business impact.
              </motion.p>
              <Button variant="hero" size="lg" className="rounded-full px-10 group" onClick={() => scrollTo("#contact")}>
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
