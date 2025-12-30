import { useState, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
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
import mainLogo from "/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png";

const slides = [
  {
    id: "brand",
    logo: mainLogo,
    title: "Complete ITAM Solutions",
    subtitle: "Enterprise IT Asset Management",
    description: "Streamline your entire IT asset lifecycle with our comprehensive platform",
    gradient: "from-neutral-900 via-neutral-800 to-neutral-900",
  },
  {
    id: "heliam",
    logo: heliamLogo,
    title: "HeliAM",
    subtitle: "Hardware Asset Management",
    description: "Track, manage, and optimize your IT hardware assets from procurement to retirement",
    stats: ["Real-time Tracking", "Lifecycle Management", "Compliance Ready"],
    gradient: "from-blue-950 via-neutral-900 to-neutral-900",
  },
  {
    id: "toolbox",
    logo: toolboxLogo,
    title: "Toolbox",
    subtitle: "Depot Repair Management",
    description: "Integrated suite of tools for asset tracking, security, and management",
    stats: ["Repair Tracking", "Parts Inventory", "Workflow Automation"],
    gradient: "from-emerald-950 via-neutral-900 to-neutral-900",
  },
  {
    id: "luemin",
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

                {/* Main content */}
                <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-5xl">
                  <img
                    src={slide.logo}
                    alt={slide.title}
                    className={`mb-8 animate-fade-in ${
                      slide.id === "brand" 
                        ? "h-32 md:h-40 lg:h-48" 
                        : "h-24 md:h-32 lg:h-40"
                    }`}
                  />
                  
                  {slide.id !== "brand" && (
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight animate-fade-in">
                      {slide.title}
                    </h1>
                  )}
                  
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
