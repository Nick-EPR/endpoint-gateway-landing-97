
import { lazy } from "react";

// Lazy load all section components
export const sections = {
  hero: lazy(() => import("@/components/sections/Hero")),
  products: lazy(() => import("@/components/sections/Products")),
  features: lazy(() => import("@/components/sections/Features")),
  comparison: lazy(() => import("@/components/sections/ComparisonSection")),
  partners: lazy(() => import("@/components/sections/Partners")),
  roi: lazy(() => import("@/components/sections/ROICalculator")),
  contact: lazy(() => import("@/components/sections/Contact")),
  tmobile: lazy(() => import("@/components/sections/TMobileBusiness")),
  partnership: lazy(() => import("@/components/sections/Partnership"))
};

export type SectionKey = keyof typeof sections;
