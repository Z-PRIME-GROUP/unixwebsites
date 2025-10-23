import { useState } from 'react';

const HeaderExact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="site-header" className="site-header header-position-default show-on-scroll">
      <div className="site-header-wrapper">
        <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
          <div data-elementor-type="wp-post" data-elementor-id="23807" className="elementor elementor-23807" data-elementor-post-type="elementskit_template">
            <div className="elementor-element elementor-element-4f16b2e5 e-con-full e-flex e-con e-parent" data-id="4f16b2e5" data-element_type="container" data-settings='{"background_background":"classic"}'>
              <div className="elementor-element elementor-element-26559631 e-flex e-con-boxed e-con e-child" data-id="26559631" data-element_type="container" data-settings='{"background_background":"classic"}'>
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-439fa31 e-con-full e-flex e-con e-child" data-id="439fa31" data-element_type="container">
                    <div className="elementor-element elementor-element-30e2744d colorLogo elementor-widget elementor-widget-kd_site_logo" data-id="30e2744d" data-element_type="widget" data-settings='{"ekit_we_effect_on":"none"}' data-widget_type="kd_site_logo.default">
                      <div className="elementor-widget-container">
                        <div className="site-logo-wrapper">
                          <a className="site-logo" href="/">
                            <span className="primary-logo">
                              <img 
                                width="1920" 
                                height="331"
                                src="/images/logo-color.webp"
                                className="attachment-full size-full wp-image-24133"
                                alt="uFREEwebsites Logo" 
                              />
                            </span>
                            <span className="secondary-logo">
                              <img 
                                width="1161" 
                                height="200"
                                src="/images/logo-white.webp"
                                className="attachment-full size-full wp-image-24148"
                                alt="uFREEwebsites Logo White" 
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6583e61b e-con-full e-flex e-con e-child" data-id="6583e61b" data-element_type="container">
                    <div className="elementor-element elementor-element-3151efa7 elementor-widget elementor-widget-ekit-nav-menu" data-id="3151efa7" data-element_type="widget" data-settings='{"ekit_we_effect_on":"none"}' data-widget_type="ekit-nav-menu.default">
                      <div className="elementor-widget-container">
                        <nav className="ekit-wid-con ekit_menu_responsive_tablet" data-hamburger-icon="" data-hamburger-icon-type="icon" data-responsive-breakpoint="1024">
                          <button 
                            className="elementskit-menu-hamburger elementskit-menu-toggler"
                            type="button" 
                            aria-label="hamburger-icon"
                            onClick={() => setMenuOpen(!menuOpen)}
                          >
                            <span className="elementskit-menu-hamburger-icon"></span>
                            <span className="elementskit-menu-hamburger-icon"></span>
                            <span className="elementskit-menu-hamburger-icon"></span>
                          </button>
                          <div 
                            id="ekit-megamenu-main-menu"
                            className={`elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-yes ekit-nav-dropdown-hover ${menuOpen ? 'elementskit-menu-open' : ''}`}
                          >
                            <ul id="menu-main-menu" className="elementskit-navbar-nav elementskit-menu-po-center submenu-click-on-">
                              <li id="menu-item-1" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px">
                                <a href="/" className="ekit-menu-nav-link">Home</a>
                              </li>
                              <li id="menu-item-2" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px">
                                <a href="#about" className="ekit-menu-nav-link">About Us</a>
                              </li>
                              <li id="menu-item-3" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px">
                                <a href="#services" className="ekit-menu-nav-link">Services</a>
                              </li>
                              <li id="menu-item-4" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px">
                                <a href="#contact" className="ekit-menu-nav-link">Contact</a>
                              </li>
                            </ul>
                            <div className="elementskit-nav-identity-panel">
                              <button 
                                className="elementskit-menu-close elementskit-menu-toggler"
                                type="button"
                                onClick={() => setMenuOpen(false)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                          <div 
                            className={`elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay ${menuOpen ? 'elementskit-menu-open' : ''}`}
                            onClick={() => setMenuOpen(false)}
                          ></div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-212430ff e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="212430ff" data-element_type="container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderExact;
