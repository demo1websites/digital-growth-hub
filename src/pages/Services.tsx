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
  Sparkles,
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
    gradient: "from-[hsl(262_83%_58%)] to-[hsl(280_80%_60%)]",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications & Dashboards",
    description:
      "Custom dashboards and applications built for your workflow with real-time data.",
    features: ["Custom Logic", "Real-time Data", "User-Friendly"],
    gradient: "from-[hsl(330_85%_60%)] to-[hsl(350_80%_55%)]",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Full-stack web and mobile applications tailored to your business requirements.",
    features: ["Cross-Platform", "Scalable", "API Integration"],
    gradient: "from-[hsl(174_72%_45%)] to-[hsl(190_70%_50%)]",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI agents that handle customer queries 24/7.",
    features: ["Natural Language", "24/7 Support", "Multi-Platform"],
    gradient: "from-[hsl(45_90%_55%)] to-[hsl(35_85%_50%)]",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Voice-powered AI assistants for hands-free customer interactions and support.",
    features: ["Speech Recognition", "Natural Voice", "Real-time"],
    gradient: "from-[hsl(200_80%_55%)] to-[hsl(220_75%_50%)]",
  },
  {
    icon: Search,
    title: "SEO & Online Visibility",
    description:
      "Improve search rankings and get discovered by more potential customers.",
    features: ["Keyword Strategy", "On-Page SEO", "Performance Audit"],
    gradient: "from-[hsl(280_70%_55%)] to-[hsl(300_75%_50%)]",
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description:
      "Dominate local search results and attract customers from your area.",
    features: ["Profile Setup", "Review Management", "Local Rankings"],
    gradient: "from-[hsl(150_70%_45%)] to-[hsl(170_65%_50%)]",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Automate workflows and free up time to focus on what matters most.",
    features: ["Workflow Automation", "Integrations", "Custom Bots"],
    gradient: "from-[hsl(20_90%_55%)] to-[hsl(40_85%_50%)]",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your digital presence running smoothly with ongoing support and updates.",
    features: ["24/7 Monitoring", "Regular Updates", "Priority Support"],
    gradient: "from-[hsl(250_70%_55%)] to-[hsl(270_75%_50%)]",
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
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 gradient-hero relative overflow-hidden noise">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-[hsl(262_83%_58%/0.25)] rounded-full blur-[150px]" />
            <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-[hsl(330_85%_60%/0.2)] rounded-full blur-[130px]" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-[hsl(262_83%_58%)]" />
                <span className="text-white/90 text-sm font-medium">
                  Our Services
                </span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Complete Digital Solutions for
                <span className="gradient-text block mt-2"> Your Business</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto">
                From custom websites to AI-powered solutions, we provide end-to-end
                digital services that help your business grow and succeed online.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32 gradient-subtle relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-7 rounded-2xl bg-card border border-border shadow-card hover-lift overflow-hidden relative"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="relative font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="relative flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={scrollToContact}
                    className={`relative inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                  >
                    Get Started
                    <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${service.gradient} text-[hsl(262_83%_58%)]`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden noise">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(262_83%_58%/0.2)] rounded-full blur-[180px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Let's discuss your requirements and find the perfect solution for
                your business. Book a free consultation today.
              </p>
              <Button variant="hero" size="xl" onClick={scrollToContact} className="shadow-glow">
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