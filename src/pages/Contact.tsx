
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Lightbulb, Award, Shield, Heart } from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import ContactHero from "../components/contact/ContactHero";
import LeadershipCard from "../components/contact/LeadershipCard";
import ContactForm from "../components/sections/Contact";
import Footer from "../components/Footer";

const Contact = () => {
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
      image: "/lovable-uploads/d2a160eb-691b-4c6f-9c63-0941ad48ebaa.png",
      bio: "As CEO/President, Michael provides strategic direction and oversees the overall operations of Lifetime EPR. His leadership emphasizes security and sustainability in IT asset management, driving the company's mission to revolutionize endpoint management solutions. With extensive experience in executive leadership and business development, Michael ensures Lifetime EPR remains at the forefront of innovative IT services.",
      email: "Mike@LifetimeEPR.com",
      phone: "716.867.4322",
      linkedin: "https://www.linkedin.com/in/mikedejoy154/"
    },
    {
      name: "Ron Bellus",
      title: "VP of Marketing",
      image: "/lovable-uploads/6c89ca71-c12b-4437-b9f2-f8c40fc69845.png",
      bio: "Ron leads Lifetime EPR's marketing strategies, brand development, and customer engagement initiatives. With a strong background in digital strategy and communications, he drives the company's market presence and customer acquisition efforts. His innovative approach to marketing helps position Lifetime EPR as a trusted partner in IT asset management.",
      linkedin: "https://www.linkedin.com/in/ron-bellus-3bb93a11/"
    },
    {
      name: "Nick Burdick",
      title: "VP of Technology",
      image: "/lovable-uploads/eed25866-8121-4b26-96d9-5d2640324e9d.png",
      bio: "As VP of Technology, Nick leads Lifetime EPR's technological innovations and IT infrastructure. His expertise in technology leadership and IT management ensures the company delivers cutting-edge solutions in IT asset management. Nick's forward-thinking approach helps maintain Lifetime EPR's position as an industry leader in endpoint management technology.",
      linkedin: "https://www.linkedin.com/in/nick-burdick-169ab6198/"
    },
    {
      name: "Heather Novak",
      title: "VP of Product Development",
      image: "/lovable-uploads/b9dc328e-294a-4088-9908-11bdb845afe4.png",
      bio: "Heather drives the creation and enhancement of Lifetime EPR's service offerings, with a particular focus on PCaaS solutions and strategic partnerships. Her expertise in product strategy and IT solutions ensures that Lifetime EPR's services consistently meet and exceed client expectations. Under her leadership, the product development team continues to innovate and expand the company's service portfolio.",
      linkedin: "https://www.linkedin.com/in/heather-novak1/"
    },
    {
      name: "Marc Caponegro",
      title: "VP of Business Development and Channels",
      image: "/lovable-uploads/f36a9bb6-3709-451b-aa42-5459aa7480ec.png",
      bio: "Marc leads Lifetime EPR's business development and channel partnership initiatives, playing a crucial role in expanding the company's market reach through strategic alliances. His expertise in sales leadership and channel development has been instrumental in securing key partnerships, including the strategic collaboration with T-Mobile. Marc's efforts continue to drive Lifetime EPR's growth and market expansion.",
      linkedin: "https://www.linkedin.com/in/marc-caponegro-4893767/"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      <ContactHero />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Leadership Profiles */}
      <section className="relative py-24 bg-neutral-light">
        <div className="absolute inset-x-0 -top-8 h-16 bg-white transform -skew-y-3" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-lg text-neutral">
              Meet the experienced professionals driving our mission to revolutionize IT asset management through innovation, security, and sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {leaders.map((leader, index) => (
              <LeadershipCard key={index} {...leader} />
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 -bottom-8 h-16 bg-white transform -skew-y-3" />
      </section>

      {/* Values Section */}
      <section className="relative section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Leadership Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-light rounded-xl">
                <div className="flex flex-col items-center">
                  <Lightbulb className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-neutral">
                    Driving technological advancement in IT asset management
                  </p>
                </div>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-neutral">
                    Delivering exceptional service and solutions
                  </p>
                </div>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-neutral">
                    Building trust through transparent leadership
                  </p>
                </div>
              </div>
              <div className="p-6 bg-neutral-light rounded-xl">
                <div className="flex flex-col items-center">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
                  <p className="text-neutral">
                    Prioritizing client success in everything we do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
