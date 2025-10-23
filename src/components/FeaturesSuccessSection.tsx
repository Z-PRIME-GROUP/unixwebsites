const FeaturesSuccessSection = () => {
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
      description: "We'll guide you through how to easily update and edit your website, empowering you to make changes on your own without needing to hire a web developer."
    }
  ];

  return (
    <section
      className="features-success-section"
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 20px'
      }}
    >
      {/* Pink/Peach Gradient Blob - Top Right */}
      <div style={{
        position: 'absolute',
        right: '8%',
        top: '12%',
        width: '380px',
        height: '380px',
        background: 'radial-gradient(circle, rgba(255, 192, 203, 0.35) 0%, rgba(255, 182, 193, 0.15) 40%, rgba(255, 192, 203, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Light Blue Gradient Blob - Bottom Right */}
      <div style={{
        position: 'absolute',
        right: '5%',
        bottom: '20%',
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(173, 216, 230, 0.4) 0%, rgba(176, 224, 230, 0.2) 40%, rgba(173, 216, 230, 0) 70%)',
        borderRadius: '50%',
        filter: 'blur(55px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="max-w-[1200px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        <h2
          className="text-center"
          style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: '500',
            color: '#090909',
            marginBottom: '20px',
            lineHeight: '1.2',
            letterSpacing: '0px'
          }}
        >
          A Website Built for <span style={{
            background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '500'
          }}>Success</span>
        </h2>

        <p
          className="text-center"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            color: '#666666',
            lineHeight: '1.65',
            maxWidth: '850px',
            margin: '0 auto 60px',
            paddingLeft: '15px',
            paddingRight: '15px',
            letterSpacing: '0px'
          }}
        >
          Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, and designed to grow with your business. Get a professional site that enhances your brand and attracts more customers.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ 
            gap: '30px',
            marginTop: '0'
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-all duration-300 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                backgroundColor: '#FAFBFC',
                padding: '40px 30px 35px 30px',
                borderRadius: '12px',
                boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.06)',
                textAlign: 'left',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 3px 15px rgba(0, 0, 0, 0.06)';
              }}
            >
              {/* Icon with circular blue background */}
              <div style={{
                width: '75px',
                height: '75px',
                borderRadius: '50%',
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '22px',
                flexShrink: '0'
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

              {/* Feature Title */}
              <h5 style={{
                fontFamily: 'Reaktif, sans-serif',
                fontSize: '19px',
                fontWeight: '600',
                color: '#0A0A0A',
                marginBottom: '12px',
                lineHeight: '1.35',
                letterSpacing: '0px'
              }}>
                {feature.title}
              </h5>

              {/* Feature Description */}
              <p style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '14.5px',
                fontWeight: '400',
                color: '#666666',
                lineHeight: '1.7',
                marginBottom: '0',
                letterSpacing: '0px'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSuccessSection;
