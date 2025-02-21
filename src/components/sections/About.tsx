
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Your Partner in IT Asset Management
            </h2>
            <p className="text-neutral text-lg mb-8 animate-on-scroll">
              Since 2008, we've been pioneering innovative solutions in IT asset management, 
              serving enterprises across diverse industries. Our commitment to excellence 
              and customer satisfaction has made us a trusted partner in digital transformation.
            </p>
            <div className="flex flex-wrap gap-4 animate-on-scroll">
              <Link to="/leadership">
                <Button variant="default">Meet Our Team</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl animate-on-scroll">
              <img
                src="/lovable-uploads/e008c00c-4bf6-4ab1-81fa-ad040f234e85.png"
                alt="IT Asset Management Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-primary/10"></div>
          </div>
        </div>

        <div className="mt-24 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-neutral">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500k+</div>
            <div className="text-neutral">Devices Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-neutral">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <Globe className="w-8 h-8 mx-auto" />
            </div>
            <div className="text-neutral">Global Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
