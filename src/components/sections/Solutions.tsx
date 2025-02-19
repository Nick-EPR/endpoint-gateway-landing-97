
import toolboxLogo from "/lovable-uploads/c2b68dd4-11bc-4aec-847b-9a07bd311771.png";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import lueminLogo from "/lovable-uploads/8c6d4f78-d6a8-4d31-8e1f-502cbfc3e160.png";

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

  return (
    <section id="solutions" className="relative section-padding bg-neutral-light">
      {/* Top slanted divider */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white transform skew-y-2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            End-to-End ITAM Solutions
          </h2>
          <p className="text-lg text-neutral animate-on-scroll">
            Streamline your IT asset management with our comprehensive suite of integrated tools
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="p-8 glass-card rounded-xl animate-on-scroll">
              {solution.logo ? (
                <div className="mb-6 h-12">
                  <img 
                    src={solution.logo} 
                    alt={`${solution.title} logo`} 
                    className="h-full object-contain mx-auto"
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

      {/* Bottom slanted divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-2 translate-y-1/2"></div>
    </section>
  );
};

export default Solutions;
