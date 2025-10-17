import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Shield, Lock, Users, Database, Server, Copyright, AlertCircle, XCircle, FileText, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PolicyCard } from "@/components/ui/policy-card";
import { TermsHero } from "@/components/terms/TermsHero";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      content: (
        <>
          We collect and process data in accordance with our{" "}
          <Link 
            to="/privacy" 
            className="text-primary hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          . By using our services, you consent to such processing and warrant that all data provided by you is accurate.
        </>
      )
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
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      <TermsHero scrolled={scrolled} />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
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

          <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">Detailed Terms</h2>
            <Accordion type="single" collapsible className="w-full">
              {terms.map((term, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <term.icon className="h-5 w-5 text-primary" />
                      <span className="text-neutral-900 dark:text-white">{term.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-neutral-600 dark:text-neutral-300 pt-2">{term.content}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
