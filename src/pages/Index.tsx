
import { useQuery } from "@tanstack/react-query";
import { fetchMonitors } from "@/utils/monitorUtils";
import IndexLayout from "@/components/layout/IndexLayout";
import IndexSections from "@/components/sections/IndexSections";
import { useIndexScroll } from "@/hooks/useIndexScroll";
import { useNavigation } from "@/hooks/useNavigation";
import { useStatsPanel } from "@/hooks/useStatsPanel";

const Index = () => {
  const { scrolled, isCalculatorVisible } = useIndexScroll();
  const { isChatOpen, isCalculatorOpen, handleChatClick, handleCalculatorClick } = useNavigation();
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

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

  return (
    <IndexLayout
      scrolled={scrolled}
      hasOutage={hasOutage}
      isChatOpen={isChatOpen}
      isCalculatorOpen={isCalculatorOpen}
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
