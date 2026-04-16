const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="text-foreground font-semibold text-lg">Vibeads Digital</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Performance Marketing Built for Scale</p>
            <p className="text-xs text-muted-foreground/60 mt-4">CIN: U73100OD2026PTC053422</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Registered Office</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vibeads Digital Private Limited<br />
              Managobindpur, Daleiput,<br />
              Khurda, Odisha – 752056, India
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground/60">© 2026 Vibeads Digital Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
