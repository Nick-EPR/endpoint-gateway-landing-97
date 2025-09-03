
import { useEffect, useState } from "react";
import IndexLayout from "@/components/layout/IndexLayout";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useNavigation } from "@/hooks/useNavigation";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import PCaaSHero from "@/components/pcaas/PCaaSHero";
import WhatIsPCaaS from "@/components/pcaas/WhatIsPCaaS";
import WhyChoosePCaaS from "@/components/pcaas/WhyChoosePCaaS";
import WhoBenefitsMost from "@/components/pcaas/WhoBenefitsMost";
import ReadyToStart from "@/components/pcaas/ReadyToStart";

const PCaaS = () => {
  useScrollTop();
  const [scrolled, setScrolled] = useState(false);
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

  // Show success toast when user returns from signup
  useEffect(() => {
    if (searchParams.get('done') === null) return;
    
    toast({
      title: "Welcome to PCaaS!",
      description: "Thank you for signing up for PC-as-a-Service. We'll be in touch soon!",
      duration: 5000,
    });
  }, [searchParams]);

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
      <PCaaSHero />
      <WhatIsPCaaS />
      <WhyChoosePCaaS />
      <WhoBenefitsMost />
      <ReadyToStart />
    </IndexLayout>
  );
};

export default PCaaS;
