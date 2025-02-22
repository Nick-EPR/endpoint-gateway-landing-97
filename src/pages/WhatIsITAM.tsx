
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, Laptop, Phone, Server, ArrowRight, Check } from "lucide-react";

const WhatIsITAM = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dailyExamples = [
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: "Your Work Laptop",
      description: "From the moment you receive it to when you return it, every repair, update, and configuration is tracked."
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Company Phone",
      description: "Managing mobile devices, apps, and security settings to keep your data safe."
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Office Equipment",
      description: "Monitors, docking stations, and peripherals that help you work efficiently."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Network Equipment",
      description: "The infrastructure that keeps you connected to your work and team."
    }
  ];

  const benefits = [
    "Never wait days for a replacement device",
    "Always have working equipment when you need it",
    "Quick resolution for tech issues",
    "Secure handling of your work devices",
    "Support available when you need it",
    "Simplified device requests and returns"
  ];

  return (
    <div className="min-h-screen">
      <Navbar scrolled={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What is IT Asset Management?
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              IT Asset Management (ITAM) is how organizations keep track of and manage all their technology equipment - from the laptop on your desk to the phone in your pocket.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How ITAM Affects Your Daily Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dailyExamples.map((example, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-neutral-100">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {example.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
                <p className="text-neutral-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Lifetime EPR Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <div className="p-1 bg-primary/10 rounded-full">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-neutral-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button className="gap-2">
                  Learn How We Can Help <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsITAM;
