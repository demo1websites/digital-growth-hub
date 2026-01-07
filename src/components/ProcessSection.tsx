import {
  MessageSquare,
  Lightbulb,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, challenges, and target audience through detailed discussions.",
    color: "from-[hsl(262_83%_58%)] to-[hsl(280_80%_60%)]",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Planning & Strategy",
    description:
      "Based on our findings, we create a comprehensive roadmap with clear milestones, timelines, and deliverables.",
    color: "from-[hsl(330_85%_60%)] to-[hsl(350_80%_55%)]",
  },
  {
    icon: Code,
    number: "03",
    title: "Design & Development",
    description:
      "Our team brings the plan to life with modern design and clean, scalable code built with best practices.",
    color: "from-[hsl(174_72%_45%)] to-[hsl(190_70%_50%)]",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Testing & Optimization",
    description:
      "Rigorous testing across devices and browsers ensures your solution is fast, secure, and bug-free.",
    color: "from-[hsl(45_90%_55%)] to-[hsl(35_85%_50%)]",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch & Support",
    description:
      "We handle deployment and provide ongoing support to ensure your solution continues to perform.",
    color: "from-[hsl(200_80%_55%)] to-[hsl(220_75%_50%)]",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
            How We
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            Our proven 5-step process ensures every project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </div>

        {/* Process Steps - Horizontal on desktop */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative p-6 lg:p-5 rounded-2xl bg-card border border-border shadow-card hover-lift h-full">
                  {/* Number Circle */}
                  <div className={`w-16 h-16 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-8 h-8 lg:w-7 lg:h-7 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 lg:top-5 lg:right-5">
                    <span className={`text-4xl lg:text-3xl font-bold font-display bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl lg:text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-24 z-10 w-4 h-4 rounded-full bg-card border-2 border-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};