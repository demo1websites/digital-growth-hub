import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
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
    gradient: "from-[hsl(262_83%_58%)] to-[hsl(280_80%_60%)]",
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
    gradient: "from-[hsl(330_85%_60%)] to-[hsl(350_80%_55%)]",
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
    gradient: "from-[hsl(174_72%_45%)] to-[hsl(190_70%_50%)]",
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
    gradient: "from-[hsl(45_90%_55%)] to-[hsl(35_85%_50%)]",
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
    gradient: "from-[hsl(200_80%_55%)] to-[hsl(220_75%_50%)]",
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
    gradient: "from-[hsl(280_70%_55%)] to-[hsl(300_75%_50%)]",
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
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 gradient-hero relative overflow-hidden noise">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-[hsl(330_85%_60%/0.25)] rounded-full blur-[150px]" />
            <div className="absolute bottom-20 left-[10%] w-[350px] h-[350px] bg-[hsl(262_83%_58%/0.2)] rounded-full blur-[130px]" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-[hsl(330_85%_60%)]" />
                <span className="text-white/90 text-sm font-medium">
                  Portfolio
                </span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Our Recent
                <span className="gradient-text block mt-2"> Projects</span>
              </h1>
              <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto">
                Explore some of our recent work and see how we've helped businesses
                achieve their digital goals through custom solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 lg:py-32 gradient-subtle relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl bg-card border border-border shadow-card overflow-hidden hover-lift group"
                >
                  {/* Gradient Header */}
                  <div className={`h-36 bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/90 font-display font-bold text-xl">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-lg glass-dark border border-white/10" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-md bg-gradient-to-r ${project.gradient} text-white mb-3`}>
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.problem}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10`} />
                      <span className="relative text-foreground font-semibold text-xs">
                        ✨ {project.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden noise">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(330_85%_60%/0.2)] rounded-full blur-[180px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Let's discuss your requirements and build something amazing together.
                We'd love to add your success story to our portfolio.
              </p>
              <Button variant="hero" size="xl" onClick={scrollToContact} className="shadow-glow">
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