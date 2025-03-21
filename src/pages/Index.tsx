
import { useQuery } from "@tanstack/react-query";
import { fetchMonitors } from "@/utils/monitorUtils";
import IndexLayout from "@/components/layout/IndexLayout";
import IndexSections from "@/components/sections/IndexSections";
import { useIndexScroll } from "@/hooks/useIndexScroll";
import { useNavigation } from "@/hooks/useNavigation";
import { useStatsPanel } from "@/hooks/useStatsPanel";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { scrolled, isCalculatorVisible } = useIndexScroll();
  const { isChatOpen, handleChatClick } = useNavigation();
  const { 
    isStatsPanelVisible, 
    isStatsPanelMinimized, 
    toggleStatsPanel,
    handleMaximizeCalculator 
  } = useStatsPanel(isCalculatorVisible);
  
  // Optimize the monitor query with better caching
  const { data: monitors } = useQuery({
    queryKey: ['monitors'],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
    staleTime: 55000,
    gcTime: 120000,
  });

  // Get location state for possible scrollTo parameter
  const location = useLocation();
  
  // Handle scrolling to specific sections when navigating from other pages
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          
          // If the ROI calculator is the target, also maximize it
          if (sectionId === 'roi-calculator') {
            handleMaximizeCalculator();
          }
        }
      }, 500); // Short delay to ensure page is rendered
    }
  }, [location.state, handleMaximizeCalculator]);

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

  return (
    <IndexLayout
      scrolled={scrolled}
      hasOutage={hasOutage}
      isChatOpen={isChatOpen}
      isCalculatorOpen={isCalculatorVisible}
      isCalculatorVisible={isCalculatorVisible}
      isStatsPanelVisible={isStatsPanelVisible}
      isStatsPanelMinimized={isStatsPanelMinimized}
      onChatClick={handleChatClick}
      onCalculatorClick={toggleStatsPanel}
      onMaximizeCalculator={handleMaximizeCalculator}
    >
      <IndexSections />
    </IndexLayout>
  );
};

export default Index;
