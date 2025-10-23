import { useEffect } from 'react';

const FeaturesSuccessSection = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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
      className="bg-white py-20 px-5"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 
          className="text-center mb-5"
          style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: 500,
            color: '#090909',
            lineHeight: '1.2'
          }}
        >
          A Website Built for Success
        </h2>

        {/* Description */}
        <p 
          className="text-center mx-auto mb-15"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            lineHeight: '1.6'
          }}
        >
          Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, and designed to grow with your business. Get a professional site that enhances your brand and attracts more customers.
        </p>

        {/* Features Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          style={{ gap: '40px' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-left transition-all duration-500 hover:translate-y-[-5px] animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[150px] h-[150px] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h5 
                className="mb-3"
                style={{
                  fontFamily: 'Reaktif, sans-serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#090909',
                  lineHeight: '1.3'
                }}
              >
                {feature.title}
              </h5>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.6'
                }}
              >
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
