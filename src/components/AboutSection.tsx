import { Target, Lightbulb, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on real business outcomes, not just beautiful designs.",
  },
  {
    icon: Users,
    title: "Customer-Focused",
    description: "Your success is our priority. We build solutions that work for you.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with modern technologies and creative solutions.",
  },
  {
    icon: Award,
    title: "Transparency",
    description: "Clear communication and honest pricing at every step.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Digital Solutions That
              <span className="gradient-text"> Drive Results</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Full-Stack Digital Solutions was founded with a clear mission: to help
              businesses thrive in the digital age through custom web development,
              automation, and strategic online presence optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand that every business is unique. That's why we don't
              believe in one-size-fits-all solutions. Our team works closely with
              you to understand your specific challenges and goals, delivering
              tailored solutions that generate real, measurable results.
            </p>

            {/* Mission Statement */}
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="font-display font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative digital solutions that enhance
                efficiency, increase visibility, and accelerate growth.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
