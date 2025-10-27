// No imports needed

export const TestimonialsSection = () => {

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

      {/* Testimonials Grid */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '40px'
      }}>
        {/* Testimonial 1 - Lori Matthews */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '60px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
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
              <span style={{
                display: 'block',
                height: '3px',
                width: '60px',
                background: '#0234DA',
                marginBottom: '20px'
              }}></span>
              <div>
                <strong style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000000',
                  display: 'block',
                  marginBottom: '5px'
                }}>Lori Matthews</strong>
                <span style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  color: '#666'
                }}>Willow Tree Cafe</span>
              </div>
            </div>
            <div style={{ flex: '1 1 200px' }}>
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

        {/* Testimonial 2 - James Walker */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '60px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
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
              <span style={{
                display: 'block',
                height: '3px',
                width: '60px',
                background: '#0234DA',
                marginBottom: '20px'
              }}></span>
              <div>
                <strong style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000000',
                  display: 'block',
                  marginBottom: '5px'
                }}>James Walker</strong>
                <span style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  color: '#666'
                }}>Apex Automotive</span>
              </div>
            </div>
            <div style={{ flex: '1 1 200px' }}>
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

        {/* Testimonial 3 - Jessica Powell */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '60px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
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
              <span style={{
                display: 'block',
                height: '3px',
                width: '60px',
                background: '#0234DA',
                marginBottom: '20px'
              }}></span>
              <div>
                <strong style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000000',
                  display: 'block',
                  marginBottom: '5px'
                }}>Jessica Powell</strong>
                <span style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  color: '#666'
                }}>Furry Friends Groomers</span>
              </div>
            </div>
            <div style={{ flex: '1 1 200px' }}>
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

        {/* Testimonial 4 - Emily Garcia */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '60px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
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
              <span style={{
                display: 'block',
                height: '3px',
                width: '60px',
                background: '#0234DA',
                marginBottom: '20px'
              }}></span>
              <div>
                <strong style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000000',
                  display: 'block',
                  marginBottom: '5px'
                }}>Emily Garcia</strong>
                <span style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  color: '#666'
                }}>Ocean Breeze Yoga</span>
              </div>
            </div>
            <div style={{ flex: '1 1 200px' }}>
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
    </section>
  );
};

export default TestimonialsSection;
