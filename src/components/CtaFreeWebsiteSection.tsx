export const CtaFreeWebsiteSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)',
      padding: '80px 5%',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Main Heading with Animated FREE */}
        <h1 style={{
          fontFamily: 'Reaktif, sans-serif',
          fontSize: '56px',
          fontWeight: 500,
          color: '#090909',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Get Your{' '}
          <span style={{
            background: 'linear-gradient(100deg, #FED349 40%, #E23B08 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600
          }}>FREE</span>{' '}
          Website
        </h1>

        {/* Subheading */}
        <h1 style={{
          fontFamily: 'Reaktif, sans-serif',
          fontSize: '56px',
          fontWeight: 500,
          color: '#090909',
          marginBottom: '25px',
          lineHeight: '1.2'
        }}>
          and Supercharge Your Business Growth!
        </h1>

        {/* Description */}
        <p style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          color: '#666',
          lineHeight: '1.7',
          marginBottom: '40px',
          maxWidth: '750px',
          margin: '0 auto 40px'
        }}>
          Apply now – it only takes 2 minutes, and watch your business thrive with a <span style={{ textDecoration: 'underline', fontWeight: 700 }}>FREE</span>, custom-built website.
        </p>

        {/* CTA Button */}
        <a 
          href="https://application.ufreewebsites.com/"
          style={{
            background: 'linear-gradient(60deg, #FED349 0%, #E23B08 68%)',
            color: '#fff',
            padding: '15px 35px',
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
          APPLY IN 2 MINUTES
        </a>
      </div>
    </section>
  );
};

export default CtaFreeWebsiteSection;
