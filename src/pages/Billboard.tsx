import { useState, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GitFork, Unlink, DollarSign, RotateCcw, Database, CheckCircle2, Layers, Infinity, Receipt, LineChart, LucideIcon, Laptop, Signal, Headphones, Cloud, Server, PackageOpen, MonitorSmartphone, Workflow, AlertTriangle } from "lucide-react";
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

// Partner logos for PCaaS
const tMobileLogo = "/lovable-uploads/ee44a1eb-a16e-4d5f-a307-d13e5e3b9f8c.png";
const leprLogo = "/lovable-uploads/467232dc-d05e-4376-85e7-318f7ce01380.png";


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

interface PromoFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PromoSlide {
  id: string;
  type: "promo";
  price: string;
  priceSubtext: string;
  title: string;
  subtitle: string;
  gradient: string;
  features: PromoFeature[];
  partnerLogos: string[];
}

type Slide = ProductSlide | ChallengeSlide | SolutionSlide | PromoSlide;

const slides: Slide[] = [
  {
    id: "pcaas-promo",
    type: "promo",
    price: "$99",
    priceSubtext: "/mo for 36 months",
    title: "Everything Your Team Needs. One Simple Price.",
    subtitle: "PC-as-a-Service powered by T-Mobile 5G",
    gradient: "from-pink-950 via-neutral-900 to-neutral-900",
    features: [
      {
        icon: Laptop,
        title: "Lenovo ThinkPad T14",
        description: "Enterprise-grade laptop, preconfigured and ready to deploy",
      },
      {
        icon: Signal,
        title: "75GB 5G Data",
        description: "Always-on T-Mobile 5G connectivity, no Wi-Fi required",
      },
      {
        icon: Cloud,
        title: "Microsoft 365",
        description: "Business Standard including Teams, Outlook, and more",
      },
      {
        icon: Headphones,
        title: "24/7/365 Support",
        description: "Live helpdesk for device, OS, and software issues",
      },
    ],
    partnerLogos: [leprLogo, tMobileLogo],
  },
  {
    id: "physical-reality",
    type: "challenge",
    icon: Server,
    title: "Beyond the Software",
    subtitle: "The Untouched Physical Reality of IT Assets",
    gradient: "from-orange-950 via-neutral-900 to-neutral-900",
    challenges: [
      {
        icon: PackageOpen,
        title: "Manual Procurement",
        description: "Multiple spreadsheets, emails, and manual approval processes for ordering assets",
      },
      {
        icon: MonitorSmartphone,
        title: "Laborious Onboarding",
        description: "Hours of IT staff time for provisioning, BIOS config, and UEM deployment",
      },
      {
        icon: Workflow,
        title: "Non-Standardized Processes",
        description: "Complex if-then logic based on roles and locations creates inconsistency",
      },
      {
        icon: AlertTriangle,
        title: "End-of-Life Risks",
        description: "Data security risks and missed asset value recovery opportunities",
      },
    ],
  },
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
];
// Rolling digit component for cash register effect
interface RollingDigitProps {
  targetDigit: number;
  startDigit?: number;
  delay?: number;
  isActive: boolean;
  rollToZero?: boolean;
}

