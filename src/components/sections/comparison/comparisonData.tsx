
import { ComparisonItem } from "./types";
import { Server, Cog, Shield, Database, Box, Truck, Users, UserMinus, Wrench, Trash2, TreePine, DollarSign, Network } from "lucide-react";

export const comparisons: ComparisonItem[] = [
  {
    aspect: "Software",
    icon: <Server className="h-5 w-5" />,
    diy: "Multiple software purchases required: ITAM software plus separate asset agent software",
    epr: "All-in-one platform with integrated HeliAM, Toolbox, and management tools within the Lifetime EPR portal",
    isDIYPain: true
  },
  {
    aspect: "Services",
    icon: <Cog className="h-5 w-5" />,
    diy: "Separate MSP contracts for deployment, support, and management",
    epr: "Comprehensive device management including deployment, support, repair, and offboarding",
    isDIYPain: true
  },
  {
    aspect: "Warranty",
    icon: <Shield className="h-5 w-5" />,
    diy: "Extended warranties purchased separately per device",
    epr: "Integrated warranty management across all devices",
    isDIYPain: true
  },
  {
    aspect: "IT Asset Management",
    icon: <Database className="h-5 w-5" />,
    diy: "Separate ITAM and agent software licenses",
    epr: "Complete lifecycle management through HeliAM within the Lifetime EPR platform",
    isDIYPain: true
  },
  {
    aspect: "CMDB",
    icon: <Box className="h-5 w-5" />,
    diy: "Complex manual CMDB creation and maintenance",
    epr: "Automated CMDB updates with real-time inventory tracking",
    isDIYPain: true
  },
  {
    aspect: "Logistics/Warehousing",
    icon: <Truck className="h-5 w-5" />,
    diy: "Additional costs for secure storage facilities",
    epr: "Included secure warehousing with 24/7 surveillance",
    isDIYPain: true
  },
  {
    aspect: "Deployment",
    icon: <Users className="h-5 w-5" />,
    diy: "Complex coordination of imaging, configuration, and deployment",
    epr: "Streamlined staging and automated configuration process",
    isDIYPain: true
  },
  {
    aspect: "Offboarding/Collection",
    icon: <UserMinus className="h-5 w-5" />,
    diy: "Manual process establishment and execution",
    epr: "Integrated device collection and offboarding services",
    isDIYPain: true
  },
  {
    aspect: "Repair & Refurbishment",
    icon: <Wrench className="h-5 w-5" />,
    diy: "Third-party repair service management",
    epr: "In-house repair and refurbishment with value retention focus",
    isDIYPain: true
  },
  {
    aspect: "Secure Disposition",
    icon: <Trash2 className="h-5 w-5" />,
    diy: "Separate certified recycling and ITAD services",
    epr: "Certified recycling with secure data handling throughout lifecycle",
    isDIYPain: true
  },
  {
    aspect: "Environmental Compliance",
    icon: <TreePine className="h-5 w-5" />,
    diy: "Manual tracking of regulations and certifications",
    epr: "Built-in compliance with environmental and security standards",
    isDIYPain: true
  },
  {
    aspect: "Cost",
    icon: <DollarSign className="h-5 w-5" />,
    diy: "Multiple separate costs: licenses, MSP fees, warranties, storage",
    epr: "Single subscription-based pricing with predictable costs",
    isDIYPain: true
  },
  {
    aspect: "Complexity",
    icon: <Network className="h-5 w-5" />,
    diy: "Managing multiple vendors, contracts, and processes",
    epr: "Single point of contact for all IT lifecycle services",
    isDIYPain: true
  }
];
