
import { useEffect, useState } from "react";
import IndexLayout from "@/components/layout/IndexLayout";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useNavigation } from "@/hooks/useNavigation";
import { useSearchParams } from "react-router-dom";
import PCaaSHero from "@/components/pcaas/PCaaSHero";
import WhatIsPCaaS from "@/components/pcaas/WhatIsPCaaS";
import WhyChoosePCaaS from "@/components/pcaas/WhyChoosePCaaS";
import WhoBenefitsMost from "@/components/pcaas/WhoBenefitsMost";
import ReadyToStart from "@/components/pcaas/ReadyToStart";
import SuccessBanner from "@/components/pcaas/SuccessBanner";

const PCaaS = () => {
  useScrollTop();
  const [scrolled, setScrolled] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [searchParams] = useSearchParams();
  const {
    isChatOpen,
    isCalculatorOpen,
    isCalculatorVisible,
    isStatsPanelVisible,
    isStatsPanelMinimized,
    handleChatClick,
    handleCalculatorClick,
    handleMaximizeCalculator,
  } = useNavigation();

  // Show success banner when user returns from signup
  useEffect(() => {
    if (searchParams.has('success') || searchParams.has('done')) {
      setShowSuccessBanner(true);
    }
  }, [searchParams]);

  const hasCompletedSignup = searchParams.has('success') || searchParams.has('done');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <IndexLayout
      scrolled={scrolled}
      isChatOpen={isChatOpen}
      isCalculatorOpen={isCalculatorOpen}
      isCalculatorVisible={isCalculatorVisible}
      isStatsPanelVisible={isStatsPanelVisible}
      isStatsPanelMinimized={isStatsPanelMinimized}
      onChatClick={handleChatClick}
      onCalculatorClick={handleCalculatorClick}
      onMaximizeCalculator={handleMaximizeCalculator}
    >
      <SuccessBanner 
        show={showSuccessBanner} 
        onClose={() => setShowSuccessBanner(false)} 
      />
      <div className={showSuccessBanner ? "pt-20" : ""}>
        <PCaaSHero hideGetStarted={hasCompletedSignup} />
        <WhatIsPCaaS hasCompletedSignup={hasCompletedSignup} />
        <WhyChoosePCaaS />
        <WhoBenefitsMost />
        <ReadyToStart hideGetStarted={hasCompletedSignup} />
      </div>
    </IndexLayout>
  );
};

export default PCaaS;
