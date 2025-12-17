import { Target, Users, Lightbulb, Award } from 'lucide-react';
import aboutSummit from '@/assets/about-summit.png';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Empowering African businesses with seamless payment solutions',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pioneering fintech solutions tailored for East Africa',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Building partnerships that drive mutual success',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering world-class technology with local expertise',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-summit-navy-light/20 to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={aboutSummit} 
                  alt="Summit Edge Enterprise - Reaching New Heights in Fintech"
                  className="w-full h-auto"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-secondary/20 rounded-full" />
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-5 shadow-card animate-fade-in z-20">
                <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="order-1 lg:order-2 stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">About Us</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Scaling the{' '}
              <span className="text-gradient">Summit</span>{' '}
              of Financial Innovation
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Summit Edge Enterprise, we believe every business deserves access to 
              world-class payment technology. Founded with a vision to bridge the gap 
              between global fintech innovation and African business needs, we've grown 
              into a trusted partner for thousands of enterprises.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team combines deep technical expertise with intimate knowledge of the 
              East African market. From our flagship SwiftPay API to comprehensive 
              consulting services, we deliver solutions that don't just meet expectations—
              they exceed them.
            </p>
            
            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-3 p-4 rounded-xl glass hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
