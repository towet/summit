import { ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVisual from '@/assets/hero-visual.png';

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '5,000+', label: 'Businesses' },
  { value: '1M+', label: 'Transactions' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 animated-grid opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left stagger-children">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Powering the Future of{' '}
              <span className="text-gradient">Business with Technology</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Summit Edge Enterprise delivers cutting-edge payment solutions, intelligent billing systems, 
              and custom fintech development to transform how businesses operate across East Africa.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="https://www.swiftpayfinancial.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a 
                href="https://wa.me/+254101960610" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero-secondary" size="xl" className="group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Talk to Us
                </Button>
              </a>
            </div>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative lg:mt-0 mt-8">
            {/* Desktop Layout */}
            <div className="hidden lg:block relative z-10 float">
              <img 
                src={heroVisual} 
                alt="SwiftPay payment flow visualization" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              
              {/* Floating Cards - Desktop */}
              <div className="absolute -left-8 top-1/4 glass rounded-xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Secure</div>
                    <div className="text-xs text-muted-foreground">PCI DSS Compliant</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 glass rounded-xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">+127%</div>
                    <div className="text-xs text-muted-foreground">Growth Rate</div>
                  </div>
                </div>
              </div>
              
              {/* Background Glow for Image - Desktop */}
              <div className="absolute inset-0 bg-glow-gradient rounded-full scale-150 -z-10" />
            </div>
            
            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="relative z-10">
                <img 
                  src={heroVisual} 
                  alt="SwiftPay payment flow visualization" 
                  className="w-full h-auto rounded-2xl shadow-elevated"
                />
                
                {/* Background Glow for Image - Mobile */}
                <div className="absolute inset-0 bg-glow-gradient rounded-full scale-150 -z-10" />
              </div>
            </div>
          </div>
          
          {/* Mobile Floating Cards - Shown below stats on small devices */}
          <div className="flex lg:hidden gap-4 justify-center mt-8">
            <div className="glass rounded-xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Secure</div>
                  <div className="text-xs text-muted-foreground">PCI DSS Compliant</div>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">+127%</div>
                  <div className="text-xs text-muted-foreground">Growth Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
