
import { Link } from "react-router-dom";

export const SecurityContact = () => {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Secure Your IT Assets?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation with our security experts to discuss your specific requirements and learn how we can protect your sensitive data throughout the IT asset lifecycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/security/whitepaper" 
              className="bg-card text-foreground border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Download Security Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
