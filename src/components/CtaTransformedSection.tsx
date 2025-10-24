export const CtaTransformedSection = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(90deg, #E23B08 0%, #FED349 100%)',
      padding: '100px 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        
        {/* Left Column - Text Content */}
        <div>
          {/* Small Subtitle */}
          <h6 style={{ 
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: '#FFFFFF',
            marginBottom: '18px',
            opacity: 0.95
          }}>
            Join 10,000+ entrepreneurs
          </h6>

          {/* Main Heading with animated underline spans */}
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#FFE5A1',
            marginBottom: '25px',
            lineHeight: '1.25'
          }}>
            Who've <span style={{
              backgroundColor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #FFFFFF00 78%, #295B5112 0%)',
              borderRadius: '0',
              backgroundPosition: '200% 0',
              backgroundSize: '200%',
              backgroundRepeat: 'no-repeat',
              transition: 'background-position 0.75s cubic-bezier(.29, 1.11, .74, 1.04), all 0.3s ease',
              transitionDelay: '0.5s',
              display: 'inline-block',
              fontWeight: 700
            }}>Transformed</span> <span style={{
              backgroundColor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #FFFFFF00 78%, #295B5112 0%)',
              borderRadius: '0',
              backgroundPosition: '200% 0',
              backgroundSize: '200%',
              backgroundRepeat: 'no-repeat',
              transition: 'background-position 0.75s cubic-bezier(.29, 1.11, .74, 1.04), all 0.3s ease',
              transitionDelay: '0.5s',
              display: 'inline-block',
              fontWeight: 700
            }}>Their Business with a</span> <span style={{
              backgroundColor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #FFFFFF00 78%, #295B5112 0%)',
              borderRadius: '0',
              backgroundPosition: '200% 0',
              backgroundSize: '200%',
              backgroundRepeat: 'no-repeat',
              transition: 'background-position 0.75s cubic-bezier(.29, 1.11, .74, 1.04), all 0.3s ease',
              transitionDelay: '0.5s',
              display: 'inline-block',
              fontWeight: 700
            }}>FREE Website</span>!
          </h2>

          {/* Description */}
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: '#FFE5A1',
            lineHeight: '1.8em',
            marginBottom: '35px'
          }}>
            Imagine having a stunning website that <strong>builds trust and drives sales</strong>—without the hefty $5,000-$20,000 price tag that web agencies charge. A professional website can increase your chances of converting potential clients <strong>by 76%</strong>. But here's the game-changer: with our <strong>Free Website Program</strong>, you get all of this value at <strong>no cost</strong>.
          </p>

          {/* CTA Button - BLUE */}
          <a 
            href="https://application.ufreewebsites.com/"
            id="homepageCTA3"
            style={{
              background: '#2563eb',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 700,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 15px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 6px 25px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 4px 15px rgba(37, 99, 235, 0.3)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16l4-4-4-4M8 12h8"/>
            </svg>
            APPLY NOW – YOUR FREE WEBSITE AWAITS!
          </a>
        </div>

        {/* Right Column - Desktop Mockup Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '30px',
            padding: '40px',
            backdropFilter: 'blur(10px)'
          }}>
            <img 
              src="/images/mockup-desktop.webp" 
              alt="Website mockup on desktop computer"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaTransformedSection;
