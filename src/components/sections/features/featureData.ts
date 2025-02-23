
import {
  Warehouse,
  Timer,
  Microscope,
  Database,
  Network,
  BoxSelect,
  UserCog,
  UserMinus,
  Brain,
  Cloud,
  HardDriveDownload,
  Footprints
} from "lucide-react";
import { Feature, DetailedFeature } from "./types";

export const featureData = {
  platformFeatures: [{
    icon: <Database className="w-8 h-8 text-neutral-700" />,
    title: "Unified Asset Database",
    description: "Centralized asset management across all EPR products with real-time synchronization and automated workflows",
    isHighlighted: true,
    keywords: ["platform", "database", "centralized", "unified", "sync"]
  }, {
    icon: <Network className="w-8 h-8 text-neutral-700" />,
    title: "Cross-Product Integration",
    description: "Seamless data flow between HeliAM, Toolbox, and Luemin for comprehensive device lifecycle management",
    isHighlighted: true,
    keywords: ["integration", "workflow", "platform", "unified"]
  }, {
    icon: <BoxSelect className="w-8 h-8 text-neutral-700" />,
    title: "Enterprise Controls",
    description: "Unified security, compliance, and access controls across all EPR platform products",
    isHighlighted: true,
    keywords: ["security", "compliance", "enterprise", "controls", "platform"]
  }],

  heliamFeatures: [{
    icon: <UserCog className="w-8 h-8 text-neutral-700" />,
    title: "Equipment Onboarding",
    description: "Streamlined equipment assignment workflow with standardized packages based on roles",
    isHighlighted: true,
    keywords: ["onboarding", "roles", "equipment", "packages"]
  }, {
    icon: <UserMinus className="w-8 h-8 text-neutral-700" />,
    title: "Offboarding Management",
    description: "Automated device recovery and reassignment during employee transitions",
    isHighlighted: true,
    keywords: ["offboarding", "recovery", "transition"]
  }, {
    icon: <Brain className="w-8 h-8 text-neutral-700" />,
    title: "AI/ML Insights",
    description: "Predictive analytics for device lifespan, maintenance needs, and optimal resale timing",
    isHighlighted: true,
    keywords: ["AI", "ML", "analytics", "prediction", "insights"]
  }],

  toolboxFeatures: [{
    icon: <Warehouse className="w-8 h-8 text-neutral-700" />,
    title: "Secure Storage",
    description: "Access-controlled warehouse facilities with real-time inventory monitoring",
    isHighlighted: true,
    keywords: ["warehouse", "storage", "inventory", "security"]
  }, {
    icon: <Timer className="w-8 h-8 text-neutral-700" />,
    title: "24-Hour Resolution",
    description: "Next-day replacement device delivery nationwide",
    isHighlighted: true,
    keywords: ["delivery", "replacement", "shipping", "speed"]
  }, {
    icon: <Microscope className="w-8 h-8 text-neutral-700" />,
    title: "OEM-Certified Services",
    description: "Professional diagnostics and repairs through authorized OEM partner facilities with enterprise-grade security",
    isHighlighted: true,
    keywords: ["repair", "diagnostics", "maintenance", "OEM"]
  }],

  lueminFeatures: [{
    icon: <Cloud className="w-8 h-8 text-neutral-700" />,
    title: "Remote Device Control",
    description: "Remote lock, wipe, and management capabilities for all endpoint devices",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["remote", "control", "manage", "lock", "wipe"]
  }, {
    icon: <HardDriveDownload className="w-8 h-8 text-neutral-700" />,
    title: "Hardware Monitoring",
    description: "Automatic hardware information collection and HeliAM asset record updates",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["hardware", "monitoring", "sync", "inventory"]
  }, {
    icon: <Footprints className="w-8 h-8 text-neutral-700" />,
    title: "Device Tracking",
    description: "Real-time device location and usage tracking with detailed audit logs",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["tracking", "location", "monitoring", "audit"]
  }],

  detailedFeatures: [{
    category: "Platform Integration",
    features: [
      "Unified asset database across all products",
      "Seamless workflow automation between products",
      "Cross-product data synchronization",
      "Centralized security and compliance controls",
      "Single sign-on across all EPR products",
      "API-driven integration capabilities",
      "Real-time data updates across platform"
    ]
  }, {
    category: "Asset Management",
    features: [
      "Complete lifecycle tracking and management",
      "Automated equipment package assignment",
      "Asset utilization analytics and reporting",
      "Role-based access control and permissions",
      "Secure warehouse storage and inventory",
      "Professional device maintenance services",
      "Next-day replacement nationwide"
    ]
  }, {
    category: "Security & Compliance",
    features: [
      "Enterprise-grade security controls",
      "Compliance reporting and documentation",
      "Secure data handling and destruction",
      "Access-controlled facilities",
      "Audit trails for all asset operations",
      "Device security policy enforcement",
      "Remote device control capabilities"
    ]
  }, {
    category: "Support & Services",
    features: [
      "24/7 technical support access",
      "Professional repair services",
      "Nationwide logistics network",
      "Remote troubleshooting assistance",
      "On-site service options",
      "Device diagnostics and testing",
      "End-of-life asset disposition"
    ]
  }] as DetailedFeature[]
};
