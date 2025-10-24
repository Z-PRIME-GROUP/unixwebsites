import { useEffect, useState } from 'react';
import HeaderExact from "@/components/HeaderExact";
import HeroSectionExact from "@/components/HeroSectionExact";
import FeaturesSuccessSection from "@/components/FeaturesSuccessSection";
import CtaTransformedSection from "@/components/CtaTransformedSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { 
  HeroSkeleton, 
  FeaturesSkeleton, 
  CTASkeleton, 
  StatisticsSkeleton, 
  TestimonialsSkeleton 
} from "@/components/LoadingSkeleton";

const IndexExact = () => {
  const [loadedSections, setLoadedSections] = useState({
    hero: false,
    features: false,
    cta: false,
    statistics: false,
    testimonials: false,
  });

  useEffect(() => {
    // Enable animations after page loads
    document.body.classList.add('page-loaded');

    // Progressively load sections with staggered timing
    const timers = [
      setTimeout(() => setLoadedSections(prev => ({ ...prev, hero: true })), 100),
      setTimeout(() => setLoadedSections(prev => ({ ...prev, features: true })), 300),
      setTimeout(() => setLoadedSections(prev => ({ ...prev, cta: true })), 500),
      setTimeout(() => setLoadedSections(prev => ({ ...prev, statistics: true })), 700),
      setTimeout(() => setLoadedSections(prev => ({ ...prev, testimonials: true })), 900),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '100vw', 
      overflowX: 'hidden',
      position: 'relative'
    }}>
      <div className="home wp-singular page-template-default page page-id-24752 wp-custom-logo wp-theme-landpress underline-link-effect flip-button-effect keydesign-elementor-library elementor-default elementor-kit-24751 elementor-page elementor-page-24752 elementor-page-24772">
        <div id="page" className="site">
          <HeaderExact />
          <div id="content" className="site-content">
            <div id="primary" className="content-area" data-attr="single-page">
              <main id="main" className="site-main" role="main">
                <article id="post-24752" className="post-24752 page type-page status-publish hentry">
                  <div className="entry-content">
                    <div data-elementor-type="wp-page" data-elementor-id="24752" className="elementor elementor-24752" data-elementor-post-type="page">
                      <div className={loadedSections.hero ? 'animate-fade-in' : ''}>
                        {loadedSections.hero ? <HeroSectionExact /> : <HeroSkeleton />}
                      </div>
                      
                      <div className={loadedSections.features ? 'animate-fade-in' : ''}>
                        {loadedSections.features ? <FeaturesSuccessSection /> : <FeaturesSkeleton />}
                      </div>
                      
                      <div className={loadedSections.cta ? 'animate-fade-in' : ''}>
                        {loadedSections.cta ? <CtaTransformedSection /> : <CTASkeleton />}
                      </div>
                      
                      <div className={loadedSections.statistics ? 'animate-fade-in' : ''}>
                        {loadedSections.statistics ? <StatisticsSection /> : <StatisticsSkeleton />}
                      </div>
                      
                      <div className={loadedSections.testimonials ? 'animate-fade-in' : ''}>
                        {loadedSections.testimonials ? <TestimonialsSection /> : <TestimonialsSkeleton />}
                      </div>
                      
                      {/* More sections will be added here as we convert them */}
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexExact;
