
const Partners = () => {
  const partners = [
    {
      name: "T-Mobile",
      logo: "/lovable-uploads/790d1cf5-882e-4b6c-b4e7-8b8b47888d95.png",
      url: "https://www.t-mobile.com/business",
      description: "Strategic partnership for connected device solutions"
    },
    {
      name: "CellHub",
      logo: "/lovable-uploads/2a173961-954b-4a73-99e0-539b5f04b83d.png",
      url: "https://www.cellhub.com",
      description: "Device procurement and logistics partner"
    },
    {
      name: "D&H Distributing",
      logo: "/lovable-uploads/9924917e-87ae-46a8-94de-825e91b581ba.png",
      url: "https://www.dandh.com",
      description: "IT distribution and supply chain solutions"
    }
  ];

  return (
    <section className="py-24 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Our Partners
          </h2>
          <p className="text-lg text-neutral mb-8 animate-on-scroll">
            Working with industry leaders to deliver comprehensive IT asset management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 glass-card rounded-xl hover:shadow-lg transition-shadow group"
            >
              <div className="mb-6 h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{partner.name}</h3>
              <p className="text-neutral text-center">{partner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
