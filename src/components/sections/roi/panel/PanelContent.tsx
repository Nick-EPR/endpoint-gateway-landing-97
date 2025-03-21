
import StatsCards from '../StatsCards';
import { TrendResults } from '@/utils/roi/types';
import { defaultTrends } from '@/utils/roi/trendCalculations';

interface PanelContentProps {
  trends?: TrendResults;
  isMobile: boolean;
  mobileExpanded: boolean;
  maximizePanel?: () => void;
}

const PanelContent = ({ 
  trends, 
  isMobile, 
  mobileExpanded,
  maximizePanel 
}: PanelContentProps) => {
  // Use provided trends or use defaultTrends
  const validTrends = trends || defaultTrends;
  
  return (
    <div className={`p-3 ${isMobile && !mobileExpanded ? 'pb-1' : 'p-4'} overflow-y-auto ${
      isMobile 
        ? (mobileExpanded ? 'max-h-[calc(80vh-60px)]' : 'max-h-[85px]') 
        : ''
    }`}>
      <StatsCards 
        trends={validTrends} 
        compact={isMobile && !mobileExpanded} 
        onMaximize={mobileExpanded ? undefined : maximizePanel} 
      />
    </div>
  );
};

export default PanelContent;
