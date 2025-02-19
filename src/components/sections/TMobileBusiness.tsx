
import { Shield, Network, Smartphone } from "lucide-react";

const TMobileBusiness = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            T-Mobile for Business Partnership
          </h2>
          <p className="text-lg text-neutral mb-8 animate-on-scroll">
            Empowering businesses with connected device solutions through our strategic partnership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 glass-card rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <Smartphone className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Partner Plus Connected Laptop</h3>
            <p className="text-neutral text-center">
              Seamless connectivity solutions for your mobile workforce with integrated device management
            </p>
          </div>

          <div className="p-8 glass-card rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <Network className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">PCaaS Solutions</h3>
            <p className="text-neutral text-center">
              PC-as-a-Service offerings that combine hardware, software, and connectivity in one solution
            </p>
          </div>

          <div className="p-8 glass-card rounded-xl hover:shadow-lg transition-shadow">
            <div className="mb-6 flex justify-center">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Secure Management</h3>
            <p className="text-neutral text-center">
              Enterprise-grade security and device management for your connected workforce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TMobileBusiness;
