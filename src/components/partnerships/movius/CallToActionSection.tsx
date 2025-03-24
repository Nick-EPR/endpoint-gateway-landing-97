
import React from "react";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
            Ready to Transform Your Communications Infrastructure?
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl mx-auto">
            Discover how the strategic partnership between Movius and Lifetime EndPoint Resources 
            can modernize your business communications while enhancing security and reducing costs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-left hover:shadow-md transition-shadow border-primary/20 bg-white dark:bg-neutral-900">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Contact Our Partnership Team</h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  Reach out to our dedicated team to learn more about how our partnership with Movius can transform your communications.
                </p>
                <Button asChild className="w-full gap-2">
                  <a href="mailto:marc@lifetimeepr.com">
                    Email marc@lifetimeepr.com
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-left hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Schedule a Consultation</h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  Discuss your specific needs with our experts and discover the competitive advantages of this partnership.
                </p>
                <Button asChild variant="outline" className="w-full gap-2">
                  <a href="/contact">
                    Request More Information
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <img 
                src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png" 
                alt="Lifetime EPR Logo" 
                className="h-8"
              />
              <div className="h-8 w-px bg-neutral-300 dark:bg-neutral-600 hidden md:block"></div>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                A Strategic Partnership to Deliver Next-Generation Communications Solutions
              </p>
              <div className="h-8 w-px bg-neutral-300 dark:bg-neutral-600 hidden md:block"></div>
              <img 
                src="/lovable-uploads/451c6e0c-a782-43f8-99d3-0354cd584350.png" 
                alt="Movius Logo" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
