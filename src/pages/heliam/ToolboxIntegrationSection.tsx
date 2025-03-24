
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import toolboxLogo from "/lovable-uploads/5f646840-4a0c-484c-bd5d-6707af1f66ca.png";

const ToolboxIntegrationSection = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white dark:bg-neutral-800/60 rounded-2xl overflow-hidden shadow-lg dark:shadow-none">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={toolboxLogo} 
                  alt="Toolbox Logo" 
                  className="h-10 mr-4"
                />
                <div className="h-10 w-px bg-neutral-200 dark:bg-neutral-700 mr-4"></div>
                <h3 className="text-2xl font-bold dark:text-white">Physical Asset Management</h3>
              </div>
              
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Extend your IT asset management capability with Toolbox, our comprehensive 
                physical asset tracking and repair management system. Seamlessly integrate 
                with HeliAM for complete lifecycle management.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Warehouse and inventory management
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Repair depot operations
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Logistics and shipping management
                  </span>
                </div>
              </div>
              
              <Link to="/toolbox">
                <Button variant="outline" className="group">
                  Learn More About Toolbox
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Warehouse Operations" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxIntegrationSection;
