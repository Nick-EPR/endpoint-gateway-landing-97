
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
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
  comparison: ComparisonSection,
  roi: ROICalculator,    // Moved ROI calculator to be after comparison section
  partners: Partners,
  about: About,
  contact: Contact,
  tmobile: TMobileBusiness,
  partnership: Partnership
};

export type SectionKey = keyof typeof sections;
