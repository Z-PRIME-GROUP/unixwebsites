const SuccessFeatures = () => {
  const features = [
    {
      icon: "/images/feature-responsive.webp",
      title: "Fully Mobile-Optimized Design",
      description: "With over half of internet traffic coming from mobile devices, our websites ensure flawless performance on any screen size, providing a seamless experience for your visitors."
    },
    {
      icon: "/images/feature-speed.webp",
      title: "Lightning-Fast Speed",
      description: "Speed matters. Studies show that 40% of users abandon a website if it takes more than 3 seconds to load. Our websites are optimized for fast performance, ensuring your visitors stay engaged from the first click."
    },
    {
      icon: "/images/feature-customization.webp",
      title: "Custom-Built Specifically for Your Business",
      description: "Unlike generic templates, we design every website from scratch, tailored to your business needs. This ensures your site reflects your brand, stands out from competitors, and delivers a unique experience to your customers."
    },
    {
      icon: "/images/feature-security.webp",
      title: "Secure & Reliable",
      description: "We prioritize your security. Every site is built with best practices to protect your data and ensure your website runs smoothly 24/7, giving you and your customers peace of mind."
    },
    {
      icon: "/images/feature-seo.webp",
      title: "SEO-Optimized for Maximum Visibility",
      description: "What's the point of a beautiful website if no one can find it? We build with SEO in mind, helping your site rank higher on search engines like Google so potential customers can easily discover your business."
    },
    {
      icon: "/images/feature-design.webp",
      title: "Expert Support When You Need It",
      description: "We're not just here to build your website and walk away. Our team is ready to assist with any questions or updates you need, ensuring your website continues to meet your business goals."
    }
  ];

  return (
    <div className="elementor-element elementor-element-f82919f e-flex e-con-boxed e-con e-parent" data-id="f82919f" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-28efd6e e-con-full e-flex e-con e-child" data-id="28efd6e" data-element_type="container">
          <div className="elementor-element elementor-element-76aa4e4 animated-fast elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-elementskit-heading" data-id="76aa4e4" data-element_type="widget">
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
        <div className="elementor-element elementor-element-4f35598 e-con-full e-flex e-con e-child" data-id="4f35598" data-element_type="container">
          {features.map((feature, index) => (
            <div key={index} className="elementor-element e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element widget-link-underline animated-fast ekit-equal-height-disable elementor-invisible elementor-widget elementor-widget-elementskit-icon-box" data-element_type="widget">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="elementskit-infobox text-left text-left icon-top-align elementor-animation-float">
                      <div className="elementskit-box-header">
                        <div className="elementskit-info-box-icon">
                          <img
                            decoding="async"
                            width="500"
                            height="500"
                            src={feature.icon}
                            className="attachment- size-"
                            alt={feature.title}
                          />
                        </div>
                      </div>
                      <div className="box-body">
                        <h5 className="elementskit-info-box-title">{feature.title}</h5>
                        <p>{feature.description}</p>
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
  );
};

export default SuccessFeatures;
