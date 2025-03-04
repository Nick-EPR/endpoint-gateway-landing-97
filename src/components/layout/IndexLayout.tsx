
import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import NavigationProgress from "../NavigationProgress";
import StatusBanner from "../StatusBanner";
import BottomNavbar from "../navbar/BottomNavbar";

interface IndexLayoutProps {
  children: ReactNode;
  scrolled: boolean;
  hasOutage?: boolean;
  isChatOpen: boolean;
  isCalculatorOpen: boolean;
  isCalculatorVisible: boolean;
  isStatsPanelMinimized: boolean;
  onChatClick: () => void;
  onCalculatorClick: () => void;
  onMaximizeCalculator: () => void;
}

const IndexLayout = ({
  children,
  scrolled,
  hasOutage = false,
  isChatOpen,
  isCalculatorOpen,
  isCalculatorVisible,
  isStatsPanelMinimized,
  onChatClick,
  onCalculatorClick,
  onMaximizeCalculator,
}: IndexLayoutProps) => {
  return (
    <div className="min-h-screen dark:bg-neutral-900">
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      {hasOutage && (
        <div className="fixed top-[72px] w-full z-40">
          <StatusBanner message="We're currently experiencing some technical issues and are working to resolve them." />
        </div>
      )}

      {children}

      <Footer />
      
      <BottomNavbar 
        onChatClick={onChatClick}
        onCalculatorClick={onCalculatorClick}
        isCalculatorMinimized={isStatsPanelMinimized}
        onMaximizeCalculator={onMaximizeCalculator}
        isCalculatorVisible={isCalculatorVisible}
      />
    </div>
  );
};

export default IndexLayout;
