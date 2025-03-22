
import { useQuery } from "@tanstack/react-query";
import { fetchMonitors } from "@/utils/monitorUtils";
import IndexLayout from "@/components/layout/IndexLayout";
import IndexSections from "@/components/sections/IndexSections";
import { useIndexScroll } from "@/hooks/useIndexScroll";
import { useNavigation } from "@/hooks/useNavigation";
import { useStatsPanel } from "@/hooks/useStatsPanel";
import { useEffect, useRef, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { defaultTrends } from "@/utils/roi/trendCalculations";

// Lazy load components that aren't needed for initial render
const StatsPanelLazy = lazy(() => import("@/components/sections/roi/StatsSidePanel"));

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
  const { data: monitors, isLoading: isMonitorsLoading } = useQuery({
    queryKey: ['monitors'],
    refetchInterval: 60000,
    staleTime: 55000,
    gcTime: 120000,
    queryFn: () => {
      // Only fetch monitors when they're needed
      if (document.visibilityState === 'visible') {
        return fetchMonitors();
      }
      return null;
    },
  });

  // Get location state for possible scrollTo parameter
  const location = useLocation();
  const navigate = useNavigate();
  const initialScrollPerformed = useRef(false);
  
  // Handle scrolling to specific sections when navigating from other pages
  useEffect(() => {
    if (location.state && location.state.scrollTo && !initialScrollPerformed.current) {
      const sectionId = location.state.scrollTo;
      initialScrollPerformed.current = true;
      
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          
          // If the ROI calculator is the target, also maximize it
          if (sectionId === 'roi-calculator') {
            handleMaximizeCalculator();
          }
          
          // Clear the location state to prevent re-scrolling when user navigates within the page
          navigate('/', { replace: true });
        }
      }, 500); // Short delay to ensure page is rendered
    }
  }, [location.state, handleMaximizeCalculator, navigate]);

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

  // Add console logs to debug the panel visibility
  console.log("Stats Panel State:", { 
    isStatsPanelVisible, 
    isStatsPanelMinimized,
    isCalculatorVisible
  });

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
      
      {/* Single instance of stats panel */}
      <Suspense fallback={<div className="fixed bottom-16 right-4 z-50 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"><LoadingSpinner /></div>}>
        <StatsPanelLazy
          isOpen={isStatsPanelVisible}
          isMinimized={isStatsPanelMinimized}
          togglePanel={() => toggleStatsPanel()}
          minimizePanel={() => toggleStatsPanel(true)}
          maximizePanel={handleMaximizeCalculator}
          isCalculatorVisible={isCalculatorVisible}
          trends={defaultTrends} 
        />
      </Suspense>
    </IndexLayout>
  );
};

export default Index;
