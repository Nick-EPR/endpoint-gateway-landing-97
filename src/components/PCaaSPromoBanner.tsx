import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const PCaaSPromoBanner = () => {
  return (
    <div 
      className="relative overflow-hidden py-4 px-4"
      style={{ 
        background: 'linear-gradient(135deg, #e20074 0%, #b8005a 100%)' 
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-lg">
              NEW: PCaaS Program Now Available
            </span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          
          <p className="text-white/90 text-sm">
            Complete IT Asset Management as a Service
          </p>
          
          <Link to="/pcaas" className="ml-auto">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white text-[#e20074] border-white hover:bg-white/90 hover:text-[#b8005a] font-semibold transition-all duration-200"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
    </div>
  );
};

export default PCaaSPromoBanner;