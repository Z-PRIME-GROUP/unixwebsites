import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const testimonials = [
    {
      name: "Emily Garcia",
      business: "Ocean Breeze Yoga",
      quote: "As the owner of Ocean Breeze Yoga, I struggled to find an affordable website service. uFREEwebsites made it so easy, and now I have a professional site that brings in new students every week. Couldn't be happier!",
      image: "/images/oceanbreezeyoga-owner-avatar.webp"
    },
    {
      name: "Lori Matthews",
      business: "Willow Tree Cafe",
      quote: "uFREEwebsites transformed my business! As the owner of Willow Tree Cafe, I needed an online presence that matched the charm of my café. The free website they built is beautiful, and my customers love how easy it is to navigate. Sales have gone up, and I didn't pay a penny!",
      image: "/images/lorimatthews-min-min.webp"
    },
    {
      name: "James Walker",
      business: "Apex Automotive",
      quote: "uFREEwebsites took my business, Apex Automotive, to the next level with a professional and easy-to-navigate website. It's helped me get more clients, and the fact that it was free is unbelievable!",
      image: "/images/jameswalker-min-min.webp"
    },
    {
      name: "Jessica Powell",
      business: "Furry Friends Groomers",
      quote: "Running a pet grooming service like Furry Friends Groomers, having an attractive, easy-to-use website is a must. uFREEwebsites delivered exactly what I needed, for free! My client bookings have increased, and I'm so grateful.",
      image: "/images/jessicapowell-min-min.webp"
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)',
      padding: '80px 5%'
    }}>
      {/* Featured Review - Sarah Jenkins */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <img 
            src="/images/reviewPhoto-min-min-e1726036254972.webp"
            alt="Sarah Jenkins"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{
            fontSize: '20px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            lineHeight: '1.6',
            color: '#333',
            fontStyle: 'italic',
            marginBottom: '20px'
          }}>
            "uFREEwebsites completely transformed my business! I went from struggling to get noticed to having a beautiful, professional website that brings in new clients every day. And the best part? It was completely free!"
          </div>
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            color: '#00139B'
          }}>
            — Sarah Jenkins, Owner of Sparkle Clean Services
          </div>
        </div>
      </div>

      {/* Section Heading */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '48px',
          fontWeight: 700,
          color: '#00139B',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Trusted by Thousands of Entrepreneurs
        </h2>
        <p style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '20px',
          color: '#666',
          marginBottom: '30px'
        }}>
          See How We've Transformed Businesses
        </p>
        
        {/* Rating Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: '#FFD700',
          padding: '12px 24px',
          borderRadius: '50px',
          boxShadow: '0 4px 12px rgba(255,215,0,0.3)'
        }}>
          <span style={{ fontSize: '24px' }}>⭐⭐⭐⭐⭐</span>
          <span style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#000'
          }}>
            Exceptional 4.9 Rating
          </span>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
          <div className="embla__container" style={{ display: 'flex' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide"
                style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  padding: '20px'
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  background: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                }}>
                  {/* Left Column - Quote */}
                  <div>
                    <div style={{
                      fontSize: '24px',
                      color: '#00139B',
                      marginBottom: '20px',
                      lineHeight: '1'
                    }}>
                      "
                    </div>
                    <p style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#333',
                      marginBottom: '24px'
                    }}>
                      {testimonial.quote}
                    </p>
                    <div>
                      <div style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#00139B',
                        marginBottom: '4px'
                      }}>
                        {testimonial.name}
                      </div>
                      <div style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '16px',
                        color: '#666'
                      }}>
                        {testimonial.business}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '40px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: '#00139B',
                opacity: 0.3,
                cursor: 'pointer',
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .embla__slide > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
