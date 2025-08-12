import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhySection from '@/components/sections/WhySection';
import WhatSection from '@/components/sections/WhatSection';
import HowSection from '@/components/sections/HowSection';
import TimeSection from '@/components/sections/TimeSection';
import FormFactorsSection from '@/components/sections/FormFactorsSection';
import DesignDetailsSection from '@/components/sections/DesignDetailsSection';
import DesignVariationsSection from '@/components/sections/DesignVariationsSection';
import DifferenceSection from '@/components/sections/DifferenceSection';
import TechSection from '@/components/sections/TechSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhySection />
      <WhatSection />
      <HowSection />
      <TimeSection />
      <FormFactorsSection />
      <DesignDetailsSection />
      <DesignVariationsSection />
      <DifferenceSection />
      <TechSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
