import { useEffect, useRef, useState } from "react";

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ websites: 0, avgCost: 0, ourCharge: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3500;
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = [
      { key: 'websites', target: 10804 },
      { key: 'avgCost', target: 4845 },
      { key: 'ourCharge', target: 0 }
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        websites: Math.floor(counters[0].target * progress),
        avgCost: Math.floor(counters[1].target * progress),
        ourCharge: Math.floor(counters[2].target * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          websites: counters[0].target,
          avgCost: counters[1].target,
          ourCharge: counters[2].target
        });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="elementor-element elementor-element-46f8afd e-flex e-con-boxed e-con e-parent" data-id="46f8afd" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-cf8e346 e-con-full e-flex e-con e-child" data-id="cf8e346" data-element_type="container">
          <div className="elementor-element elementor-element-f02912c e-con-full e-flex e-con e-child" data-id="f02912c" data-element_type="container">
            <div className="elementor-element elementor-element-ed318e9 animated-fast elementor-invisible elementor-widget elementor-widget-elementskit-funfact" data-id="ed318e9" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-funfact text-center">
                    <div className="elementskit-funfact-inner">
                      <div className="funfact-content">
                        <div className="number-percentage-wraper">
                          <span className="number-percentage">{counts.websites.toLocaleString()}</span>
                          <span className="super"></span>
                        </div>
                        <h4 className="funfact-title"># OF FREE WEBSITES WE'VE BUILT</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-417baba e-con-full e-flex e-con e-child" data-id="417baba" data-element_type="container">
            <div className="elementor-element elementor-element-89c5d27 animated-fast elementor-invisible elementor-widget elementor-widget-elementskit-funfact" data-id="89c5d27" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-funfact text-center">
                    <div className="elementskit-funfact-inner">
                      <div className="funfact-content">
                        <div className="number-percentage-wraper">
                          $ <span className="number-percentage">{counts.avgCost.toLocaleString()}</span>
                          <span className="super"></span>
                        </div>
                        <h4 className="funfact-title">AVERAGE COST A WEB AGENCY CHARGES</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-2316251 e-con-full e-flex e-con e-child" data-id="2316251" data-element_type="container">
            <div className="elementor-element elementor-element-d738987 animated-fast elementor-invisible elementor-widget elementor-widget-elementskit-funfact" data-id="d738987" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-funfact text-center">
                    <div className="elementskit-funfact-inner">
                      <div className="funfact-content">
                        <div className="number-percentage-wraper">
                          $ <span className="number-percentage">{counts.ourCharge}</span>
                          <span className="super"></span>
                        </div>
                        <h4 className="funfact-title">AMOUNT WE CHARGE</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
