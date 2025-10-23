export const CtaTransformedSection = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(180deg, #E3EEFF 0%, #FFFFFF 100%)',
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
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '18px'
          }}>
            Join 10,000+ entrepreneurs
          </h6>

          {/* Main Heading with Gradient on specific words */}
          <h2 style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: 500,
            color: '#090909',
            marginBottom: '25px',
            lineHeight: '1.25'
          }}>
            Who've{' '}
            <span style={{
              background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Transformed</span>{' '}
            <span style={{
              background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Their Business with a</span>{' '}
            <span style={{
              background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>FREE Website</span>!
          </h2>

          {/* Description with underlined bold text */}
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: '#666',
            lineHeight: '1.7',
            marginBottom: '35px'
          }}>
            Imagine having a stunning website that <span style={{ textDecoration: 'underline', fontWeight: 700 }}>builds trust and drives sales</span>—without the hefty $5,000-$20,000 price tag that web agencies charge. A professional website can increase your chances of converting potential clients <span style={{ textDecoration: 'underline', fontWeight: 700 }}>by 76%</span>. But here's the game-changer: with our <span style={{ textDecoration: 'underline', fontWeight: 700 }}>Free Website Program</span>, you get all of this value at <span style={{ textDecoration: 'underline', fontWeight: 700 }}>no cost</span>.
          </p>

          {/* CTA Button */}
          <a 
            href="https://application.ufreewebsites.com/"
            style={{
              background: 'linear-gradient(60deg, #FED349 0%, #E23B08 68%)',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '18px',
              fontWeight: 900,
              fontFamily: 'Reaktif, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16l4-4-4-4M8 12h8"/>
            </svg>
            Apply Now – Your FREE Website Awaits!
          </a>
        </div>

        {/* Right Column - Desktop Mockup Image */}
        <div>
          <img 
            src="/images/mockup-desktop.webp" 
            alt="Website mockup on desktop computer"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
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
