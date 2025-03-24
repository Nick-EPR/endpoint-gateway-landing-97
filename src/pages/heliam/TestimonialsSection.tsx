
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "HeliAM has transformed how we manage our IT assets. We've reduced asset-related costs by 30% and improved operational efficiency across the board.",
    author: "Sarah Johnson",
    role: "CIO, Global Tech Solutions",
    company: "Global Tech Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The visibility and control HeliAM provides is unmatched. From procurement to retirement, we now have complete oversight of our entire asset ecosystem.",
    author: "Michael Chen",
    role: "IT Director",
    company: "Innovate Financial",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The ROI was immediate. Within the first quarter of implementation, HeliAM identified redundant licenses and underutilized assets that saved us over $200K.",
    author: "Emma Rodriguez",
    role: "VP of Operations",
    company: "TechCorp Industries",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Organizations worldwide trust HeliAM to streamline their IT asset management processes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white dark:bg-neutral-800 p-8 md:p-12 rounded-2xl shadow-lg dark:shadow-black/10">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/4 flex flex-col items-center md:items-start">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h4 className="font-medium dark:text-white">{testimonial.author}</h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
                          <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4 relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 dark:text-primary/30" />
                        <p className="text-lg text-neutral-700 dark:text-neutral-200 mt-4 md:mt-0 italic">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative" />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
        
        {/* Results metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">97%</div>
            <p className="text-neutral-600 dark:text-neutral-300">Customer satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">30%</div>
            <p className="text-neutral-600 dark:text-neutral-300">Average cost reduction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">45%</div>
            <p className="text-neutral-600 dark:text-neutral-300">Improved productivity</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-primary">1M+</div>
            <p className="text-neutral-600 dark:text-neutral-300">Assets managed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
