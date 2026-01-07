const ClientsSection = () => {
  const logos = [
    { name: "Enterprise 1", class: "bg-neutral-200 dark:bg-neutral-700" },
    { name: "Enterprise 2", class: "bg-neutral-300 dark:bg-neutral-600" },
    { name: "Enterprise 3", class: "bg-neutral-200 dark:bg-neutral-700" },
    { name: "Enterprise 4", class: "bg-neutral-300 dark:bg-neutral-600" },
    { name: "Enterprise 5", class: "bg-neutral-200 dark:bg-neutral-700" },
    { name: "Enterprise 6", class: "bg-neutral-300 dark:bg-neutral-600" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10 text-neutral-900 dark:text-white">
            Trusted by leading organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className={`${logo.class} rounded-lg h-24 flex items-center justify-center px-6`}
              >
                <span className="font-medium text-neutral-600 dark:text-neutral-200">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
