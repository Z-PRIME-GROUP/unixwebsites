import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const HeroSectionExact = () => {
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fancyTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // ElementsKit Fancy Text Animation - exact replica
    const initFancyText = () => {
      const container = fancyTextRef.current;
      if (!container) return;

      const words = container.querySelectorAll('b.ekit-fancy-text');
      if (words.length === 0) return;

      let currentIndex = 0;
      
      // Initialize - show first word
      words[0].classList.add('is-visible');

      const animate = () => {
        // Hide all
        words.forEach(word => word.classList.remove('is-visible'));
        
        // Show current
        words[currentIndex].classList.add('is-visible');
        
        // Next word
        currentIndex = (currentIndex + 1) % words.length;
      };

      const interval = setInterval(animate, 2000);
      return () => clearInterval(interval);
    };

    // Vanilla Tilt - exact settings from data attributes
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
    <div className="elementor-element elementor-element-89bde1c e-con-full e-flex e-con e-parent" data-id="89bde1c" data-element_type="container" data-settings='{"background_background":"gradient"}'>
      <div className="elementor-element elementor-element-8bb6f3c e-con-full hero-section e-flex e-con e-child" data-id="8bb6f3c" data-element_type="container">
        <div className="elementor-element elementor-element-b1c56d6 e-con-full e-flex e-con e-child" data-id="b1c56d6" data-element_type="container">
          <div className="elementor-element elementor-element-8efe2d6 elementor-widget elementor-widget-elementskit-fancy-animated-text" data-id="8efe2d6" data-element_type="widget" data-settings='{"ekit_we_effect_on":"none"}' data-widget_type="elementskit-fancy-animated-text.default">
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <h1 className="ekit-fancy-text letters scale" data-id="8efe2d6" data-animation-settings='{"animationStyle":"animated","animationDelay":2000,"loadingBar":3800,"lettersDelay":50,"typeLettersDelay":150,"duration":500,"revealDuration":600,"revealAnimationDelay":1500}'>
                  <span className="ekit-fancy-prefix-text">Get Your</span>
                  <span className="ekit-fancy-text-lists" ref={fancyTextRef}>
                    <b className="ekit-fancy-text elementor-repeater-item-a0eec85 is-visible"><i>F</i><i>R</i><i>E</i><i>E</i></b>
                    <b className="ekit-fancy-text elementor-repeater-item-b9b00af "><i>F</i><i>R</i><i>E</i><i>E</i></b>
                    <b className="ekit-fancy-text elementor-repeater-item-7c0a76c "><i>F</i><i>R</i><i>E</i><i>E</i></b>
                  </span>
                  <span className="ekit-fancy-suffix-text">Website</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-6e1326a elementor-widget elementor-widget-elementskit-heading" data-id="6e1326a" data-element_type="widget" data-settings='{"ekit_we_effect_on":"css"}' data-widget_type="elementskit-heading.default">
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-text_center   ekit_heading_mobile-">
                  <h1 className="ekit-heading--title elementskit-section-title ">
                    and Supercharge Your Business Growth!</h1>
                  <div className='ekit-heading__description'>
                    <p>Apply now – it only takes 2 minutes, and watch your business thrive with a <span style={{textDecoration: 'underline'}}><strong>FREE</strong></span>, custom-built website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-31914af e-con-full e-flex e-con e-child" data-id="31914af" data-element_type="container">
          <div className="elementor-element elementor-element-4407a0b e-con-full e-flex e-con e-child" data-id="4407a0b" data-element_type="container">
            <div className="elementor-element elementor-element-7a98993 elementor-align-left elementor-widget__width-auto e-transform elementor-widget elementor-widget-elementskit-button" data-id="7a98993" data-element_type="widget" data-settings='{"_transform_scale_effect_hover":{"unit":"px","size":1.05,"sizes":[]},"ekit_we_effect_on":"none","_transform_scale_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_hover_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="elementskit-button.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-btn-wraper">
                    <a href="https://application.ufreewebsites.com/" className="elementskit-btn  whitespace--normal" id="homepageCTA1">
                      <i className="far fa-arrow-alt-circle-right"></i>APPLY IN 2 MINUTES
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-48ff8ae e-con-full e-flex e-con e-child" data-id="48ff8ae" data-element_type="container">
          <div className="elementor-element elementor-element-f9506ec keydesign-h6 elementor-hidden-mobile elementor-widget elementor-widget-elementskit-stylish-list" data-id="f9506ec" data-element_type="widget" data-settings='{"ekit_we_effect_on":"none"}' data-widget_type="elementskit-stylish-list.default">
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <ul className="ekit-stylish-list list-inline" data-ekit-animation="pulse">
                  <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b4e5723 animated-" data-ekit-delay="0">
                    <div className="ekit-stylish-list-content">
                      <div className="ekit-stylish-list-content-icon">
                        <i aria-hidden="true" className="icon icon-check"></i>
                      </div>
                      <div className="ekit-stylish-list-content-text">
                        <span className="ekit-stylish-list-content-title">100% FREE Website</span>
                      </div>
                    </div>
                  </li>
                  <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-9176c3a animated-" data-ekit-delay="0">
                    <div className="ekit-stylish-list-content">
                      <div className="ekit-stylish-list-content-icon">
                        <i aria-hidden="true" className="icon icon-check"></i>
                      </div>
                      <div className="ekit-stylish-list-content-text">
                        <span className="ekit-stylish-list-content-title">Award-Winning Support</span>
                      </div>
                    </div>
                  </li>
                  <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-aa8aca8 animated-" data-ekit-delay="0">
                    <div className="ekit-stylish-list-content">
                      <div className="ekit-stylish-list-content-icon">
                        <i aria-hidden="true" className="icon icon-check"></i>
                      </div>
                      <div className="ekit-stylish-list-content-text">
                        <span className="ekit-stylish-list-content-title">Risk-Free</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2d6455c e-con-full e-flex e-con e-child" data-id="2d6455c" data-element_type="container">
          <div className="elementor-element elementor-element-1435b23 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="1435b23" data-element_type="widget" data-settings='{"ekit_we_effect_on":"none"}' data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img 
                fetchPriority="high"
                decoding="async"
                width="820" 
                height="300"
                src="/images/verified-badge.webp"
                className="attachment-full size-full wp-image-25102" 
                alt="" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Grid Section */}
      <div className="elementor-element elementor-element-eca17a6 e-con-full e-flex e-con e-child" data-id="eca17a6" data-element_type="container" data-settings='{"background_background":"classic"}'>
        <div className="elementor-element elementor-element-79c58aa elementor-widget-mobile__width-inherit elementor-widget-tablet__width-inherit elementor-widget elementor-widget-elementskit-gallery" data-id="79c58aa" data-element_type="widget" data-settings='{"ekit_gallery_columns_tablet":"3","ekit_gallery_columns_mobile":"3","ekit_gallery_columns":"3","ekit_we_effect_on":"none"}' data-widget_type="elementskit-gallery.default">
          <div className="elementor-widget-container">
            <div className="ekit-wid-con">
              <div className="ekit_gallery_grid_wraper">
                <div id="ekit_gallery_79c58aa" className="ekit_gallery_grid" data-tilt-config='{"disableAxis":"both","easing":"cubic-bezier(.03, .98, .52, .99)","glare":true,"transition":true}' data-masonry-config='{"itemSelector":".ekit_gallery_grid_item"}'>
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
                    <div key={index} className="ekit_gallery_grid_item ekit_gallery__filter-one ">
                      <div 
                        className="elementskit-single-portfolio-item  ekit-gallery-portfolio-tilt "
                        ref={(el) => (tiltRefs.current[index] = el)}
                        data-tilt-scale="1.2"
                        data-tilt-maxtilt="20"
                        data-tilt-perspective="600"
                        data-tilt-maxglare="0.6"
                      >
                        <div className="elementskit-portfolio-thumb">
                          <img 
                            width="800" 
                            height="914" 
                            decoding="async"
                            className="elementskit-grid__img"
                            src={src}
                            alt="gallery grid image" 
                          />
                        </div>
                        <div className="elementskit-hover-area">
                          <div className="elementskit-hover-content ekit_vertical_alignment_center"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2e19d04 elementor-absolute elementor-widget elementor-widget-image" data-id="2e19d04" data-element_type="widget" data-settings='{"_position":"absolute","ekit_we_effect_on":"none"}' data-widget_type="image.default">
          <div className="elementor-widget-container">
            <img 
              decoding="async"
              width="1600" 
              height="1600"
              src="/images/unixwebsites-favicon-color.webp"
              className="attachment-full size-full wp-image-24137" 
              alt="" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionExact;
