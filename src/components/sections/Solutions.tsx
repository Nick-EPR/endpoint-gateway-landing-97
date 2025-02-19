
import toolboxLogo from "/lovable-uploads/c2b68dd4-11bc-4aec-847b-9a07bd311771.png";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import lueminLogo from "/lovable-uploads/8c6d4f78-d6a8-4d31-8e1f-502cbfc3e160.png";
import triangleImage from "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";
import { useEffect } from "react";

interface Solution {
  title: string;
  description: string;
  logo?: string;
}

const Solutions = () => {
  const solutions: Solution[] = [
    {
      title: "Toolbox",
      description: "Seamless interface between Lifetime EPR and repair depot services through our proven Toolbox product integration",
      logo: toolboxLogo
    },
    {
      title: "HeliAM",
      description: "Complete asset lifecycle management platform for tracking and managing IT assets from procurement through retirement",
      logo: heliamLogo
    },
    {
      title: "Luemin",
      description: "Unified Endpoint Management (UEM) solution integrated directly into the Lifetime EPR platform for comprehensive device management",
      logo: lueminLogo
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const cards = document.querySelectorAll('.solution-card');
    cards.forEach((card, index) => {
      // Cast the Element to HTMLElement to access style property
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transitionDelay = `${index * 200}ms`;
      cardElement.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="relative py-24 bg-neutral-light">
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src={triangleImage} 
              alt="Decorative triangle" 
              className="w-24 h-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            End-to-End ITAM Solutions
          </h2>
          <p className="text-lg text-neutral animate-on-scroll">
            Streamline your IT asset management with our comprehensive suite of integrated products
          </p>
        </div>

        {/* Visual connector elements with extended width */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2 -translate-y-8"></div>
          <div className="absolute top-8 -left-4 -right-4 h-0.5 bg-primary/20"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="solution-card p-8 glass-card rounded-xl hover:shadow-lg transition-all duration-500 transform"
            >
              {solution.logo ? (
                <div className="mb-6 h-16 flex items-center justify-center">
                  <img 
                    src={solution.logo} 
                    alt={`${solution.title} logo`} 
                    className={`max-h-8 w-auto object-contain ${
                      solution.title === 'HeliAM' ? 'max-h-12' : ''
                    }`}
                  />
                </div>
              ) : (
                <h3 className="text-xl font-semibold mb-6">{solution.title}</h3>
              )}
              <p className="text-neutral">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
