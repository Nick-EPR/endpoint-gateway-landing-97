import { useState, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GitFork, Unlink, DollarSign, RotateCcw, Database, CheckCircle2, Layers, Infinity, Receipt, LineChart, LucideIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Product logos
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import toolboxLogo from "/lovable-uploads/c1f14b18-5227-48a7-bed0-d8e8a08ffc32.png";
import lueminLogo from "/lovable-uploads/8c6d4f78-d6a8-4d31-8e1f-502cbfc3e160.png";


interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProductSlide {
  id: string;
  type: "product";
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  stats?: string[];
  gradient: string;
}

interface ChallengeSlide {
  id: string;
  type: "challenge";
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradient: string;
  challenges: ChallengeItem[];
}

interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionSlide {
  id: string;
  type: "solution";
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradient: string;
  solutions: SolutionItem[];
}

type Slide = ProductSlide | ChallengeSlide | SolutionSlide;

const slides: Slide[] = [
  {
    id: "challenge",
    type: "challenge",
    icon: GitFork,
    title: "The Challenge of Disconnected Systems",
    subtitle: "Why IT Teams Struggle",
    gradient: "from-red-950 via-neutral-900 to-neutral-900",
    challenges: [
      {
        icon: Unlink,
        title: "Fragmented Tool Landscape",
        description: "Different tools for help desk, UEM/MDM, backups, and asset tracking",
      },
      {
        icon: DollarSign,
        title: "Integration Costs",
        description: "Building integrations requires specialized expertise and significant investment",
      },
      {
        icon: RotateCcw,
        title: "Ongoing Maintenance Burden",
        description: "API changes require constant maintenance and costly rewrites",
      },
      {
        icon: Database,
        title: "Incomplete Data Picture",
        description: "No unified view of IT assets throughout the entire lifecycle",
      },
    ],
  },
  {
    id: "solution",
    type: "solution",
    icon: CheckCircle2,
    title: "Our Solution: Unified ITAM",
    subtitle: "How Lifetime EPR Solves These Challenges",
    gradient: "from-emerald-950 via-neutral-900 to-neutral-900",
    solutions: [
      {
        icon: Layers,
        title: "All-In-One Platform",
        description: "Unified solution covering help desk, CMDB, UEM/MDM, and asset tracking",
      },
      {
        icon: Infinity,
        title: "No Integration Headaches",
        description: "Zero integration development costs and no API maintenance worries",
      },
      {
        icon: Receipt,
        title: "Complete Lifecycle Management",
        description: "Automated workflows from procurement to secure decommissioning",
      },
      {
        icon: LineChart,
        title: "Cost-Effective Solution",
        description: "Predictable pricing, reduced IT labor, and extended asset value recovery",
      },
    ],
  },
  {
    id: "heliam",
    type: "product",
    logo: heliamLogo,
    title: "HeliAM",
    subtitle: "Hardware Asset Management",
    description: "Track, manage, and optimize your IT hardware assets from procurement to retirement",
    stats: ["Real-time Tracking", "Lifecycle Management", "Compliance Ready"],
    gradient: "from-blue-950 via-neutral-900 to-neutral-900",
  },
  {
    id: "toolbox",
    type: "product",
    logo: toolboxLogo,
    title: "Toolbox",
    subtitle: "Depot Repair Management",
    description: "Integrated suite of tools for asset tracking, security, and management",
    stats: ["Repair Tracking", "Parts Inventory", "Workflow Automation"],
    gradient: "from-emerald-950 via-neutral-900 to-neutral-900",
  },
  {
    id: "luemin",
    type: "product",
    logo: lueminLogo,
    title: "Luemin",
    subtitle: "Unified Endpoint Management",
    description: "Comprehensive device management for modern enterprises",
    stats: ["Remote Management", "Security Policies", "Software Deployment"],
    gradient: "from-purple-950 via-neutral-900 to-neutral-900",
  },
];

const Billboard = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
      if (e.key === " ") {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [toggleFullscreen]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    const autoplay = api.plugins().autoplay;
    if (autoplay) {
      if (isPaused) {
        autoplay.stop();
      } else {
        autoplay.play();
      }
    }
  }, [api, isPaused]);

  const handleClick = () => {
    setIsPaused((p) => !p);
  };

  return (
    <div 
      className="h-screen w-screen overflow-hidden bg-neutral-900 cursor-pointer select-none"
      onClick={handleClick}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
        }}
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="h-full -ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-screen pl-0">
              <div
                className={`h-full w-full flex flex-col items-center justify-center bg-gradient-to-br ${slide.gradient} relative overflow-hidden`}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
                </div>
                
                {/* EPR Emblem background overlay - repeating pattern with wave animation */}
                <div 
                  key={`emblem-${current}-${slide.id}`}
                  className="absolute inset-0 pointer-events-none animate-emblem-wave"
                  style={{
                    backgroundImage: 'url(/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png)',
                    backgroundSize: '50px 50px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center center',
                  }}
                />

                {/* Render based on slide type */}
                {slide.type === "challenge" ? (
                  <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-6xl w-full">
                    {/* Header with icon */}
                    <div className="flex items-center gap-4 mb-6 animate-fade-in">
                      <div className="bg-red-500/20 p-4 rounded-2xl">
                        <slide.icon className="w-12 h-12 text-red-400" />
                      </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight animate-fade-in">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 mb-10 animate-fade-in">
                      {slide.subtitle}
                    </h2>

                    {/* 2x2 Grid of challenges */}
                    <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
                      {slide.challenges.map((challenge, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm border-l-4 border-red-500 rounded-xl p-6 text-left animate-float"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-red-500/20 p-3 rounded-xl shrink-0">
                              <challenge.icon className="w-8 h-8 text-red-400" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                {challenge.title}
                              </h3>
                              <p className="text-base md:text-lg text-white/60">
                                {challenge.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : slide.type === "solution" ? (
                  <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-6xl w-full">
                    {/* Header with icon */}
                    <div className="flex items-center gap-4 mb-6 animate-fade-in">
                      <div className="bg-emerald-500/20 p-4 rounded-2xl">
                        <slide.icon className="w-12 h-12 text-emerald-400" />
                      </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight animate-fade-in">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 mb-10 animate-fade-in">
                      {slide.subtitle}
                    </h2>

                    {/* 2x2 Grid of solutions */}
                    <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
                      {slide.solutions.map((solution, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm border-l-4 border-emerald-500 rounded-xl p-6 text-left animate-float"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-emerald-500/20 p-3 rounded-xl shrink-0">
                              <solution.icon className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                {solution.title}
                              </h3>
                              <p className="text-base md:text-lg text-white/60">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-5xl">
                    <img
                      src={slide.logo}
                      alt={slide.title}
                      className="h-24 md:h-32 lg:h-40 mb-8 animate-fade-in"
                    />
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight animate-fade-in">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-6 animate-fade-in">
                      {slide.subtitle}
                    </h2>
                    
                    <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mb-8 animate-fade-in">
                      {slide.description}
                    </p>

                    {slide.stats && (
                      <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in">
                        {slide.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 md:px-8 md:py-4"
                          >
                            <span className="text-white font-medium text-lg md:text-xl">
                              {stat}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Progress indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              api?.scrollTo(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index 
                ? "bg-white w-8" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* QR Code section */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20 bg-white rounded-2xl p-4 shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="bg-white p-2 rounded-lg">
            <QRCodeSVG 
              value="https://lifetimeepr.com/contact" 
              size={96}
              level="H"
              includeMargin={false}
            />
          </div>
          <span className="text-neutral-900 font-semibold text-sm mt-2">Scan to Connect</span>
          <span className="text-neutral-600 text-xs">lifetimeepr.com/contact</span>
        </div>
      </div>

      {/* Website URL */}
      <div className="absolute bottom-8 left-8 z-20">
        <span className="text-white/60 text-lg font-light tracking-wider">
          lifetimeepr.com
        </span>
      </div>

      {/* Fullscreen hint */}
      <div className="absolute top-8 right-8 z-20 text-white/40 text-sm">
        <span>Press <kbd className="bg-white/10 px-2 py-1 rounded">F</kbd> for fullscreen</span>
        {isPaused && (
          <span className="ml-4 text-yellow-400">⏸ Paused</span>
        )}
      </div>

      {/* Fullscreen button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFullscreen();
        }}
        className="absolute top-8 left-8 z-20 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all text-sm backdrop-blur-sm border border-white/20"
      >
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
    </div>
  );
};

export default Billboard;
