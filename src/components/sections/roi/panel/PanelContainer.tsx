
import { CSSProperties, ReactNode, forwardRef, Ref } from 'react';

interface PanelContainerProps {
  children: ReactNode;
  isMobile: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  isDragging: boolean;
  className?: string;
}

const PanelContainer = forwardRef(({
  children,
  isMobile,
  isMinimized,
  position,
  isDragging,
  className = ''
}: PanelContainerProps, ref: Ref<HTMLDivElement>) => {
  const style: CSSProperties = {
    maxHeight: isMobile 
      ? undefined 
      : '80vh',
    transition: isDragging 
      ? 'none' 
      : 'max-height 0.3s ease-in-out, opacity 0.3s, transform 0.3s',
    transform: isMobile
      ? isMinimized ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)'
      : `translate(${position.x}px, ${position.y}px) ${isMinimized ? 'scale(0.95) translateY(10px)' : 'scale(1)'}`,
    right: isMobile ? 0 : 'auto',
    bottom: isMobile ? 0 : '24px',
    ...(position.x === 0 && position.y === 0 && !isMobile) && {
      right: '16px',
      bottom: '24px',
      left: 'auto',
      top: 'auto'
    }
  };

  const baseClasses = `fixed ${
    isMobile 
      ? 'left-0 right-0 bottom-0 w-full rounded-b-none rounded-t-lg shadow-xl z-[1100]' 
      : 'w-[400px] rounded-lg'
  } bg-white dark:bg-neutral-800 shadow-xl z-[1000] transition-all duration-300 ${
    isMinimized 
      ? 'opacity-0 pointer-events-none transform translate-y-10' 
      : 'opacity-100 scale-100'
  } ${isDragging ? 'cursor-grabbing' : ''}`;

  return (
    <div 
      ref={ref}
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});

PanelContainer.displayName = 'PanelContainer';

export default PanelContainer;
