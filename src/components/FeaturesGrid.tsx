import { Shield, Zap, BarChart3, Link2, Wallet, Globe } from 'lucide-react';
import featureSecurity from '@/assets/feature-security.png';
import featureSpeed from '@/assets/feature-speed.png';
import featureAnalytics from '@/assets/feature-analytics.png';
import featureIntegration from '@/assets/feature-integration.png';
import featureRates from '@/assets/feature-rates.png';
import featureKenya from '@/assets/feature-kenya.png';

const features = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'PCI DSS compliant infrastructure with end-to-end encryption',
    image: featureSecurity,
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,166,90,0.2)]',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second transaction processing',
    image: featureSpeed,
    iconBg: 'bg-secondary/20',
    iconColor: 'text-secondary',
    glow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and reporting',
    image: featureAnalytics,
    iconBg: 'bg-summit-purple/20',
    iconColor: 'text-summit-purple',
    glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
  },
  {
    icon: Link2,
    title: 'Easy Integration',
    description: 'RESTful API with webhooks for seamless connectivity',
    image: featureIntegration,
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,166,90,0.2)]',
  },
  {
    icon: Wallet,
    title: 'Competitive Rates',
    description: 'Transparent pricing with no hidden fees',
    image: featureRates,
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    glow: 'group-hover:shadow-[0_0_40px_rgba(0,166,90,0.2)]',
  },
  {
    icon: Globe,
    title: 'Kenya-Focused',
    description: 'Optimized for the East African market',
    image: featureKenya,
    iconBg: 'bg-secondary/20',
    iconColor: 'text-secondary',
    glow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[200px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-primary font-medium">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">Enterprise Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature designed with performance, security, and 
            developer experience in mind.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {/* Large Card - Security */}
          <div className={`md:col-span-2 lg:col-span-2 group transition-all duration-500 ${features[0].glow}`}>
            <div className="relative h-full glass rounded-2xl overflow-hidden hover-lift">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={features[0].image} 
                  alt={features[0].title}
                  className="w-full h-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-50 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8">
                <div className={`w-16 h-16 rounded-xl ${features[0].iconBg} backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Shield className={`w-8 h-8 ${features[0].iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">{features[0].title}</h3>
                <p className="text-muted-foreground text-lg">{features[0].description}</p>
              </div>
            </div>
          </div>
          
          {/* Small Cards Row - Speed & Analytics */}
          {features.slice(1, 3).map((feature, index) => (
            <div key={index} className={`group transition-all duration-500 ${feature.glow}`}>
              <div className="relative h-full glass rounded-2xl overflow-hidden hover-lift">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-25 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/60" />
                </div>
                
                <div className="relative z-10 p-6">
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Medium Card - Integration */}
          <div className={`md:col-span-2 group transition-all duration-500 ${features[3].glow}`}>
            <div className="relative h-full glass rounded-2xl overflow-hidden hover-lift">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={features[3].image} 
                  alt={features[3].title}
                  className="w-full h-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-45 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
              </div>
              
              <div className="relative z-10 p-6 flex items-center gap-6">
                <div className={`w-16 h-16 rounded-xl ${features[3].iconBg} backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Link2 className={`w-8 h-8 ${features[3].iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">{features[3].title}</h3>
                  <p className="text-muted-foreground">{features[3].description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Last Row - Small Cards */}
          {features.slice(4).map((feature, index) => (
            <div key={index + 4} className={`group transition-all duration-500 ${feature.glow}`}>
              <div className="relative h-full glass rounded-2xl overflow-hidden hover-lift">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-25 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/60" />
                </div>
                
                <div className="relative z-10 p-6">
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
