
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import ComparisonSection from "@/components/sections/ComparisonSection";
import Partners from "@/components/sections/Partners";
import ROICalculator from "@/components/sections/ROICalculator";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import TMobileBusiness from "@/components/sections/TMobileBusiness";

export const sections = {
  hero: Hero,
  products: Products,
  features: Features,
  comparison: ComparisonSection,
  partners: Partners,
  roi: ROICalculator,
  about: About,
  contact: Contact,
  tmobile: TMobileBusiness,
};

export type SectionKey = keyof typeof sections;
