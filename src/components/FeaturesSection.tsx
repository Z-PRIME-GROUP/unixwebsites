import { Zap, Shield, Award, Rocket, Code, HeadphonesIcon } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Fast, secure, and fully customizable websites built for performance."
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Enterprise-grade security to keep your business and customers protected."
    },
    {
      icon: Award,
      title: "SEO Optimized",
      description: "Built-in SEO features to help your business rank higher on search engines."
    },
    {
      icon: Rocket,
      title: "Mobile Friendly",
      description: "Fully responsive design that looks perfect on all devices."
    },
    {
      icon: Code,
      title: "Custom Design",
      description: "Tailored to your business needs with unlimited customization options."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Award-winning support team ready to help you succeed."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              A Website Built for Success
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast, secure, and fully customizable. Our websites are mobile-friendly, SEO-optimized, 
              and designed to grow with your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
