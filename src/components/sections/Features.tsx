
import { Globe, Shield, Users, Server, Replace } from "lucide-react";
import { Link } from "react-router-dom";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    to: string;
    text: string;
  };
  isHighlighted?: boolean;
}

const Features = () => {
  const features: Feature[] = [{
    icon: <img src="/lovable-uploads/9924917e-87ae-46a8-94de-825e91b581ba.png" alt="Toolbox Logo" className="w-8 h-8" />,
    title: "Repair Management",
    description: "Comprehensive device lifecycle management through Toolbox integration with Lifetime Service",
    isHighlighted: true
  }, {
    icon: <Replace className="w-8 h-8 text-primary" />,
    title: "Advance Exchange",
    description: "Efficient device replacement workflow integrated with repair depot services"
  }, {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Global Coverage",
    description: "Manage assets across multiple locations and jurisdictions, with AI-powered decision support",
    isHighlighted: true
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Security First",
    description: "Enterprise-grade security and compliance measures",
    link: {
      to: "/security",
      text: "Learn More"
    }
  }, {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Team Collaboration",
    description: "Streamlined workflows for enhanced team productivity"
  }, {
    icon: <img src="/lovable-uploads/790d1cf5-882e-4b6c-b4e7-8b8b47888d95.png" alt="HeliAM Logo" className="w-8 h-8 object-contain" />,
    title: "Asset Tracking",
    description: "Real-time monitoring and lifecycle management through HeliAM integration",
    isHighlighted: true
  }];

  return <section id="features" className="py-32 md:py-48 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          Comprehensive Features
        </h2>
        <p className="text-center text-lg mb-16 animate-on-scroll">
          Complete device lifecycle management, paired with{' '}
          <span className="text-primary font-semibold">AI-powered predictive maintenance</span>{' '}
          features
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl transition-all duration-500 backdrop-blur-sm border 
                ${feature.isHighlighted 
                  ? 'bg-gradient-to-br from-white via-primary-light to-white border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-2' 
                  : 'bg-white/80 border-neutral-100 hover:shadow-xl hover:-translate-y-1'
                } animate-on-scroll`}
            >
              <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center 
                ${feature.isHighlighted 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 
                ${feature.isHighlighted 
                  ? 'text-primary' 
                  : 'text-neutral-800'
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-neutral-600 mb-4">{feature.description}</p>
              {feature.link && <Link to={feature.link.to} className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                  {feature.link.text}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>}
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Features;
