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
            fontSize: '14px',
            fontWeight: 600,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '18px',
            opacity: 0.9
          }}>
            Join 10,000+ entrepreneurs
          </h6>

          {/* Main Heading - ALL WHITE TEXT */}
          <h2 style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '25px',
            lineHeight: '1.25'
          }}>
            Who've Transformed Their Business with a FREE Website!
          </h2>

          {/* Description - WHITE TEXT */}
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: '1.7',
            marginBottom: '35px',
            opacity: 0.95
          }}>
            Imagine having a stunning website that <span style={{ fontWeight: 700 }}>builds trust and drives sales</span>—without the hefty $5,000-$20,000 price tag that web agencies charge. A professional website can increase your chances of converting potential clients <span style={{ fontWeight: 700 }}>by 76%</span>. But here's the game-changer: with our <span style={{ fontWeight: 700 }}>Free Website Program</span>, you get all of this value at <span style={{ fontWeight: 700 }}>no cost</span>.
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

        {/* Right Column - Desktop Mockup Image with rounded background */}
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

      {/* Responsive Styles */}
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
