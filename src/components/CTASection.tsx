import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(262, 83%, 58%) 0%, hsl(220, 70%, 50%) 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Launch Your Dream Website?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their online presence with a FREE website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              GET STARTED FOR FREE
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-7 rounded-full font-bold transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </div>

          <p className="text-sm text-white/80 pt-4">
            No credit card required • Setup in 2 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
