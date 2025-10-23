export const FeaturesSection = () => {
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
    <div style={{
      backgroundColor: '#fff',
      padding: '80px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: '500',
            color: '#090909',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            A Website Built for Success
          </h2>
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, and designed to grow with your business. Get a professional site that enhances your brand and attracts more customers.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{
                textAlign: 'left'
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <img 
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h5 style={{
                fontFamily: 'Reaktif, sans-serif',
                fontSize: '20px',
                fontWeight: '500',
                color: '#090909',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                {feature.title}
              </h5>
              <p style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.6',
                margin: '0'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
