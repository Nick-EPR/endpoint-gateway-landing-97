
import React from "react";
import { Check, Smartphone, DollarSign, Shield, Network, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefitsData = [
  {
    icon: Smartphone,
    title: "Enhanced Mobility and Flexibility",
    description: "Enable employees to use their existing mobile devices for business communications, maintaining clear separation between personal and business use.",
    points: [
      "Work from anywhere using personal devices",
      "Multiple business numbers on a single device",
      "Seamless transition between office and remote work"
    ]
  },
  {
    icon: DollarSign,
    title: "Significant Cost Reduction",
    description: "Eliminate capital expenditure on hardware and reduce ongoing maintenance costs through a predictable OPEX model.",
    points: [
      "No hardware investment required",
      "Reduced maintenance costs",
      "Predictable subscription-based pricing",
      "Consolidated communication expenses"
    ]
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security and Compliance",
    description: "Benefit from encrypted communications, detailed call logging, and comprehensive recording options to meet industry regulations.",
    points: [
      "End-to-end encrypted communications",
      "Detailed call logging and analytics",
      "Compliance with industry regulations",
      "Advanced security protocols"
    ]
  },
  {
    icon: Network,
    title: "Seamless Integration with Business Systems",
    description: "Integrate with popular CRM platforms, collaboration tools, and enterprise software through robust APIs.",
    points: [
      "CRM integration capabilities",
      "Works with leading enterprise software",
      "Custom workflow automation",
      "API-driven extensibility"
    ]
  },
  {
    icon: RefreshCw,
    title: "Future-Proof Communications Infrastructure",
    description: "Access a continuously updated platform that evolves with emerging technologies without hardware replacements.",
    points: [
      "Regular feature updates and improvements",
      "Scalable to accommodate business growth",
      "Adaptation to new communication trends",
      "No hardware obsolescence concerns"
    ]
  }
];

const BenefitCard = ({ benefit }) => {
  const IconComponent = benefit.icon;
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{benefit.title}</CardTitle>
        <CardDescription className="text-base mt-2">{benefit.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefit.points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits of Movius</h2>
          <p className="text-lg text-muted-foreground">
            Transform your business communications with a mobile-first solution that offers security, 
            flexibility, and integration capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <BenefitCard benefit={benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
