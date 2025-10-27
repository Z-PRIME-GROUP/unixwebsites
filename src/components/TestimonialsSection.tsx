import { useEffect } from 'react';

export const TestimonialsSection = () => {
  useEffect(() => {
    // Initialize Swiper after component mounts
    const initSwiper = () => {
      console.log('=== SWIPER INIT START ===');
      console.log('Swiper available?', typeof (window as any).Swiper);
      
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        const swiperEl = document.getElementById('testimonials-swiper');
        console.log('Swiper element found?', !!swiperEl);
        
        if (swiperEl && !(swiperEl as any).swiper) {
          const swiperInstance = new (window as any).Swiper('#testimonials-swiper', {
            rtl: false,
            loop: false,
            speed: 1000,
            effect: 'slide',
            grabCursor: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: false
            },
            slidesPerView: 1,
            spaceBetween: 15,
            allowTouchMove: true,
            simulateTouch: true,
            touchRatio: 1,
            touchAngle: 45,
            longSwipesRatio: 0.5,
            followFinger: true,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: true,
            observer: true,
            observeParents: true
          });
          console.log('Swiper initialized:', swiperInstance);
          console.log('Navigation buttons:', document.querySelectorAll('.swiper-button-next, .swiper-button-prev'));
        } else {
          console.log('Swiper already initialized or element not found');
        }
      } else {
        console.log('Swiper library not loaded!');
      }
    };

    // Delay to ensure Swiper library is loaded
    setTimeout(initSwiper, 100);
  }, []);

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
                borderRadius: '24px',
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

      {/* Testimonials Carousel - Swiper */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px', position: 'relative' }}>
        <div 
          className="elementskit-testimonial-slider arrow_inside elementskit-default-testimonial slider-dotted"
          data-config='{"rtl":false,"arrows":true,"dots":true,"pauseOnHover":true,"autoplay":true,"speed":1000,"slidesPerGroup":1,"slidesPerView":1,"loop":true,"spaceBetween":15}'
        >
          <div className="ekit-main-swiper swiper" id="testimonials-swiper">
            <div className="swiper-wrapper">
              {/* Slide 1 - Lori Matthews */}
              <div className="swiper-slide">
                <div className="swiper-slide-inner">
                  <div className="elementskit-single-testimonial-slider" style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '60px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}>
                    <div className="row" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-commentor-content">
                          <div style={{ 
                            fontSize: '20px', 
                            marginBottom: '20px',
                            color: '#FFD700'
                          }}>★★★★★</div>
                          <p style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '30px'
                          }}>
                            uFREEwebsites transformed my business! As the owner of Willow Tree Cafe, I needed an online presence that matched the charm of my café. The free website they built is beautiful, and my customers love how easy it is to navigate. Sales have gone up, and I didn't pay a penny!
                          </p>
                          <span className="elementskit-border-hr" style={{
                            display: 'block',
                            height: '3px',
                            width: '60px',
                            background: '#0234DA',
                            marginBottom: '20px'
                          }}></span>
                          <span className="elementskit-profile-info">
                            <strong className="elementskit-author-name" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '20px',
                              fontWeight: 700,
                              color: '#000000',
                              display: 'block',
                              marginBottom: '5px'
                            }}>Lori Matthews</strong>
                            <span className="elementskit-author-des" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '16px',
                              color: '#666'
                            }}>Willow Tree Cafe</span>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-profile-image-card">
                          <img 
                            src="/images/lorimatthews-min-min.webp" 
                            alt="Lori Matthews"
                            style={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: '12px',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - James Walker */}
              <div className="swiper-slide">
                <div className="swiper-slide-inner">
                  <div className="elementskit-single-testimonial-slider" style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '60px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}>
                    <div className="row" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-commentor-content">
                          <div style={{ 
                            fontSize: '20px', 
                            marginBottom: '20px',
                            color: '#FFD700'
                          }}>★★★★★</div>
                          <p style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '30px'
                          }}>
                            uFREEwebsites took my business, Apex Automotive, to the next level with a professional and easy-to-navigate website. It's helped me get more clients, and the fact that it was free is unbelievable!
                          </p>
                          <span className="elementskit-border-hr" style={{
                            display: 'block',
                            height: '3px',
                            width: '60px',
                            background: '#0234DA',
                            marginBottom: '20px'
                          }}></span>
                          <span className="elementskit-profile-info">
                            <strong className="elementskit-author-name" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '20px',
                              fontWeight: 700,
                              color: '#000000',
                              display: 'block',
                              marginBottom: '5px'
                            }}>James Walker</strong>
                            <span className="elementskit-author-des" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '16px',
                              color: '#666'
                            }}>Apex Automotive</span>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-profile-image-card">
                          <img 
                            src="/images/jameswalker-min-min.webp" 
                            alt="James Walker"
                            style={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: '12px',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Jessica Powell */}
              <div className="swiper-slide">
                <div className="swiper-slide-inner">
                  <div className="elementskit-single-testimonial-slider" style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '60px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}>
                    <div className="row" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-commentor-content">
                          <div style={{ 
                            fontSize: '20px', 
                            marginBottom: '20px',
                            color: '#FFD700'
                          }}>★★★★★</div>
                          <p style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '30px'
                          }}>
                            Running a pet grooming service like Furry Friends Groomers, having an attractive, easy-to-use website is a must. uFREEwebsites delivered exactly what I needed, for free! My client bookings have increased, and I'm so grateful.
                          </p>
                          <span className="elementskit-border-hr" style={{
                            display: 'block',
                            height: '3px',
                            width: '60px',
                            background: '#0234DA',
                            marginBottom: '20px'
                          }}></span>
                          <span className="elementskit-profile-info">
                            <strong className="elementskit-author-name" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '20px',
                              fontWeight: 700,
                              color: '#000000',
                              display: 'block',
                              marginBottom: '5px'
                            }}>Jessica Powell</strong>
                            <span className="elementskit-author-des" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '16px',
                              color: '#666'
                            }}>Furry Friends Groomers</span>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-profile-image-card">
                          <img 
                            src="/images/jessicapowell-min-min.webp" 
                            alt="Jessica Powell"
                            style={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: '12px',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 - Emily Garcia */}
              <div className="swiper-slide">
                <div className="swiper-slide-inner">
                  <div className="elementskit-single-testimonial-slider" style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '60px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}>
                    <div className="row" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-commentor-content">
                          <div style={{ 
                            fontSize: '20px', 
                            marginBottom: '20px',
                            color: '#FFD700'
                          }}>★★★★★</div>
                          <p style={{
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '30px'
                          }}>
                            As the owner of Ocean Breeze Yoga, I struggled to find an affordable website service. uFREEwebsites made it so easy, and now I have a professional site that brings in new students every week. Couldn't be happier!
                          </p>
                          <span className="elementskit-border-hr" style={{
                            display: 'block',
                            height: '3px',
                            width: '60px',
                            background: '#0234DA',
                            marginBottom: '20px'
                          }}></span>
                          <span className="elementskit-profile-info">
                            <strong className="elementskit-author-name" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '20px',
                              fontWeight: 700,
                              color: '#000000',
                              display: 'block',
                              marginBottom: '5px'
                            }}>Emily Garcia</strong>
                            <span className="elementskit-author-des" style={{
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                              fontSize: '16px',
                              color: '#666'
                            }}>Ocean Breeze Yoga</span>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6" style={{ flex: '1 1 45%' }}>
                        <div className="elementskit-profile-image-card">
                          <img 
                            src="/images/oceanbreezeyoga-owner-avatar.webp" 
                            alt="Emily Garcia"
                            style={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: '12px',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Swiper Navigation Buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            
            {/* Swiper Pagination Dots */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>

      <style>{`
        /* Swiper Navigation Buttons */
        .swiper-button-prev,
        .swiper-button-next {
          width: 60px;
          height: 60px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          color: #0234DA;
          cursor: pointer;
          pointer-events: auto;
          z-index: 10;
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
          font-weight: 900;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #0234DA;
          color: #FFFFFF;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #0234DA;
          opacity: 0.3;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .row {
            flex-direction: column !important;
          }
          .col-lg-6 {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
