
import React from "react";
import { Shield, Lock, FileCheck, Building2, Users, AlertTriangle, FileKey, ScrollText } from "lucide-react";

export const sections = [
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Data Encryption",
    description: "Enterprise-grade encryption for data in transit and at rest, ensuring your sensitive information remains protected throughout the asset lifecycle."
  },
  {
    icon: <FileCheck className="w-6 h-6 text-primary" />,
    title: "Data Sanitization",
    description: "DoD-standard data wiping and certified hard drive destruction services, providing complete data security and peace of mind."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Compliance Standards",
    description: "ISO27001:2022 compliant processes and R2v3-certified partnerships, maintaining the highest standards in data security and environmental responsibility."
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" />,
    title: "Physical Security",
    description: "24/7 surveillance and monitored facilities ensuring the physical security of your IT assets throughout the management process."
  },
  {
    icon: <ScrollText className="w-6 h-6 text-primary" />,
    title: "Chain of Custody",
    description: "Complete documentation and tracking of all assets, reducing liability and ensuring accountability at every step."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Employee Training",
    description: "Comprehensive security training programs ensuring all staff follow strict security protocols and compliance requirements."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
    title: "Incident Response",
    description: "Robust incident response procedures and regular security audits to quickly address and prevent security concerns."
  },
  {
    icon: <FileKey className="w-6 h-6 text-primary" />,
    title: "Data Privacy",
    description: "Full compliance with GDPR, CCPA, and other data privacy regulations, protecting your organization's sensitive information."
  }
];

const SecurityFeatures = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <p className="text-neutral-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
