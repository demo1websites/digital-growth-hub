const technologies = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "💚" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Express", icon: "🚀" },
    { name: "FastAPI", icon: "⚡" },
    { name: "REST APIs", icon: "🔗" },
  ],
  database: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Redis", icon: "🔴" },
    { name: "Supabase", icon: "⚡" },
  ],
  tools: [
    { name: "Git", icon: "📂" },
    { name: "Docker", icon: "🐳" },
    { name: "Figma", icon: "🎨" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
  ],
};

export const TechnologiesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Technologies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Tech
            <span className="gradient-text"> Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use modern, proven technologies to build fast, scalable, and
            maintainable solutions.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="font-display font-bold text-foreground capitalize mb-4 text-center">
                {category === "database" ? "Databases" : category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border hover:bg-secondary transition-colors"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
