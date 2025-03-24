
import { useEffect, useState } from "react";

const ClientsSection = () => {
  // Placeholder logos - in a real implementation, these would be actual client logos
  const logos = [
    { name: "Company 1", class: "bg-neutral-200 dark:bg-neutral-700" },
    { name: "Company 2", class: "bg-neutral-300 dark:bg-neutral-600" },
    { name: "Company 3", class: "bg-neutral-200 dark:bg-neutral-700" },
    { name: "Company 4", class: "bg-neutral-300 dark:bg-neutral-600" },
    { name: "Company 5", class: "bg-neutral-200 dark:bg-neutral-700" },
    { name: "Company 6", class: "bg-neutral-300 dark:bg-neutral-600" },
  ];

  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-800/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl font-medium text-neutral-600 dark:text-neutral-300">
            Trusted by industry leaders worldwide
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`h-12 w-32 rounded-lg flex items-center justify-center ${logo.class}`}
              aria-label={logo.name}
            >
              <span className="text-neutral-500 dark:text-neutral-400 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
