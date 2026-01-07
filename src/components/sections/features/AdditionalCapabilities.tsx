import { featureData } from "./featureData";
import { Layers } from "lucide-react";

const AdditionalCapabilities = () => {
  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground flex items-center justify-center gap-3">
          <Layers className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          Additional Platform Capabilities
        </h2>
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
    </section>
  );
};

export default AdditionalCapabilities;
