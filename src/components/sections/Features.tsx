
import { useState } from "react";
import { Layers } from "lucide-react";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import toolboxLogo from "/lovable-uploads/c1f14b18-5227-48a7-bed0-d8e8a08ffc32.png";
import lueminLogo from "/lovable-uploads/82f53487-163f-495f-a2d0-f1535273a1df.png";
import triangleImage from "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";
import { Feature, DetailedFeature } from "./features/types";
import { SearchFeatures } from "./features/SearchFeatures";
import { PlatformFeatures } from "./features/PlatformFeatures";
import { ProductFeatureColumn } from "./features/ProductFeatureColumn";
import { featureData } from "./features/featureData";

const Features = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFeatures = (features: Feature[]) => {
    const searchTerm = searchQuery.toLowerCase();
    return searchQuery === "" ? features : features.filter(feature => 
      feature.title.toLowerCase().includes(searchTerm) || 
      feature.description.toLowerCase().includes(searchTerm) || 
      feature.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const isSearching = searchQuery.length > 0;

  return (
    <section id="features" className="py-20 md:py-32 bg-neutral-light dark:bg-neutral-800/80">
      <div className="container mx-auto px-4 max-w-7xl">
        {!isSearching && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 animate-fade-up flex items-center justify-center gap-2 dark:text-white">
              <Layers className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
              Complete ITAM Solutions
            </h2>
            <p className="text-center text-base md:text-lg mb-12 animate-fade-up max-w-2xl mx-auto dark:text-neutral-300">
              Comprehensive device lifecycle management with AI/ML-powered predictive maintenance
            </p>
          </>
        )}

        <SearchFeatures 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={handleClearSearch}
        />

        <div className={isSearching ? "space-y-12" : ""}>
          <PlatformFeatures 
            features={filteredFeatures(featureData.platformFeatures)}
            triangleImage={triangleImage}
            isSearching={isSearching}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <ProductFeatureColumn
              logo={heliamLogo}
              logoAlt="HeliAM"
              features={filteredFeatures(featureData.heliamFeatures)}
            />
            <ProductFeatureColumn
              logo={toolboxLogo}
              logoAlt="Toolbox"
              features={filteredFeatures(featureData.toolboxFeatures)}
            />
            <ProductFeatureColumn
              logo={lueminLogo}
              logoAlt="Luemin"
              features={filteredFeatures(featureData.lueminFeatures)}
            />
          </div>

          {!isSearching && (
            <div className="max-w-4xl mx-auto mt-20">
              <h3 className="text-xl font-semibold text-center mb-8">Additional Platform Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featureData.detailedFeatures.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-semibold text-lg text-neutral-800">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-neutral-600">
                          <div className="mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
