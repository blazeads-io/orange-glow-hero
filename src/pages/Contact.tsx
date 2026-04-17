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
              <div className="relative rounded-2xl overflow-hidden group border border-border hover:border-primary/40 transition-all duration-500 shadow-[0_20px_60px_-20px_hsl(24_100%_50%/0.15)] hover:shadow-[0_25px_70px_-15px_hsl(24_100%_50%/0.35)]">
                {/* Background image */}
                <img
                  src={companyCardBg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                {/* Layered overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/85 to-card/95" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,hsl(24_100%_50%/0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,hsl(24_100%_50%/0.08),transparent_50%)]" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/40 rounded-tl" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-primary/40 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-primary/40 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-primary/40 rounded-br" />

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-7">
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_-5px_hsl(24_100%_50%/0.5)]">
                        <Building2 className="h-5 w-5 text-primary" strokeWidth={1.75} />
                        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(24_100%_50%)]" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold leading-tight">Company Information</h3>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 flex items-center gap-1 mt-0.5">
                          <Shield className="h-2.5 w-2.5" /> Verified Legal Entity
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-primary/70 uppercase tracking-widest px-2 py-1 rounded border border-primary/20 bg-primary/5">
                      IN · 2026
                    </span>
                  </div>

                  {/* Entity Name */}
                  <div className="mb-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-medium">Registered Entity</span>
                    <p className="mt-2 text-foreground font-bold text-lg leading-tight">
                      Vibeads Digital <span className="text-primary">Private Limited</span>
                    </p>
                  </div>

                  {/* CIN with copy */}
                  <button
                    onClick={handleCopyCIN}
                    className="w-full group/cin flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-primary/[0.06] border border-primary/20 hover:border-primary/50 hover:bg-primary/[0.10] transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Hash className="h-3.5 w-3.5 text-primary shrink-0" />
                      <div className="text-left min-w-0">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">Corporate Identification</span>
                        <span className="block text-[12px] font-mono text-foreground truncate">U73100OD2026PTC053422</span>
                      </div>
                    </div>
                    {copied ? (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover/cin:text-primary shrink-0 transition-colors" />
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-3 w-3 rounded-full bg-card border border-border flex items-center justify-center">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                    </span>
                  </div>

                  {/* Address */}
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-medium flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-primary" /> Registered Address
                    </span>
                    <div className="mt-3 pl-3 border-l-2 border-primary/30 space-y-0.5">
                      <p className="text-sm text-foreground/90 font-medium">Managobindpur, Near Govt Hospital</p>
                      <p className="text-sm text-muted-foreground">Daleiput, Khurda, Odisha — 752056</p>
                      <p className="text-sm text-foreground/80 inline-flex items-center gap-1.5 pt-1">
                        <Globe2 className="h-3 w-3 text-primary" /> India
                      </p>
                    </div>
                  </div>

                  {/* Footer status bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/80 font-medium">Active</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/70">
                      <Calendar className="h-3 w-3" />
                      <span>EST · 2026</span>
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
