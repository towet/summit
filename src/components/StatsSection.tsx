import { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 5000, suffix: '+', label: 'Active Businesses' },
  { value: 1, suffix: 'M+', label: 'Transactions Processed' },
  { value: 99.9, suffix: '%', label: 'Uptime Guarantee' },
  { value: 2, suffix: 'B+', prefix: 'KES ', label: 'Payment Volume' },
  { value: 1, suffix: ' min', prefix: '<', label: 'Average Integration Time' },
];

const AnimatedCounter = ({ value, suffix, prefix, label }: StatItem) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm sm:text-base">{label}</div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-summit-navy-light via-background to-summit-navy-light" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stagger-children">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-primary font-medium">Our Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real numbers that showcase our commitment to powering 
            Kenya's digital payment infrastructure.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
