import Header from "@/components/Header";
import { useEffect } from "react";

const Index = () => {
  console.log('Index component rendering');
  
  useEffect(() => {
    // Initialize FREE text letter-by-letter animation
    const initFancyTextAnimation = () => {
      const fancyTextContainer = document.querySelector('.ekit-fancy-text-lists');
      if (!fancyTextContainer) return;
      
      const words = fancyTextContainer.querySelectorAll('b');
      if (words.length === 0) return;
      
      let currentIndex = 0;
      words[currentIndex].classList.add('is-visible');
      words[currentIndex].classList.remove('is-hidden');
      
      const animateWords = () => {
        const currentWord = words[currentIndex];
        const nextIndex = (currentIndex + 1) % words.length;
        const nextWord = words[nextIndex];
        
        // Hide current word with letter-by-letter out animation
        currentWord.classList.add('is-hidden');
        currentWord.classList.remove('is-visible');
        
        // Show next word with letter-by-letter in animation after a delay
        setTimeout(() => {
          currentWord.style.opacity = '0';
          nextWord.classList.add('is-visible');
          nextWord.classList.remove('is-hidden');
          nextWord.style.opacity = '1';
          currentIndex = nextIndex;
        }, 600); // Match animation duration
      };
      
      // Start animation loop (2000ms delay matches data-animation-settings)
      setInterval(animateWords, 2000);
    };

    // Load tilt.js from CDN if not already loaded
    const loadTiltJS = () => {
      if ((window as any).jQuery && (window as any).jQuery.fn.tilt) {
        console.log('Tilt.js already loaded');
        initTilt();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js';
      script.onload = () => {
        console.log('Tilt.js loaded successfully');
        initTilt();
      };
      script.onerror = () => console.error('Failed to load tilt.js');
      document.body.appendChild(script);
    };

    const initTilt = () => {
      const $ = (window as any).jQuery;
      if (!$ || !$.fn.tilt) {
        console.error('jQuery or tilt not available');
        return;
      }

      // Initialize tilt on gallery items matching your reference implementation
      const $tiltItems = $('.ekit-gallery-portfolio-tilt');
      console.log('Initializing tilt on', $tiltItems.length, 'items');
      
      $tiltItems.each(function(this: HTMLElement) {
        $(this).tilt({
          maxTilt: 20,
          perspective: 600,
          scale: 1.2,
          speed: 400,
          glare: true,
          maxGlare: 0.6,
          easing: 'cubic-bezier(.03, .98, .52, .99)',
          transition: true,
        });
      });
    };

    // Initialize animations
    setTimeout(initFancyTextAnimation, 100);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadTiltJS, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup tilt instances
      const $ = (window as any).jQuery;
      if ($ && $.fn.tilt) {
        $('.ekit-gallery-portfolio-tilt').each(function(this: HTMLElement) {
          if ($(this).data('tilt')) {
            $(this).tilt('destroy');
          }
        });
      }
    };
  }, []);
  
  return (
    <div className="home wp-singular page-template-default page page-id-24752 wp-custom-logo wp-theme-landpress underline-link-effect flip-button-effect keydesign-elementor-library elementor-default elementor-kit-24751 elementor-page elementor-page-24752 elementor-page-24772">
      <div id="page" className="site">
        <Header />
        
        <div id="content" className="site-content">
          <div id="primary" className="content-area" data-attr="single-page">
            <main id="main" className="site-main" role="main">
              <article id="post-24752" className="post-24752 page type-page status-publish hentry">
                <div className="entry-content">
                  <div data-elementor-type="wp-page" data-elementor-id="24752" className="elementor elementor-24752" data-elementor-post-type="page">
                    
                    {/* Hero Section with Gallery */}
                    <div className="elementor-element elementor-element-89bde1c e-con-full e-flex e-con e-parent" data-id="89bde1c" data-element_type="container" data-settings='{"background_background":"gradient"}' style={{minHeight: '100vh', height: '100vh', marginTop: '-70px', paddingTop: '70px', paddingBottom: '0px', display: 'flex', alignItems: 'center'}}>
                      <div className="elementor-element elementor-element-8bb6f3c e-con-full hero-section e-flex e-con e-child" data-id="8bb6f3c" data-element_type="container">
                        
                        {/* Left Column - Text Content */}
                        <div className="elementor-element elementor-element-b1c56d6 e-con-full e-flex e-con e-child" data-id="b1c56d6" data-element_type="container">
                          
          {/* Animated Heading */}
          <div className="elementor-element elementor-element-8efe2d6 elementor-widget elementor-widget-elementskit-fancy-animated-text" data-id="8efe2d6" data-element_type="widget">
            <div className="elementor-widget-container">
              <div className="ekit-wid-con">
                <h1 className="ekit-fancy-text letters scale" data-id="8efe2d6" data-animation-settings='{"animationStyle":"animated","animationDelay":2000,"loadingBar":3800,"lettersDelay":50,"typeLettersDelay":150,"duration":500,"revealDuration":600,"revealAnimationDelay":1500}'>
                  <span className="ekit-fancy-prefix-text">Get Your</span>
                  <span className="ekit-fancy-text-lists" style={{maxWidth: '85px'}}>
                    <b className="ekit-fancy-text elementor-repeater-item-a0eec85 is-hidden">
                      <i className="out">F</i><i className="out">R</i><i className="in">E</i><i className="in">E</i>
                    </b>
                    <b className="ekit-fancy-text elementor-repeater-item-b9b00af is-visible">
                      <i className="in">F</i><i className="in">R</i><i>E</i><i>E</i>
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
                          <div className="elementor-element elementor-element-6e1326a elementor-widget elementor-widget-elementskit-heading" data-id="6e1326a" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet-text_center ekit_heading_mobile-">
                                  <h1 className="ekit-heading--title elementskit-section-title">
                                    and Supercharge Your Business Growth!
                                  </h1>
                                  <div className='ekit-heading__description'>
                                    <p>Apply now – it only takes 2 minutes, and watch your business thrive with a <span style={{textDecoration: 'underline'}}><strong>FREE</strong></span>, custom-built website.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="elementor-element elementor-element-31914af e-con-full e-flex e-con e-child" data-id="31914af" data-element_type="container">
                          <div className="elementor-element elementor-element-4407a0b e-con-full e-flex e-con e-child" data-id="4407a0b" data-element_type="container">
                            <div className="elementor-element elementor-element-7a98993 elementor-align-left elementor-widget__width-auto e-transform elementor-widget elementor-widget-elementskit-button" data-id="7a98993" data-element_type="widget">
                              <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                  <div className="ekit-btn-wraper">
                                    <a href="https://application.ufreewebsites.com/" className="elementskit-btn whitespace--normal" id="homepageCTA1">
                                      <i className="far fa-arrow-alt-circle-right"></i>APPLY IN 2 MINUTES
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Feature List */}
                        <div className="elementor-element elementor-element-48ff8ae e-con-full e-flex e-con e-child" data-id="48ff8ae" data-element_type="container">
                          <div className="elementor-element elementor-element-f9506ec keydesign-h6 elementor-hidden-mobile elementor-widget elementor-widget-elementskit-stylish-list" data-id="f9506ec" data-element_type="widget">
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

                        {/* Verified Badge */}
                        <div className="elementor-element elementor-element-2d6455c e-con-full e-flex e-con e-child" data-id="2d6455c" data-element_type="container">
                          <div className="elementor-element elementor-element-1435b23 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="1435b23" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <img fetchPriority="high" decoding="async" width="820" height="300" src="/images/verified-badge.webp" className="attachment-full size-full wp-image-25102" alt="Verified Company Badge" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Gallery Grid (9 images in 3x3 grid) */}
                      <div className="elementor-element elementor-element-eca17a6 e-con-full e-flex e-con e-child" data-id="eca17a6" data-element_type="container">
                        <div className="elementor-element elementor-element-79c58aa elementor-widget-mobile__width-inherit elementor-widget-tablet__width-inherit elementor-widget elementor-widget-elementskit-gallery" data-id="79c58aa" data-element_type="widget">
                          <div className="elementor-widget-container">
                            <div className="ekit-wid-con">
                              <div className="ekit_gallery_grid_wraper">
                                <div id="ekit_gallery_79c58aa" className="ekit_gallery_grid">
                                  {[1, 2, 3, 4, 5, 6, 1, 2, 3].map((num, idx) => (
                                    <div key={idx} className="ekit_gallery_grid_item ekit_gallery__filter-one">
                                      <div className="elementskit-single-portfolio-item ekit-gallery-portfolio-tilt" data-tilt-scale="1.2" data-tilt-maxtilt="20" data-tilt-perspective="600" data-tilt-maxglare="0.6">
                                        <div className="elementskit-portfolio-thumb">
                                          <img width="800" height="914" decoding="async" className="elementskit-grid__img" src={`/images/demo${num}.webp`} alt={`Demo Website ${idx + 1}`} />
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
                        {/* Faded Background Logo */}
                        <div className="elementor-element elementor-element-2e19d04 elementor-absolute elementor-widget elementor-widget-image" data-id="2e19d04" data-element_type="widget" data-settings='{"_position":"absolute"}' style={{ position: 'absolute', left: '-1298px', top: '166px', zIndex: 0 }}>
                          <div className="elementor-widget-container">
                            <img decoding="async" width="1600" height="1600" src="/images/favicon-icon.webp" className="attachment-full size-full wp-image-24137" alt="" style={{ opacity: 0.1 }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Section - "A Website Built for Success" */}
                    <div className="elementor-element elementor-element-f82919f e-flex e-con-boxed e-con e-parent" data-id="f82919f" data-element_type="container" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E3EEFF 100%)', paddingTop: '100px', paddingBottom: '100px' }}>
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-28efd6e e-con-full e-flex e-con e-child" data-id="28efd6e" data-element_type="container">
                          <div className="elementor-element elementor-element-76aa4e4 animated-fast elementor-widget__width-initial elementor-widget elementor-widget-elementskit-heading" data-id="76aa4e4" data-element_type="widget" style={{ visibility: 'visible' }}>
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div className="ekit-heading elementskit-section-title-wraper text_center">
                                  <h2 className="ekit-heading--title elementskit-section-title text_fill">
                                    A Website Built for <span><span>Success</span></span>
                                  </h2>
                                  <div className='ekit-heading__description'>
                                    <p>Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, and designed to grow with your business. Get a professional site that enhances your brand and attracts more customers.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="elementor-element elementor-element-4f35598 e-con-full e-flex e-con e-child" data-id="4f35598" data-element_type="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '50px' }}>
                          {[
                            {
                              id: "022207d",
                              icon: "/images/feature-responsive.webp",
                              title: "Fully Mobile-Optimized Design",
                              desc: "With over half of internet traffic coming from mobile devices, our websites ensure flawless performance on any screen size, providing a seamless experience for your visitors."
                            },
                            {
                              id: "72cacfe",
                              icon: "/images/feature-design.webp",
                              title: "Stunning, Cutting-Edge Designs",
                              desc: "Our websites feature the latest in cutting-edge design, crafted by top-tier graphic designers to create a visually striking and modern online presence for your brand."
                            },
                            {
                              id: "e6b6de9",
                              icon: "/images/feature-seo.webp",
                              title: "SEO-Friendly Setup for High Rankings",
                              desc: "We structure your website with SEO best practices in mind, giving it a strong foundation for future optimization to help improve visibility on search engines like Google."
                            },
                            {
                              id: "d92a8af",
                              icon: "/images/feature-speed.webp",
                              title: "Ultra-Fast Website Loading Speed",
                              desc: "In today's fast-paced digital world, speed matters. A slow website can cost you customers and hurt your search rankings—we make sure yours loads fast."
                            },
                            {
                              id: "0342397",
                              icon: "/images/feature-security.webp",
                              title: "Advanced Cutting-Edge Security Features",
                              desc: "Our websites come equipped with top-tier security measures, including automated daily backups and protection against potential threats, keeping your data safe and secure at all times."
                            },
                            {
                              id: "1a2b869",
                              icon: "/images/feature-customization.webp",
                              title: "Effortless Website Customization",
                              desc: "We'll guide you through how to easily update and edit your website, empowering you to make changes on your own without needing to hire a web developer."
                            }
                          ].map((feature, idx) => (
                            <div key={idx} className="elementor-element e-con-full e-flex e-con e-child" data-element_type="container">
                              <div className={`elementor-element elementor-element-${feature.id} widget-link-underline animated-fast ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box`} data-id={feature.id} data-element_type="widget" style={{ visibility: 'visible' }}>
                                <div className="elementor-widget-container">
                                  <div className="ekit-wid-con">
                                    <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-float">
                                      <div className="elementskit-box-header">
                                        <div className="elementskit-info-box-icon">
                                          <img loading="lazy" decoding="async" width="500" height="500" src={feature.icon} className="attachment- size-" alt={feature.title} />
                                        </div>
                                      </div>
                                      <div className="box-body">
                                        <h5 className="elementskit-info-box-title">{feature.title}</h5>
                                        <p>{feature.desc}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Section - "Who've Transformed Their Business" */}
                    <div 
                      className="elementor-element elementor-element-7e4c759d e-flex e-con-boxed e-con e-parent" 
                      data-id="7e4c759d" 
                      data-element_type="container"
                      style={{
                        backgroundImage: 'linear-gradient(228deg, #FED349 0%, #E23B08 100%)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-f01a0aa e-con-full e-flex e-con e-child" data-id="f01a0aa" data-element_type="container">
                          <div className="elementor-element elementor-element-e8ade00 animated-fast transformedBusinessSection elementor-widget elementor-widget-elementskit-heading" data-id="e8ade00" data-element_type="widget" style={{ visibility: 'visible' }}>
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet-text_center ekit_heading_mobile-">
                                  <h6 className="elementskit-section-subtitle">Join 10,000+ entrepreneurs</h6>
                                  <h2 className="ekit-heading--title elementskit-section-title">
                                    Who've <span><span>Transformed</span></span> <span><span>Their Business with a</span></span> <span><span>FREE Website</span></span>!
                                  </h2>
                                  <div className='ekit-heading__description'>
                                    <p>Imagine having a stunning website that <span style={{textDecoration: 'underline'}}><strong>builds trust and drives sales</strong></span>—without the hefty $5,000-$20,000 price tag that web agencies charge. A professional website can increase your chances of converting potential clients <span style={{textDecoration: 'underline'}}><strong>by 76%</strong></span>. But here's the game-changer: with our <span style={{textDecoration: 'underline'}}><strong>Free Website Program</strong></span>, you get all of this value at <span style={{textDecoration: 'underline'}}><strong>no cost</strong></span>.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-6ec24f2 elementor-align-left elementor-widget__width-auto e-transform elementor-align--tabletcenter elementor-widget elementor-widget-elementskit-button" data-id="6ec24f2" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div className="ekit-btn-wraper">
                                  <a href="https://application.ufreewebsites.com/" className="elementskit-btn whitespace--normal" id="homepageCTA3">
                                    <i className="far fa-arrow-alt-circle-right"></i>APPLY IN 2 MINUTES
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-70d9a1d e-con-full e-flex e-con e-child" data-id="70d9a1d" data-element_type="container">
                          <div className="elementor-element elementor-element-cefb86a elementor-widget elementor-widget-image" data-id="cefb86a" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="1024" height="1024" src="/images/bill.webp" className="attachment-large size-large wp-image-25105" alt="Business Growth Chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="elementor-element elementor-element-46f8afd e-flex e-con-boxed e-con e-parent" data-id="46f8afd" data-element_type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-cf8e346 e-con-full e-flex e-con e-child" data-id="cf8e346" data-element_type="container">
                          <div className="elementor-element elementor-element-f02912c e-con-full e-flex e-con e-child" data-id="f02912c" data-element_type="container">
                            <div className="elementor-element elementor-element-ed318e9 animated-fast elementor-widget elementor-widget-elementskit-funfact" data-id="ed318e9" data-element_type="widget" style={{ visibility: 'visible' }}>
                              <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                  <div className="elementskit-funfact text-center">
                                    <div className="elementskit-funfact-inner">
                                      <div className="funfact-content">
                                        <div className="number-percentage-wraper">
                                          <span className="number-percentage">10,804</span>
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
                            <div className="elementor-element elementor-element-89c5d27 animated-fast elementor-widget elementor-widget-elementskit-funfact" data-id="89c5d27" data-element_type="widget" style={{ visibility: 'visible' }}>
                              <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                  <div className="elementskit-funfact text-center">
                                    <div className="elementskit-funfact-inner">
                                      <div className="funfact-content">
                                        <div className="number-percentage-wraper">
                                          $ <span className="number-percentage">4,845</span>
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
                            <div className="elementor-element elementor-element-d738987 animated-fast elementor-widget elementor-widget-elementskit-funfact" data-id="d738987" data-element_type="widget" style={{ visibility: 'visible' }}>
                              <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                  <div className="elementskit-funfact text-center">
                                    <div className="elementskit-funfact-inner">
                                      <div className="funfact-content">
                                        <div className="number-percentage-wraper">
                                          $ <span className="number-percentage">0</span>
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

                    {/* Testimonials Section */}
                    <div className="elementor-element elementor-element-1f63ae7e e-flex e-con-boxed e-con e-parent" data-id="1f63ae7e" data-element_type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-23e05c41 e-con-full e-flex e-con e-child" data-id="23e05c41" data-element_type="container">
                          <div className="elementor-element elementor-element-5bea9c73 animated-fast elementor-widget__width-initial elementor-widget elementor-widget-elementskit-heading" data-id="5bea9c73" data-element_type="widget" style={{ visibility: 'visible' }}>
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div className="ekit-heading elementskit-section-title-wraper text_center">
                                  <h2 className="ekit-heading--title elementskit-section-title text_fill">
                                    Real Stories from <span><span>Real Business Owners</span></span>
                                  </h2>
                                  <div className='ekit-heading__description'>
                                    <p>Don't just take our word for it—hear from entrepreneurs who've transformed their businesses with uFREEwebsites. Our clients have seen incredible results, from increased traffic to higher conversions, all thanks to their custom-built websites.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-d1de3f8 e-con-full e-flex e-con e-child" data-id="d1de3f8" data-element_type="container">
                          <div className="elementor-element elementor-element-6f4e9d9 elementor-widget elementor-widget-image" data-id="6f4e9d9" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="600" height="400" src="/images/review-photo.webp" className="attachment-full size-full wp-image-24997" alt="Happy Customer Review" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Don't Just Watch Section */}
                    <div className="elementor-element elementor-element-63db892c e-flex e-con-boxed e-con e-parent" data-id="63db892c" data-element_type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-15c6e7e0 e-con-full e-flex e-con e-child" data-id="15c6e7e0" data-element_type="container">
                          <div className="elementor-element elementor-element-79e4ff70 e-con-full e-flex e-con e-child" data-id="79e4ff70" data-element_type="container">
                            <div className="elementor-element elementor-element-3a9494c3 animated-fast elementor-widget elementor-widget-elementskit-heading" data-id="3a9494c3" data-element_type="widget" style={{ visibility: 'visible' }}>
                              <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                  <div className="ekit-heading elementskit-section-title-wraper text_left">
                                    <h2 className="ekit-heading--title elementskit-section-title">
                                      Don't Just Watch Others <span><span>Succeed</span></span> —Start Building <span><span>YOUR</span></span> Online Presence for FREE Today!
                                    </h2>
                                    <div className='ekit-heading__description'>
                                      <p>Thousands of entrepreneurs have already transformed their businesses with uFREEwebsites. Now it's your turn. Take control of your online presence and give your business the platform it deserves.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-element elementor-element-5c1bdf3c e-con-full e-flex e-con e-child" data-id="5c1bdf3c" data-element_type="container">
                              <div className="elementor-element elementor-element-3d75a4b1 e-transform elementor-widget__width-auto animated-fast elementor-widget elementor-widget-elementskit-button" data-id="3d75a4b1" data-element_type="widget" style={{ visibility: 'visible' }}>
                                <div className="elementor-widget-container">
                                  <div className="ekit-wid-con">
                                    <div className="ekit-element-align-wrapper">
                                      <a href="https://apply.ufreewebsites.com/" id="homepageCTA4" className="elementskit-btn whitespace--normal elementor-animation-float">GET YOUR FREE WEBSITE NOW</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-27b4fea9 e-con-full e-flex e-con e-child" data-id="27b4fea9" data-element_type="container">
                            <div className="elementor-element elementor-element-2f71c17e animated-fast elementor-widget elementor-widget-image" data-id="2f71c17e" data-element_type="widget" style={{ visibility: 'visible' }}>
                              <div className="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="1920" height="1080" src="/images/monitor-mockup.webp" className="attachment-full size-full wp-image-24807" alt="Website Mockup on Monitor" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2af1c6bc e-con-full e-flex e-con e-child" data-id="2af1c6bc" data-element_type="container">
                          <div className="elementor-element elementor-element-5cc6f9dc animated-fast elementor-widget__width-initial elementor-widget elementor-widget-elementskit-heading" data-id="5cc6f9dc" data-element_type="widget" style={{ visibility: 'visible' }}>
                            <div className="elementor-widget-container">
                              <div className="ekit-wid-con">
                                <div className="ekit-heading elementskit-section-title-wraper text_center">
                                  <h2 className="ekit-heading--title elementskit-section-title text_fill">
                                    Get a <span><span>100% FREE</span></span> Website from Experts
                                  </h2>
                                  <div className='ekit-heading__description'>
                                    <p>Why pay thousands when you can get a professional, custom-built website absolutely FREE? No templates. No shortcuts. Just a site designed specifically for your business—mobile-friendly, secure, and optimized to help you grow.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="elementor-element elementor-element-13ea8e3d e-flex e-con-boxed e-con e-parent" data-id="13ea8e3d" data-element_type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-2d83f2b5 e-con-full e-flex e-con e-child" data-id="2d83f2b5" data-element_type="container">
                          <div className="elementor-element elementor-element-6d2d4e0f e-con-full e-flex e-con e-child" data-id="6d2d4e0f" data-element_type="container">
                            <div className="elementor-element elementor-element-27a61f4 animated-fast elementor-widget__width-initial elementor-widget elementor-widget-elementskit-heading" data-id="27a61f4" data-element_type="widget" style={{ visibility: 'visible' }}>
                              <div className="elementor-widget-container">
                                <div className="ekit-wid-con">
                                  <div className="ekit-heading elementskit-section-title-wraper text_center">
                                    <h2 className="ekit-heading--title elementskit-section-title text_fill">
                                      Frequently Asked <span><span>Questions</span></span>
                                    </h2>
                                    <div className='ekit-heading__description'>
                                      <p>We understand you may have questions about how our FREE website program works. Below, we've answered the most common inquiries so you can make an informed decision about getting your professional website for FREE.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-2a1d93a9 e-con-full e-flex e-con e-child" data-id="2a1d93a9" data-element_type="container">
                            <div className="elementor-element elementor-element-4bdaaf20 e-con-full e-flex e-con e-child" data-id="4bdaaf20" data-element_type="container">
                              <div className="elementor-element elementor-element-611f755a animated-fast elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-elementskit-accordion" data-id="611f755a" data-element_type="widget">
                                <div className="elementor-widget-container">
                                  <div className="ekit-wid-con">
                                    <div className="elementskit-accordion accoedion-primary" id="accordion-faq">
                                      {[
                                        {
                                          q: "Why do we do this for FREE?",
                                          a: "It's simple: it helps us build lasting relationships with entrepreneurs who may need larger paid projects as their businesses grow. 97% of our clients are thrilled with their websites, and 10-20% return to hire us for more complex websites, app development, or ongoing services. It's a win-win for everyone."
                                        },
                                        {
                                          q: "How can we afford to offer FREE websites?",
                                          a: "Simple. To keep your site online, you'll need web hosting. We partner with HYPERhostgate, one of the top providers, and ask you to sign up using our affiliate link, which offers a special discount. When you do, we earn a commission, covering our costs. You pay nothing extra, and HYPERhostgate even offers a Money-Back Guarantee if you change your mind."
                                        },
                                        {
                                          q: "How do I know this is legitimate?",
                                          a: "uFREEwebsites is a trusted, top-rated web development agency. We've helped thousands of entrepreneurs build their online presence, and our clients consistently give us high ratings across multiple platforms. We've been recognized by industry leaders and recommended by respected organizations."
                                        }
                                      ].map((faq, idx) => (
                                        <div key={idx} className={`elementskit-card ${idx === 0 ? 'active' : ''}`}>
                                          <div className="elementskit-card-header" id={`primaryHeading-${idx}-611f755a`}>
                                            <a href={`#collapse-${idx}`} className="ekit-accordion--toggler elementskit-btn-link collapsed" data-ekit-toggle="collapse" data-target={`#Collapse-${idx}`} aria-expanded={idx === 0 ? "true" : "false"}>
                                              <span className="ekit-accordion-title">{faq.q}</span>
                                              <div className="ekit_accordion_icon_group">
                                                <div className="ekit_accordion_normal_icon">
                                                  <i className="icon icon-chevron-down"></i>
                                                </div>
                                                <div className="ekit_accordion_active_icon">
                                                  <i className="icon icon-chevron-up"></i>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <div id={`Collapse-${idx}`} className={`${idx === 0 ? 'show' : ''} collapse`} aria-labelledby={`primaryHeading-${idx}-611f755a`} data-parent="#accordion-faq">
                                            <div className="elementskit-card-body ekit-accordion--content">
                                              <p>{faq.a}</p>
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
                    </div>

                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
