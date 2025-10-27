export const FreeWebsitesSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1320px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'flex', 
        gap: '80px', 
        alignItems: 'center', 
        flexWrap: 'wrap' 
      }}>
        
        {/* Left Column - Text Content */}
        <div style={{ flex: '1 1 45%', minWidth: '400px' }}>
          
          {/* Small Subtitle */}
          <h6 style={{ 
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: '#666',
            marginBottom: '18px'
          }}>
            No Hidden Charges
          </h6>

          {/* Main Heading */}
          <h2 style={{
            fontFamily: 'Reaktif, sans-serif',
            fontSize: '48px',
            fontWeight: 500,
            color: '#00139B',
            marginBottom: '25px',
            lineHeight: '1.25'
          }}>
            <span style={{
              background: 'linear-gradient(100deg, #FED349 0%, #E23B08 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}>100%</span> FREE Websites
          </h2>

          {/* Description */}
          <p style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: '#666',
            lineHeight: '1.8em',
            marginBottom: '35px'
          }}>
            We provide professional websites that other agencies charge thousands for, completely free. Why? It's our way of building relationships with business owners who might need larger projects as they grow. Over 95% of clients love their websites, and around 18% go on to hire us for paid services or recommend us to others.
          </p>

          {/* CTA Button */}
          <a 
            href="https://application.ufreewebsites.com/"
            id="freeWebsitesCTA"
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
            APPLY IN 2 MINUTES
          </a>
        </div>

        {/* Right Column - Image */}
        <div style={{ flex: '1 1 45%', minWidth: '400px', position: 'relative' }}>
          <img 
            src="/images/free-websites-illustration.webp" 
            alt="100% FREE Websites"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px'
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

export default FreeWebsitesSection;
