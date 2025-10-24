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

          {/* Main Heading - Double-nested spans with underline effect */}
          <h2 className="cta-transformed-heading" style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#FFE5A1',
            marginBottom: '25px',
            lineHeight: '1.25'
          }}>
            Who've <span><span>Transformed</span></span> <span><span>Their Business with a</span></span> <span><span>FREE Website</span></span>!
          </h2>

          {/* Description with SAME COLOR underlines (not black) */}
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: '#FFE5A1',
            lineHeight: '1.8em',
            marginBottom: '35px'
          }}>
            Imagine having a stunning website that <span style={{ textDecoration: 'underline', fontWeight: 700 }}>builds trust and drives sales</span>—without the hefty $5,000-$20,000 price tag that web agencies charge. A professional website can increase your chances of converting potential clients <span style={{ textDecoration: 'underline', fontWeight: 700 }}>by 76%</span>. But here's the game-changer: with our <span style={{ textDecoration: 'underline', fontWeight: 700 }}>Free Website Program</span>, you get all of this value at <span style={{ textDecoration: 'underline', fontWeight: 700 }}>no cost</span>.
          </p>

          {/* CTA Button - Exact CSS from original */}
          <a 
            href="https://application.ufreewebsites.com/"
            id="homepageCTA3"
            style={{
              backgroundColor: 'transparent',
              fontFamily: 'Reaktif, sans-serif',
              fontSize: '18px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              color: '#FFFFFF',
              fill: '#FFFFFF',
              backgroundImage: 'linear-gradient(60deg, #0234DA 0%, #00139B 68%)',
              borderStyle: 'none',
              borderRadius: '10px',
              padding: '18px 25px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 15px rgba(2, 52, 218, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 6px 25px rgba(2, 52, 218, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 4px 15px rgba(2, 52, 218, 0.3)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16l4-4-4-4M8 12h8"/>
            </svg>
            APPLY NOW – YOUR FREE WEBSITE AWAITS!
          </a>
        </div>

        {/* Right Column - Desktop Mockup */}
        <div style={{ position: 'relative' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '30px',
            padding: '40px',
            backdropFilter: 'blur(10px)'
          }}>
            <img 
              src="/images/mockup-desktop.webp" 
              alt="Website mockup"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .cta-transformed-heading span span {
          display: inline-block;
          background-color: transparent;
          background-image: linear-gradient(180deg, rgba(255,255,255,0) 78%, rgba(255,240,193,0.3) 100%);
          background-position: 0% 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding-bottom: 3px;
        }
        
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaTransformedSection;
