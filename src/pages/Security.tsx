
import { Shield, Lock, CheckCircle2, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png"
                alt="Lifetime EndPoint Resources"
                className="h-8 md:h-10"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/#features" className="hover-lift text-neutral-600 hover:text-primary">Features</Link>
            <Link to="/#solutions" className="hover-lift text-neutral-600 hover:text-primary">Solutions</Link>
            <Link to="/security" className="hover-lift text-primary font-medium">Security</Link>
            <Link to="/contact" className="hover-lift text-neutral-600 hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-b from-neutral-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Enterprise-Grade Security Standards
            </h1>
            <p className="text-xl text-neutral-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Your assets deserve the highest level of protection. Our comprehensive security measures ensure your data and hardware are safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-xl hover-lift">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">ISO 27001:2022 Certified</h3>
              <p className="text-neutral-600">
                Our facilities and processes are ISO 27001:2022 certified, ensuring we meet the highest international standards for information security management systems.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Regular third-party audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Documented security procedures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Risk management framework</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl hover-lift">
              <Lock className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">HIPAA Compliance</h3>
              <p className="text-neutral-600">
                We maintain strict HIPAA compliance to protect sensitive healthcare information during asset management processes.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Secure data handling protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Staff HIPAA training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Physical security measures</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl hover-lift">
              <FileCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Data Management</h3>
              <p className="text-neutral-600">
                Comprehensive data management policies ensure your sensitive information is protected throughout the asset lifecycle.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Secure data wiping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Chain of custody tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Audit trail maintenance</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl hover-lift">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Physical Security</h3>
              <p className="text-neutral-600">
                Our facilities feature state-of-the-art physical security measures to protect your assets.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>24/7 surveillance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Access control systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Secure storage areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
