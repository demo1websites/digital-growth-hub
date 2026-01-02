import {
  Code2,
  LayoutDashboard,
  Search,
  MapPin,
  Zap,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    problem: "Your outdated website isn't converting visitors into customers.",
    benefit:
      "Get a modern, fast, and responsive website that builds trust and drives conversions.",
    features: ["Custom Design", "Mobile-First", "SEO Optimized"],
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications & Dashboards",
    problem: "Manual processes are slowing down your business operations.",
    benefit:
      "Streamline operations with custom dashboards and applications built for your workflow.",
    features: ["Custom Logic", "Real-time Data", "User-Friendly"],
  },
  {
    icon: Search,
    title: "SEO & Online Visibility",
    problem: "Your business isn't showing up when customers search online.",
    benefit:
      "Improve your search rankings and get discovered by more potential customers.",
    features: ["Keyword Strategy", "On-Page SEO", "Performance Audit"],
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    problem: "Local customers can't find your business on Google Maps.",
    benefit:
      "Dominate local search results and attract more customers from your area.",
    features: ["Profile Setup", "Review Management", "Local Rankings"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    problem: "Repetitive tasks are wasting your team's valuable time.",
    benefit:
      "Automate workflows and free up time to focus on what matters most.",
    features: ["Workflow Automation", "Integrations", "Custom Bots"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    problem: "Your website is slow, outdated, or frequently breaks.",
    benefit:
      "Keep your digital presence running smoothly with ongoing support and updates.",
    features: ["24/7 Monitoring", "Regular Updates", "Priority Support"],
  },
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Digital Solutions for
            <span className="gradient-text"> Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From custom websites to business automation, we provide end-to-end
            digital services that help your business grow and succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Problem */}
              <p className="text-muted-foreground text-sm mb-3 italic">
                "{service.problem}"
              </p>

              {/* Benefit */}
              <p className="text-foreground/80 mb-4">{service.benefit}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? Let's discuss your requirements.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToContact}>
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
