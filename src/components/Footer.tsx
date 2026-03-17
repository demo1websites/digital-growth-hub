import { ArrowUp, Sparkles } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Web Applications", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Business Automation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="gradient-primary text-white relative overflow-hidden noise">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[hsl(270_100%_65%/0.15)] rounded-full blur-[150px] animate-morph" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[hsl(180_100%_50%/0.1)] rounded-full blur-[120px] animate-morph animation-delay-300" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-glow-sm">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl">
                Full-Stack Digital
              </span>
            </div>
            <p className="text-white/55 text-sm mb-8 leading-relaxed">
              Building digital solutions that drive real business results. From
              websites to automation, we've got you covered.
            </p>
            <div className="flex gap-3">
              {["L", "T", "G"].map((letter, index) => {
                const colors = [
                  "from-[hsl(270_100%_65%)] to-[hsl(340_100%_60%)]",
                  "from-[hsl(340_100%_60%)] to-[hsl(0_85%_55%)]",
                  "from-[hsl(180_100%_50%)] to-[hsl(200_90%_50%)]",
                ];
                return (
                  <a
                    key={letter}
                    href="#"
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300`}
                  >
                    <span className="text-sm font-bold text-white">{letter}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/55 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 group-hover:shadow-glow-sm transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/55 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(180_100%_50%)] group-hover:scale-150 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-white/55 text-sm mb-6">
              Subscribe to our newsletter for tips and insights.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl glass-dark border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-glow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} Full-Stack Digital Solutions. All rights
            reserved.
          </p>

          <div className="flex items-center gap-8">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/35 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-glow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
