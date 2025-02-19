import { Users, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY === 0) {
          setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    setShowNavbar(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 glass-card transition-all duration-300 ${
          showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
      >
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
            <Link to="/security" className="hover-lift text-neutral-600 hover:text-primary">Security</Link>
            <Link to="/contact" className="hover-lift text-primary font-medium">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-neutral mb-8">
              Get in touch with our team to learn more about our IT asset management solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-neutral-light rounded-xl">
                <Phone className="w-6 h-6 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-neutral">+1 (555) 123-4567</p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <Mail className="w-6 h-6 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-neutral">contact@lifetimeepr.com</p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-neutral">123 Business Ave, Suite 100<br />City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-lg text-neutral">
              Meet the experienced professionals leading our mission to transform IT asset management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership Cards */}
            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <img 
                src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png" 
                alt="Leadership Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leadership Role</h3>
                <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                <p className="text-neutral">
                  Experienced leader with expertise in IT asset management and enterprise solutions.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <img 
                src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png" 
                alt="Leadership Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leadership Role</h3>
                <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                <p className="text-neutral">
                  Technology visionary driving innovation in endpoint management solutions.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover-lift">
              <img 
                src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png" 
                alt="Leadership Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leadership Role</h3>
                <p className="text-primary font-medium mb-4">Chief Operations Officer</p>
                <p className="text-neutral">
                  Operations expert ensuring excellent service delivery and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Leadership Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-neutral">
                  Driving technological advancement in IT asset management
                </p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-neutral">
                  Delivering exceptional service and solutions
                </p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-neutral">
                  Building trust through transparent leadership
                </p>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
                <p className="text-neutral">
                  Prioritizing client success in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
