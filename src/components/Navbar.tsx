import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import vibeadsLogo from "@/assets/vibeads-logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary/60 shadow-[0_0_25px_hsl(24_100%_50%/0.5)] transition-transform group-hover:scale-105">
            <img src={vibeadsLogo} alt="Vibeads Digital logo" className="h-full w-full object-cover" />
          </div>
          <span
            className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_12px_hsl(24_100%_50%/0.45)]"
            style={{ fontFamily: "'Audiowide', 'Orbitron', sans-serif", letterSpacing: "0.05em" }}
          >
            VIBEADS DIGITAL
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <Button
          variant="hero"
          size="sm"
          className="hidden md:inline-flex rounded-full px-5"
          onClick={() => scrollTo("#contact")}
        >
          Get in Touch
        </Button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-6 mt-4 rounded-xl bg-card border border-border p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="rounded-full w-full mt-2"
            onClick={() => scrollTo("#contact")}
          >
            Get in Touch
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
