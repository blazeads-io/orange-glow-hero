import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Building2, Hash, Globe2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

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
              <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden group hover:border-primary/40 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, hsl(24 100% 50% / 0.10) 0%, transparent 60%)" }} />
                <Building2 className="absolute -bottom-6 -right-6 h-40 w-40 text-primary/[0.04] group-hover:text-primary/[0.08] transition-colors duration-700" strokeWidth={1} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-foreground font-semibold">Company Information</h3>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">Legal</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Registered Entity</span>
                    <p className="mt-1.5 text-foreground font-semibold">Vibeads Digital Private Limited</p>
                    <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Hash className="h-3 w-3 text-primary" />
                      <span className="text-[11px] font-mono text-primary/90">CIN: U73100OD2026PTC053422</span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent my-6" />

                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-primary" /> Registered Address
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Managobindpur, Near Govt Hospital
                      <br />
                      Daleiput, Khurda, Odisha — 752056
                      <br />
                      <span className="inline-flex items-center gap-1.5 mt-1 text-foreground/80">
                        <Globe2 className="h-3 w-3 text-primary" /> India
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Active</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground/50">EST · 2026</span>
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
