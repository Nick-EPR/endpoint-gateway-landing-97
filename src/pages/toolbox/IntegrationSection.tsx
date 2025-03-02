
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IntegrationSection = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Seamless HeliAM Integration</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
          Connect your physical asset operations directly with HeliAM for complete visibility and control over your device lifecycle.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/heliam">
            <Button variant="outline" className="group dark:text-white dark:border-neutral-700">
              Learn About HeliAM
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button>Contact Sales</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
