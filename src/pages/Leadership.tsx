import { Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

const Leadership = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    // Keep this for potential future use
  };

  const leaders = [
    {
      name: "Michael DeJoy",
      title: "CEO/President",
      image: "/lovable-uploads/5bf7e2a1-0726-4b1b-81c8-22ec0a70f17b.png",
      bio: "As CEO/President, Michael provides strategic direction and oversees the overall operations of Lifetime EPR. His leadership emphasizes security and sustainability in IT asset management, driving the company's mission to revolutionize endpoint management solutions. With extensive experience in executive leadership and business development, Michael ensures Lifetime EPR remains at the forefront of innovative IT services.",
      email: "Mike@LifetimeEPR.com",
      phone: "716.867.4322"
    },
    {
      name: "Ron Bellus",
      title: "VP of Marketing",
      image: "/lovable-uploads/1875be8a-5f88-40e8-b85c-15ad388204a7.png",
      bio: "Ron leads Lifetime EPR's marketing strategies, brand development, and customer engagement initiatives. With a strong background in digital strategy and communications, he drives the company's market presence and customer acquisition efforts. His innovative approach to marketing helps position Lifetime EPR as a trusted partner in IT asset management."
    },
    {
      name: "Nick Burdick",
      title: "VP of Technology",
      image: "/lovable-uploads/de0ae0ac-14bc-4ead-8802-50fea88c5890.png",
      bio: "As VP of Technology, Nick leads Lifetime EPR's technological innovations and IT infrastructure. His expertise in technology leadership and IT management ensures the company delivers cutting-edge solutions in IT asset management. Nick's forward-thinking approach helps maintain Lifetime EPR's position as an industry leader in endpoint management technology."
    },
    {
      name: "Heather Novak",
      title: "VP of Product Development",
      image: "/lovable-uploads/d085cb0d-47c3-4598-ad6d-d64c8e9b99fc.png",
      bio: "Heather drives the creation and enhancement of Lifetime EPR's service offerings, with a particular focus on PCaaS solutions and strategic partnerships. Her expertise in product strategy and IT solutions ensures that Lifetime EPR's services consistently meet and exceed client expectations. Under her leadership, the product development team continues to innovate and expand the company's service portfolio."
    },
    {
      name: "Marc Caponegro",
      title: "VP of Business Development and Channels",
      image: "/lovable-uploads/1792242b-3531-4f82-b1c4-99ed1d9216b3.png",
      bio: "Marc leads Lifetime EPR's business development and channel partnership initiatives, playing a crucial role in expanding the company's market reach through strategic alliances. His expertise in sales leadership and channel development has been instrumental in securing key partnerships, including the strategic collaboration with T-Mobile. Marc's efforts continue to drive Lifetime EPR's growth and market expansion."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-lg text-neutral">
              Meet the experienced professionals driving our mission to revolutionize IT asset management through innovation, security, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3 relative h-[300px] md:h-auto">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="absolute w-full h-full object-cover object-[center_center]"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-primary font-medium mb-4">{leader.title}</p>
                    <p className="text-neutral mb-4">{leader.bio}</p>
                    {leader.email && leader.phone && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-neutral">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${leader.email}`} className="hover:text-primary transition-colors">
                            {leader.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-neutral">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${leader.phone}`} className="hover:text-primary transition-colors">
                            {leader.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect With Our Team</h2>
            <p className="text-lg text-neutral mb-8">
              Ready to transform your IT asset management? Our leadership team is here to help guide your organization towards a more secure and sustainable future.
            </p>
            <Link 
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
