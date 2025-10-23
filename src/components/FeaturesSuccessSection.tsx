export const FeaturesSuccessSection = () => {
  const features = [
    {
      icon: '/images/ufw-responsive-design.webp',
      title: 'Fully Mobile-Optimized Design',
      description: 'With over half of internet traffic coming from mobile devices, our websites ensure flawless performance on any screen size, providing a seamless experience for your visitors.'
    },
    {
      icon: '/images/ufw-website.webp',
      title: 'Stunning, Cutting-Edge Designs',
      description: 'Our websites feature the latest in cutting-edge design, crafted by top-tier graphic designers to create a visually striking and modern online presence for your brand.'
    },
    {
      icon: '/images/ufw-seo.webp',
      title: 'SEO-Friendly Setup for High Rankings',
      description: 'We structure your website with SEO best practices in mind, giving it a strong foundation for future optimization to help improve visibility on search engines like Google.'
    },
    {
      icon: '/images/ufw-speed.webp',
      title: 'Optimized for Maximum Speed',
      description: 'We ensure your website loads quickly, reducing wait times for visitors and providing a seamless browsing experience that keeps them engaged.'
    },
    {
      icon: '/images/ufw-cybersecurity.webp',
      title: 'Advanced Cutting-Edge Security Features',
      description: 'Our websites come equipped with top-tier security measures, including automated daily backups and protection against potential threats, keeping your data safe and secure at all times.'
    },
    {
      icon: '/images/ufw-magic-wand.webp',
      title: 'Effortless Website Customization',
      description: 'We\'ll guide you through how to easily update and edit your website, empowering you to make changes on your own without needing to hire a web developer.'
    }
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 20px',
      minHeight: '900px'
    }}>
      {/* Pink/Peach Gradient Blob - Top Right */}
      <div style={{
        position: 'absolute',
        right: '3%',
        top: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,192,203,0.6) 0%, rgba(255,182,193,0.3) 35%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Light Blue Gradient Blob - Bottom Right */}
      <div style={{
        position: 'absolute',
        right: '5%',
        bottom: '10%',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(173,216,230,0.65) 0%, rgba(176,224,230,0.35) 35%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(75px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Main Heading */}
        <h2 style={{
          fontFamily: 'Reaktif, sans-serif',
          fontSize: '48px',
          fontWeight: 500,
          color: '#090909',
          marginBottom: '20px',
          lineHeight: '1.2',
          textAlign: 'center'
        }}>
          A Website Built for <span style={{
            background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 500
          }}>Success</span>
        </h2>

        {/* Description */}
        <p style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          color: '#666666',
          lineHeight: '1.6',
          maxWidth: '850px',
          margin: '0 auto 60px',
          textAlign: 'center'
        }}>
          Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, and designed to grow with your business. Get a professional site that enhances your brand and attracts more customers.
        </p>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FAFBFC',
                padding: '40px 30px',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0px 8px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Icon Container */}
              <div style={{
                width: '75px',
                height: '75px',
                borderRadius: '50%',
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                    width: '42px',
                    height: '42px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Title */}
              <h5 style={{
                fontFamily: 'Reaktif, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                color: '#0A0A0A',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}>
                {feature.title}
              </h5>

              {/* Description */}
              <p style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 400,
                color: '#666666',
                lineHeight: '1.7',
                marginBottom: '0'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSuccessSection;
