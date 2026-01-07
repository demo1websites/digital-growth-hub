import { ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden noise"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-[hsl(262_83%_58%/0.3)] rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-[hsl(330_85%_60%/0.25)] rounded-full blur-[130px] animate-float animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(174_72%_45%/0.1)] rounded-full blur-[200px]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-[20%] w-20 h-20 rounded-2xl glass-dark border border-white/10 flex items-center justify-center animate-float hidden lg:flex">
        <Zap className="w-8 h-8 text-[hsl(262_83%_58%)]" />
      </div>
      <div className="absolute bottom-1/3 left-[15%] w-16 h-16 rounded-2xl glass-dark border border-white/10 flex items-center justify-center animate-float animation-delay-200 hidden lg:flex">
        <Shield className="w-7 h-7 text-[hsl(174_72%_45%)]" />
      </div>
      <div className="absolute top-1/3 left-[25%] w-14 h-14 rounded-xl glass-dark border border-white/10 flex items-center justify-center animate-float animation-delay-400 hidden lg:flex">
        <Clock className="w-6 h-6 text-[hsl(330_85%_60%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark border border-white/10 mb-8 animate-fade-up opacity-0">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(174_72%_45%)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(174_72%_45%)]"></span>
            </div>
            <span className="text-white/90 text-sm font-medium">
              Transforming Ideas Into Digital Reality
            </span>
            <Sparkles className="w-4 h-4 text-[hsl(262_83%_58%)]" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 animate-fade-up opacity-0 animation-delay-100">
            Full-Stack Digital
            <span className="block mt-2 gradient-text animate-gradient bg-[length:200%_200%]">
              Solutions
            </span>
            <span className="block mt-2 text-white/90">For Business Growth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
            We help businesses improve their online presence, generate quality leads,
            and automate operations with custom web solutions built for real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => scrollToSection("#about")}
              className="group"
            >
              <span className="gradient-text group-hover:text-white transition-colors">
                Learn More
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-10 border-t border-white/10 animate-fade-up opacity-0 animation-delay-400">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                  50<span className="text-[hsl(262_83%_58%)]">+</span>
                </div>
                <div className="text-white/50 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                  100<span className="text-[hsl(330_85%_60%)]">%</span>
                </div>
                <div className="text-white/50 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                  24<span className="text-[hsl(174_72%_45%)]">/7</span>
                </div>
                <div className="text-white/50 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gradient-to-b from-[hsl(262_83%_58%)] to-[hsl(330_85%_60%)] rounded-full" />
        </div>
      </div>
    </section>
  );
};