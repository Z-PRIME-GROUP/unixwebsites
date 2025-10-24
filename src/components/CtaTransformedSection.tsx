export const CtaTransformedSection = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(90deg, #E23B08 0%, #FED349 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
        
        {/* Left Column - Text Content */}
        <div style={{ flex: '1 1 45%', minWidth: '400px' }}>
          
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

          {/* Main Heading - WHITE spans with VISIBLE gradient underline */}
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#FFE5A1',
            marginBottom: '25px',
            lineHeight: '1.25'
          }}>
            Who've <span><span style={{
              color: '#FFFFFF',
              backgroundColor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 78%, rgba(255,255,255,0.2) 78%)',
              backgroundPosition: '0% 100%',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              fontWeight: 700,
              paddingBottom: '3px'
            }}>Transformed</span></span> <span><span style={{
              color: '#FFFFFF',
              backgroundColor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 78%, rgba(255,255,255,0.2) 78%)',
              backgroundPosition: '0% 100%',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              fontWeight: 700,
              paddingBottom: '3px'
            }}>Their Business with a</span></span> <span><span style={{
              color: '#FFFFFF',
              backgroundColor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0) 78%, rgba(255,255,255,0.2) 78%)',
              backgroundPosition: '0% 100%',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              fontWeight: 700,
              paddingBottom: '3px'
            }}>FREE Website</span></span>!
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

        {/* Right Column - Plain Image (NO wrapper) */}
        <div style={{ flex: '1 1 45%', minWidth: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/images/mockup-desktop.webp" 
            alt="Website mockup on desktop computer"
            width="675"
            height="450"
            style={{
              width: '100%',
              maxWidth: '675px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '60px'
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          section > div {
            flex-direction: column !important;
            gap: 50px !important;
          }
          section > div > div {
            flex: 1 1 100% !important;
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaTransformedSection;
