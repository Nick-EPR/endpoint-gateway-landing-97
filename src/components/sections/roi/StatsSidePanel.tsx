
import { useEffect, useRef, useState } from 'react';
import { Minimize2, X, ChevronDown, ChevronUp, Move } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StatsCards from './StatsCards';
import { TrendResults } from '@/utils/roi/types';

interface StatsSidePanelProps {
  trends: TrendResults;
  isOpen: boolean;
  isMinimized?: boolean;
  togglePanel: () => void;
  minimizePanel: () => void;
  maximizePanel: () => void;
  isCalculatorVisible: boolean;
}

const StatsSidePanel = ({ 
  trends, 
  isOpen, 
  isMinimized = false,
  togglePanel, 
  minimizePanel,
  maximizePanel,
  isCalculatorVisible 
}: StatsSidePanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });

  // Check for mobile viewport
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Update panel visibility when minimized state changes
  useEffect(() => {
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: isMinimized }
    }));
  }, [isMinimized]);

  const toggleMobileExpand = () => {
    setMobileExpanded(!mobileExpanded);
  };

  // Handle mouse down to start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Don't allow dragging on mobile
    
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setInitialPos({ ...position });
    
    // Prevent text selection during drag
    e.preventDefault();
  };

  // Handle touch start for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMobile) return; // Don't allow dragging on mobile
    
    setIsDragging(true);
    setDragStart({ 
      x: e.touches[0].clientX, 
      y: e.touches[0].clientY 
    });
    setInitialPos({ ...position });
  };

  // Handle mouse move during drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setPosition({
        x: initialPos.x + deltaX,
        y: initialPos.y + deltaY
      });
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.touches[0].clientX - dragStart.x;
      const deltaY = e.touches[0].clientY - dragStart.y;
      
      setPosition({
        x: initialPos.x + deltaX,
        y: initialPos.y + deltaY
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, dragStart, initialPos]);

  // If panel is closed, return null
  if (!isOpen) return null;
  
  return (
    <div 
      ref={panelRef}
      className={`fixed ${
        isMobile 
          ? 'left-0 right-0 bottom-0 w-full rounded-b-none rounded-t-lg shadow-xl z-[1100]' 
          : 'w-[800px] rounded-lg'
      } bg-white dark:bg-neutral-800 shadow-xl z-[1000] transition-all duration-300 ${
        isMinimized 
          ? 'opacity-0 scale-95 pointer-events-none transform translate-y-10' 
          : 'opacity-100 scale-100'
      } ${isDragging ? 'cursor-grabbing' : ''}`}
      style={{ 
        maxHeight: isMobile 
          ? (mobileExpanded ? '80vh' : '140px') 
          : '80vh',
        transition: isDragging 
          ? 'none' 
          : 'max-height 0.3s ease-in-out, opacity 0.3s, transform 0.3s',
        transform: isMobile
          ? isMinimized ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)'
          : `translate(${position.x}px, ${position.y}px) ${isMinimized ? 'scale(0.95) translateY(10px)' : 'scale(1)'}`,
        ...(isMobile ? 
          { 
            right: 0,
            bottom: 0
          } : 
          {
            right: position.x === 0 ? '16px' : 'auto',
            bottom: position.y === 0 ? '24px' : 'auto',
            position: 'fixed'
          })
      }}
    >
      <div 
        className={`p-3 border-b dark:border-neutral-700 flex justify-between items-center ${!isMobile && 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex items-center gap-2">
          {!isMobile && <Move className="h-4 w-4 text-neutral-500" />}
          <h3 className="font-medium text-base sm:text-lg dark:text-white">ROI Stats</h3>
        </div>
        <div className="flex gap-2">
          {isMobile && (
            <Button 
              variant="ghost" 
              onClick={toggleMobileExpand} 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              {mobileExpanded ? 
                <ChevronDown className="h-4 w-4" /> : 
                <ChevronUp className="h-4 w-4" />
              }
            </Button>
          )}
          {!isMobile ? (
            <Button 
              variant="ghost" 
              onClick={minimizePanel} 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          ) : (
            <Button 
              variant="ghost" 
              onClick={togglePanel} 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className={`p-3 ${isMobile && !mobileExpanded ? 'pb-1' : 'p-4'} overflow-y-auto ${
        isMobile 
          ? (mobileExpanded ? 'max-h-[calc(80vh-60px)]' : 'max-h-[85px]') 
          : ''
      }`}>
        <StatsCards 
          trends={trends} 
          compact={isMobile && !mobileExpanded} 
          onMaximize={mobileExpanded ? undefined : maximizePanel} 
        />
      </div>
    </div>
  );
};

export default StatsSidePanel;
