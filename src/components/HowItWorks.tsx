import { UserPlus, Code2, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account in 30 seconds',
    color: 'primary',
  },
  {
    icon: Code2,
    title: 'Integrate',
    description: 'Add our lightweight API to your platform',
    color: 'secondary',
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Customize payment flows and notifications',
    color: 'summit-purple',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Start accepting M-Pesa payments instantly',
    color: 'primary',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-summit-navy-light/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-primary font-medium">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started with SwiftPay in four simple steps. 
            We've made payment integration as easy as possible.
          </p>
        </div>
        
        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary hidden lg:block -translate-y-1/2 z-0" />
          
          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="flex flex-col items-center text-center">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 rounded-full bg-${step.color}/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.color}/20 to-${step.color}/5 border border-${step.color}/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 z-10`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary z-20">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (visible on lg screens between steps) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground/50 z-10">
                    {/* Arrow hidden for cleaner look with line */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
