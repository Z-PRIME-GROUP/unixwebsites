import { useState, useEffect } from "react";
import { Check } from "lucide-react";
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

  // Generate 9 images (repeat the 6 available demos)
  const demoImages = [1, 2, 3, 4, 5, 6, 1, 2, 3];

  return (
    <section className="relative w-full h-screen overflow-hidden" style={{ marginTop: '-150px', paddingTop: '150px' }}>
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #E3EEFF 40%, #FFFFFF 100%)',
        }}
      />

      {/* Faded Background Logo - positioned on the left */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          left: '-1298px',
          top: '166px',
          opacity: 0.1,
        }}
      >
        <img 
          src="/images/favicon-icon.webp" 
          alt=""
          className="w-auto h-auto"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex gap-12 items-center justify-between">
            {/* Left Column - Text Content */}
            <div className="text-gray-900 space-y-8 animate-slide-up" style={{ width: '53%', maxWidth: '675px' }}>
              {/* Animated Heading */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Get Your{" "}
                <span className="inline-block relative">
                  <span
                    key={currentWord}
                    className="animate-scale"
                    style={{ color: '#0234DA' }}
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
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Apply now – it only takes 2 minutes, and watch your business thrive with a{" "}
                <strong className="underline">FREE</strong>, custom-built website.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(240deg, #0234DA 0%, #6B43EF 68%)',
                    color: '#FFFFFF'
                  }}
                >
                  <i className="far fa-arrow-alt-circle-right mr-2" />
                  APPLY IN 2 MINUTES
                </Button>
              </div>

              {/* Feature List */}
              <div className="hidden md:flex items-center gap-8 pt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="pt-4">
                <img 
                  src="/images/verified-badge.webp" 
                  alt="Verified Company Badge"
                  className="h-auto max-w-full"
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </div>

            {/* Right Column - Website Preview Grid (3x3) */}
            <div className="flex-1 animate-fade-in">
              <div className="grid grid-cols-3 gap-0">
                {demoImages.map((item, index) => (
                  <div 
                    key={index} 
                    className="aspect-[4/5] overflow-hidden transition-all duration-300 cursor-pointer group"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '600px',
                    }}
                  >
                    <img 
                      src={`/images/demo${item}.webp`} 
                      alt={`Demo website ${item}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{
                        transform: 'translateZ(0)',
                      }}
                    />
                  </div>
                ))}
              </div>
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
