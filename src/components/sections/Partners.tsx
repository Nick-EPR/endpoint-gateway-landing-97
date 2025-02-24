
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const Partners = () => {
  const partners = [{
    name: "CellHub",
    logo: "/lovable-uploads/2d1dd360-ac5b-41c4-8f0d-8f53db87032f.png",
    url: "https://www.cellhub.com",
    description: "Device procurement and logistics partner"
  }, {
    name: "T-Mobile",
    logo: "/lovable-uploads/4b84285a-ebf1-49a3-937a-ea9058b7726f.png",
    url: "https://www.t-mobile.com/business",
    description: "Strategic partnership for connected device solutions"
  }, {
    name: "D&H Distributing",
    logo: "/lovable-uploads/c59ae9e5-4a85-4b97-bd93-82bceb58dc08.png",
    url: "https://www.dandh.com",
    description: "IT distribution and supply chain solutions"
  }, {
    name: "Lifetime Service",
    logo: "/lovable-uploads/f979a2eb-3c5d-48e8-a965-839e8d446c09.png",
    url: "https://www.lifetimeservice.com",
    description: "Expert device repair and maintenance facility"
  }];

  const [api] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false
  }, [Autoplay({
    delay: 3000,
    stopOnInteraction: false
  })]);

  return <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll flex items-center justify-center gap-3 dark:text-white">
            <Star className="w-8 h-8 text-primary" />
            Our Partners
          </h2>
          <p className="text-lg text-neutral dark:text-neutral-300 mb-8 animate-on-scroll">
            Working with industry leaders to deliver comprehensive IT asset management solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel opts={{
          align: "center",
          loop: true
        }} plugins={[Autoplay({
          delay: 3000
        })]} className="w-full">
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/3">
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-6 rounded-xl hover:shadow-lg transition-shadow group block h-[160px] bg-primary-light dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700/50"
                  >
                    <div className="h-20 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="w-auto h-12 object-contain group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300 text-center mt-4 text-sm">
                      {partner.description}
                    </p>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>;
};

export default Partners;
