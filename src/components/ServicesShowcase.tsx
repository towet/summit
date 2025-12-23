import { Smartphone, FileText, Coins, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import servicePayment from '@/assets/service-payment.png';
import serviceBilling from '@/assets/service-billing.png';
import serviceMicrotick from '@/assets/service-microtick.png';

const services = [
  {
    icon: Smartphone,
    title: 'Swift Payment Integration',
    description: 'Integrate M-Pesa payments into your platform in minutes. Our robust API handles everything from checkout to settlement.',
    features: ['Instant Setup', 'Real-time Processing', 'Secure Transactions'],
    cta: 'View API Docs',
    href: 'https://www.swiftpayfinancial.com/',
    external: true,
    gradient: 'from-primary/30 to-primary/5',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(0,166,90,0.3)]',
    image: servicePayment,
  },
  {
    icon: FileText,
    title: 'Intelligent Billing Solutions',
    description: 'Automate your billing workflows with our comprehensive system. Generate, track, and manage invoices effortlessly.',
    features: ['Automated Invoicing', 'Payment Tracking', 'Multi-currency Support'],
    cta: 'Explore Billing',
    href: '#billing',
    gradient: 'from-secondary/30 to-secondary/5',
    iconBg: 'bg-secondary/20',
    iconColor: 'text-secondary',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    image: serviceBilling,
  },
  {
    icon: Coins,
    title: 'Microtransaction Excellence',
    description: 'Process micro-payments at scale with minimal fees. Perfect for subscription services and digital content.',
    features: ['Low Transaction Fees', 'High Volume Processing', 'Instant Settlement'],
    cta: 'Learn More',
    href: '#microtick',
    gradient: 'from-summit-purple/30 to-summit-purple/5',
    iconBg: 'bg-summit-purple/20',
    iconColor: 'text-summit-purple',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    image: serviceMicrotick,
  },
];

export const ServicesShowcase = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-summit-navy-light/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="text-gradient">Scale Payments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From simple payment integration to complex billing systems, we provide 
            the tools to power your financial infrastructure.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            service.external ? (
              <a
                key={index}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative glass rounded-2xl overflow-hidden hover-lift cursor-pointer transition-all duration-500 ${service.borderGlow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Card Content */}
                <div className="h-full">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className={`absolute bottom-4 left-6 w-14 h-14 rounded-xl ${service.iconBg} backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8 pt-4">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/30 backdrop-blur-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={index}
                className={`group relative glass rounded-2xl overflow-hidden hover-lift cursor-pointer transition-all duration-500 ${service.borderGlow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 left-6 w-14 h-14 rounded-xl ${service.iconBg} backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8 pt-4">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/30 backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};
