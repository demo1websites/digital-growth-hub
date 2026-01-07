import { Target, Lightbulb, Users, Award, ArrowUpRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on real business outcomes, not just beautiful designs.",
    color: "from-[hsl(262_83%_58%)] to-[hsl(280_80%_60%)]",
  },
  {
    icon: Users,
    title: "Customer-Focused",
    description: "Your success is our priority. We build solutions that work for you.",
    color: "from-[hsl(330_85%_60%)] to-[hsl(350_80%_55%)]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with modern technologies and creative solutions.",
    color: "from-[hsl(174_72%_45%)] to-[hsl(190_70%_50%)]",
  },
  {
    icon: Award,
    title: "Transparency",
    description: "Clear communication and honest pricing at every step.",
    color: "from-[hsl(45_90%_55%)] to-[hsl(35_85%_50%)]",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Building Digital Solutions That
              <span className="gradient-text block mt-2"> Drive Results</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Full-Stack Digital Solutions was founded with a clear mission: to help
              businesses thrive in the digital age through custom web development,
              automation, and strategic online presence optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We understand that every business is unique. That's why we don't
              believe in one-size-fits-all solutions. Our team works closely with
              you to understand your specific challenges and goals, delivering
              tailored solutions that generate real, measurable results.
            </p>

            {/* Mission Statement */}
            <div className="relative p-8 rounded-2xl overflow-hidden group hover-lift">
              <div className="absolute inset-0 gradient-accent opacity-10 group-hover:opacity-15 transition-opacity" />
              <div className="absolute inset-0 glass" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To empower businesses with innovative digital solutions that enhance
                  efficiency, increase visibility, and accelerate growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl bg-card border border-border shadow-card hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};