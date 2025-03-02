
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ToolboxIntegrationSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-primary/5 dark:bg-primary/10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Enhanced with Toolbox</h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Leverage Toolbox's powerful features within HeliAM to optimize asset tracking, security, and management throughout the lifecycle.
            </p>
            <Link to="/toolbox">
              <Button variant="outline" className="group dark:text-white dark:border-neutral-700">
                Explore Toolbox Features
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxIntegrationSection;
