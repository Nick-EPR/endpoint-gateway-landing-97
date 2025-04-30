
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [{
  quote: "HeliAM has transformed how we manage our IT assets. We've reduced asset-related costs by 30% and improved operational efficiency across the board.",
  author: "Sarah Johnson",
  role: "CIO, Global Tech Solutions",
  company: "Global Tech Solutions",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
}, {
  quote: "The visibility and control HeliAM provides is unmatched. From procurement to retirement, we now have complete oversight of our entire asset ecosystem.",
  author: "Michael Chen",
  role: "IT Director",
  company: "Innovate Financial",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
}, {
  quote: "The ROI was immediate. Within the first quarter of implementation, HeliAM identified redundant licenses and underutilized assets that saved us over $200K.",
  author: "Emma Rodriguez",
  role: "VP of Operations",
  company: "TechCorp Industries",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
}];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
            What our clients say
          </h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-lg">
                    <div className="flex items-start mb-6">
                      <Quote className="text-primary w-10 h-10 mr-4 flex-shrink-0" />
                      <p className="text-lg text-neutral-700 dark:text-neutral-300 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-medium text-neutral-900 dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static translate-y-0 left-0" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
