import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import PainSection from "@/components/landing/PainSection";
import OutcomeSection from "@/components/landing/OutcomeSection";
import BridgeSection from "@/components/landing/BridgeSection";
import FounderSection from "@/components/landing/FounderSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import { initAnalytics } from "@/lib/analytics";
import { useScrollDepth } from "@/hooks/useScrollDepth";

const Index = () => {
  useScrollDepth();

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <PainSection />
      <OutcomeSection />
      <BridgeSection />
      <FounderSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
