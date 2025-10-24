export const FeaturesSuccessSection = () => {
  const features = [
    { icon: '/images/ufw-responsive-design.webp', title: 'Fully Mobile-Optimized Design', description: 'With over half of internet traffic coming from mobile devices, our websites ensure flawless performance on any screen size, providing a seamless experience for your visitors.' },
    { icon: '/images/ufw-website.webp', title: 'Stunning, Cutting-Edge Designs', description: 'Our websites feature the latest in cutting-edge design, crafted by top-tier graphic designers to create a visually striking and modern online presence for your brand.' },
    { icon: '/images/ufw-seo.webp', title: 'SEO-Friendly Setup for High Rankings', description: 'We structure your website with SEO best practices in mind, giving it a strong foundation for future optimization to help improve visibility on search engines like Google.' },
    { icon: '/images/ufw-speed.webp', title: 'Optimized for Maximum Speed', description: 'We ensure your website loads quickly, reducing wait times for visitors and providing a seamless browsing experience that keeps them engaged.' },
    { icon: '/images/ufw-cybersecurity.webp', title: 'Advanced Cutting-Edge Security Features', description: 'Our websites come equipped with top-tier security measures, including automated daily backups and protection against potential threats, keeping your data safe and secure at all times.' },
    { icon: '/images/ufw-magic-wand.webp', title: 'Effortless Website Customization', description: 'We\'ll guide you through how to easily update and edit your website, empowering you to make changes on your own without needing to hire a web developer.' }
  ];

  return (
    <section style={{ 
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      position: 'relative',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)', 
      overflow: 'hidden', 
      padding: '100px 5%' 
    }}>
      <div style={{ position: 'absolute', right: '-200px', top: '50%', transform: 'translateY(-50%)', width: '1400px', height: '1400px', backgroundImage: 'url("/images/unixwebsites-favicon-color.webp")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', opacity: 0.08, pointerEvents: 'none', zIndex: 0, maskImage: 'url("/images/shape-mask-10.svg")', WebkitMaskImage: 'url("/images/shape-mask-10.svg")', maskPosition: 'center center', WebkitMaskPosition: 'center center', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskSize: 'contain', WebkitMaskSize: 'contain' }} />
      <div style={{ position: 'absolute', right: '2%', top: '8%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,192,203,0.7) 0%, rgba(255,182,193,0.35) 30%, transparent 65%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', right: '4%', bottom: '12%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(173,216,230,0.75) 0%, rgba(176,224,230,0.4) 30%, transparent 65%)', borderRadius: '50%', filter: 'blur(85px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'Reaktif, sans-serif', fontSize: '48px', fontWeight: 500, color: '#090909', marginBottom: '18px', lineHeight: '1.2', textAlign: 'center' }}>
          A Website Built for <span style={{ background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 500 }}>Success</span>
        </h2>
        <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', fontWeight: 400, color: '#666', lineHeight: '1.65', maxWidth: '830px', margin: '0 auto 70px', textAlign: 'center', padding: '0 15px' }}>
          Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, and designed to grow with your business. Get a professional site that enhances your brand and attracts more customers.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ backgroundColor: '#FAFBFC', padding: '38px 28px 32px', borderRadius: '12px', boxShadow: '0px 5px 25px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', opacity: 0, animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0px 12px 40px rgba(0,0,0,0.12)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0px 5px 25px rgba(0,0,0,0.08)'; }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '16px', backgroundColor: 'rgba(59,130,246,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <img src={feature.icon} alt={feature.title} style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
              </div>
              <h5 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '20px', fontWeight: 600, color: '#0A0A0A', marginBottom: '13px', lineHeight: '1.35' }}>{feature.title}</h5>
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '16px', fontWeight: 400, color: '#666', lineHeight: '1.8em', marginBottom: '0' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Content - Bottom of Features Section */}
        <div style={{ marginTop: '80px', textAlign: 'center', maxWidth: '1100px', margin: '80px auto 0', paddingBottom: '10px' }}>
          
          {/* Main Heading - ONE LINE */}
          <h1 style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: 500,
            color: '#00139B',
            marginBottom: '35px',
            lineHeight: '1.2'
          }}>
            Get a Feature-Rich, Professional Website for{' '}
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(100deg, #FED349 0%, #E23B08 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}>FREE</span>
          </h1>

          {/* CTA Button */}
          <a 
            href="https://application.ufreewebsites.com/"
            id="homepageCTA2"
            style={{
              background: 'linear-gradient(60deg, #FED349 0%, #E23B08 68%)',
              color: '#FFFFFF',
              padding: '16px 38px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 900,
              fontFamily: 'Reaktif, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 15px rgba(254, 211, 73, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 6px 25px rgba(254, 211, 73, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 4px 15px rgba(254, 211, 73, 0.3)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <circle cx="12" cy="12" r="10" opacity="0.3"/>
              <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            APPLY NOW – IT ONLY TAKES 2 MINUTES
          </a>
        </div>
      </div>
      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(25px); } to { opacity: 1; transform: translateY(0); }}`}</style>
    </section>
  );
};

export default FeaturesSuccessSection;
