
import { Star, Users } from "lucide-react";

const Partnership = () => {
  return <section className="py-32 md:py-48">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img src="/lovable-uploads/afd5064d-80e1-4dc3-9a47-00f189d67bdd.png" alt="Lifetime Service" className="h-16 w-auto mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Strategic Partnership
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Enhancing our ITAM solutions through strategic collaboration
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Partnership with Lifetime Service
              </h3>
              <p className="text-neutral mb-6">
                Through our exclusive partnership with Lifetime Service, we deliver comprehensive repair and maintenance solutions that set us apart in the industry.
              </p>
              <ul className="space-y-4 text-neutral">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">Expert repair services for all IT assets</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">Rapid response times and efficient resolution</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">Nationwide coverage for consistent service quality</span>
                </li>
              </ul>
              <a href="https://lifetimeservice.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-primary hover:text-secondary transition-colors">
                Learn more about Lifetime Service →
              </a>
            </div>
            <div className="bg-neutral-light p-8 rounded-xl animate-on-scroll">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold mb-2">Partnership Benefits</h4>
                <p className="text-neutral">Our collaboration delivers enhanced value to clients through:</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-neutral">Integrated repair tracking within your ITAM system</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-neutral">Streamlined maintenance scheduling and reporting</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-neutral">Cost-effective repair solutions that extend asset lifecycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Partnership;
