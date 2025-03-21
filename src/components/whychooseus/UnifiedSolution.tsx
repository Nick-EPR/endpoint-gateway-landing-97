
import { CheckCircle2, Layers, Infinity, Receipt, LineChart } from "lucide-react";

const UnifiedSolution = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mb-2 animate-float">
              <img 
                src="/lovable-uploads/11a5e41f-5de6-420a-8818-f40957857208.png" 
                alt="EPR Logo" 
                className="h-6 w-6"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Our Solution: A Unified Approach to IT Asset Management
          </h2>
          <p className="text-lg text-muted-foreground">
            At Lifetime EPR, we've developed a comprehensive IT Asset Management platform 
            that brings together all the essential tools you need into a single, seamless solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Layers className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">All-In-One Platform</h3>
            <p className="text-muted-foreground">
              Eliminate the cost and complexity of managing multiple vendors and platforms 
              with our unified ITAM solution that covers the entire asset lifecycle.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Integrated help desk & CMDB</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Built-in UEM/MDM functionality</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Asset tracking & management</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Infinity className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">No Integration Headaches</h3>
            <p className="text-muted-foreground">
              Say goodbye to building and maintaining fragile integrations between 
              disparate systems, saving both time and significant IT resources.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Zero integration development costs</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>No API maintenance worries</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Immediate access to new features</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Receipt className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Physical Asset Lifecycle</h3>
            <p className="text-muted-foreground">
              Our solution streamlines physical asset management from procurement 
              to retirement, automating previously manual processes.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Automated procurement workflows</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Standardized device provisioning</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Secure decommissioning</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <LineChart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cost-Effective Solution</h3>
            <p className="text-muted-foreground">
              Reduce total cost of ownership with our subscription-based model that 
              eliminates multiple license fees and maintenance costs.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Predictable subscription pricing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Reduced IT labor costs</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Extended asset value recovery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedSolution;
