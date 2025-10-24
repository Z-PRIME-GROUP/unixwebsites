export const StatisticsSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)',
      padding: '100px 5%',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
        
        {/* Stat 1: Free Websites Built */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0s' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'Reaktif, sans-serif',
              fontSize: '72px',
              fontWeight: 700,
              color: '#00139B',
              display: 'block',
              lineHeight: '1'
            }}>
              10,804
            </span>
          </div>
          <h4 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: 0
          }}>
            # OF FREE WEBSITES WE'VE BUILT
          </h4>
        </div>

        {/* Stat 2: Average Agency Cost */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0.1s' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'Reaktif, sans-serif',
              fontSize: '72px',
              fontWeight: 700,
              color: '#00139B',
              display: 'block',
              lineHeight: '1'
            }}>
              $4,845
            </span>
          </div>
          <h4 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: 0
          }}>
            AVERAGE COST A WEB AGENCY CHARGES
          </h4>
        </div>

        {/* Stat 3: Amount We Charge */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0.2s' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              fontFamily: 'Reaktif, sans-serif',
              fontSize: '72px',
              fontWeight: 700,
              color: '#00139B',
              display: 'block',
              lineHeight: '1'
            }}>
              $0
            </span>
          </div>
          <h4 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: 0
          }}>
            AMOUNT WE CHARGE
          </h4>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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

export default StatisticsSection;
