
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";

const ReadyToStart = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/10 dark:via-primary/5 dark:to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Modernize Your Endpoints Today
            </h2>
            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">
              Stop managing chaos and start managing outcomes.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
              It's time to stop the old-school IT grind and embrace PCaaS.
            </p>
            
            <Button 
              size="lg" 
              className="text-xl px-10 py-6 bg-primary hover:bg-primary/90 group"
              onClick={() => window.open('https://test.lifetimeepr.io/pcaas-enrollment', '_blank')}
            >
              Enroll Your Team Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:marc@lifetimeepr.com" 
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  marc@lifetimeepr.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+17327706809" 
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  (732) 770-6809
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">Website</h3>
                <a 
                  href="https://www.lifetimeepr.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  www.lifetimeepr.com
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-800 pt-8 text-center">
              <p className="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Lifetime Endpoint Resources. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs mt-2">
                PCaaS powered by T-Mobile and Lifetime Endpoint Resources partnership.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ReadyToStart;
