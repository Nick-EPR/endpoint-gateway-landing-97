
import { Link } from "react-router-dom";
import { Shield, Bookmark } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 py-12 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png"
              alt="Lifetime EndPoint Resources"
              className="h-8 mb-4 dark:hidden"
            />
            <img 
              src="/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png"
              alt="Lifetime EPR Triangle Emblem"
              className="h-8 mb-4 hidden dark:block"
            />
            <p className="text-neutral dark:text-neutral-400">
              Leading provider of comprehensive IT asset management solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/security" className="text-neutral dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-neutral dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Security Policy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-semibold dark:text-white">Security Policy</h3>
            </div>
            <p className="text-neutral dark:text-neutral-400 text-sm">
              We are committed to maintaining the security and privacy of your data. Our comprehensive security measures include ISO27001:2022 certification, SOC 2 compliance, and DoD-standard data wiping protocols.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex flex-col items-center">
            <Link to="/mission" className="inline-flex items-center gap-2 mb-4 hover:text-primary transition-colors">
              <Bookmark className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-xl dark:text-white">Our Mission</h3>
            </Link>
          </div>
          <p className="text-neutral dark:text-neutral-400 text-center mb-8 max-w-3xl mx-auto">
            Our mission is to deliver a world-class end-user experience through customized IT lifecycle management solutions that boost efficiency, optimize resources, and evolve with our clients' needs.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral dark:text-neutral-400">
              © {new Date().getFullYear()} Lifetime EndPoint Resources, LLC. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="/privacy" className="text-neutral dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-8">
          <p className="text-sm text-neutral dark:text-neutral-400 text-center flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            ISO27001:2022 Certified | SOC 2 Compliant | HIPAA Compliant
          </p>
        </div>

        {/* Bottom Logo - added pb-16 to provide space for the bottom navbar */}
        <div className="mt-8 pb-16 flex justify-center">
          <Link to="/" className="block">
            <img 
              src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png"
              alt="Lifetime EndPoint Resources"
              className="h-12 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 dark:hidden"
            />
            <img 
              src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png"
              alt="Lifetime EndPoint Resources"
              className="h-12 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 hidden dark:block"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
