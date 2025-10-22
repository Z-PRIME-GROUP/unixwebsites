import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";
import SuccessFeatures from "@/components/SuccessFeatures";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FreeWebsitesSection from "@/components/FreeWebsitesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import EnhancedFooter from "@/components/EnhancedFooter";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["FREE", "FREE", "FREE"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    "✓ 100% FREE – No Hidden Costs",
    "✓ Fully Customizable",
    "✓ Mobile-Friendly & Responsive",
    "✓ SEO-Optimized",
    "✓ Secure & Reliable",
    "✓ Built in 2-4 Weeks",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, hsl(262, 83%, 58%) 0%, hsl(220, 70%, 50%) 100%)',
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Get Your{" "}
                <span className="inline-block animate-pulse">
                  {words[currentWord]}
                </span>{" "}
                Website
              </h1>
              
              <h2 className="text-3xl md:text-4xl font-semibold">
                and Supercharge Your Business Growth!
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90">
                Apply now – it only takes 2 minutes, and watch your business thrive with a{" "}
                <span className="underline font-bold">FREE</span>, custom-built website.
              </p>

              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                GET STARTED FOR FREE
              </Button>

              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-white flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4">
                <img 
                  src="/images/verified-badge.webp" 
                  alt="Verified Company Badge" 
                  className="h-12 w-12"
                />
                <span className="text-sm font-medium">Verified Company Badge</span>
              </div>
            </div>

            <div className="animate-fade-in">
              <GalleryGrid />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      <SuccessFeatures />
      <StatisticsSection />
      <TestimonialsSection />
      <FreeWebsitesSection />
      <FAQSection />
      <CTASection />
      <EnhancedFooter />
    </div>
  );
};

export default Index;
