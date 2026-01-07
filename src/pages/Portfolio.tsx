import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    problem:
      "Client needed a custom e-commerce solution with inventory management. Their existing platform was outdated and couldn't handle growing product catalog.",
    solution:
      "Built a full-stack platform with product management, order tracking, payment integration, and real-time inventory updates. Implemented a user-friendly admin dashboard for easy management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    features: [
      "Product catalog management",
      "Shopping cart & checkout",
      "Payment processing",
      "Inventory tracking",
      "Order management",
      "Customer accounts",
    ],
    outcome: "40% increase in online sales within 3 months.",
    image: "bg-gradient-to-br from-accent/20 to-accent/5",
  },
  {
    title: "Business Dashboard",
    category: "Dashboard / Analytics",
    problem:
      "Manual reporting was consuming 10+ hours per week. The client needed real-time insights into their business operations.",
    solution:
      "Created an automated dashboard with real-time data visualization, custom reporting, and automated alerts. Integrated with existing business tools for seamless data flow.",
    technologies: ["React", "TypeScript", "REST API", "Charts", "Node.js"],
    features: [
      "Real-time data updates",
      "Custom report builder",
      "Data visualization",
      "Automated alerts",
      "Export functionality",
      "Role-based access",
    ],
    outcome: "Reduced reporting time by 90%.",
    image: "bg-gradient-to-br from-primary/10 to-primary/5",
  },
  {
    title: "Local Service Website",
    category: "Website Design",
    problem:
      "Business had no online presence and was losing customers to competitors. They needed a professional website to establish credibility.",
    solution:
      "Designed and developed a modern, SEO-optimized website with booking functionality. Implemented local SEO strategies to improve search visibility.",
    technologies: ["React", "Tailwind CSS", "SEO", "Google Maps", "Analytics"],
    features: [
      "Modern responsive design",
      "Online booking system",
      "Google Maps integration",
      "SEO optimization",
      "Contact forms",
      "Performance optimized",
    ],
    outcome: "3x increase in qualified leads.",
    image: "bg-gradient-to-br from-accent/15 to-primary/10",
  },
  {
    title: "Inventory Management System",
    category: "Business Application",
    problem:
      "Manual inventory tracking led to stockouts and overstocking. The client needed automated inventory management.",
    solution:
      "Built a comprehensive inventory management system with barcode scanning, automated reorder alerts, and supplier management.",
    technologies: ["React", "Node.js", "MongoDB", "Barcode API", "Email API"],
    features: [
      "Barcode scanning",
      "Stock level tracking",
      "Automated reorder alerts",
      "Supplier management",
      "Inventory reports",
      "Multi-location support",
    ],
    outcome: "50% reduction in inventory costs.",
    image: "bg-gradient-to-br from-primary/15 to-accent/10",
  },
  {
    title: "Restaurant Ordering System",
    category: "Web Application",
    problem:
      "Restaurant struggled with phone orders during peak hours. They needed an online ordering system to handle the volume.",
    solution:
      "Developed a custom online ordering platform with menu management, real-time order tracking, and kitchen display system integration.",
    technologies: ["React", "Firebase", "Stripe", "WebSockets", "PWA"],
    features: [
      "Digital menu management",
      "Online ordering",
      "Real-time order tracking",
      "Payment processing",
      "Kitchen display system",
      "Delivery integration",
    ],
    outcome: "60% increase in order volume capacity.",
    image: "bg-gradient-to-br from-accent/20 to-primary/5",
  },
  {
    title: "Healthcare Booking Portal",
    category: "Web Application",
    problem:
      "Medical practice relied on phone bookings, causing long wait times and missed appointments.",
    solution:
      "Created a patient portal with online appointment booking, automated reminders, and patient record management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Twilio", "HIPAA"],
    features: [
      "Online appointment booking",
      "Automated reminders",
      "Patient portal",
      "Doctor schedules",
      "Insurance verification",
      "Secure messaging",
    ],
    outcome: "70% reduction in no-show appointments.",
    image: "bg-gradient-to-br from-primary/20 to-accent/10",
  },
];

const Portfolio = () => {
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
                Portfolio
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Recent
                <span className="gradient-text"> Projects</span>
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
                Explore some of our recent work and see how we've helped businesses
                achieve their digital goals through custom solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="rounded-3xl bg-card border border-border shadow-card overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image Placeholder */}
                    <div
                      className={`h-64 lg:h-auto ${project.image} flex items-center justify-center relative ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent lg:hidden" />
                      <div className="text-center p-8">
                        <span className="text-foreground/40 font-display font-bold text-2xl lg:text-3xl">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-4">
                        {project.category}
                      </span>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h2>

                      {/* Problem & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            The Challenge
                          </h4>
                          <p className="text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Our Solution
                          </h4>
                          <p className="text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-foreground/80">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                        <span className="text-accent font-semibold">
                          Result: {project.outcome}
                        </span>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss your requirements and build something amazing together.
                We'd love to add your success story to our portfolio.
              </p>
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Start Your Project
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

export default Portfolio;
