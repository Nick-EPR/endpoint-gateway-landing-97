
import { lazy } from "react";

// Ensure proper typing for each lazy-loaded component
export const sections = {
  products: lazy(() => import("../components/sections/Products").then(m => ({ default: m.default }))),
  features: lazy(() => import("../components/sections/Features").then(m => ({ default: m.default }))),
  comparison: lazy(() => import("../components/sections/ComparisonSection").then(m => ({ default: m.default }))),
  partners: lazy(() => import("../components/sections/Partners").then(m => ({ default: m.default }))),
  roi: lazy(() => import("../components/sections/ROICalculator").then(m => ({ default: m.default }))),
  contact: lazy(() => import("../components/sections/Contact").then(m => ({ default: m.default }))),
  tmobile: lazy(() => import("../components/sections/TMobileBusiness").then(m => ({ default: m.default }))),
  partnership: lazy(() => import("../components/sections/Partnership").then(m => ({ default: m.default })))
};

export type SectionKey = keyof typeof sections;
