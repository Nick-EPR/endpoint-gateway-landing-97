
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Partners = () => {
  const partners = [
    {
      name: "T-Mobile",
      logo: "/lovable-uploads/999e601c-e7e8-4f68-96a2-84dc5eb27a58.png",
      url: "https://www.t-mobile.com/business",
      description: "Strategic partnership for connected device solutions"
    },
    {
      name: "CellHub",
      logo: "/lovable-uploads/5aca21a7-89ab-4f46-a62d-9489eec4c6ab.png",
      url: "https://www.cellhub.com",
      description: "Device procurement and logistics partner"
    },
    {
      name: "D&H Distributing",
      logo: "/lovable-uploads/c59ae9e5-4a85-4b97-bd93-82bceb58dc08.png",
      url: "https://www.dandh.com",
      description: "IT distribution and supply chain solutions"
    },
    {
      name: "TD Synnex",
      logo: "/lovable-uploads/bf141abc-e0ae-478b-a99e-7157df8ceece.png",
      url: "https://www.tdsynnex.com",
      description: "Global IT distribution and solutions aggregator"
    },
    {
      name: "Lifetime Service",
      logo: "/lovable-uploads/f979a2eb-3c5d-48e8-a965-839e8d446c09.png",
      url: "https://www.lifetimeservice.com",
      description: "Expert device repair and maintenance facility"
    }
  ];

  const [api] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

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

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/3">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-card rounded-xl hover:shadow-lg transition-shadow group block h-[140px]"
                  >
                    <div className="h-16 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`w-auto object-contain group-hover:scale-105 transition-transform ${
                          partner.name === 'Lifetime Service' 
                            ? 'max-w-[80px] max-h-14' 
                            : partner.name === 'T-Mobile'
                            ? 'max-h-[4.5rem]'
                            : partner.name === 'D&H Distributing'
                            ? 'max-h-[4.5rem]'
                            : partner.name === 'CellHub'
                            ? 'max-h-16'
                            : 'max-h-14'
                        }`}
                      />
                    </div>
                    <p className="text-neutral text-center mt-2 text-sm">{partner.description}</p>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
