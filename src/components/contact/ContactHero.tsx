import LocationMap from "../LocationMap";
import LocationCard from "./LocationCard";
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
    <section className="relative min-h-[70vh] bg-background overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full">
        <LocationMap />
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isZoomed 
              ? 'bg-black/50 dark:bg-black/70' 
              : 'bg-black/0 scale-[2.5] transform-origin-center'
          }`} 
        />
      </div>
      
      {/* Content */}
      <div className={`relative pt-32 pb-24 container mx-auto px-4 transition-opacity duration-1000 ${
        isZoomed ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Locations</h1>
          
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
