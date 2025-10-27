import { useEffect, useRef } from 'react';

export const TestimonialsSection = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current && (window as any).Swiper) {
      new (window as any).Swiper(swiperRef.current, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
      });
    }
  }, []);

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
      background: 'linear-gradient(180deg, #E8EFFF 0%, #E3E8FF 100%)',
      padding: '80px 5%'
    }}>
      {/* Featured Review Section - Sarah Jenkins */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 80px',
        display: 'flex',
        gap: '60px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* Left Column - Text Content */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#0234DA',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Trusted by Thousands of Entrepreneurs
          </div>
          
          <h2 style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            See How We've Transformed Businesses
          </h2>
          
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#333',
            marginBottom: '30px'
          }}>
            Join thousands of entrepreneurs who have transformed their businesses with a professional, free website. Our clients see real results - more customers, more sales, and more success.
          </p>
          
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '10px'
          }}>
            Exceptional 4.9 Rating
          </div>
          
          <div style={{ fontSize: '24px' }}>
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        {/* Right Column - Featured Review Card with Image */}
        <div style={{ 
          flex: '1 1 500px',
          position: 'relative',
          minHeight: '400px'
        }}>
          {/* Background Image */}
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '70%',
            zIndex: 1
          }}>
            <img 
              src="/images/reviewPhoto-min-min-e1726036254972.webp"
              alt="Sarah Jenkins"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
            />
          </div>

          {/* White Card Overlay */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            marginTop: '40px'
          }}>
            <p style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              color: '#0234DA',
              lineHeight: '1.5',
              marginBottom: '20px'
            }}>
              "I can't thank uFREEwebsites enough! I would've never imagined getting such a high-quality site for FREE."
            </p>
            
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '4px'
            }}>
              Sarah Jenkins
            </div>
            
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              color: '#999999'
            }}>
              Green Thumb Nursery
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Testimonials Carousel */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="swiper testimonials-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
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
                  {/* Left Column - Image */}
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

                  {/* Right Column - Quote and Name */}
                  <div>
                    <div style={{
                      fontSize: '48px',
                      color: '#0234DA',
                      marginBottom: '10px',
                      lineHeight: '1',
                      fontFamily: 'Georgia, serif'
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
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#000000',
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
                </div>
              </div>
            ))}
          </div>
          
          {/* Swiper Pagination Dots */}
          <div className="swiper-pagination" style={{ marginTop: '40px' }}></div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #0234DA;
          opacity: 0.3;
          transition: opacity 0.3s;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .swiper-pagination-bullet:hover {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .swiper-slide > div {
            grid-template-columns: 1fr !important;
          }
          
          .swiper-slide > div > div:first-child {
            order: 2;
          }
          
          .swiper-slide > div > div:last-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
