import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface SuccessBannerProps {
  show: boolean;
  onClose: () => void;
}

const SuccessBanner = ({ show, onClose }: SuccessBannerProps) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-green-500 text-white px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-5 w-5" />
          <div>
            <h3 className="font-semibold">Welcome to PCaaS!</h3>
            <p className="text-sm opacity-90">Thank you for signing up for PC-as-a-Service. We'll be in touch soon!</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-green-600 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SuccessBanner;