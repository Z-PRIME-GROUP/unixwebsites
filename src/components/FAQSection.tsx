import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why do we do this for FREE?",
      answer: "It's simple: it helps us build lasting relationships with entrepreneurs who may need larger paid projects as their businesses grow. 97% of our clients are thrilled with their websites, and 10-20% return to hire us for more complex websites, app development, or ongoing services. It's a win-win for everyone."
    },
    {
      question: "How can we afford to offer FREE websites?",
      answer: "Simple. To keep your site online, you'll need web hosting. We partner with HYPERhostgate, one of the top providers, and ask you to sign up using our affiliate link, which offers a special discount. When you do, we earn a commission, covering our costs. You pay nothing extra, and HYPERhostgate even offers a Money-Back Guarantee if you change your mind. It's a win-win, ensuring you get a FREE website while we recoup some costs."
    },
    {
      question: "How do I know this is legitimate?",
      answer: "uFREEwebsites is a trusted, top-rated web development agency. We've helped thousands of entrepreneurs build their online presence, and our clients consistently give us high ratings across multiple platforms. We've been recognized by industry leaders and recommended by respected organizations. Our reputation speaks for itself—delivering professional websites for FREE with no hidden costs."
    },
    {
      question: "Can I see examples of the websites you've built?",
      answer: "Absolutely! We've built thousands of websites across various industries. You can explore examples of our work in our portfolio section. We're confident you'll be impressed by the quality and variety of designs we've created—all for FREE."
    },
    {
      question: "What happens after I get my FREE website?",
      answer: "After your website is completed, it's yours to manage and grow. You'll need to purchase hosting (we recommend HYPERhostgate via our affiliate link for a discount), but beyond that, there are no hidden fees. We also offer ongoing support and paid services if you need help with updates, SEO, or other advanced features as your business expands."
    },
    {
      question: "Do I need to know anything about web design or coding?",
      answer: "Not at all! That's the beauty of working with uFREEwebsites. Our team of experts handles everything from design to development. All you need to do is provide us with information about your business, and we'll take care of the rest. If you want to make updates later, we'll also provide simple instructions or offer support services."
    },
    {
      question: "How long does it take to build my FREE website?",
      answer: "Most websites are completed within 2-4 weeks, depending on the complexity and your responsiveness in providing information. We work efficiently to ensure you get your site as quickly as possible without sacrificing quality. Once your site is live, you can start attracting customers right away!"
    },
    {
      question: "Can I customize my website?",
      answer: "Yes! Each website is custom-built for your business, so it will be tailored to your unique needs and brand. If you need changes or updates after the initial build, we offer affordable customization services, or you can manage updates yourself if you prefer."
    }
  ];

  return (
    <div className="elementor-element elementor-element-61eb43f3 e-flex e-con-boxed e-con e-parent" data-id="61eb43f3" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-74ade23f e-con-full e-flex e-con e-child" data-id="74ade23f" data-element_type="container">
          <div className="elementor-element elementor-element-54dff4f0 e-con-full e-flex e-con e-child" data-id="54dff4f0" data-element_type="container">
            <div className="elementor-element elementor-element-55607bc5 animated-fast elementor-widget__width-initial elementor-invisible elementor-widget elementor-widget-elementskit-heading" data-id="55607bc5" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left">
                    <h6 className="elementskit-section-subtitle">Frequently Asked Questions</h6>
                    <h2 className="ekit-heading--title elementskit-section-title">
                      Got Questions? We've Got Answers.
                    </h2>
                    <div className='ekit-heading__description'>
                      <p>We understand that getting a FREE website might seem too good to be true. Below, we've answered the most common inquiries so you can make an informed decision about getting your professional website for FREE.</p>
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
                      {faqs.map((faq, index) => (
                        <div key={index} className={`elementskit-card ${openIndex === index ? 'active' : ''}`}>
                          <div className="elementskit-card-header" id={`primaryHeading-${index}`}>
                            <a
                              href={`#collapse-${index}`}
                              className={`ekit-accordion--toggler elementskit-btn-link ${openIndex === index ? '' : 'collapsed'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenIndex(openIndex === index ? -1 : index);
                              }}
                              aria-expanded={openIndex === index}
                              aria-controls={`Collapse-${index}`}
                            >
                              <span className="ekit-accordion-title">{faq.question}</span>
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
                          <div
                            id={`Collapse-${index}`}
                            className={`collapse ${openIndex === index ? 'show' : ''}`}
                            aria-labelledby={`primaryHeading-${index}`}
                            data-parent="#accordion-faq"
                          >
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>{faq.answer}</p>
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
  );
};

export default FAQSection;
