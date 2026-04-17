import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import MetaLogo from "@/components/icons/MetaLogo";
import GoogleLogo from "@/components/icons/GoogleLogo";

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative">
      {/* Centered logo badge sitting on top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="h-14 w-14 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-[0_0_30px_hsl(24_100%_50%/0.35)]">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-[0_0_20px_hsl(24_100%_50%/0.5)]">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border bg-card/40 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        {/* Giant brand watermark */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 text-foreground/[0.03] font-black tracking-tighter pointer-events-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 18vw, 18rem)", lineHeight: 1 }}
        >
          VIBEADS
        </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* Top: brand statement + back to top */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 pb-12 border-b border-border/60">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">Vibeads Digital</span>
            <h3 className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Performance marketing,
              <br />
              <span className="text-primary">built for scale.</span>
            </h3>
          </div>
          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm text-foreground">Back to top</span>
            <ArrowUpRight className="h-4 w-4 text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-[0_0_20px_hsl(24_100%_50%/0.4)]">
                <span className="text-primary-foreground font-bold">V</span>
              </div>
              <div className="leading-tight">
                <span className="block text-foreground font-semibold text-lg tracking-tight">Vibeads Digital</span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mt-0.5">Private Limited</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Driving growth across apps, OTT, and digital brands worldwide through data-led campaigns.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-foreground/80 mb-5 uppercase tracking-[0.2em]">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors text-left w-fit"
                >
                  <span className="h-px w-3 bg-muted-foreground/40 group-hover:w-5 group-hover:bg-primary transition-all duration-300" />
                  {link.label}
                </button>
              ))}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors text-left w-fit"
              >
                <span className="h-px w-3 bg-muted-foreground/40 group-hover:w-5 group-hover:bg-primary transition-all duration-300" />
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-foreground/80 mb-5 uppercase tracking-[0.2em]">Get in touch</h4>
            <a
              href="mailto:support@vibeads.com"
              className="group flex items-start gap-3 mb-4 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span className="text-sm">support@vibeads.com</span>
            </a>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <p className="text-sm leading-relaxed">
                Managobindpur, Daleiput,
                <br />
                Khurda, Odisha — 752056, India
              </p>
            </div>
          </div>

          {/* Certified Partners */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-foreground/80 mb-5 uppercase tracking-[0.2em]">Certified partners</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Officially certified across leading ad platforms.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Meta", Logo: MetaLogo, sub: "Instagram · Facebook" },
                { name: "Google", Logo: GoogleLogo, sub: "Search · YouTube" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="group flex items-center gap-3 rounded-lg border border-border/70 bg-background/40 px-3 py-2.5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="h-9 w-9 rounded-md bg-background border border-border/60 flex items-center justify-center shrink-0">
                    <p.Logo className="h-5 w-5" />
                  </div>
                  <div className="leading-tight min-w-0 flex-1">
                    <span className="block text-sm text-foreground font-semibold">{p.name}</span>
                    <span className="block text-[10px] text-muted-foreground/80 mt-0.5">{p.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Vibeads Digital Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground/70">
            <span className="font-mono">CIN: U73100OD2026PTC053422</span>
            <span className="hidden md:inline text-primary/40">•</span>
            <span className="hidden md:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              India · UAE · Singapore
            </span>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
