import { Check, ArrowRight, Zap, Bell, BookOpen, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Zap,
    title: 'Quick Integration',
    description: '5 lines of code to get started',
  },
  {
    icon: Bell,
    title: 'Real-time Callbacks',
    description: 'Instant payment notifications',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Docs',
    description: 'Crystal clear documentation',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: "We're here when you need us",
  },
];

const codeSnippet = `// Initialize SwiftPay
const swiftpay = new SwiftPay({
  apiKey: process.env.SWIFTPAY_KEY
});

// Process M-Pesa payment
await swiftpay.collect({
  phone: "254712345678",
  amount: 1000,
  reference: "INV-001"
});`;

export const SwiftPaySpotlight = () => {
  return (
    <section id="swiftpay" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="stagger-children">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">SwiftPay API</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Integrate Payments in{' '}
              <span className="text-gradient">Minutes, Not Months</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Our developer-first API makes M-Pesa integration effortless. 
              Focus on building your product while we handle the complexity of payments.
            </p>
            
            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="group">
              Get API Keys Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right - Interactive Demo Panel */}
          <div className="relative">
            {/* Main Code Panel */}
            <div className="gradient-border rounded-2xl overflow-hidden">
              <div className="bg-summit-navy-light p-1">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">swiftpay-integration.js</span>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                  <pre className="text-muted-foreground">
                    <span className="code-gray">{'// Initialize SwiftPay'}</span>{'\n'}
                    <span className="code-purple">const</span>{' '}
                    <span className="code-blue">swiftpay</span>{' '}
                    <span className="text-foreground">=</span>{' '}
                    <span className="code-purple">new</span>{' '}
                    <span className="code-green">SwiftPay</span>
                    <span className="text-foreground">{'({'}</span>{'\n'}
                    {'  '}<span className="code-blue">apiKey</span>
                    <span className="text-foreground">:</span>{' '}
                    <span className="code-yellow">process.env.SWIFTPAY_KEY</span>{'\n'}
                    <span className="text-foreground">{'});'}</span>{'\n\n'}
                    <span className="code-gray">{'// Process M-Pesa payment'}</span>{'\n'}
                    <span className="code-purple">await</span>{' '}
                    <span className="code-blue">swiftpay</span>
                    <span className="text-foreground">.</span>
                    <span className="code-green">collect</span>
                    <span className="text-foreground">{'({'}</span>{'\n'}
                    {'  '}<span className="code-blue">phone</span>
                    <span className="text-foreground">:</span>{' '}
                    <span className="code-yellow">"254712345678"</span>
                    <span className="text-foreground">,</span>{'\n'}
                    {'  '}<span className="code-blue">amount</span>
                    <span className="text-foreground">:</span>{' '}
                    <span className="code-purple">1000</span>
                    <span className="text-foreground">,</span>{'\n'}
                    {'  '}<span className="code-blue">reference</span>
                    <span className="text-foreground">:</span>{' '}
                    <span className="code-yellow">"INV-001"</span>{'\n'}
                    <span className="text-foreground">{'});'}</span>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Floating Success Card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-glow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Payment Received</div>
                  <div className="text-xs text-muted-foreground">KES 1,000 • M-Pesa</div>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-glow-gradient rounded-full scale-150 -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
