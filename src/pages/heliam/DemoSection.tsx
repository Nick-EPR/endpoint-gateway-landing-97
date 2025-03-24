
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Monitor, ExternalLink } from "lucide-react";

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inventory' | 'reporting'>('dashboard');
  
  const demos = {
    dashboard: {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
      title: "Interactive Dashboard",
      description: "Get a bird's-eye view of your entire IT asset ecosystem with customizable dashboards that provide real-time analytics and insights."
    },
    inventory: {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      title: "Inventory Management",
      description: "Track every detail of your hardware and software assets, from specifications and configurations to ownership and location."
    },
    reporting: {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
      title: "Advanced Reporting",
      description: "Generate comprehensive reports on asset utilization, compliance status, cost analysis, and more with our powerful reporting engine."
    }
  };
  
  const active = demos[activeTab];

  return (
    <section className="py-20 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Demo image with frame */}
            <div className="relative">
              <div className="absolute inset-0 -m-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 blur-xl opacity-70 dark:from-blue-500/30 dark:to-blue-700/30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-blue-200/50 dark:border-blue-700/50">
                <div className="bg-neutral-100 dark:bg-neutral-800 h-8 flex items-center px-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img 
                  src={active.image} 
                  alt={active.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-12 -right-4 bg-white dark:bg-neutral-800 shadow-lg p-3 rounded-lg rotate-3 border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium dark:text-white">Live Demo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                See HeliAM in Action
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                Experience the power and simplicity of our unified IT asset management platform with an interactive demo.
              </p>
              
              {/* Demo tabs */}
              <div className="flex gap-2 mb-8 p-1 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg w-fit backdrop-blur-sm">
                {(['dashboard', 'inventory', 'reporting'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab 
                        ? 'bg-white dark:bg-neutral-700 text-blue-500 shadow-sm' 
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{active.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                {active.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Interactive data visualizations",
                  "Drag-and-drop customization",
                  "Role-based access controls",
                  "Automated workflows and alerts"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-blue-500" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600">
                  Request Full Demo
                </Button>
                <Button variant="outline" size="lg" className="gap-2 dark:text-white border-blue-200 dark:border-blue-800/50">
                  Interactive Tour <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
