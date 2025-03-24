
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart, Layers, Zap } from "lucide-react";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4ab1-81fa-ad040f234e85.png";

const IntegrationSection = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">HeliAM Integration</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Combine physical asset operations with IT asset management for a complete end-to-end solution
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800/60 rounded-xl shadow-lg dark:shadow-none p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src={heliamLogo} alt="HeliAM Logo" className="h-12" />
              </div>
              <div className="h-px md:h-20 md:w-px bg-neutral-200 dark:bg-neutral-700"></div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Complete Asset Lifecycle Management</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  HeliAM's IT asset management platform works seamlessly with Toolbox for unparalleled 
                  visibility and control throughout the complete asset lifecycle.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-neutral-800/60 p-6 rounded-xl shadow dark:shadow-none">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg inline-flex mb-4">
                <Layers className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Unified Data</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Synchronized asset data between systems ensures consistent reporting and visibility.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800/60 p-6 rounded-xl shadow dark:shadow-none">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg inline-flex mb-4">
                <Zap className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Automated Workflows</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Trigger repair and logistics actions based on IT asset status changes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800/60 p-6 rounded-xl shadow dark:shadow-none">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg inline-flex mb-4">
                <BarChart className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Comprehensive Analytics</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Get insights across digital and physical asset management processes.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/heliam">
              <Button variant="outline" className="gap-2 group">
                Learn About HeliAM
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
