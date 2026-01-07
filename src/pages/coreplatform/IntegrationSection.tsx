import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Wifi, Wrench } from "lucide-react";

const IntegrationSection = () => {
  const products = [
    {
      name: "HeliAM",
      description: "Advanced IT asset management with AI-powered discovery and lifecycle tracking",
      icon: Cpu,
      path: "/heliam",
      color: "bg-blue-500"
    },
    {
      name: "Toolbox",
      description: "Comprehensive toolkit for asset deployment, maintenance, and diagnostics",
      icon: Wrench,
      path: "/toolbox",
      color: "bg-emerald-500"
    },
    {
      name: "Advanced Network Solutions",
      description: "Enterprise connectivity solutions with enhanced security and coverage",
      icon: Wifi,
      path: "/ans",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Unified Ecosystem</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            The Core Platform seamlessly integrates with our entire product ecosystem, providing a unified experience across all your IT asset management needs.
          </p>
        </div>

        {/* Ecosystem diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative flex flex-col items-center">
            {/* Center logo */}
            <div className="relative z-10 bg-white dark:bg-neutral-800 rounded-full p-6 shadow-xl border-4 border-primary/20">
              <img 
                src="/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png" 
                alt="Lifetime EPR Core Platform" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="text-center mt-4 mb-8">
              <h3 className="text-xl font-bold dark:text-white">Core Platform</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Central Hub</p>
            </div>

            {/* Connection lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-primary/20 rounded-full hidden lg:block"></div>

            {/* Product cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {products.map((product, index) => (
                <Link 
                  key={product.name}
                  to={product.path}
                  className="group bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center mb-4`}>
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 dark:text-white group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {product.description}
                  </p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Integration benefits */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">Why Choose a Unified Platform?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-white">Single Source of Truth</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">All your asset data in one centralized platform with real-time synchronization.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-white">Streamlined Workflows</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Automated processes that span across discovery, management, and retirement.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-white">Reduced Complexity</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">One login, one interface, one support team for all your ITAM needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1 dark:text-white">Better Insights</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Cross-platform analytics for comprehensive visibility and informed decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
