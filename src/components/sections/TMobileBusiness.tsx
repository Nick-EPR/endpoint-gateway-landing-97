
import { Shield, Network, Smartphone, Check, Laptop, Cpu } from "lucide-react";

const TMobileBusiness = () => {
  const benefits = [
    "Built-in 5G connectivity for seamless network access",
    "Simplified device management and deployment",
    "Predictable monthly costs with no upfront investment",
    "Comprehensive lifecycle management",
    "Automatic software updates and security patches",
    "Flexible scaling as your business grows"
  ];

  return (
    <section className="relative py-20 bg-white">
      {/* Top slanted divider */}
      <div className="absolute top-0 left-0 w-full h-16 bg-neutral-50 transform -skew-y-3 -translate-y-8 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <img 
              src="/lovable-uploads/b256dcc1-0c91-4c89-84dd-fa02e6675757.png"
              alt="Lifetime EndPoint Resources"
              className="h-12 md:h-16 w-auto"
            />
            <span className="text-xl md:text-2xl font-semibold text-neutral">+</span>
            <img 
              src="/lovable-uploads/db5c2503-a1b3-49cc-a4d8-2e1cca8144e9.png"
              alt="T-Mobile"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <p className="text-base md:text-lg text-neutral mb-8 animate-on-scroll px-4">
            Empowering businesses with connected device solutions through our strategic partnership with T-Mobile, delivering reliable, secure, and scalable IT device management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="glass-card p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Laptop className="w-6 md:w-8 h-6 md:h-8 text-[#E30074] mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold">Partner Plus Connected Laptop</h3>
              </div>
              <p className="text-sm md:text-base text-neutral mb-6">
                Experience seamless connectivity with our 5G-enabled laptops, designed specifically for modern business needs. No more juggling separate data plans or external connections.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-neutral">Built-in secure 5G connectivity for anywhere access</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-neutral">Seamless integration with enterprise applications</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-neutral">Enhanced security features for mobile workforce</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-6 md:w-8 h-6 md:h-8 text-[#E30074] mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold">PCaaS Solutions</h3>
              </div>
              <p className="text-sm md:text-base text-neutral mb-6">
                Transform your IT infrastructure with our PC-as-a-Service model, offering flexible, subscription-based access to the latest technology without significant upfront investments.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-neutral">All-inclusive device lifecycle management</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-neutral">Predictable monthly costs for easier budgeting</p>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-[#E30074] mt-1 mr-2 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-neutral">Scalable services that grow with your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 animate-on-scroll">
            Key Benefits
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6 glass-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <Shield className="w-10 md:w-12 h-10 md:h-12 text-[#E30074]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-center">Enterprise Security</h4>
              <p className="text-xs md:text-sm text-neutral text-center">
                Comprehensive security features and management tools to protect your business data
              </p>
            </div>

            <div className="p-4 md:p-6 glass-card rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <Network className="w-10 md:w-12 h-10 md:h-12 text-[#E30074]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-center">5G Connectivity</h4>
              <p className="text-xs md:text-sm text-neutral text-center">
                Always-on, high-speed connectivity for your mobile workforce
              </p>
            </div>

            <div className="p-4 md:p-6 glass-card rounded-xl hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <div className="mb-4 flex justify-center">
                <Smartphone className="w-10 md:w-12 h-10 md:h-12 text-[#E30074]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-center">Device Management</h4>
              <p className="text-xs md:text-sm text-neutral text-center">
                Simplified deployment and management of your entire device fleet
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto mt-12 md:mt-16 text-center px-4">
          <button className="w-full sm:w-auto bg-[#E30074] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#cc0068] transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Bottom slanted divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-neutral-light transform skew-y-3 translate-y-8 z-0"></div>
    </section>
  );
};

export default TMobileBusiness;
