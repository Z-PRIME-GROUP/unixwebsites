import HeaderExact from "@/components/HeaderExact";
import HeroSectionExact from "@/components/HeroSectionExact";
import FeaturesSuccessSection from "@/components/FeaturesSuccessSection";

const IndexExact = () => {
  return (
    <div className="home wp-singular page-template-default page page-id-24752 wp-custom-logo wp-theme-landpress underline-link-effect flip-button-effect keydesign-elementor-library elementor-default elementor-kit-24751 elementor-page elementor-page-24752 elementor-page-24772">
      <div id="page" className="site">
        <HeaderExact />
        <div id="content" className="site-content">
          <div id="primary" className="content-area" data-attr="single-page">
            <main id="main" className="site-main" role="main">
              <article id="post-24752" className="post-24752 page type-page status-publish hentry">
                <div className="entry-content">
                  <div data-elementor-type="wp-page" data-elementor-id="24752" className="elementor elementor-24752" data-elementor-post-type="page">
                    <HeroSectionExact />
                    <FeaturesSuccessSection />
                    
                    {/* More sections will be added here as we convert them */}
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

export default IndexExact;
