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

import heroGlobe from "@/assets/hero-globe.png";
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
  { image: performance1, title: "Performance Marketing", desc: "Data-driven campaigns optimized for measurable results." },
  { image: brand1, title: "Brand Campaigns", desc: "Creative strategies that build lasting brand recall." },
  { image: appMarketing1, title: "Mobile App Growth", desc: "Scale user acquisition with high-performing campaigns." },
  { image: ott1, title: "OTT & Content Marketing", desc: "Drive subscriptions and engagement for content platforms." },
];

const services = [
  { image: performance1, title: "Performance Marketing", subtitle: "Data-Driven Campaigns", desc: "We design and execute campaigns focused on driving measurable outcomes — installs, conversions, and revenue." },
  { image: appMarketing1, title: "Mobile App Marketing", subtitle: "User Acquisition at Scale", desc: "From launch to scale, we help apps acquire high-quality users through targeted and optimized strategies." },
  { image: brand1, title: "Brand Campaigns", subtitle: "Creative Strategy", desc: "We create impactful brand campaigns that enhance visibility, improve recall, and support long-term growth." },
  { image: ott1, title: "OTT Growth Strategy", subtitle: "Content Platforms", desc: "We work with OTT platforms to drive subscriptions, improve engagement, and scale user base." },
  { image: growth1, title: "Revenue Optimization", subtitle: "Maximize ROI", desc: "Continuous optimization of campaigns and funnels to maximize revenue and reduce acquisition costs." },
  { image: performance2, title: "Audience Growth", subtitle: "Expand Your Reach", desc: "Automate marketing, scale campaigns, and improve productivity with intelligent growth solutions." },
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
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ── Background Layers ── */}
        <GridPattern />
        <NoiseOverlay opacity={0.04} />
        <FloatingOrb className="-top-20 -left-40" size={500} delay={0} duration={25} />
        <FloatingOrb className="-bottom-32 -right-32" size={400} delay={3} duration={20} />
        <FloatingParticles count={20} />
        <GlowingDot className="top-32 left-[15%]" size={5} delay={0} />
        <GlowingDot className="top-48 right-[12%]" size={4} delay={1} />
        <GlowingDot className="bottom-40 left-[20%]" size={6} delay={0.5} />
        <GlowingDot className="bottom-32 right-[18%]" size={4} delay={1.5} />

        <div className="absolute inset-0 pointer-events-none">
          <ParticleWave className="absolute inset-0 opacity-60" />
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
          <motion.div
            className="absolute inset-0 blur-[150px]"
            style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(24 100% 50% / 0.3), transparent 70%)" }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ── Massive Background Text ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
          {/* VIBEADS - top text */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-[1]"
          >
            <h1
              className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-foreground"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              VIBEADS
            </h1>
          </motion.div>

          {/* DIGITAL - bottom text with outline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-[1] -mt-[2vw]"
          >
            <h2
              className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter"
              style={{
                fontFamily: "Inter, sans-serif",
                WebkitTextStroke: "2px hsl(24 100% 50%)",
                color: "transparent",
              }}
            >
              DIGITAL
            </h2>
          </motion.div>
        </div>

        {/* ── Central Globe (behind text) ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Globe glow */}
          <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 blur-[150px] rounded-full" />

          {/* Globe image */}
          <motion.img
            src={heroGlobe}
            alt="Digital Globe"
            className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-50"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{
              filter: "drop-shadow(0 0 80px hsl(24 100% 50% / 0.3)) drop-shadow(0 0 160px hsl(24 100% 50% / 0.1))",
            }}
          />
        </motion.div>

        {/* ── CTA - Bottom Left ── */}
        <motion.div
          className="absolute bottom-16 left-8 md:left-16 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button variant="hero-outline" size="lg" className="rounded-full px-8 text-sm group" onClick={() => scrollTo("#contact")}>
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* ── Subtitle - Bottom Right ── */}
        <motion.div
          className="absolute bottom-16 right-8 md:right-16 z-10 text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest leading-relaxed">
            Performance Marketing
            <br />
            Agency & Studio
          </p>
        </motion.div>

        {/* ── Corner Brackets ── */}
        <div className="absolute top-24 left-8 md:left-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-10 h-10 border-l-2 border-t-2 border-primary/40"
          />
        </div>
        <div className="absolute bottom-24 right-8 md:right-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-10 h-10 border-r-2 border-b-2 border-primary/40"
          />
        </div>

        {/* ── Scan lines ── */}
        <motion.div
          className="absolute top-[25%] left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, hsl(24 100% 50% / 0.12), transparent)" }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[75%] left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, hsl(24 100% 50% / 0.08), transparent)" }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </section>

      <section className="relative px-6 py-28 overflow-hidden">
        <ScrollLine className="absolute top-0 left-0 right-0" />
        <GridPattern />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionAccent />
          <RevealText text="What We Do" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-muted-foreground max-w-2xl mx-auto text-center mb-16">
            At Vibeads Digital, we combine brand storytelling with performance execution to deliver measurable results.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {whatWeDoItems.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group cursor-pointer`}
                >
                  {/* Mockup Image with Glowing Orb */}
                  <div className="relative flex-shrink-0 w-full md:w-[280px]">
                    {/* Glowing orb behind */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                      style={{ background: "radial-gradient(circle, hsl(24 100% 50% / 0.6), hsl(24 80% 40% / 0.2), transparent)" }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Floating device frame */}
                    <motion.div
                      className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_20px_60px_-15px_hsl(24_100%_50%/0.3)] group-hover:shadow-[0_25px_80px_-15px_hsl(24_100%_50%/0.4)] group-hover:border-primary/40 transition-all duration-500"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                      whileHover={{ scale: 1.04, rotate: isEven ? 2 : -2 }}
                    >
                      <div className="aspect-[4/3] relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(105deg, transparent 40%, hsl(24 100% 80% / 0.1) 45%, hsl(24 100% 80% / 0.15) 50%, transparent 55%)" }} />
                      </div>
                    </motion.div>

                    {/* Small floating accent cards */}
                    <motion.div
                      className="absolute -bottom-3 -right-3 z-20 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl px-3 py-2 shadow-lg"
                      animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 + 1 }}
                    >
                      <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Live</span>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 ${isEven ? 'text-left' : 'md:text-right'}`}>
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: isEven ? 4 : -4 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">{item.desc}</p>
                    <motion.div
                      className={`mt-5 flex items-center gap-2 ${isEven ? '' : 'md:justify-end'}`}
                      whileHover={{ x: isEven ? 6 : -6 }}
                    >
                      <span className="text-sm font-medium text-primary">Learn more</span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
                className="relative bg-card border border-border rounded-2xl flex flex-col group transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Full card overlay glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(24 100% 50% / 0.08) 0%, transparent 60%)" }} />
                
                {/* Image with overlay */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Subtitle badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-primary bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/20">{service.subtitle}</span>
                  </div>
                </div>

                <div className="relative p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300"
                    >
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Image Mosaic Grid */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Top-left — large */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="row-span-1 rounded-2xl overflow-hidden border border-border group relative"
              >
                <img src={team1} alt="Team collaboration" className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Top-right */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden border border-border group relative"
              >
                <img src={strategy1} alt="Strategy session" className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Bottom-left */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden border border-border group relative"
              >
                <img src={global1} alt="Global reach" className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Bottom-right — stat badge */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex flex-col items-center justify-center aspect-[4/3] group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle, hsl(0 0% 100% / 0.1), transparent 70%)" }} />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 text-center"
                >
                  <div className="text-5xl font-black text-primary-foreground mb-1">50+</div>
                  <div className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-widest">Clients Served<br />Globally</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right — Content */}
            <div>
              <SectionAccent />
              <RevealText text="Why Vibeads Digital" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4 justify-start" />
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-muted-foreground mb-8">
                We deliver results that matter, powered by data and driven by performance.
              </motion.p>

              {/* Feature highlights row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Business Growth</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Marketing Solution</div>
                  </div>
                </div>
              </motion.div>

              {/* Bullet points */}
              <StaggerContainer className="flex flex-col gap-4 mb-10" stagger={0.08}>
                {reasons.map((reason) => (
                  <motion.div key={reason} variants={staggerChild} className="flex items-start gap-3 group">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                    <span className="text-foreground/90 leading-relaxed">{reason}</span>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  className="rounded-full px-8 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  onClick={() => scrollTo("#about")}
                >
                  More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
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
              <motion.div key={item.title} variants={staggerChild} whileHover={{ y: -6 }} className="relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-colors duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, hsl(24 100% 50% / 0.08) 0%, transparent 60%)" }} />
                <item.icon className="relative z-10 h-9 w-9 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="relative z-10 text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
              <motion.div key={feature.title} variants={staggerChild} whileHover={{ y: -4 }} className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors duration-300 overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, hsl(24 100% 50% / 0.08) 0%, transparent 60%)" }} />
                <div className="relative z-10 h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(24_100%_50%/0.2)] transition-all duration-300">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="relative z-10 text-foreground font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="relative z-10 text-sm text-muted-foreground">{feature.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
