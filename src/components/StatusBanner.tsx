
import { AlertTriangle } from "lucide-react";

interface StatusBannerProps {
  message: string;
}

const StatusBanner = ({ message }: StatusBannerProps) => {
  return (
    <div className="bg-red-500/90 text-white py-2 px-4 flex items-center justify-center gap-2 animate-fade-down">
      <AlertTriangle size={20} className="text-white" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default StatusBanner;
