import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FileText, Share2, Lock, UserCheck, Cookie, Baby, RefreshCw, Mail, Database, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PolicyCard } from "@/components/ui/policy-card";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";

const Privacy = () => {
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

  const policies = [
    {
      icon: Database,
      title: "Information We Collect",
      summary: "Types of personal information we collect",
      content: "We collect information that you provide directly to us, including personal information such as name, email address, company information, and any other information you choose to provide."
    },
    {
      icon: FileText,
      title: "How We Use Your Information",
      summary: "Ways we utilize collected information",
      content: `We use the information we collect to:
      • Provide, maintain, and improve our services
      • Process your transactions
      • Send you technical notices and support messages
      • Respond to your comments and questions
      • Communicate with you about products, services, and events`
    },
    {
      icon: Share2,
      title: "Information Sharing",
      summary: "How we share your information",
      content: `We do not share your personal information with third parties except as described in this policy. We may share your information with:
      • Service providers who assist in our operations
      • Professional advisors
      • Law enforcement when required by law`
    },
    {
      icon: Shield,
      title: "Data Security",
      summary: "How we protect your information",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      summary: "Your data privacy rights",
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate information
      • Request deletion of your information
      • Object to our processing of your information
      • Request data portability`
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      summary: "How we use tracking technologies",
      content: "We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      icon: Baby,
      title: "Children's Privacy",
      summary: "Protection of minors' privacy",
      content: "Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13."
    },
    {
      icon: RefreshCw,
      title: "Changes to This Policy",
      summary: "How we handle policy updates",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'last updated' date."
    },
    {
      icon: Mail,
      title: "Contact Us",
      summary: "How to reach us about privacy concerns",
      content: "For any questions about this privacy policy, please contact us at privacy@lifetimeepr.com."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      <PrivacyHero scrolled={scrolled} />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {policies.slice(0, 4).map((policy, index) => (
              <PolicyCard
                key={index}
                icon={policy.icon}
                title={policy.title}
                description={policy.summary}
              />
            ))}
          </div>

          <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">Detailed Privacy Policy</h2>
            <Accordion type="single" collapsible className="w-full">
              {policies.map((policy, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <policy.icon className="h-5 w-5 text-primary" />
                      <span className="text-neutral-900 dark:text-white">{policy.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-neutral-700 dark:text-neutral-300 pt-2 whitespace-pre-line">
                      {policy.content}
                    </div>
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

export default Privacy;
