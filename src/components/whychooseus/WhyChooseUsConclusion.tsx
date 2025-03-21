
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const WhyChooseUsConclusion = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Stop Struggling with Fragmented ITAM
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                At Lifetime EPR, we offer more than just software; we provide a partnership 
                for comprehensive IT asset management that transforms how your organization 
                handles technology assets from procurement to retirement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">Single platform for complete asset lifecycle management</p>
                </div>
                <div className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">No complex integrations or maintenance headaches</p>
                </div>
                <div className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">Streamlined physical and digital asset processes</p>
                </div>
                <div className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground">Significant cost savings and operational efficiency</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request a Demo 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/heliam" 
                  className="inline-flex items-center bg-white text-foreground border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Explore Our Platform
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1561121908-5bbe2c65179d?q=80" 
                alt="Unified IT Asset Management" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsConclusion;
