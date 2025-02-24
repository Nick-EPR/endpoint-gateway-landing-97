
import { lazy, ComponentType } from "react";

// Lazy load all section components with proper type enforcement
export const sections = {
  products: lazy(() => import("../components/sections/Products")) as ComponentType,
  features: lazy(() => import("../components/sections/Features")) as ComponentType,
  comparison: lazy(() => import("../components/sections/ComparisonSection")) as ComponentType,
  partners: lazy(() => import("../components/sections/Partners")) as ComponentType,
  roi: lazy(() => import("../components/sections/ROICalculator")) as ComponentType,
  contact: lazy(() => import("../components/sections/Contact")) as ComponentType,
  tmobile: lazy(() => import("../components/sections/TMobileBusiness")) as ComponentType,
  partnership: lazy(() => import("../components/sections/Partnership")) as ComponentType
};

export type SectionKey = keyof typeof sections;
