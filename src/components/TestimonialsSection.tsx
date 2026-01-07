import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Full-Stack Digital Solutions transformed our online presence completely. The new website and automation tools have saved us countless hours every week.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, LocalBiz Co.",
    content:
      "Professional, responsive, and delivered exactly what we needed. Our local SEO rankings improved dramatically after working with them.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCorp",
    content:
      "The dashboard they built gives us real-time insights that were impossible before. Highly recommend their services!",
    rating: 5,
    avatar: "ER",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden noise">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[hsl(262_83%_58%/0.2)] rounded-full blur-[150px] animate-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(330_85%_60%/0.15)] rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-6">
            <span className="text-[hsl(262_83%_58%)] font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            What Our Clients
            <span className="gradient-text block mt-2"> Say</span>
          </h2>
          <p className="text-white/60 text-lg lg:text-xl">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-8 rounded-2xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[hsl(45_90%_55%)] text-[hsl(45_90%_55%)]"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};