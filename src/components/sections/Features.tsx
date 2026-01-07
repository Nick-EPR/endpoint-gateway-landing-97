import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import toolboxLogo from "/lovable-uploads/c1f14b18-5227-48a7-bed0-d8e8a08ffc32.png";
import lueminLogo from "/lovable-uploads/82f53487-163f-495f-a2d0-f1535273a1df.png";
import triangleImage from "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";
import { PlatformFeatures } from "./features/PlatformFeatures";
import { ProductFeatureColumn } from "./features/ProductFeatureColumn";
import { ProductLogos } from "./features/ProductLogos";
import { featureData } from "./features/featureData";

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        <ProductLogos 
          heliamLogo={heliamLogo}
          toolboxLogo={toolboxLogo}
          lueminLogo={lueminLogo}
        />

        <PlatformFeatures 
          features={featureData.platformFeatures}
          triangleImage={triangleImage}
          isSearching={false}
        />

        <div className="grid md:grid-cols-3 gap-8">
          <ProductFeatureColumn
            logo={heliamLogo}
            logoAlt="HeliAM"
            features={featureData.heliamFeatures}
            showLogo={false}
          />
          <ProductFeatureColumn
            logo={toolboxLogo}
            logoAlt="Toolbox"
            features={featureData.toolboxFeatures}
            showLogo={false}
          />
          <ProductFeatureColumn
            logo={lueminLogo}
            logoAlt="Luemin"
            features={featureData.lueminFeatures}
            showLogo={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
