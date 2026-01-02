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
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Planning & Strategy",
    description:
      "Based on our findings, we create a comprehensive roadmap with clear milestones, timelines, and deliverables.",
  },
  {
    icon: Code,
    number: "03",
    title: "Design & Development",
    description:
      "Our team brings the plan to life with modern design and clean, scalable code built with best practices.",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Testing & Optimization",
    description:
      "Rigorous testing across devices and browsers ensures your solution is fast, secure, and bug-free.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch & Support",
    description:
      "We handle deployment and provide ongoing support to ensure your solution continues to perform.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven 5-step process ensures every project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex items-start gap-6 lg:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Number Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 pb-8 ${
                  index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                }`}
              >
                <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                  <span className="text-accent font-bold text-sm mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
