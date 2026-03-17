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
    gradient: "from-[hsl(270_100%_65%)] to-[hsl(340_100%_60%)]",
  },
  {
    icon: Puzzle,
    title: "Custom Solutions",
    description:
      "No cookie-cutter templates. Every solution is tailored to your specific business needs.",
    gradient: "from-[hsl(340_100%_60%)] to-[hsl(0_85%_55%)]",
  },
  {
    icon: DollarSign,
    title: "Affordable & Scalable",
    description:
      "Competitive pricing with solutions that grow with your business.",
    gradient: "from-[hsl(180_100%_50%)] to-[hsl(200_90%_50%)]",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Efficient workflows and agile methodology ensure timely project completion.",
    gradient: "from-[hsl(150_100%_55%)] to-[hsl(180_100%_50%)]",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication throughout every project.",
    gradient: "from-[hsl(200_90%_50%)] to-[hsl(270_100%_65%)]",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "We're here for you after launch with ongoing maintenance and support.",
    gradient: "from-[hsl(270_80%_60%)] to-[hsl(340_100%_60%)]",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-subtle relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[hsl(270_100%_65%/0.08)] rounded-full blur-[120px] animate-morph" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[hsl(180_100%_50%/0.08)] rounded-full blur-[100px] animate-morph animation-delay-300" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-[1.05]">
            What Sets Us
            <span className="gradient-text"> Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            We combine technical expertise with business acumen to deliver
            solutions that truly make a difference.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-card hover-lift overflow-hidden funky-card"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
