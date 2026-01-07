import { useNavigate } from "react-router-dom";
import { Layers, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

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

  const solutions = [
    {
      title: "Core Platform",
      description: "Lifetime EPR's full IT asset lifecycle management",
      onClick: handleCorePlatformClick,
      accentColor: "bg-primary",
    },
    {
      title: "PC as a Service",
      description: "First to market device solution combining 5G connectivity with IT services for SMBs",
      onClick: handlePCaaSClick,
      accentColor: "bg-[#E20074]",
    },
    {
      title: "Advanced Network Solutions",
      description: "Purpose built coverage for seamless connectivity and enhanced security",
      onClick: handleNetworkSolutionsClick,
      accentColor: "bg-[#FF4E3C]",
    },
  ];

  return (
    <section className="pt-48 md:pt-64 pb-20 md:pb-32 bg-slate-50 dark:bg-[#020817] parallelogram-section">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 animate-fade-up flex items-center justify-center gap-2 dark:text-white">
          <Layers className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
          Our Solutions
        </h2>
        <p className="text-center text-base md:text-lg mb-8 animate-fade-up max-w-2xl mx-auto dark:text-neutral-300">
          Comprehensive device lifecycle management with AI/ML-powered predictive maintenance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              onClick={solution.onClick}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:bg-slate-900/50 dark:border-slate-700 animate-fade-up opacity-0"
              style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`h-1.5 ${solution.accentColor}`} />
              <CardHeader className="pt-5 pb-2">
                <CardTitle className="text-lg dark:text-white">{solution.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-0 pb-4">
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsHeader;
