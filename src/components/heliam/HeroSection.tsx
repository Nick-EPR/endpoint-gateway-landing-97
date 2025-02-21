
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4bf1-81fa-ad040f234e85.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 backdrop-blur-[2px] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="HeliAM Interface"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center mb-12">
          <img src={heliamLogo} alt="HeliAM Logo" className="h-24 mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            HeliAM IT Asset Management—an all-in-one platform designed to simplify and streamline your IT asset lifecycle.
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-8">
            Transform your IT asset management with enterprise-grade security, automated workflows, and deep analytics that optimize asset utilization while reducing operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
