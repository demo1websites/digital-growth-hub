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
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    description:
      "We create stunning, high-performance websites that not only look great but also convert visitors into customers. Our full-stack approach ensures seamless functionality from frontend to backend.",
    problem: "Your outdated website isn't converting visitors into customers.",
    benefit:
      "Get a modern, fast, and responsive website that builds trust and drives conversions.",
    features: [
      "Custom responsive design",
      "Mobile-first development",
      "SEO optimization built-in",
      "Fast loading speeds",
      "Content management system",
      "Analytics integration",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications & Dashboards",
    description:
      "Transform your business operations with custom web applications and dashboards. We build powerful tools that streamline workflows, visualize data, and boost productivity.",
    problem: "Manual processes are slowing down your business operations.",
    benefit:
      "Streamline operations with custom dashboards and applications built for your workflow.",
    features: [
      "Custom business logic",
      "Real-time data updates",
      "User-friendly interfaces",
      "Role-based access control",
      "API integrations",
      "Automated reporting",
    ],
  },
  {
    icon: Search,
    title: "SEO & Online Visibility",
    description:
      "Get found by your target audience with our comprehensive SEO services. We optimize your online presence to rank higher in search results and drive organic traffic.",
    problem: "Your business isn't showing up when customers search online.",
    benefit:
      "Improve your search rankings and get discovered by more potential customers.",
    features: [
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO audit",
      "Content optimization",
      "Performance monitoring",
      "Competitor analysis",
    ],
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description:
      "Dominate local search and attract customers from your area. We optimize your Google Business Profile to ensure you appear prominently in local search results.",
    problem: "Local customers can't find your business on Google Maps.",
    benefit:
      "Dominate local search results and attract more customers from your area.",
    features: [
      "Profile setup & optimization",
      "Review management strategy",
      "Local keyword targeting",
      "Photo optimization",
      "Business info accuracy",
      "Performance tracking",
    ],
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Save time and reduce errors with intelligent automation solutions. We build custom workflows that handle repetitive tasks, freeing your team to focus on growth.",
    problem: "Repetitive tasks are wasting your team's valuable time.",
    benefit:
      "Automate workflows and free up time to focus on what matters most.",
    features: [
      "Workflow automation",
      "Third-party integrations",
      "Custom chatbots",
      "Email automation",
      "Data synchronization",
      "Process optimization",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your digital presence running smoothly with our ongoing maintenance and support services. We handle updates, security, and performance optimization.",
    problem: "Your website is slow, outdated, or frequently breaks.",
    benefit:
      "Keep your digital presence running smoothly with ongoing support and updates.",
    features: [
      "24/7 monitoring",
      "Regular updates & backups",
      "Security patches",
      "Performance optimization",
      "Priority support",
      "Monthly reports",
    ],
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
                From custom websites to business automation, we provide end-to-end
                digital services that help your business grow and succeed online.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    
                    {/* Problem & Solution */}
                    <div className="space-y-4 mb-8">
                      <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                        <p className="text-destructive font-medium text-sm">
                          Problem: {service.problem}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <p className="text-accent font-medium text-sm">
                          Solution: {service.benefit}
                        </p>
                      </div>
                    </div>

                    <Button variant="hero" size="lg" onClick={scrollToContact}>
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Features Card */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                      <h3 className="font-display text-xl font-bold text-foreground mb-6">
                        What's Included
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
