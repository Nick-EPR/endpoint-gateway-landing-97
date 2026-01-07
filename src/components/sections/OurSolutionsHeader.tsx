import { useNavigate } from "react-router-dom";
import { Layers } from "lucide-react";

const OurSolutionsHeader = () => {
  const navigate = useNavigate();

  const handleCorePlatformClick = () => {
    const section = document.getElementById('perfect-itam-solution');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePCaaSClick = () => {
    window.scrollTo(0, 0);
    navigate('/pcaas');
  };

  const handleNetworkSolutionsClick = () => {
    window.scrollTo(0, 0);
    navigate('/partnerships/movius');
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-[#020817] parallelogram-section">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 animate-fade-up flex items-center justify-center gap-2 dark:text-white">
          <Layers className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
          Our Solutions
        </h2>
        <p className="text-center text-base md:text-lg mb-6 animate-fade-up max-w-2xl mx-auto dark:text-neutral-300">
          Comprehensive device lifecycle management with AI/ML-powered predictive maintenance
        </p>
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <button 
            onClick={handleCorePlatformClick}
            className="px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Core Platform
          </button>
          <button 
            onClick={handlePCaaSClick}
            className="px-6 py-2.5 rounded-full bg-[#E20074] text-white font-medium hover:bg-[#E20074]/90 transition-colors"
          >
            PC as a Service
          </button>
          <button 
            onClick={handleNetworkSolutionsClick}
            className="px-6 py-2.5 rounded-full bg-[#FF4E3C] text-white font-medium hover:bg-[#FF4E3C]/90 transition-colors"
          >
            Advanced Network Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsHeader;
