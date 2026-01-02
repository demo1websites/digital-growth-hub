import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    problem: "Client needed a custom e-commerce solution with inventory management.",
    solution:
      "Built a full-stack platform with product management, order tracking, and payment integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    outcome: "40% increase in online sales within 3 months.",
    image: "bg-gradient-to-br from-accent/20 to-accent/5",
  },
  {
    title: "Business Dashboard",
    category: "Dashboard / Analytics",
    problem: "Manual reporting was consuming 10+ hours per week.",
    solution:
      "Created an automated dashboard with real-time data visualization and reporting.",
    technologies: ["React", "TypeScript", "REST API", "Charts"],
    outcome: "Reduced reporting time by 90%.",
    image: "bg-gradient-to-br from-primary/10 to-primary/5",
  },
  {
    title: "Local Service Website",
    category: "Website Design",
    problem: "Business had no online presence and was losing customers to competitors.",
    solution:
      "Designed and developed a modern, SEO-optimized website with booking functionality.",
    technologies: ["React", "Tailwind CSS", "SEO", "Google Maps"],
    outcome: "3x increase in qualified leads.",
    image: "bg-gradient-to-br from-accent/15 to-primary/10",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recent
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore some of our recent work and see how we've helped businesses
            achieve their digital goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-card border border-border shadow-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <span className="relative text-foreground/50 font-display font-bold text-lg">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-3 italic">
                  "{project.problem}"
                </p>

                <p className="text-foreground/80 text-sm mb-4">{project.solution}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <span className="text-accent font-semibold text-sm">
                    Result: {project.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to start your project? Let's make it happen.
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};
