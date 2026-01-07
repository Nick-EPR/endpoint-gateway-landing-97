import { useNavigate } from "react-router-dom";
import { ArrowRight, TowerControl } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
const OurSolutionsHeader = () => {
  const navigate = useNavigate();
  const handleCorePlatformClick = () => {
    window.scrollTo(0, 0);
    navigate('/core-platform');
  };
  const handlePCaaSClick = () => {
    window.scrollTo(0, 0);
    navigate('/pcaas');
  };
  const handleNetworkSolutionsClick = () => {
    window.scrollTo(0, 0);
    navigate('/ans');
  };
  const solutions = [{
    title: "Core Platform",
    description: "Lifetime EPR's full IT asset lifecycle management",
    onClick: handleCorePlatformClick,
    accentColor: "bg-primary",
    icon: "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png",
    iconType: "image" as const,
    iconSize: "w-7 h-7",
    videoBackground: "https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Screen%20Recording%202026-01-07%20at%201.17.39%20PM.mov"
  }, {
    title: "PC as a Service",
    description: "First to market device solution combining 5G connectivity with IT services for SMBs",
    onClick: handlePCaaSClick,
    accentColor: "bg-[#E20074]",
    icon: "/lovable-uploads/t-mobile-emblem.webp",
    iconType: "image" as const,
    iconSize: "w-5 h-5",
    imageBackground: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }, {
    title: "Advanced Network Solutions",
    description: "Purpose built coverage for seamless connectivity and enhanced security",
    onClick: handleNetworkSolutionsClick,
    accentColor: "bg-[#FF4E3C]",
    icon: TowerControl,
    iconType: "lucide" as const,
    iconSize: "w-8 h-8",
    imageBackground: "/images/5g-cell-tower.jpg"
  }];
  return <section className="pt-48 md:pt-64 pb-20 md:pb-32 bg-slate-50 dark:bg-[#020817] parallelogram-section">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 animate-fade-up flex items-center justify-center gap-3 dark:text-white">
          <img 
            src="/lovable-uploads/Lifetime_EPR_Emblem.png" 
            alt="Lifetime EPR" 
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />
          Our Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
          {solutions.map((solution, index) => <Card key={solution.title} onClick={solution.onClick} className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:bg-slate-900/50 dark:border-slate-700 animate-fade-left opacity-0 flex flex-col h-full relative" style={{
          animationDelay: `${200 + index * 150}ms`,
          animationFillMode: 'forwards'
        }}>
              {solution.videoBackground && (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-150"
                  >
                    <source src={solution.videoBackground} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                </>
              )}
              {solution.imageBackground && (
                <>
                  <img
                    src={solution.imageBackground}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                </>
              )}
              <div className={`h-1.5 ${solution.accentColor} relative z-10`} />
              <CardHeader className={`pt-5 pb-2 flex-1 relative z-10 ${(solution.videoBackground || solution.imageBackground) ? 'text-white' : ''}`}>
                <div className="flex items-center gap-3">
                  {solution.iconType === "image" ? <img src={solution.icon as string} alt={solution.title} className={`${solution.iconSize} object-contain`} /> : <solution.icon className={`${solution.iconSize} text-[#FF4E3C]`} />}
                  <CardTitle className={`text-lg ${(solution.videoBackground || solution.imageBackground) ? 'text-white' : 'dark:text-white'}`}>{solution.title}</CardTitle>
                </div>
                <CardDescription className={`text-sm leading-relaxed mt-2 ${(solution.videoBackground || solution.imageBackground) ? 'text-white/90' : ''}`}>
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className={`pt-0 pb-4 mt-auto relative z-10 ${(solution.videoBackground || solution.imageBackground) ? 'text-white' : ''}`}>
                <span className={`text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all ${(solution.videoBackground || solution.imageBackground) ? 'text-white' : 'text-primary'}`}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default OurSolutionsHeader;