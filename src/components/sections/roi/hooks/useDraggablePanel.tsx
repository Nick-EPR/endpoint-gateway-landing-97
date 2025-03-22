
import { useState, useEffect, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

export const useDraggablePanel = (isMobile: boolean) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  // Add boundary constraints
  const constrainPosition = (pos: Position): Position => {
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Panel dimensions (approximate, could be passed as props for more accuracy)
    const panelWidth = 320; // Approximate width
    const panelHeight = 400; // Approximate height
    
    // Calculate boundaries
    const minX = 0;
    const maxX = windowWidth - panelWidth;
    const minY = 0;
    const maxY = windowHeight - 100; // Allow a bit of panel to remain visible
    
    return {
      x: Math.max(minX, Math.min(maxX, pos.x)),
      y: Math.max(minY, Math.min(maxY, pos.y)),
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) return;
    
    setIsDragging(true);
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newPosition = constrainPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
      
      setPosition(newPosition);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const touch = e.touches[0];
      const newPosition = constrainPosition({
        x: touch.clientX - offset.x,
        y: touch.clientY - offset.y,
      });
      
      setPosition(newPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, offset, isMobile]);

  return { position, isDragging, handleMouseDown, handleTouchStart };
};
