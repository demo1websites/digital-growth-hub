import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Full-Stack Digital Solutions transformed our online presence completely. The new website and automation tools have saved us countless hours every week.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, LocalBiz Co.",
    content:
      "Professional, responsive, and delivered exactly what we needed. Our local SEO rankings improved dramatically after working with them.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCorp",
    content:
      "The dashboard they built gives us real-time insights that were impossible before. Highly recommend their services!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="text-white/70 text-lg">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/50 mb-4" />

              {/* Content */}
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Author */}
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
