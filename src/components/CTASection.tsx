import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-summit-navy-light to-background" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-primary font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient">Payment Experience?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses accepting M-Pesa payments effortlessly. 
              Start your integration today and go live in minutes.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Integration Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-secondary" size="xl">
                Schedule a Demo
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50">
              <a href="mailto:summitedge.ca@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>summitedge.ca@gmail.com</span>
              </a>
              <a href="tel:+254101960610" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <span>+254 101 960 610</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
