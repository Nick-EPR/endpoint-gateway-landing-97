
import { lazy } from "react";

// Lazy load all section components
const Products = lazy(() => import("@/components/sections/Products"));
const Features = lazy(() => import("@/components/sections/Features"));
const ComparisonSection = lazy(() => import("@/components/sections/ComparisonSection"));
const Partners = lazy(() => import("@/components/sections/Partners"));
const ROICalculator = lazy(() => import("@/components/sections/ROICalculator"));
const TMobileBusiness = lazy(() => import("@/components/sections/TMobileBusiness"));
const Partnership = lazy(() => import("@/components/sections/Partnership"));
const Contact = lazy(() => import("@/components/sections/Contact"));

export const sections = {
  hero: lazy(() => import("@/components/sections/Hero")),
  products: Products,
  features: Features,
  comparison: ComparisonSection,
  partners: Partners,
  roi: ROICalculator,
  contact: Contact,
  tmobile: TMobileBusiness,
  partnership: Partnership
};

export type SectionKey = keyof typeof sections;
