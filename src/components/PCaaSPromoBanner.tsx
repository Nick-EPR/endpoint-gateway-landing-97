import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const PCaaSPromoBanner = () => {
  return (
    <section 
      className="relative overflow-hidden parallelogram-section flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(135deg, #e20074 0%, #b8005a 100%)' 
      }}
    >
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-xl">
              NEW: PC-as-a-Service Now Available
            </span>
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            Simplify Your IT. Mobilize Your Workforce.
            <span className="block text-white/90">Cut CapEx.</span>
          </h1>
          
          <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
            A fully managed device solution combining 5G connectivity with white-glove IT services for SMBs.
          </p>
          
          <Link to="/pcaas">
            <Button 
              size="lg"
              className="bg-white text-[#e20074] border-white hover:bg-white/90 hover:text-[#b8005a] font-semibold transition-all duration-200 text-lg px-8 py-4 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/3 rounded-full"></div>
      <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-white/3 rounded-full"></div>
    </section>
  );
};

export default PCaaSPromoBanner;