import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section className="relative pt-24 pb-16 overflow-hidden min-h-[80vh] flex items-center">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-125">
        <source src="https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Screen%20Recording%202026-01-07%20at%201.17.39%20PM.mov" type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '30px'
    }}></div>
      
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-12">
          <div className="lg:w-1/2 space-y-6">
            
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Complete IT Asset Management <span className="text-blue-400">From Procurement to Retirement</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg">
              The Core Platform is the central hub of the Lifetime EPR ecosystem, providing complete visibility and control over your entire IT asset lifecycle with enterprise-grade security and compliance.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/30 text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden lg:ml-12">
              <img src="/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png" alt="Lifetime EPR Logo" className="w-48 h-48 mx-auto object-contain drop-shadow-2xl" />
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 z-20 max-w-[200px] animate-fade-up [animation-delay:600ms] border border-white/20">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <span className="text-blue-400">100%</span> Visibility
              </div>
              <p className="text-xs text-white/70">
                across all IT assets
              </p>
            </div>
            
            <div className="absolute -top-6 -right-6 lg:-right-10 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 z-20 max-w-[200px] animate-fade-up [animation-delay:800ms] border border-white/20">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <span className="text-blue-400">Full</span> Lifecycle
              </div>
              <p className="text-xs text-white/70">
                procurement to retirement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;