import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Building2, Hash, Globe2, Shield, Calendar, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import companyCardBg from "@/assets/company-card-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleCopyCIN = async () => {
    await navigator.clipboard.writeText("U73100OD2026PTC053422");
    setCopied(true);
    toast({ title: "CIN copied", description: "Corporate Identification Number copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always open to discussing new projects, partnerships, and growth opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5"
            >
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
              <Button variant="hero" size="lg" className="rounded-full w-full mt-2" type="submit">
                Submit
              </Button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold">Email</h3>
                </div>
                <a href="mailto:support@vibeads.com" className="text-muted-foreground hover:text-primary transition-colors">
                  support@vibeads.com
                </a>
              </div>

              {/* Premium Company Information Card */}
              <div className="relative rounded-2xl overflow-hidden group border border-primary/20 hover:border-primary/60 transition-all duration-500 shadow-[0_25px_70px_-20px_hsl(24_100%_50%/0.25)] hover:shadow-[0_35px_90px_-15px_hsl(24_100%_50%/0.5)]">
                {/* Background image */}
                <img
                  src={companyCardBg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />

                {/* Dark base overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-background/80 to-card/95" />

                {/* Animated grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Glow orbs */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
                <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />

                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                {/* Giant watermark */}
                <Building2
                  className="absolute -right-8 -bottom-8 h-56 w-56 text-primary/[0.04] group-hover:text-primary/[0.08] transition-colors duration-700 rotate-12"
                  strokeWidth={1}
                />

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-7">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/40 flex items-center justify-center shadow-[0_0_25px_-5px_hsl(24_100%_50%/0.6)]">
                        <Building2 className="h-5 w-5 text-primary" strokeWidth={1.75} />
                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(24_100%_50%)]" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-bold text-base leading-tight">Company Information</h3>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 flex items-center gap-1 mt-1 font-medium">
                          <Shield className="h-2.5 w-2.5" /> Verified Legal Entity
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[9px] font-mono text-primary uppercase tracking-widest px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 backdrop-blur-sm">
                        IN · 2026
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-foreground/70 font-medium">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Entity Name - Hero treatment */}
                  <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent border border-primary/15 backdrop-blur-sm">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-semibold">Registered Entity</span>
                    <p className="mt-2 text-foreground font-bold text-xl leading-tight tracking-tight">
                      Vibeads Digital
                    </p>
                    <p className="text-primary font-bold text-xl leading-tight tracking-tight">
                      Private Limited
                    </p>
                  </div>

                  {/* CIN with copy */}
                  <button
                    onClick={handleCopyCIN}
                    className="w-full group/cin flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/20 hover:border-primary/60 hover:bg-primary/[0.08] transition-all mb-6"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-8 w-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                        <Hash className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Corporate Identification</span>
                        <span className="block text-[13px] font-mono text-foreground truncate font-semibold">U73100OD2026PTC053422</span>
                      </div>
                    </div>
                    {copied ? (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover/cin:text-primary shrink-0 transition-colors" />
                    )}
                  </button>

                  {/* Address */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-7 w-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-primary/80 font-semibold">Registered Address</span>
                    </div>
                    <div className="pl-9 space-y-1">
                      <p className="text-sm text-foreground font-semibold leading-relaxed">Managobindpur, Near Govt Hospital</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Daleiput, Khurda, Odisha — 752056</p>
                      <p className="text-sm text-foreground/80 inline-flex items-center gap-1.5 pt-1">
                        <Globe2 className="h-3 w-3 text-primary" /> India
                      </p>
                    </div>
                  </div>

                  {/* Footer status bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/15">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                      <Calendar className="h-3 w-3 text-primary" />
                      <span className="uppercase tracking-widest">EST · 2026</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-foreground/60 font-medium">
                      <Shield className="h-3 w-3 text-primary" />
                      <span>MCA Registered</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
