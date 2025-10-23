import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export const HeroSection = () => {
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fancyTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Fancy text animation - matches ElementsKit animation exactly
    const initFancyText = () => {
      const animationSettings = {
        animationStyle: 'animated',
        animationDelay: 2000,
        lettersDelay: 50,
        duration: 500
      };

      const container = fancyTextRef.current;
      if (!container) return;

      const words = container.querySelectorAll('b');
      if (words.length === 0) return;

      let currentWordIndex = 0;

      const animateWord = () => {
        // Hide all words
        words.forEach(word => {
          word.classList.remove('is-visible');
          word.classList.add('is-hidden');
        });

        // Show current word
        const currentWord = words[currentWordIndex];
        currentWord.classList.remove('is-hidden');
        currentWord.classList.add('is-visible');

        // Move to next word
        currentWordIndex = (currentWordIndex + 1) % words.length;
      };

      // Start animation
      animateWord();
      const interval = setInterval(animateWord, animationSettings.animationDelay);

      return () => clearInterval(interval);
    };

    // Init Vanilla Tilt - matches your exact settings from data attributes
    const initTilt = () => {
      tiltRefs.current.forEach((el) => {
        if (el && !(el as any).vanillaTilt) {
          VanillaTilt.init(el, {
            scale: 1.2,
            max: 20,
            perspective: 600,
            glare: true,
            'max-glare': 0.6,
            transition: true,
            easing: 'cubic-bezier(.03, .98, .52, .99)'
          });
        }
      });
    };

    const cleanup = initFancyText();
    setTimeout(initTilt, 100);

    return () => {
      cleanup?.();
      tiltRefs.current.forEach((el) => {
        if (el && (el as any).vanillaTilt) {
          (el as any).vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="elementor-element elementor-element-89bde1c e-con-full e-flex e-con e-parent" 
         data-id="89bde1c" 
         data-element_type="container"
         style={{
           background: 'linear-gradient(180deg, #EDF4FF 0%, #FFFFFF 100%)',
           minHeight: '100vh',
           display: 'flex',
           alignItems: 'center',
           paddingTop: '100px',
           paddingBottom: '100px'
         }}>
      <div className="elementor-element elementor-element-8bb6f3c e-con-full hero-section e-flex e-con e-child" 
           data-id="8bb6f3c"
           style={{
             maxWidth: '1200px',
             margin: '0 auto',
             width: '100%',
             display: 'flex',
             flexDirection: 'row',
             gap: '60px',
             padding: '0 20px'
           }}>
        
        {/* Left Column - Text Content */}
        <div className="elementor-element elementor-element-b1c56d6 e-con-full e-flex e-con e-child"
             style={{
               flex: '1 1 50%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               gap: '0px'
             }}>
          
          {/* Animated Heading with FREE */}
          <div className="elementor-element elementor-element-8efe2d6 elementor-widget elementor-widget-elementskit-fancy-animated-text"
               style={{ marginBottom: '40px' }}>
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <h1 className="ekit-fancy-text letters scale" 
                    data-id="8efe2d6"
                    style={{
                      fontSize: '60px',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      margin: '0',
                      color: '#000'
                    }}>
                  <span className="ekit-fancy-prefix-text">Get Your</span>
                  <span className="ekit-fancy-text-lists" ref={fancyTextRef}>
                    <b className="ekit-fancy-text elementor-repeater-item-a0eec85 is-visible">
                      <i>F</i><i>R</i><i>E</i><i>E</i>
                    </b>
                    <b className="ekit-fancy-text elementor-repeater-item-b9b00af">
                      <i>F</i><i>R</i><i>E</i><i>E</i>
                    </b>
                    <b className="ekit-fancy-text elementor-repeater-item-7c0a76c">
                      <i>F</i><i>R</i><i>E</i><i>E</i>
                    </b>
                  </span>
                  <span className="ekit-fancy-suffix-text">Website</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <div className="elementor-element elementor-element-6e1326a elementor-widget elementor-widget-elementskit-heading"
               style={{ marginBottom: '45px' }}>
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <div className="ekit-heading elementskit-section-title-wraper text_left">
                  <h1 className="ekit-heading--title elementskit-section-title"
                      style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        margin: '0 0 20px 0',
                        color: '#000'
                      }}>
                    and Supercharge Your Business Growth!
                  </h1>
                  <div className="ekit-heading__description">
                    <p style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#666',
                      margin: '0'
                    }}>
                      Apply now – it only takes 2 minutes, and watch your business thrive with a{' '}
                      <span style={{textDecoration: 'underline'}}><strong>FREE</strong></span>, custom-built website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="elementor-element elementor-element-31914af e-con-full e-flex e-con e-child"
               style={{ marginBottom: '40px' }}>
            <div className="elementor-element elementor-element-4407a0b e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-7a98993 elementor-align-left elementor-widget__width-auto e-transform elementor-widget elementor-widget-elementskit-button">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="ekit-btn-wraper">
                      <a href="https://application.ufreewebsites.com/"
                         className="elementskit-btn whitespace--normal"
                         id="homepageCTA1"
                         style={{
                           background: 'linear-gradient(90deg, #FF8C42 0%, #FF6B35 100%)',
                           color: '#fff',
                           padding: '18px 35px',
                           borderRadius: '50px',
                           fontSize: '16px',
                           fontWeight: '700',
                           display: 'inline-flex',
                           alignItems: 'center',
                           gap: '10px',
                           textDecoration: 'none',
                           transition: 'transform 0.3s ease',
                           boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
                         }}>
                        <i className="far fa-arrow-alt-circle-right"></i>APPLY IN 2 MINUTES
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List with Checkmarks */}
          <div className="elementor-element elementor-element-48ff8ae e-con-full e-flex e-con e-child"
               style={{ marginBottom: '45px' }}>
            <div className="elementor-element elementor-element-f9506ec keydesign-h6 elementor-widget elementor-widget-elementskit-stylish-list">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <ul className="ekit-stylish-list list-inline"
                      style={{
                        display: 'flex',
                        gap: '30px',
                        listStyle: 'none',
                        padding: '0',
                        margin: '0',
                        flexWrap: 'wrap'
                      }}>
                    <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b4e5723">
                      <div className="ekit-stylish-list-content" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <div className="ekit-stylish-list-content-icon">
                          <i aria-hidden="true" className="icon icon-check" style={{fontSize: '20px', color: '#22C55E'}}></i>
                        </div>
                        <div className="ekit-stylish-list-content-text">
                          <span className="ekit-stylish-list-content-title" style={{fontSize: '16px', fontWeight: '600', color: '#000'}}>
                            100% FREE Website
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-9176c3a">
                      <div className="ekit-stylish-list-content" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <div className="ekit-stylish-list-content-icon">
                          <i aria-hidden="true" className="icon icon-check" style={{fontSize: '20px', color: '#22C55E'}}></i>
                        </div>
                        <div className="ekit-stylish-list-content-text">
                          <span className="ekit-stylish-list-content-title" style={{fontSize: '16px', fontWeight: '600', color: '#000'}}>
                            Award-Winning Support
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-aa8aca8">
                      <div className="ekit-stylish-list-content" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <div className="ekit-stylish-list-content-icon">
                          <i aria-hidden="true" className="icon icon-check" style={{fontSize: '20px', color: '#22C55E'}}></i>
                        </div>
                        <div className="ekit-stylish-list-content-text">
                          <span className="ekit-stylish-list-content-title" style={{fontSize: '16px', fontWeight: '600', color: '#000'}}>
                            Risk-Free
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="elementor-element elementor-element-2d6455c e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-1435b23 elementor-widget__width-initial elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <img src="/images/verified-badge.webp" 
                     alt="Verified Company Badge"
                     style={{maxWidth: '250px', height: 'auto'}} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Gallery Grid */}
        <div className="elementor-element elementor-element-eca17a6 e-con-full e-flex e-con e-child"
             style={{
               flex: '1 1 50%',
               display: 'flex',
               alignItems: 'center'
             }}>
          <div className="elementor-element elementor-element-79c58aa elementor-widget elementor-widget-elementskit-gallery">
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <div className="ekit_gallery_grid_wraper">
                  <div id="ekit_gallery_79c58aa" 
                       className="ekit_gallery_grid"
                       style={{
                         display: 'grid',
                         gridTemplateColumns: 'repeat(3, 1fr)',
                         gap: '15px'
                       }}>
                    {[
                      '/images/demo1.webp',
                      '/images/demo2.webp',
                      '/images/demo3.webp',
                      '/images/demo4.webp',
                      '/images/demo5.webp',
                      '/images/demo6.webp',
                      '/images/demo1.webp',
                      '/images/demo2.webp',
                      '/images/demo3.webp'
                    ].map((src, index) => (
                      <div key={index} className="ekit_gallery_grid_item">
                        <div className="elementskit-single-portfolio-item ekit-gallery-portfolio-tilt"
                             ref={(el) => (tiltRefs.current[index] = el)}
                             data-tilt-scale="1.2"
                             data-tilt-maxtilt="20"
                             data-tilt-perspective="600"
                             data-tilt-maxglare="0.6"
                             style={{
                               borderRadius: '10px',
                               overflow: 'hidden',
                               boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                               transformStyle: 'preserve-3d'
                             }}>
                          <div className="elementskit-portfolio-thumb">
                            <img src={src}
                                 alt={`gallery grid image ${index + 1}`}
                                 className="elementskit-grid__img"
                                 style={{
                                   width: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   aspectRatio: '800/914'
                                 }} />
                          </div>
                        </div>
                      </div>
                    ))}
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
