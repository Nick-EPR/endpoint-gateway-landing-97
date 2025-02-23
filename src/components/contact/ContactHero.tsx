
import { Mail } from "lucide-react";
import LocationMap from "../LocationMap";
import LocationCard from "./LocationCard";
import EmailContact from "./EmailContact";
import { useEffect, useState } from "react";

const ContactHero = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Start zoom animation after a longer delay to match map animation
    const timer = setTimeout(() => {
      setIsZoomed(true);
    }, 3500); // Delayed to start fade-in after map starts zooming (2000ms + some zoom time)

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <LocationMap />
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isZoomed 
              ? 'bg-black/50' 
              : 'bg-black/0 scale-[2.5] transform-origin-center'
          }`} 
        />
      </div>
      
      {/* Content */}
      <div className={`relative pt-32 pb-24 container mx-auto px-4 transition-opacity duration-1000 ${
        isZoomed ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="text-center max-w-3xl mx-auto">
          <Mail className="w-12 h-12 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-lg text-white/90 mb-8">
            Get in touch with our team to learn more about our IT asset management solutions.
          </p>
          
          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <LocationCard 
              name="East Coast Office"
              address="1955 Wehrle Drive Suite C, Buffalo NY, 14221"
            />
            <LocationCard 
              name="West Coast Office"
              address="3190 Chicago Avenue, Riverside, CA 92507"
            />
            <LocationCard 
              name="Jacksonville Office"
              address="Coming Soon"
              isComingSoon
            />
            <EmailContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
