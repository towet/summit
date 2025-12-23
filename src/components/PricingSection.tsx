import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for testing and development',
    price: 'Free',
    period: 'forever',
    features: [
      'Sandbox Access',
      'Full API Documentation',
      'Community Support',
      '100 Test Transactions',
    ],
    cta: 'Start Free',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: 'Enterprise',
    description: 'For businesses ready to scale',
    price: 'Custom',
    period: 'per transaction',
    features: [
      'Production API Keys',
      'Unlimited Transactions',
      'Dedicated Support',
      'Custom Integration Assistance',
      'Advanced Analytics',
      'SLA Guarantee',
    ],
    cta: 'Contact Sales',
    variant: 'hero' as const,
    popular: true,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-summit-navy-light/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-primary font-medium">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start for free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold text-foreground shadow-glow z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full glass rounded-2xl p-8 hover-lift ${plan.popular ? 'border border-primary/50 shadow-glow' : ''}`}>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button variant={plan.variant} size="lg" className="w-full group/btn">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
