import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Affiliate Portal", href: "https://ufreewebsites.com/affiliate-portal-2/" },
    { name: "Affiliate Login", href: "https://ufreewebsites.com/affiliate-login-2/" },
    { name: "Become an Affiliate", href: "https://ufreewebsites.com/become-an-affiliate-2/" },
  ];

  return (
    <header id="site-header" className="site-header header-position-default show-on-scroll">
      <div className="site-header-wrapper">
        <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
          <div className="elementor elementor-23807">
            <div className="elementor-element elementor-element-4f16b2e5 e-con-full e-flex e-con e-parent">
              <div className="elementor-element elementor-element-26559631 e-flex e-con-boxed e-con e-child">
                <div className="e-con-inner">
                  {/* Logo - Left Side */}
                  <div className="elementor-element elementor-element-439fa31 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-30e2744d colorLogo elementor-widget elementor-widget-kd_site_logo">
                      <div className="elementor-widget-container">
                        <div className="site-logo-wrapper">
                          <a className="site-logo" href="/">
                            <span className="primary-logo">
                              <img 
                                src="/images/logo-color.webp" 
                                alt="uFREEwebsites"
                                className="attachment-full size-full"
                              />
                            </span>
                            <span className="secondary-logo">
                              <img 
                                src="/images/logo-white.webp" 
                                alt="uFREEwebsites"
                                className="attachment-full size-full"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu - Right Side */}
                  <div className="elementor-element elementor-element-6583e61b e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-3151efa7 elementor-widget elementor-widget-ekit-nav-menu">
                      <div className="elementor-widget-container">
                        <nav className="ekit-wid-con ekit_menu_responsive_tablet">
                          {/* Mobile Menu Button */}
                          <button 
                            className="elementskit-menu-hamburger elementskit-menu-toggler"
                            type="button"
                            aria-label="hamburger-icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                          >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                          </button>
                          
                          {/* Desktop & Mobile Menu */}
                          <div className={`elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-yes ekit-nav-dropdown-hover ${isMenuOpen ? 'elementskit-menu-active' : ''}`}>
                            <ul className="elementskit-navbar-nav elementskit-menu-po-right submenu-click-on-">
                              {navItems.map((item, index) => (
                                <li 
                                  key={index}
                                  className="menu-item nav-item elementskit-mobile-builder-content"
                                >
                                  <a href={item.href} className="ekit-menu-nav-link">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <div className="elementskit-nav-identity-panel">
                              <button 
                                className="elementskit-menu-close elementskit-menu-toggler"
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <X size={24} />
                              </button>
                            </div>
                          </div>
                          <div 
                            className={`elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay ${isMenuOpen ? 'elementskit-menu-active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                          ></div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
