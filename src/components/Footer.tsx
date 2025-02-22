
import { Link } from "react-router-dom";
import { Shield, Bookmark } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png"
              alt="Lifetime EndPoint Resources"
              className="h-8 mb-4"
            />
            <p className="text-neutral">
              Leading provider of comprehensive IT asset management solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/security" className="text-neutral hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-neutral hover:text-primary transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Security Policy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Security Policy</h3>
            </div>
            <p className="text-neutral text-sm">
              We are committed to maintaining the security and privacy of your data. Our comprehensive security measures include ISO27001:2022 compliance, SOC 2 Type II certification, and DoD-standard data wiping protocols.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-8 pt-8 border-t border-neutral-100">
          <Link to="/mission" className="inline-block hover:text-primary transition-colors">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bookmark className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-xl">Our Mission</h3>
            </div>
          </Link>
          <p className="text-neutral text-center mb-8 max-w-3xl mx-auto">
            Our mission is to deliver a world-class end-user experience through customized IT lifecycle management solutions that boost efficiency, optimize resources, and evolve with our clients' needs.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral">
              © {new Date().getFullYear()} Lifetime EndPoint Resources, LLC. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="/privacy" className="text-neutral hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-8">
          <p className="text-sm text-neutral text-center">
            ISO27001:2022 Compliant | SOC 2 Type II Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
