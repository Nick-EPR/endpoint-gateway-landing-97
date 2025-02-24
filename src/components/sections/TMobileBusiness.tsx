
import { Shield, Network, Smartphone, Laptop, Cpu, FileText, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import GuideImage from "./tmobile/GuideImage";
import FeatureCard from "./tmobile/FeatureCard";
import BenefitCard from "./tmobile/BenefitCard";

const TMobileBusiness = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="py-20 bg-neutral-light dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <img src="/lovable-uploads/b256dcc1-0c91-4c89-84dd-fa02e6675757.png" alt="Lifetime EndPoint Resources" className="h-12 md:h-16 w-auto" />
              <span className="text-xl md:text-2xl font-semibold text-neutral dark:text-white">+</span>
              <img src="/lovable-uploads/db5c2503-a1b3-49cc-a4d8-2e1cca8144e9.png" alt="T-Mobile" className="h-12 md:h-16 w-auto" />
            </div>
            <p className="text-base md:text-lg text-neutral dark:text-neutral-300 mb-8 animate-on-scroll px-4">
              Empowering businesses with advanced device management and intelligent infrastructure solutions through our strategic partnership with T-Mobile
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#E30074]" />
              <h3 className="text-2xl font-semibold text-center dark:text-white">Latest Updates & Guides</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 bg-white dark:bg-neutral-900/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#E30074]" />
                  <h4 className="text-xl font-semibold dark:text-white">Windows 11 Transition Guide</h4>
                </div>
                <p className="text-neutral dark:text-neutral-300 mb-6">
                  Essential information about the Windows 10 end-of-life timeline and recommended steps for a smooth transition to Windows 11.
                </p>
                <GuideImage 
                  src="/lovable-uploads/5f7f3800-f00c-4dc9-831d-dc17898e36d3.png" 
                  alt="Windows 11 Transition Guide Page 1" 
                  fileName="windows11-transition-guide-1.png" 
                  isPartOfDocument={true} 
                  nextPage={{
                    src: "/lovable-uploads/d6442af6-808f-4c9c-bbda-04b19709ec68.png",
                    alt: "Windows 11 Transition Guide Page 2",
                    fileName: "windows11-transition-guide-2.png"
                  }} 
                />
              </div>

              <div className="rounded-xl p-6 bg-white dark:bg-neutral-900/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-[#E30074]" />
                  <h4 className="text-xl font-semibold dark:text-white">Healthcare Digital Transformation Guide</h4>
                </div>
                <p className="text-neutral dark:text-neutral-300 mb-6">
                  Discover how our partnership with T-Mobile revolutionizes healthcare connectivity with 5G solutions designed for modern medical environments.
                </p>
                <GuideImage 
                  src="/lovable-uploads/ba322697-6a94-43af-a340-e3a4e4a5fdfd.png" 
                  alt="Healthcare Digital Transformation Guide Page 1" 
                  fileName="healthcare-transformation-guide-1.png" 
                  isPartOfDocument={true} 
                  nextPage={{
                    src: "/lovable-uploads/14f48861-ae47-4548-8b0d-5345bc615b39.png",
                    alt: "Healthcare Digital Transformation Guide Page 2",
                    fileName: "healthcare-transformation-guide-2.png"
                  }} 
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            <FeatureCard 
              title="Partner Plus Connected Laptop" 
              description="Experience seamless connectivity with our 5G-enabled laptops, designed specifically for modern business needs. No more juggling separate data plans or external connections." 
              icon={Laptop} 
              benefits={[
                "Built-in secure 5G connectivity for anywhere access",
                "Seamless integration with enterprise applications",
                "Enhanced security features for mobile workforce"
              ]} 
            />
            <FeatureCard 
              title="PCaaS Solutions" 
              description="Transform your IT infrastructure with our PC-as-a-Service model, offering flexible, subscription-based access to the latest technology without significant upfront investments." 
              icon={Cpu} 
              benefits={[
                "All-inclusive device lifecycle management",
                "Predictable monthly costs for easier budgeting",
                "Scalable services that grow with your business"
              ]} 
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-[#E30074]" />
              <h3 className="text-xl md:text-2xl font-semibold text-center dark:text-white">
                Key Benefits
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <BenefitCard title="Enterprise Security" description="Comprehensive security features and management tools to protect your business data" icon={Shield} />
              <BenefitCard title="5G Connectivity" description="Always-on, high-speed connectivity for your mobile workforce" icon={Network} />
              <div className="sm:col-span-2 md:col-span-1">
                <BenefitCard title="Device Management" description="Simplified deployment and management of your entire device fleet" icon={Smartphone} />
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-12 md:mt-16 text-center px-4">
            <Link to="/contact#contact">
              <button className="w-full sm:w-auto bg-[#E30074] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#cc0068] transition-colors duration-200">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TMobileBusiness;
