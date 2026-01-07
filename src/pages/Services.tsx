import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Code2,
  LayoutDashboard,
  Search,
  MapPin,
  Zap,
  Wrench,
  ArrowRight,
  Bot,
  Mic,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    description:
      "Modern, fast, and responsive websites that build trust and drive conversions.",
    features: ["Custom Design", "Mobile-First", "SEO Optimized"],
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications & Dashboards",
    description:
      "Custom dashboards and applications built for your workflow with real-time data.",
    features: ["Custom Logic", "Real-time Data", "User-Friendly"],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Full-stack web and mobile applications tailored to your business requirements.",
    features: ["Cross-Platform", "Scalable", "API Integration"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI agents that handle customer queries 24/7.",
    features: ["Natural Language", "24/7 Support", "Multi-Platform"],
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Voice-powered AI assistants for hands-free customer interactions and support.",
    features: ["Speech Recognition", "Natural Voice", "Real-time"],
  },
  {
    icon: Search,
    title: "SEO & Online Visibility",
    description:
      "Improve search rankings and get discovered by more potential customers.",
    features: ["Keyword Strategy", "On-Page SEO", "Performance Audit"],
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description:
      "Dominate local search results and attract customers from your area.",
    features: ["Profile Setup", "Review Management", "Local Rankings"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Automate workflows and free up time to focus on what matters most.",
    features: ["Workflow Automation", "Integrations", "Custom Bots"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your digital presence running smoothly with ongoing support and updates.",
    features: ["24/7 Monitoring", "Regular Updates", "Priority Support"],
  },
];

const Services = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/#contact");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 gradient-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Complete Digital Solutions for
                <span className="gradient-text"> Your Business</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
                From custom websites to AI-powered solutions, we provide end-to-end
                digital services that help your business grow and succeed online.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss your requirements and find the perfect solution for
                your business. Book a free consultation today.
              </p>
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
