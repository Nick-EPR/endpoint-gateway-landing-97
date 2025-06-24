
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import IndexLayout from "../components/layout/IndexLayout";
import IndexSections from "../components/IndexSections";
import { useNavigation } from "../hooks/useNavigation";
import { fetchMonitors } from "@/utils/monitorUtils";

const Index = () => {
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

  // Fetch monitors to check system status
  const { data: monitors } = useQuery({
    queryKey: ["status"],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
  });

  // Temporarily disable outage notification
  const hasOutage = false; // Changed from: monitors?.some(m => m.status === "down") || false;

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
      onCalculatorClick={handleCalculatorClick}
      onMaximizeCalculator={handleMaximizeCalculator}
    >
      <IndexSections />
    </IndexLayout>
  );
};

export default Index;
