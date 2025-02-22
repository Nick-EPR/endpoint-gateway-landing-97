import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Shield, Lock, Users, Database, Server, Copyright, AlertCircle, XCircle, FileText, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PolicyCard } from "@/components/ui/policy-card";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const terms = [
    {
      icon: Shield,
      title: "Acceptance of Terms",
      summary: "Agreement to be bound by these terms when using our services",
      content: "By accessing and using Lifetime EPR's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
      icon: Server,
      title: "Service Description",
      summary: "Overview of our IT asset management solutions",
      content: "Lifetime EPR provides IT asset management solutions, including but not limited to device lifecycle management, security services, and related consulting services."
    },
    {
      icon: Users,
      title: "User Obligations",
      summary: "Requirements for maintaining account security",
      content: "Users must maintain accurate account information and ensure the security of their login credentials. Users are responsible for all activities conducted under their account."
    },
    {
      icon: Database,
      title: "Data Privacy",
      summary: "How we handle and protect your data",
      content: "We collect and process data in accordance with our Privacy Policy. By using our services, you consent to such processing and warrant that all data provided by you is accurate."
    },
    {
      icon: Lock,
      title: "Service Level Agreement",
      summary: "Our commitment to service availability",
      content: "Our service availability and support response times are governed by the Service Level Agreement specific to your subscription tier."
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      summary: "Protection of our services and content",
      content: "All content, features, and functionality of our services are owned by Lifetime EPR and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      summary: "Scope of our liability for service usage",
      content: "Lifetime EPR shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
    },
    {
      icon: XCircle,
      title: "Termination",
      summary: "Conditions for service termination",
      content: "We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason."
    },
    {
      icon: FileText,
      title: "Changes to Terms",
      summary: "How we handle updates to these terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services."
    },
    {
      icon: Mail,
      title: "Contact Information",
      summary: "How to reach us about these terms",
      content: "For any questions about these Terms of Service, please contact us at legal@lifetimeepr.com."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 backdrop-blur-sm z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
          alt="Terms Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <Navbar scrolled={true} onMouseEnter={() => {}} />
        
        <main className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto bg-white/95 rounded-xl p-8 backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-neutral mb-8">
              Please read these terms carefully before using our services. These terms outline your rights and responsibilities when using Lifetime EPR's services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {terms.slice(0, 4).map((term, index) => (
                <PolicyCard
                  key={index}
                  icon={term.icon}
                  title={term.title}
                  description={term.summary}
                />
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Detailed Terms</h2>
              <Accordion type="single" collapsible className="w-full">
                {terms.map((term, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <term.icon className="h-5 w-5 text-primary" />
                        <span>{term.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-neutral pt-2">{term.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Terms;
