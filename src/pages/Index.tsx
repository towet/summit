import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { SwiftPaySpotlight } from '@/components/SwiftPaySpotlight';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { TechServicesSection } from '@/components/TechServicesSection';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Summit Edge Enterprise | M-Pesa Payment Integration & Fintech Solutions</title>
        <meta 
          name="description" 
          content="Transform your business payments with SwiftPay API. Accept M-Pesa payments in minutes. Trusted by 5,000+ Kenyan businesses. Get started free today." 
        />
        <meta name="keywords" content="M-Pesa integration, payment API, Kenya fintech, SwiftPay, mobile payments, business billing" />
        <meta property="og:title" content="Summit Edge Enterprise | M-Pesa Payment Integration" />
        <meta property="og:description" content="Accept M-Pesa payments in minutes with SwiftPay API. Seamless integration, real-time processing, enterprise-grade security." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://summitedge.co.ke" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesShowcase />
          <SwiftPaySpotlight />
          <HowItWorks />
          <FeaturesGrid />
          <TechServicesSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
