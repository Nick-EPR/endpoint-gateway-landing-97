
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">See Toolbox in Action</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Watch how Toolbox can transform your warehouse, repair, and logistics operations with a single integrated platform
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl dark:shadow-primary/10">
            <div className="aspect-w-16 aspect-h-9 relative bg-neutral-200 dark:bg-neutral-800">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Toolbox Demo" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full h-16 w-16 bg-primary/90 hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Play className="h-6 w-6 text-white ml-1" fill="white" />
                </Button>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Streamlined Repair Process Walkthrough</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">4:32</p>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  More Videos <ArrowRight className="h-3 w-3" />
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
