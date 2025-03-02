
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Ready to Transform Your IT Asset Management?</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
          Join leading organizations that trust HeliAM for their IT asset lifecycle management.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button size="lg">Schedule Platform Demo</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="dark:text-white dark:border-neutral-700">Request Platform Pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
