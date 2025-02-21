
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Asset Management?</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
          Join leading organizations that trust HeliAM for their IT asset lifecycle management needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">Schedule a Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
