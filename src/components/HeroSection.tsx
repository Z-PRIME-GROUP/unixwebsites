import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

export const HeroSection = () => {
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize FREE letter animation
    const initFreeAnimation = () => {
      const freeWord = document.querySelector('.free-animated-word') as HTMLElement;
      if (!freeWord) return;

      const restartAnimation = () => {
        freeWord.classList.remove('is-visible');
        void freeWord.offsetWidth; // Force reflow
        setTimeout(() => {
          freeWord.classList.add('is-visible');
        }, 50);
      };

      // Start immediately
      restartAnimation();
      
      // Loop every 2 seconds
      const interval = setInterval(restartAnimation, 2000);
      
      return () => clearInterval(interval);
    };

    // Initialize Vanilla Tilt on demo images
    const initTilt = () => {
      tiltRefs.current.forEach((el) => {
        if (el && !(el as any).vanillaTilt) {
          VanillaTilt.init(el, {
            max: 20,
            speed: 400,
            scale: 1.05,
            glare: true,
            'max-glare': 0.3,
            perspective: 1000,
            transition: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
          });
        }
      });
    };

    const cleanupAnimation = initFreeAnimation();
    setTimeout(initTilt, 100);

    return () => {
      cleanupAnimation?.();
      // Cleanup tilt instances
      tiltRefs.current.forEach((el) => {
        if (el && (el as any).vanillaTilt) {
          (el as any).vanillaTilt.destroy();
        }
      });
    };
  }, []);

  const demoImages = [
    '/images/demo1.webp',
    '/images/demo2.webp',
    '/images/demo3.webp',
    '/images/demo4.webp',
    '/images/demo5.webp',
    '/images/demo6.webp',
    '/images/demo1.webp',
    '/images/demo2.webp',
    '/images/demo3.webp',
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 z-10">
            {/* Main Heading with FREE Animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Get Your</span>{' '}
              <span className="relative inline-block">
                <span className="free-animated-word is-visible text-blue-600 font-black">
                  <span className="inline-block animate-letter" style={{ animationDelay: '0s' }}>F</span>
                  <span className="inline-block animate-letter" style={{ animationDelay: '0.05s' }}>R</span>
                  <span className="inline-block animate-letter" style={{ animationDelay: '0.1s' }}>E</span>
                  <span className="inline-block animate-letter" style={{ animationDelay: '0.15s' }}>E</span>
                </span>
              </span>{' '}
              <span className="text-gray-900">Website</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              and Supercharge Your Business Growth!
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-xl">
              Apply now – it only takes 2 minutes, and watch your business thrive with a{' '}
              <strong className="underline">FREE</strong>, custom-built website.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://application.ufreewebsites.com/" target="_blank" rel="noopener noreferrer">
                  ⚡ APPLY IN 2 MINUTES
                </a>
              </Button>
            </div>

            {/* Feature Checkmarks */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">100% FREE Website</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Award-Winning Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Risk-Free</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 space-y-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 fill-green-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  VERIFIED COMPANY
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Grid */}
          <div className="relative lg:block">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {demoImages.map((src, index) => (
                <div
                  key={index}
                  ref={(el) => (tiltRefs.current[index] = el)}
                  className="tilt-element aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                  style={{
                    transform: 'translateZ(0)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={src}
                    alt={`Demo website ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
