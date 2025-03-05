
import { SecurityFeature } from "./types";
import { CertificationLogo } from "./CertificationLogo";

interface PrimaryFeaturesProps {
  features: SecurityFeature[];
}

export const PrimaryFeatures = ({ features }: PrimaryFeaturesProps) => {
  return (
    <section className="relative py-32 md:py-48 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
          Enterprise-Grade Security Features
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Our comprehensive security measures and certifications ensure your data remains protected at every stage of the IT asset lifecycle.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="mb-4 flex justify-between items-start">
                <div>{feature.icon}</div>
                {feature.certification && (
                  <CertificationLogo 
                    name={feature.certification.name}
                    logo={feature.certification.logo}
                    alt={feature.certification.alt}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-muted"></path>
        </svg>
      </div>
    </section>
  );
};
