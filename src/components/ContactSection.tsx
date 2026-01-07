import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 gradient-subtle relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
            Let's Build Something
            <span className="gradient-text block mt-2"> Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            Ready to start your project? Have questions? We'd love to hear from
            you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels. We typically
                respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@fullstackdigital.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(262_83%_58%)] to-[hsl(280_80%_60%)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email Us</div>
                  <div className="text-muted-foreground text-sm">
                    hello@fullstackdigital.com
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(330_85%_60%)] to-[hsl(350_80%_55%)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call Us</div>
                  <div className="text-muted-foreground text-sm">
                    +1 (234) 567-890
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(174_72%_45%)] to-[hsl(190_70%_50%)] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <div className="text-muted-foreground text-sm">
                    Available Worldwide (Remote)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">Follow us</p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "GitHub"].map((social, index) => {
                  const colors = [
                    "from-[hsl(262_83%_58%)] to-[hsl(280_80%_60%)]",
                    "from-[hsl(330_85%_60%)] to-[hsl(350_80%_55%)]",
                    "from-[hsl(174_72%_45%)] to-[hsl(190_70%_50%)]",
                  ];
                  return (
                    <a
                      key={social}
                      href="#"
                      className={`px-5 py-2.5 rounded-xl bg-gradient-to-br ${colors[index]} text-white text-sm font-medium hover:scale-105 transition-transform shadow-lg`}
                    >
                      {social}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 rounded-xl bg-secondary/50 border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 rounded-xl bg-secondary/50 border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 rounded-xl bg-secondary/50 border-border focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="h-12 rounded-xl bg-secondary/50 border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="resize-none rounded-xl bg-secondary/50 border-border focus:border-accent focus:ring-accent"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-center text-muted-foreground text-sm mt-4">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};