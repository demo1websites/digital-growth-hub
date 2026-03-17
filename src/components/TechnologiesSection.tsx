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

const categoryGradients: Record<string, string> = {
  frontend: "from-[hsl(270_100%_65%)] to-[hsl(340_100%_60%)]",
  backend: "from-[hsl(180_100%_50%)] to-[hsl(200_90%_50%)]",
  database: "from-[hsl(340_100%_60%)] to-[hsl(0_85%_55%)]",
  tools: "from-[hsl(150_100%_55%)] to-[hsl(180_100%_50%)]",
};

export const TechnologiesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Technologies
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
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
            <div key={category} className="group">
              <h3 className={`font-display font-bold text-foreground capitalize mb-4 text-center text-lg`}>
                <span className={`bg-gradient-to-r ${categoryGradients[category]} bg-clip-text text-transparent`}>
                  {category === "database" ? "Databases" : category}
                </span>
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-accent/20 transition-all duration-300 hover:translate-x-1 funky-card group/item"
                  >
                    <span className="text-2xl group-hover/item:scale-110 transition-transform">{tech.icon}</span>
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
