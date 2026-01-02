import {
  Code2,
  Puzzle,
  DollarSign,
  Clock,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description:
      "From frontend design to backend systems, we handle every layer of your digital solution.",
  },
  {
    icon: Puzzle,
    title: "Custom Solutions",
    description:
      "No cookie-cutter templates. Every solution is tailored to your specific business needs.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Scalable",
    description:
      "Competitive pricing with solutions that grow with your business.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Efficient workflows and agile methodology ensure timely project completion.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication throughout every project.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "We're here for you after launch with ongoing maintenance and support.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Sets Us
            <span className="gradient-text"> Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical expertise with business acumen to deliver
            solutions that truly make a difference.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
