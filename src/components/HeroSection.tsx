import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["FREE", "FREE", "FREE"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    "100% FREE Website",
    "Award-Winning Support",
    "Risk-Free"
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(220, 70%, 50%) 0%, hsl(262, 83%, 58%) 100%)',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 animate-slide-up">
              {/* Animated Heading */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Get Your{" "}
                <span className="inline-block relative">
                  <span
                    key={currentWord}
                    className="animate-scale text-yellow-300"
                  >
                    {words[currentWord]}
                  </span>
                </span>
                {" "}Website
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                and Supercharge Your Business Growth!
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Apply now – it only takes 2 minutes, and watch your business thrive with a{" "}
                <strong className="underline">FREE</strong>, custom-built website.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  APPLY IN 2 MINUTES
                </Button>
              </div>

              {/* Feature List */}
              <div className="hidden md:flex items-center gap-8 pt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="pt-4">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <span className="text-sm font-medium">✓ Verified Company Badge</span>
                </div>
              </div>
            </div>

            {/* Right Column - Website Preview Grid */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="aspect-[4/5] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                    <span className="text-white/50 text-sm font-medium">Demo {item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
