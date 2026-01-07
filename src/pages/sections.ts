import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import AdditionalCapabilities from "@/components/sections/features/AdditionalCapabilities";
import { ITAMSolutionSection } from "@/components/sections/features/ITAMSolutionSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import Partners from "@/components/sections/Partners";
import ROICalculator from "@/components/sections/ROICalculator";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import TMobileBusiness from "@/components/sections/TMobileBusiness";
import Partnership from "@/components/sections/Partnership";

export const sections = {
  hero: Hero,
  products: Products,
  features: Features,
  additionalCapabilities: AdditionalCapabilities,
  itamSolution: ITAMSolutionSection,
  comparison: ComparisonSection,
  roi: ROICalculator,
  partners: Partners,
  about: About,
  contact: Contact,
  tmobile: TMobileBusiness,
  partnership: Partnership
};

export type SectionKey = keyof typeof sections;