const RollingDigit = ({ targetDigit, startDigit, delay = 0, isActive, rollToZero = false }: RollingDigitProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Trigger animation after component mounts with a small delay
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setHasAnimated(true), 50 + delay);
      return () => clearTimeout(timer);
    } else {
      setHasAnimated(false);
    }
  }, [isActive, delay]);
  
  // Create a strip of digits that will roll through
  const rollCount = 10;
  const digitStrip: number[] = [];
  
  // Start from startDigit if provided, otherwise use targetDigit
  const start = startDigit ?? targetDigit;
  const end = rollToZero ? 0 : targetDigit;
  
  // Build the strip: start digit at top, cycling through to target at bottom
  digitStrip.push(start);
  for (let i = 1; i < rollCount; i++) {
    digitStrip.push((start + i) % 10);
  }
  digitStrip.push(end); // Target digit at the very bottom
  
  // Steps to move = rollCount (to show the last digit)
  const steps = rollCount;
  
  // When inactive, show final position immediately; when active, animate to it
  const showFinal = !isActive || hasAnimated;
  const finalTranslate = `translateY(-${steps}em)`;
  
  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        height: '1em',
        lineHeight: '1em',
        width: '0.65em', // Fixed width for consistent spacing
      }}
    >
      <div
        className="flex flex-col"
        style={{
          transform: showFinal ? finalTranslate : 'translateY(0)',
          transition: isActive && hasAnimated 
            ? `transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)`
            : 'none',
        }}
      >
        {digitStrip.map((d, i) => (
          <span
            key={i}
            className="block text-center"
            style={{ height: '1em', lineHeight: '1em' }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

// Cash register price display with sliding dollar sign
interface CashRegisterPriceProps {
  value: number;
  startValue: number;
  isActive: boolean;
  animationKey: number;
}

const CashRegisterPrice = ({ value, startValue, isActive, animationKey }: CashRegisterPriceProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Track when animation completes to collapse extra digits
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setHasAnimated(true), 1800); // Slightly before roll completes
      return () => clearTimeout(timer);
    } else {
      setHasAnimated(false);
    }
  }, [isActive]);
  
  const startDigits = startValue.toString().split('').map(Number);
  const endDigits = value.toString().split('').map(Number);
  
  // Pad end digits to match start digits length
  const paddedEndDigits = [...Array(startDigits.length - endDigits.length).fill(null), ...endDigits];
  
  // Calculate width of leading digits that will collapse (for $ slide effect)
  const leadingDigitCount = startDigits.length - endDigits.length;
  
  return (
    <div 
      key={animationKey}
      className="flex items-baseline text-7xl md:text-9xl lg:text-[10rem] font-black text-white tracking-tighter"
    >
      {/* Dollar sign */}
      <span className="inline-block">$</span>
      
      {/* Digits container */}
      <div className="flex">
        {startDigits.map((startDigit, index) => {
          const endDigit = paddedEndDigits[index];
          const isLeadingDigit = endDigit === null;
          
          return (
            <div
              key={`${animationKey}-${index}`}
              className="relative overflow-hidden"
              style={{
                width: isLeadingDigit 
                  ? (hasAnimated ? 0 : '0.65em') 
                  : '0.65em',
                opacity: isLeadingDigit && hasAnimated ? 0 : 1,
                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out',
              }}
            >
              <RollingDigit
                targetDigit={isLeadingDigit ? 0 : endDigit}
                startDigit={startDigit}
                delay={index * 120}
                isActive={isActive}
                rollToZero={isLeadingDigit}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Animated emblem grid component for wave effect
const EmblemWaveBackground = ({ slideKey }: { slideKey: string }) => {
  const emblemSize = 50;
  const cols = Math.ceil(1920 / emblemSize) + 1; // ~40 columns for typical screens
  const rows = Math.ceil(1080 / emblemSize) + 1; // ~22 rows
  
  const emblems = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const delay = col * 0.075; // 75ms stagger per column (~3s total wave)
      emblems.push(
        <img
          key={`${slideKey}-${row}-${col}`}
          src="/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png"
          alt=""
          className="w-[50px] h-[50px] object-contain opacity-0 animate-emblem-wave-in motion-reduce:animate-none motion-reduce:opacity-100"
          style={{ animationDelay: `${delay}s` }}
        />
      );
    }
  }
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] animate-emblem-grid-pulse">
      <div 
        style={{ 
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 50px)`,
          gridTemplateRows: `repeat(${rows}, 50px)`,
        }}
      >
        {emblems}
      </div>
    </div>
  );
};

const Billboard = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isUIHidden, setIsUIHidden] = useState(false);
  const [hiddenSlides, setHiddenSlides] = useState<Set<number>>(new Set());

  const toggleSlideVisibility = useCallback((index: number) => {
    setHiddenSlides(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        // Don't allow hiding all slides
        if (newSet.size < slides.length - 1) {
          newSet.add(index);
        }
      }
      return newSet;
    });
  }, []);

  // Skip to next visible slide when current becomes hidden
  useEffect(() => {
    if (!api || hiddenSlides.size === 0) return;
    
    if (hiddenSlides.has(current)) {
      // Find next visible slide
      let next = (current + 1) % slides.length;
      while (hiddenSlides.has(next) && next !== current) {
        next = (next + 1) % slides.length;
      }
      api.scrollTo(next);
    }
  }, [api, current, hiddenSlides]);

  // Custom autoplay that skips hidden slides
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      let next = (current + 1) % slides.length;
      while (hiddenSlides.has(next)) {
        next = (next + 1) % slides.length;
      }
      api.scrollTo(next);
    }, 15000); // Match the autoplay delay

    return () => clearInterval(interval);
  }, [api, current, isPaused, hiddenSlides]);

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
      if (e.key === "h" || e.key === "H") {
        setIsUIHidden((h) => !h);
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

  // Cash register animation state
  const isPromoSlideActive = slides[current]?.id === "pcaas-promo";
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation when promo slide becomes active
  useEffect(() => {
    if (isPromoSlideActive) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isPromoSlideActive]);

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
                
                {/* EPR Emblem background overlay - grid with left-to-right wave animation */}
                <EmblemWaveBackground key={`emblem-grid-${current}-${slide.id}`} slideKey={`${current}-${slide.id}`} />

                {/* Render based on slide type */}
                {slide.type === "challenge" ? (
                  <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-6xl w-full">
                    {/* Header with icon */}
                    <div className="flex items-center gap-4 mb-6 animate-fade-in">
                      <div className={`${slide.id === "physical-reality" ? "bg-orange-500/20" : "bg-red-500/20"} p-4 rounded-2xl`}>
                        <slide.icon className={`w-12 h-12 ${slide.id === "physical-reality" ? "text-orange-400" : "text-red-400"}`} />
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
                          className={`bg-white/10 backdrop-blur-sm border-l-4 ${slide.id === "physical-reality" ? "border-orange-500" : "border-red-500"} rounded-xl p-6 text-left animate-float`}
                          style={{ animationDelay: `${index * 0.3}s` }}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`${slide.id === "physical-reality" ? "bg-orange-500/20" : "bg-red-500/20"} p-3 rounded-xl shrink-0`}>
                              <challenge.icon className={`w-8 h-8 ${slide.id === "physical-reality" ? "text-orange-400" : "text-red-400"}`} />
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
                    {/* Header with EPR emblem */}
                    <div className="flex items-center gap-4 mb-6 animate-fade-in">
                      <div className="bg-emerald-500/20 p-4 rounded-2xl animate-float">
                        <img 
                          src="/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png" 
                          alt="EPR Emblem" 
                          className="w-12 h-12 object-contain"
                        />
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
                ) : slide.type === "promo" ? (
                  <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-6xl w-full">
                    {/* Partner logos */}
                    <div className="flex items-center gap-6 mb-8 animate-fade-in">
                      <img 
                        src={slide.partnerLogos[0]} 
                        alt="T-Mobile" 
                        className="h-12 md:h-16 object-contain"
                      />
                      <span className="text-white/40 text-3xl font-light">+</span>
                      <img 
                        src={slide.partnerLogos[1]} 
                        alt="Lifetime EPR" 
                        className="h-12 md:h-16 object-contain"
                      />
                    </div>

                    {/* Massive price display with cash register animation */}
                    <div className="mb-4 flex items-baseline justify-center">
                      <CashRegisterPrice 
                        value={99}
                        startValue={199}
                        isActive={isPromoSlideActive}
                        animationKey={animationKey}
                      />
                      <span className="text-2xl md:text-3xl lg:text-4xl font-light text-white/70 ml-2">
                        {slide.priceSubtext}
                      </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight animate-fade-in">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl font-light text-pink-300 mb-10 animate-fade-in">
                      {slide.subtitle}
                    </h2>

                    {/* 2x2 Grid of features */}
                    <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
                      {slide.features.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm border-l-4 border-pink-500 rounded-xl p-6 text-left animate-float"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-pink-500/20 p-3 rounded-xl shrink-0">
                              <feature.icon className="w-8 h-8 text-pink-400" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-base md:text-lg text-white/60">
                                {feature.description}
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
      {!isUIHidden && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!hiddenSlides.has(index)) {
                    api?.scrollTo(index);
                  }
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleSlideVisibility(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                  hiddenSlides.has(index)
                    ? "bg-white/20 ring-1 ring-white/30"
                    : current === index 
                      ? "bg-white w-8" 
                      : "bg-white/40 hover:bg-white/60"
                }`}
              >
                {hiddenSlides.has(index) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white/60 text-[8px] font-bold">×</span>
                )}
              </button>
            ))}
          </div>
          <span className="text-white/30 text-xs">Right-click to hide/show slides</span>
        </div>
      )}

      {/* QR Code section - dynamic based on current slide */}
      {(() => {
        const qrPaths = ['/pcaas', '/why-choose-us', '/why-choose-us', '/contact'];
        const currentPath = qrPaths[current] || '/contact';
        return (
          <>
            <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-lg">
                  <QRCodeSVG 
                    value={`https://lifetimeepr.com${currentPath}`}
                    size={96}
                    level="H"
                    includeMargin={false}
                  />
                </div>
                <span className="text-neutral-900 font-semibold text-sm mt-2">Scan to Connect</span>
              </div>
            </div>

            {/* Website URL */}
            <div className="absolute bottom-8 left-8 z-20">
              <span className="text-white/60 text-lg font-light tracking-wider">
                lifetimeepr.com
                <span 
                  key={currentPath}
                  className="font-bold text-white inline-block animate-[fadeSlideIn_0.4s_ease-out]"
                  style={{
                    animation: 'fadeSlideIn 0.4s ease-out'
                  }}
                >
                  {currentPath}
                </span>
              </span>
            </div>
            <style>{`
              @keyframes fadeSlideIn {
                0% {
                  opacity: 0;
                  transform: translateY(8px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </>
        );
      })()}

      {/* Fullscreen hint */}
      {!isUIHidden && (
        <div className="absolute top-8 right-8 z-20 text-white/40 text-sm transition-opacity duration-300">
          <span>Press <kbd className="bg-white/10 px-2 py-1 rounded">F</kbd> for fullscreen</span>
          {isPaused && (
            <span className="ml-4 text-yellow-400">⏸ Paused</span>
          )}
        </div>
      )}
      {!isUIHidden && (
        <div className="absolute top-14 right-8 z-20 text-white/40 text-sm transition-opacity duration-300">
          <span>Press <kbd className="bg-white/10 px-2 py-1 rounded">H</kbd> to hide UI</span>
        </div>
      )}

      {/* Fullscreen button */}
      {!isUIHidden && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          className="absolute top-8 left-8 z-20 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all text-sm backdrop-blur-sm border border-white/20"
        >
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      )}
    </div>
  );
};

export default Billboard;
