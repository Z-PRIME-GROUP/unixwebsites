const TestimonialsSection = () => {
  const mainTestimonial = {
    text: "I can't thank uFREEwebsites enough! I would've never imagined getting such a high-quality site for FREE.",
    author: "Sarah Jenkins",
    company: "Green Thumb Nursery",
    image: "/images/review-photo.webp"
  };

  const testimonials = [
    {
      author: "Marcus Thompson",
      company: "Blue River Landscaping",
      text: "As the owner of Blue River Landscaping, I needed a strong online presence to attract clients. uFREEwebsites delivered a stunning website that has brought in more inquiries than ever. Highly recommend!",
      image: "/images/review-photo.webp"
    },
    {
      author: "Linda Martinez",
      company: "Sunrise Bakery",
      text: "uFREEwebsites completely transformed my online presence. My bakery now has a beautiful, professional site that showcases our products perfectly. The best part? It didn't cost me a penny!",
      image: "/images/review-photo.webp"
    },
    {
      author: "Emily Garcia",
      company: "Ocean Breeze Yoga",
      text: "I was struggling to find an affordable website service. uFREEwebsites made it so easy, and now I have a professional site that brings in new students every week. Couldn't be happier!",
      image: "/images/review-photo.webp"
    }
  ];

  return (
    <div className="elementor-element elementor-element-3b603c52 e-flex e-con-boxed e-con e-parent" data-id="3b603c52" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-55a3571f e-con-full e-flex e-con e-child" data-id="55a3571f" data-element_type="container">
          <div className="elementor-element elementor-element-6941e850 e-con-full animated-fast e-flex elementor-invisible e-con e-child" data-id="6941e850" data-element_type="container">
            <div className="elementor-element elementor-element-3bc9bd8c elementor-widget__width-inherit elementor-widget elementor-widget-image" data-id="3bc9bd8c" data-element_type="widget">
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="675"
                  height="450"
                  src={mainTestimonial.image}
                  className="attachment-full size-full wp-image-25698"
                  alt={mainTestimonial.author}
                />
              </div>
            </div>
            <div className="elementor-element elementor-element-24237ffb e-con-full animated-fast elementor-hidden-mobile elementor-hidden-tablet e-flex elementor-invisible e-con e-child" data-id="24237ffb" data-element_type="container">
              <div className="elementor-element elementor-element-151b5bfe elementor-widget elementor-widget-elementskit-heading" data-id="151b5bfe" data-element_type="widget">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="ekit-heading elementskit-section-title-wraper text_left">
                      <div className='ekit-heading__description'>
                        <p>{mainTestimonial.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-31bbc700 elementor-widget elementor-widget-elementskit-heading" data-id="31bbc700" data-element_type="widget">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="ekit-heading elementskit-section-title-wraper text_left">
                      <h5 className="ekit-heading--title elementskit-section-title">{mainTestimonial.author}</h5>
                      <div className='ekit-heading__description'>
                        <p>{mainTestimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-13c05d85 e-con-full e-flex e-con e-child" data-id="13c05d85" data-element_type="container">
            <div className="elementor-element elementor-element-48a57172 animated-fast elementor-invisible elementor-widget elementor-widget-elementskit-heading" data-id="48a57172" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left">
                    <h6 className="elementskit-section-subtitle">Trusted by Thousands of Entrepreneurs</h6>
                    <h2 className="ekit-heading--title elementskit-section-title">See How We've Transformed Businesses</h2>
                    <div className='ekit-heading__description'>
                      <p>Don't just take our word for it. Hear from business owners across industries who have elevated their online presence with a FREE, professionally-built website from uFREEwebsites. These are real stories from real people just like you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element homepageTestimonials elementor-widget" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-testimonial-slider ekit_testimonial_style_5">
                    <div className="ekit-main-swiper swiper">
                      <div className="swiper-wrapper">
                        {testimonials.map((testimonial, index) => (
                          <div key={index} className="swiper-slide">
                            <div className="swiper-slide-inner">
                              <div className="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-two">
                                <div className="elementskit-commentor-header">
                                  <ul className="elementskit-stars">
                                    {[...Array(5)].map((_, i) => (
                                      <li key={i}><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></a></li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="elementskit-commentor-content">
                                  <p>{testimonial.text}</p>
                                </div>
                                <div className="elementskit-commentor-bio">
                                  <div className="elementkit-commentor-details">
                                    <div className="elementskit-commentor-image ekit-testimonial--avatar">
                                      <img loading="lazy" decoding="async" width="100" height="100" src={testimonial.image} alt={testimonial.author} />
                                    </div>
                                    <div className="elementskit-profile-info">
                                      <strong className="elementskit-author-name">{testimonial.author}</strong>
                                      <span className="elementskit-author-des">{testimonial.company}</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
