import { Code2, CloudCog, Smartphone, RefreshCcw, Server, Layers } from 'lucide-react';
import techFintechDev from '@/assets/tech-fintech-dev.png';
import techPaymentConsulting from '@/assets/tech-payment-consulting.png';
import techIntegration from '@/assets/tech-integration.png';
import techDigitalTransform from '@/assets/tech-digital-transform.png';
import techCloud from '@/assets/tech-cloud.png';
import techMobile from '@/assets/tech-mobile.png';

const services = [
  {
    icon: Code2,
    title: 'Custom Fintech Development',
    description: 'Tailored financial technology solutions built for your specific needs',
    image: techFintechDev,
  },
  {
    icon: CloudCog,
    title: 'Payment Gateway Consulting',
    description: 'Expert guidance on payment infrastructure and optimization',
    image: techPaymentConsulting,
  },
  {
    icon: Layers,
    title: 'System Integration Services',
    description: 'Seamless integration with existing business systems and workflows',
    image: techIntegration,
  },
  {
    icon: RefreshCcw,
    title: 'Digital Transformation',
    description: 'Modernize your business operations with cutting-edge technology',
    image: techDigitalTransform,
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure Setup',
    description: 'Scalable and secure cloud solutions for your applications',
    image: techCloud,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for your business',
    image: techMobile,
  },
];

export const TechServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-summit-navy-light/30 via-background to-summit-navy-light/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-secondary font-medium">Tech Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Beyond Payments:{' '}
            <span className="text-gradient">Full-Stack Tech Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technology services to help your business thrive in the digital age.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-summit-purple/30 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
