
import { useState, useEffect } from 'react';

interface DragState {
  position: { x: number; y: number };
  isDragging: boolean;
  dragStart: { x: number; y: number };
  initialPos: { x: number; y: number };
}

export function useDraggablePanel() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [dragState, setDragState] = useState<DragState>({
    position: { x: 0, y: 0 },
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    initialPos: { x: 0, y: 0 }
  });

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

  const toggleMobileExpand = () => {
    setMobileExpanded(!mobileExpanded);
  };

  // Handle mouse down to start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Don't allow dragging on mobile
    
    setDragState({
      ...dragState,
      isDragging: true,
      dragStart: { x: e.clientX, y: e.clientY },
      initialPos: { ...dragState.position }
    });
    
    // Prevent text selection during drag
    e.preventDefault();
  };

  // Handle touch start for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMobile) return; // Don't allow dragging on mobile
    
    setDragState({
      ...dragState,
      isDragging: true,
      dragStart: { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      },
      initialPos: { ...dragState.position }
    });
  };

  // Handle mouse move during drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragState.isDragging) return;
      
      const deltaX = e.clientX - dragState.dragStart.x;
      const deltaY = e.clientY - dragState.dragStart.y;
      
      setDragState({
        ...dragState,
        position: {
          x: dragState.initialPos.x + deltaX,
          y: dragState.initialPos.y + deltaY
        }
      });
    };
    
    const handleMouseUp = () => {
      setDragState({
        ...dragState,
        isDragging: false
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragState.isDragging) return;
      
      const deltaX = e.touches[0].clientX - dragState.dragStart.x;
      const deltaY = e.touches[0].clientY - dragState.dragStart.y;
      
      setDragState({
        ...dragState,
        position: {
          x: dragState.initialPos.x + deltaX,
          y: dragState.initialPos.y + deltaY
        }
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
  }, [dragState]);

  return {
    isMobile,
    mobileExpanded,
    position: dragState.position,
    isDragging: dragState.isDragging,
    toggleMobileExpand,
    handleMouseDown,
    handleTouchStart
  };
}
