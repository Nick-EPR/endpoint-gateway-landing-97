
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import toolboxLogo from "/lovable-uploads/c2b68dd4-11bc-4aec-847b-9a07bd311771.png";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import lueminLogo from "/lovable-uploads/8c6d4f78-d6a8-4d31-8e1f-502cbfc3e160.png";
import triangleImage from "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";
import { useEffect } from "react";

interface Solution {
  title: string;
  description: string;
  logo?: string;
  comingSoon?: boolean;
  path?: string;
}

const Solutions = () => {
  const solutions: Solution[] = [{
    title: "HeliAM",
    description: "Our core IT asset management platform that provides comprehensive lifecycle management within the Lifetime EPR ecosystem",
    logo: heliamLogo,
    path: "/heliam"
  }, {
    title: "Toolbox",
    description: "Integrated suite of tools within HeliAM that optimizes asset tracking, security, and management throughout the lifecycle",
    logo: toolboxLogo,
    path: "/toolbox"
  }, {
    title: "Luemin",
    description: "Unified Endpoint Management (UEM) solution integrated into the Lifetime EPR platform for comprehensive device management",
    logo: lueminLogo,
    comingSoon: true
  }];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.transform = 'translateY(0)';
          element.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const cards = document.querySelectorAll('.solution-card');
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transform = 'translateY(20px)';
      cardElement.style.transitionDelay = `${index * 200}ms`;
      cardElement.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-32 md:py-48">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8 relative">
            <div className="relative">
              <img src={triangleImage} alt="Decorative triangle" className="w-[6.25rem] h-auto shadow-lg border border-neutral-200/20 rounded-lg p-2 animate-float" />
              <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-primary/20 -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Lifetime EPR Platform
          </h2>
          <p className="text-lg text-neutral">
            Our integrated suite of solutions delivers comprehensive IT asset lifecycle management
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2 -translate-y-8"></div>
          <div className="absolute top-8 -left-4 -right-4 h-0.5 bg-primary/20"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="relative">
              <div className={`solution-card p-8 glass-card rounded-xl hover:shadow-lg animate-float ${solution.comingSoon ? 'opacity-75' : ''}`} 
                style={{
                  animationDelay: `${index * 200}ms`
                }}>
                {solution.logo ? (
                  <div className="mb-6 h-16 flex items-center justify-center">
                    <img 
                      src={solution.logo} 
                      alt={`${solution.title} logo`} 
                      className={`object-contain ${
                        solution.title === 'HeliAM' ? 'h-12' : 
                        solution.title === 'Luemin' ? 'max-w-[160px]' : 
                        'max-h-8'
                      }`} 
                    />
                  </div>
                ) : (
                  <h3 className="text-xl font-semibold mb-6">{solution.title}</h3>
                )}
                <p className="text-neutral mb-6">{solution.description}</p>
                {solution.comingSoon ? (
                  <div className="flex justify-center mt-4">
                    <span className="text-primary font-medium">Coming Soon</span>
                  </div>
                ) : solution.path && (
                  <Link to={solution.path}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                )}
              </div>
              
              {/* Data transmission animations between cards */}
              {index < solutions.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20">
                  {/* Animated dots for data transmission */}
                  <div className="data-flow">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  {/* Reverse data flow */}
                  <div className="data-flow-reverse">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              )}

              <style jsx>{`
                @keyframes flowRight {
                  0% { transform: translateX(0); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateX(32px); opacity: 0; }
                }

                @keyframes flowLeft {
                  0% { transform: translateX(32px); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateX(0); opacity: 0; }
                }

                .data-flow {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: -4px;
                }

                .data-flow-reverse {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 4px;
                }

                .dot {
                  position: absolute;
                  width: 4px;
                  height: 4px;
                  background-color: #93C851;
                  border-radius: 50%;
                  opacity: 0;
                }

                .data-flow .dot {
                  animation: flowRight 3s infinite;
                }

                .data-flow-reverse .dot {
                  animation: flowLeft 3s infinite;
                }

                .data-flow .dot:nth-child(1) { animation-delay: 0s; }
                .data-flow .dot:nth-child(2) { animation-delay: 1s; }
                .data-flow .dot:nth-child(3) { animation-delay: 2s; }

                .data-flow-reverse .dot:nth-child(1) { animation-delay: 1.5s; }
                .data-flow-reverse .dot:nth-child(2) { animation-delay: 2.5s; }
                .data-flow-reverse .dot:nth-child(3) { animation-delay: 0.5s; }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
