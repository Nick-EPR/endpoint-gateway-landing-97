import { memo } from "react";
import { Settings } from "lucide-react";
import { featureData } from "./featureData";

export const ITAMSolutionSection = memo(() => {
  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Your Perfect ITAM Solution */}
        <div id="perfect-itam-solution" className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 animate-fade-up">
            <Settings className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Your Perfect ITAM Solution</h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Choose from our specialized products to create an ITAM solution that perfectly matches 
            your use case and business requirements.
          </p>
        </div>

        {/* Additional Platform Capabilities */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Additional Platform Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featureData.detailedFeatures.map((category, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">{category.category}</h4>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ITAMSolutionSection.displayName = "ITAMSolutionSection";
