import { useEffect, useRef, useState } from 'react';

export const StatisticsSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(setCount1, 10804, 700);
          animateCounter(setCount2, 4845, 700);
          animateCounter(setCount3, 0, 700);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (setter: (val: number) => void, endValue: number, duration: number) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * endValue);
      setter(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return (
    <section ref={sectionRef} style={{
      background: 'linear-gradient(228deg, #0234DA 0%, #00139B 100%)',
      padding: '50px 5%',
      textAlign: 'center'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px',
        alignItems: 'center'
      }}>
        
        {/* Stat 1: Free Websites Built */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0s' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'block',
              lineHeight: '1'
            }}>
              {count1.toLocaleString()}
            </span>
          </div>
          <h4 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: '1.44',
            margin: 0
          }}>
            # OF FREE WEBSITES WE'VE BUILT
          </h4>
        </div>

        {/* Stat 2: Average Agency Cost */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0.1s' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'block',
              lineHeight: '1'
            }}>
              ${count2.toLocaleString()}
            </span>
          </div>
          <h4 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: '1.44',
            margin: 0
          }}>
            AVERAGE COST A WEB AGENCY CHARGES
          </h4>
        </div>

        {/* Stat 3: Amount We Charge */}
        <div style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: '0.2s' }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              color: '#FFFFFF',
              display: 'block',
              lineHeight: '1'
            }}>
              ${count3}
            </span>
          </div>
          <h4 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: '1.44',
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
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StatisticsSection;
