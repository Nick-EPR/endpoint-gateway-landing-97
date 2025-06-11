
import { useEffect, useState } from "react";
import IndexLayout from "@/components/layout/IndexLayout";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useNavigation } from "@/hooks/useNavigation";
import PCaaSHero from "@/components/pcaas/PCaaSHero";
import WhatIsPCaaS from "@/components/pcaas/WhatIsPCaaS";
import WhyChoosePCaaS from "@/components/pcaas/WhyChoosePCaaS";
import WhoBenefitsMost from "@/components/pcaas/WhoBenefitsMost";
import ReadyToStart from "@/components/pcaas/ReadyToStart";

const PCaaS = () => {
  useScrollTop();
  const [scrolled, setScrolled] = useState(false);
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
